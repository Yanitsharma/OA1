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
                <button className="btn btn-outline-success ms-3 home-btn " type="button">
                  Home
                </button>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                <button
                  className="btn btn-outline-success ms-3 about-btn"
                  type="button"
                >
                  About Us
                </button>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register">
                <button
                  className="btn btn-outline-success ms-3 register-btn"
                  type="button"

                >
                  Register
                </button>
              </Link>
            </li>
          </ul>

          {/* Login Button */}
          <button
            className="btn btn-outline-success ms-3 login-btn"
            type="button"

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

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showVerticalMenu, setShowVerticalMenu] = useState(false); // Toggle vertical menu

//   const handleSearchInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchQuery) {
//       console.log("Searching for:", searchQuery);
//     }
//   };

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   // Toggle vertical menu visibility
//   const toggleVerticalMenu = () => {
//     setShowVerticalMenu(!showVerticalMenu);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-success">
//       <div className="container-fluid">
//         {/* Menu Icon for smaller screens */}
//         <div className="menu-icon" onClick={toggleVerticalMenu}>
//           <span className="navbar-toggler-icon"></span>
//         </div>

//         <div
//           className={`vertical-menu ${
//             showVerticalMenu ? "show-menu" : "hide-menu"
//           }`}
//         >
//           <ul className="navbar-nav flex-column text-center">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">
//                 <button className="btn btn-outline-success my-2" type="button">
//                   Home
//                 </button>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/about" className="nav-link">
//                 <button className="btn btn-outline-success my-2" type="button">
//                   About Us
//                 </button>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/register" className="nav-link">
//                 <button className="btn btn-outline-success my-2" type="button">
//                   Register
//                 </button>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="btn btn-outline-success my-2"
//                 type="button"
//                 onClick={handleLoginClick}
//               >
//                 Login
//               </button>
//             </li>
//           </ul>
//         </div>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 <button
//                   className="btn btn-outline-success ms-3 "
//                   style={{ color: "red" }}
//                   type="button"
//                 >
//                   Home
//                 </button>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/about">
//                 <button
//                   className="btn btn-outline-success ms-3 about-btn"
//                   type="button"
//                 >
//                   About Us
//                 </button>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/register">
//                 <button
//                   className="btn btn-outline-success ms-3 register-btn"
//                   type="button"
//                 >
//                   Register
//                 </button>
//               </Link>
//             </li>
//           </ul>

//           <button
//             className="btn btn-outline-success ms-3 login-btn"
//             type="button"
//             onClick={handleLoginClick}
//           >
//             Login
//           </button>

//           <form className="d-flex" onSubmit={handleSearchSubmit}>
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               value={searchQuery}
//               onChange={handleSearchInputChange}
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
