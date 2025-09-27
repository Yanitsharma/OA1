
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; 
function MobileNavbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <nav className="mobile-navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="navbar-toggler-icon">☰</span>
      </div>
      <div className={`vertical-menu ${menuVisible ? "show-menu" : ""}`}>
        <ul className="list-unstyled">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link" onClick={toggleMenu}>
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" onClick={toggleMenu}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNavbar;
