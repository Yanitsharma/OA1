// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");

//   // Function to handle search input changes
//   const handleSearchInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Function to handle search form submission
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchQuery) {
//       // Implement search logic, for now we will just log the query
//       console.log("Searching for:", searchQuery);
//       // Optionally, you can navigate to a search results page
//       // navigate(`/search?query=${searchQuery}`);
//     }
//   };

//   // Function to navigate to login page
//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-success">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           Navbar
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/register">
//                 Register
//               </Link>
//             </li>
//           </ul>

//           {/* Login Button */}
//           <button
//             className="btn btn-outline-success ms-3"
//             type="button"
//             style={{
//               color: "white",
//               background: "#9294b4 ",
//               margin: "0px 15px",
//             }}
//             onClick={handleLoginClick}
//           >
//             Log In
//           </button>
//           {/* Search Bar */}
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
      // Implement search logic, for now we will just log the query
      console.log("Searching for:", searchQuery);
      // Optionally, you can navigate to a search results page
      // navigate(`/search?query=${searchQuery}`);
    }
  };

  // Function to navigate to login page
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-success">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          Navbar
        </Link> */}
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
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>

          {/* Login Button */}
          <button
            className="btn btn-outline-success ms-3"
            type="button"
            style={{
              color: "white",
              background: "#9294b4 ",
              margin: "0px 15px",
            }}
            onClick={handleLoginClick}
          >
            Log In
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
