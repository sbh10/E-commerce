import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import mariouli_logo from "../Assets/mariouli_logo.png";
import cart_icon from "../Assets/cart_icon.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("hanout");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={mariouli_logo} alt="porte bleue sidi bou said" />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("hanout");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            El hanout
          </Link>
          {menu === "hanout" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("marioul");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/product">
            El marioul
          </Link>
          {menu === "marioul" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("fekra");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/fekra">
            El fekra
          </Link>
          {menu === "fekra" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          {" "}
          <img src={cart_icon} alt="panier d'achat" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
export default Navbar;
