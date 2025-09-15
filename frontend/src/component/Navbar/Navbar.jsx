import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {

const[menu,setMenu]= useState("Home");




  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          className={menu === "Home" ? "acive" : ""}
          onClick={() => setMenu("Home")}
        >
          Home
        </li>
        <li
          className={menu === "Menu" ? "acive" : ""}
          onClick={() => setMenu("Menu")}
        >
          Menu
        </li>
        <li
          className={menu === "Mobile-App" ? "acive" : ""}
          onClick={() => setMenu("Mobile-App")}
        >
          Mobile-App
        </li>
        <li
          className={menu === "Contact-Us" ? "acive" : ""}
          onClick={() => setMenu("Contact-Us")}
        >
          Contact Us
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
