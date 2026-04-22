import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Staff from "./pages/Staff";
import User from "./pages/User";
<<<<<<< HEAD
import Products from "./pages/products"; 
=======
import products from "./pages/Products"; // ✅ ADD THIS
>>>>>>> 8d21824 (final fix for vercel and images)

export default function App() {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Role pages */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/user" element={<User />} />

      {/* Products page */}
      <Route path="/products" element={<Products />} />
    </Routes>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 8d21824 (final fix for vercel and images)
