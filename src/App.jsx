import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Checkout from "./components/CheckOut";
import Modal from "./components/Modal";
import OrderList from "./components/OrderSummaryPage";
import Home from "./pages/Home";

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem("accessToken") !== null; // Check for access token
};

export default function App() {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  useEffect(() => {
    const handleStorageChange = () => {
      setAuthenticated(isAuthenticated());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [authenticated]);

  return (
    <div className="App">
      <Router>
        {authenticated && <Navbar />}
        <Routes>
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Protected Routes */}
          <Route path="/home" element={authenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/products" element={authenticated ? <Products /> : <Navigate to="/login" />} />
          <Route path="/checkout" element={authenticated ? <Checkout /> : <Navigate to="/login" />} />
          <Route path="/confirm-order" element={authenticated ? <Modal /> : <Navigate to="/login" />} />
          <Route path="/order-summary" element={authenticated ? <OrderList /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}