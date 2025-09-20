
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  return (
    <nav className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            className={menu === "Home" ? "active" : ""}
            onClick={() => setMenu("Home")}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            className={menu === "Menu" ? "active" : ""}
            onClick={() => setMenu("Menu")}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            className={menu === "Mobile-App" ? "active" : ""}
            onClick={() => setMenu("Mobile-App")}
          >
            Mobile-App
          </a>
        </li>
        <li>
          <a
            href="#footer"
            className={menu === "Contact-Us" ? "active" : ""}
            onClick={() => setMenu("Contact-Us")}
          >
            Contact Us
          </a>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search-icon" role="button" aria-label="cart">
          <img src={assets.basket_icon} alt="cart" />
          <div className="dot" />
        </div>
        <button type="button" onClick={() => setShowLogin?.(true)}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
