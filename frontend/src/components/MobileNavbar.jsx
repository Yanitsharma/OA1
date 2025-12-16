import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 1. Import useNavigate
import "../App.css"; 

function MobileNavbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // 2. Initialize the hook

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  // 3. Real Search Logic
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to a search route with the query parameter
      // Example: If user types "arrays", it goes to /search?q=arrays
      navigate(`/?search=${encodeURIComponent(searchTerm.trim())}`);
      
      // Close the menu after searching
      closeMenu();
      setSearchTerm(""); // Optional: Clear input after search
    }
  };

  return (
    <nav className="mobile-navbar">
      {/* Header with Icon and Title */}
      <div className="navbar-header">
        <div className="menu-icon" onClick={toggleMenu}>
            <span style={{ fontSize: '1.8rem' }}>☰</span> 
        </div>
        <span style={{ marginLeft: '15px', fontWeight: 'bold', fontSize: '1.2rem' }}>OA Platform</span>
      </div>

      {/* Backdrop */}
      <div 
        className={`menu-backdrop ${menuVisible ? "show-backdrop" : ""}`} 
        onClick={closeMenu}
      ></div>

      {/* Sliding Menu */}
      <div className={`vertical-menu ${menuVisible ? "show-menu" : ""}`}>
        <div className="close-btn" onClick={closeMenu}>&times;</div>
        
        {/* Search Bar */}
        <div className="mobile-search-container">
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Search questions..." 
                    className="mobile-search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
        </div>

        {/* Links */}
        <ul className="list-unstyled mt-3">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link" onClick={closeMenu}>Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" onClick={closeMenu}>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNavbar;