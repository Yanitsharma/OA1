import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Ensure this path is correct for your project
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar, isLoggedIn, isSidebarOpen }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const navigate = useNavigate(); // Hook for navigation

  // Logic to handle Sidebar toggling (Mobile)
  const handleClick = () => {
    if (isLoggedIn && isSidebarOpen) {
      toggleSidebar();
    }
  };

  // Logic to handle Search Submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent full page reload
    if (searchTerm.trim()) {
      // Navigate to Home page with the search query in the URL
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
      // Optional: Clear the search bar after searching
      // setSearchTerm(""); 
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-success custom-navbar">
      <div className="container-fluid">
        
        {/* Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          {/* LEFT SIDE: Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className="nav-link btn btn-outline-success ms-2 home-btn" 
                to="/" 
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link btn btn-outline-success ms-2 about-btn" 
                to="/about" 
                onClick={handleClick}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link btn btn-outline-success ms-2 register-btn" 
                to="/register" 
                onClick={handleClick}
              >
                Register
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE: Login & Search (Grouped for spacing) */}
          <div className="right-actions d-flex align-items-center">
            
            <Link 
              className="btn custom-login-btn me-3" 
              to="/login" 
              onClick={handleClick}
            >
              Login
            </Link>

            {/* SEARCH FORM - Now functional */}
            <form className="d-flex search-form" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search companies or topics..."
                aria-label="Search"
                value={searchTerm} // Controlled input
                onChange={(e) => setSearchTerm(e.target.value)} // Update state
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;