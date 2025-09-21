
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const {geTotalCartAmount} = useContext(StoreContext)

  return (
    <nav className="navbar">
      <Link to = '/'><img src={assets.logo} alt="logo" className="logo" /></Link>
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
          <Link to = '/Cart'><img src={assets.basket_icon} alt="cart" /></Link>
          <div className={geTotalCartAmount()===0?"":"dot"} />
        </div>
        <button type="button" onClick={() => setShowLogin?.(true)}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
