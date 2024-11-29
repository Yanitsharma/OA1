import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      console.log("Searching for:", searchQuery);
    }
  };

  // Function to navigate to login page
  const handleLoginClick = () => {
    navigate("/login");
  };

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
              <Link className="nav-link active" aria-current="page" to="/">
                <button
                  className="btn btn-outline-success ms-3 "
                  type="button"
                  style={{
                    color: "white",
                    background: "blue ",
                    marginTop: "-17px",
                    position: "absolute",
                    right: "500px",
                    border: "solid black",
                    
                  }}
                >
                  Home
                </button>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                <button
                  className="btn btn-outline-success ms-3"
                  type="button"
                  style={{
                    color: "white",
                    background: "gold ",
                    marginTop: "-17px",
                    position: "absolute",
                    right: "400px",
                    border: "solid black",
                  }}
                >
                  About Us
                </button>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register">
                <button
                  className="btn btn-outline-success ms-3"
                  type="button"
                  style={{
                    color: "white",
                    background: "red ",
                    marginTop: "-17px",
                    position: "absolute",
                    left: "100px",
                    border: "solid black",
                  }}
                >
                  Register
                </button>
              </Link>
            </li>
          </ul>

          {/* Login Button */}
          <button
            className="btn btn-outline-success ms-3 "
            type="button"
            style={{
              color: "white",
              background: "green ",
              margin: "0px 15px",
              border: "2px solid black",
              // padding: "0px",
            }}
            onClick={handleLoginClick}
          >
            Login
          </button>
          {/* Search Bar */}
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchInputChange}
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
