import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion"; // Add this for the "A+" look

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      style={styles.page}
    >
      <div style={styles.header}>
        <h2 style={styles.title}>Artisan Collection 🏺</h2>
        <p style={styles.subtitle}>Hand-picked treasures from local creators</p>
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 } // Cards pop in one by one
          }
        }}
        style={styles.grid}
      >
        {products.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            style={styles.card}
          >
            <img
              src={item.image?.trim() || "https://via.placeholder.com/150?text=No+Image"}
              alt={item.name}
              style={styles.image}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150?text=No+Image";
              }}
            />

            <h3 style={styles.itemName}>{item.name}</h3>
            <p style={styles.price}>${item.price}</p>
            
            <motion.button 
              whileTap={{ scale: 0.9 }}
              style={styles.button}
            >
              View Details
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

const styles = {
  page: {
    padding: "60px 40px",
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(135deg, #fff7ed, #ffe4d6, #fef3c7)",
    minHeight: "100vh",
    textAlign: "center",
  },
  header: { marginBottom: 40 },
  title: { fontSize: 36, margin: 0, color: "#333" },
  subtitle: { opacity: 0.7, fontSize: 16 },
  grid: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: 240,
    padding: 20,
    borderRadius: 20,
    background: "white",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    border: "1px solid rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 180,
    objectFit: "cover",
    borderRadius: 15,
    marginBottom: 15,
  },
  itemName: { fontSize: 18, marginBottom: 8, color: "#444" },
  price: { fontWeight: "bold", color: "#ff6a88", fontSize: 20 },
  button: {
    marginTop: 15,
    padding: "10px 20px",
    background: "linear-gradient(135deg, #ff9a8b, #ff6a88)",
    color: "white",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
  }
};