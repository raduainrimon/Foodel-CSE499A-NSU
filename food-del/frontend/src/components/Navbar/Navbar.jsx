import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] =
    useState("home"); /*default underline state for navbar*/

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Website Logo" classname="logo" />
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>home</li>
        <li className={menu === "menu" ? "active" : ""}>menu</li>
        <li className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
        <li className={menu === "contact-us" ? "active" : ""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
