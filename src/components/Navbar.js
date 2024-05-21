import React, { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <Link
          to="/home"
          className="navbar-item"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/papua"
          className="navbar-item"
          onClick={() => setMenuOpen(false)}
        >
          Papua
        </Link>
        <Link
          to="/about"
          className="navbar-item"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        <i className="bx bx-menu"></i>
      </button>
    </nav>
  );
};

export default Navbar;
