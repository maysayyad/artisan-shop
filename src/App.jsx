import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Staff from "./pages/Staff";
import User from "./pages/User";
import Products from "./pages/Products"; // ✅ ADD THIS

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
}