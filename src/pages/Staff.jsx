import { motion } from "framer-motion"; // Make sure framer-motion is installed!

export default function Staff() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      style={styles.page}
    >
      {/* HEADER - Drops in from the top */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={styles.header}
      >
        <h1 style={styles.title}>Staff Dashboard 👷‍♂️</h1>
        <p style={styles.subtitle}>
          Manage daily operations and support the artisan system
        </p>
      </motion.div>

      {/* CARD 1 - Slides in from the left */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
        whileHover={{ 
          scale: 1.02, 
          boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
          borderColor: "rgba(255, 106, 136, 0.3)" 
        }}
        style={styles.card}
      >
        <h3>Orders</h3>
        <p>View and track customer orders</p>
        <motion.button 
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          style={styles.button}
        >
          View Orders
        </motion.button>
      </motion.div>

      {/* CARD 2 - Slides in from the right */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
        whileHover={{ 
          scale: 1.02, 
          boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
          borderColor: "rgba(255, 106, 136, 0.3)" 
        }}
        style={styles.card}
      >
        <h3>Inventory Status</h3>
        <p>Check available artisan products</p>
        <motion.button 
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          style={styles.button}
        >
          Check Inventory
        </motion.button>
      </motion.div>

      {/* FOOTER BADGE - Subtle Fade In */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        style={{ marginTop: 40, fontSize: 12, fontWeight: 'bold', letterSpacing: 1 }}
      >
        STAFF ACCESS GRANTED
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
    textAlign: "center",
    overflowX: "hidden", // Prevents side-scrolling during entry animation
  },

  header: {
    marginBottom: 30,
  },

  title: {
    fontSize: 32,
    margin: 0,
  },

  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginTop: 8,
  },

  card: {
    width: 350,
    margin: "15px auto",
    padding: 25,
    borderRadius: 16,
    background: "linear-gradient(145deg, #ffffff, #fffaf3)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    border: "1px solid rgba(0,0,0,0.05)",
    textAlign: "center",
    cursor: "default",
  },

  button: {
    marginTop: 15,
    padding: "10px 18px",
    background: "linear-gradient(135deg, #ff9a8b, #ff6a88)",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(255, 106, 136, 0.2)",
  },
};
