import { useState, useContext } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion"; // The magic touch

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      // ROLE SYSTEM
      let role = "user";
      if (email.includes("admin")) role = "admin";
      else if (email.includes("staff")) role = "staff";

      localStorage.setItem("role", role);

      setUser({
        email: res.user.email,
        role: role,
      });

      navigate(`/${role}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      style={styles.page}
    >
      {/* CARD - Slides up and fades in */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={styles.card}
      >
        <h2 style={styles.title}>Artisan Shop Login</h2>
        <p style={styles.subtitle}>Welcome back 👋</p>

        {/* Email Input */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </motion.div>

        {/* Password Input */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </motion.div>

        {/* Button with Hover/Tap effects */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogin} 
          style={styles.button}
        >
          Login
        </motion.button>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8 }}
          style={{ fontSize: "11px", marginTop: "20px", letterSpacing: "1px" }}
        >
          SECURE ARTISAN PORTAL
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #fff7ed, #ffe4d6, #fef3c7)",
    fontFamily: "'Poppins', sans-serif",
  },

  card: {
    width: 340,
    padding: 30,
    borderRadius: 16,
    background: "linear-gradient(145deg, #ffffff, #fffaf3)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
    border: "1px solid rgba(0,0,0,0.05)",
  },

  title: {
    marginBottom: 5,
    color: "#333",
    fontSize: 24,
  },

  subtitle: {
    marginBottom: 20,
    fontSize: 14,
    color: "#777",
  },

  input: {
    width: "100%",
    padding: "12px 10px", // Increased padding slightly for better feel
    marginBottom: 10,
    borderRadius: 8,
    border: "1px solid #ddd",
    outline: "none",
    boxSizing: "border-box", // Essential for full-width inputs
  },

  button: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    border: "none",
    background: "linear-gradient(135deg, #ff9a8b, #ff6a88)",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: 10,
    boxShadow: "0 4px 10px rgba(255, 106, 136, 0.2)",
  },
};