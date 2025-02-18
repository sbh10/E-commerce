import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hanout from "./Pages/Hanout";
import Product from "./Pages/Product";
import Fekra from "./Pages/Fekra";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hanout />} />
          <Route path="/marioul" element={<Product />} />
          <Route path="/fekra" element={<Fekra />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
