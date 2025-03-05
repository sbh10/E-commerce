import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Hanout from "./Pages/Hanout";
import Product from "./Pages/Product";
import Fekra from "./Pages/Fekra";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import { CartProvider } from "../src/Context/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hanout />} />
          <Route path="/marioul" element={<Product />} />
          <Route path="/fekra" element={<Fekra />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path=":productId" element={<Product />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
