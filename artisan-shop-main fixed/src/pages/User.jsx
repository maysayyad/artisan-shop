import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { motion } from "framer-motion"; // Import motion

export default function User() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  // 1. Container Animation (Stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each card waits 0.1s before showing
      },
    },
  };

  // 2. Individual Card Animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      style={styles.page}
    >
      <div style={styles.header}>
        {/* Animated Title */}
        <motion.h1 
          initial={{ y: -20 }} 
          animate={{ y: 0 }} 
          style={styles.title}
        >
          Welcome to Artisan Shop 🛍️
        </motion.h1>
        <p style={styles.subtitle}>
          Discover handmade products from local creators
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={styles.grid}
      >
        {Array.isArray(products) && products.length > 0 ? (
          products.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 12px 25px rgba(0,0,0,0.12)" 
              }}
              whileTap={{ scale: 0.98 }}
              style={styles.card}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.image}
                />
              ) : (
                <div style={styles.placeholder}></div>
              )}

              <h3>{item.name}</h3>
              <p>${item.price}</p>

              <motion.button 
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.9 }}
                style={styles.button}
              >
                View
              </motion.button>
            </motion.div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
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
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    margin: 0,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginTop: 8,
  },
  grid: {
    display: "flex",
    gap: 25,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
  },
  card: {
    width: 220,
    padding: 20,
    borderRadius: 16,
    background: "linear-gradient(145deg, #ffffff, #fffaf3)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
    border: "1px solid rgba(0,0,0,0.05)",
    cursor: "pointer", 
  },
  image: {
    width: "100%",
    height: 140,
    objectFit: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  placeholder: {
    width: "100%",
    height: 140,
    background: "#eee",
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 12,
    padding: "9px 14px",
    background: "linear-gradient(135deg, #ff9a8b, #ff6a88)",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%", 
  },
};