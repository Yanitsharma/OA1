import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link } from "react-router-dom";


const Navbar = ({toggleSidebar,isLoggedIn,isSidebarOpen}) =>{
  const handleClick=()=>{
    if (isLoggedIn) {
    {isSidebarOpen ? toggleSidebar() : ""}
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-success">
      <div className="container-fluid">
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
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ margin: "0px 750px", fontSize: "20px" }}
          >
            <li className="nav-item">
              
              <Link className="nav-link active" aria-current="page"  to="/" onClick={handleClick}>
                <button className="btn btn-outline-success ms-3 home-btn " type="button" >
                  Home
                </button>
              </Link>
             
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about" onClick={handleClick}>
                <button
                  className="btn btn-outline-success ms-3 about-btn"
                  type="button"
                >
                  About Us
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register" onClick={handleClick}>
                <button
                  className="btn btn-outline-success ms-3 register-btn"
                  type="button"
                >
                  Register
                </button>
              </Link>
            </li>
          </ul>
           
         
          <Link className="nav-link" to="/login" onClick={handleClick}>
          <button
            className="btn btn-outline-success ms-3 login-btn"
            type="button"
           
          >
            Login
          </button>
          </Link>
         
          
         
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    
    
  );
}

export default Navbar;

