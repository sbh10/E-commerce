import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import mariouli_logo from "../Assets/mariouli_logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { CartContext } from "../../Context/CartContext";
import nav_dropdown from "../Assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("hanout");
  const { getTotalCartItems } = useContext(CartContext);
  const menuRef = useRef(null);

  const dropdown_toggle = (e) => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("nav-menu-visible");
    }
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={mariouli_logo} alt="porte bleue sidi bou said" />
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("hanout");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Hanout
          </Link>
          {menu === "hanout" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("marioul");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/product">
            Marioul
          </Link>
          {menu === "marioul" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("fekra");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/fekra">
            Fekra
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
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
export default Navbar;
