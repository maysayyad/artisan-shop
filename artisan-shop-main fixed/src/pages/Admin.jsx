import { useState, useContext } from "react";
import { addProduct } from "../services/productService";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Added this

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(""); // Added image state

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Add product
  const handleAdd = async () => {
    if (!name || !price || !image) return alert("Fill all fields including Image URL");

    await addProduct({ name, price: Number(price), image });
    alert("Product added! 🎉");
    // Clear fields after adding
    setName("");
    setPrice("");
    setImage("");
  };

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("role");
    setUser(null);
    navigate("/login");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      style={styles.page}
    >
      {/* HEADER - Slides down slightly */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={styles.header}
      >
        <h1 style={styles.title}>Admin Dashboard ⚙️</h1>
        <p style={styles.subtitle}>
          Manage artisan products and system control
        </p>
      </motion.div>

      {/* CARD - Pops in */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        style={styles.card}
      >
        <h3>Manage Products</h3>
        <p>Add products to your artisan store</p>

        {/* LIVE PREVIEW BOX - Added this special section */}
        <div style={styles.previewContainer}>
          <AnimatePresence mode="wait">
            {image ? (
              <motion.img 
                key={image}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                src={image} 
                alt="preview" 
                style={styles.previewImage} 
              />
            ) : (
              <p style={{ fontSize: "12px", color: "#aaa" }}>Image Preview will appear here</p>
            )}
          </AnimatePresence>
        </div>

        <input
          placeholder="Product Name"
          value={name}
          style={styles.input}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Price"
          value={price}
          type="number"
          style={styles.input}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* IMAGE URL INPUT - Needed so you can add photos from here */}
        <input
          placeholder="Image URL (Unsplash link)"
          value={image}
          style={styles.input}
          onChange={(e) => setImage(e.target.value)}
        />

        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={styles.button} 
          onClick={handleAdd}
        >
          Add Product
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={styles.logoutButton} 
          onClick={handleLogout}
        >
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

const styles = {
  // ... Keep all your existing styles exactly as they are ...
  page: {
    padding: "60px 40px",
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(135deg, #fff7ed, #ffe4d6, #fef3c7)",
    minHeight: "100vh",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  header: { marginBottom: 30 },
  title: { fontSize: 32, margin: 0 },
  subtitle: { fontSize: 16, opacity: 0.7, marginTop: 8 },
  card: {
    width: 350,
    padding: 25,
    borderRadius: 16,
    background: "linear-gradient(145deg, #ffffff, #fffaf3)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    border: "1px solid rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  input: {
    display: "block",
    marginTop: 12,
    padding: "12px 10px", // Increased padding slightly for better feel
    width: "100%",
    borderRadius: 8,
    border: "1px solid #ddd",
    outline: "none",
  },
  button: {
    marginTop: 20,
    padding: "12px 14px",
    background: "linear-gradient(135deg, #ff9a8b, #ff6a88)",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
  },
  logoutButton: {
    marginTop: 10,
    padding: "12px 14px",
    background: "linear-gradient(135deg, #6c757d, #495057)",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
  },
  // Added these two new styles for the preview
  previewContainer: {
    width: "100%",
    height: "120px",
    backgroundColor: "#fcfcfc",
    borderRadius: "10px",
    border: "1px dashed #eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: "10px"
  },
  previewImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
};