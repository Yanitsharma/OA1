// import "../App.css";
// function Navbar() {
//   return (
//     <>
//       <nav
//         style={{
//           backgroundColor: "black", // Black background for navbar
//           color: "white", // White text color
//           borderBottom: "2px solid green", // Green border at the bottom of navbar
//         }}
//         className="navbar navbar-expand-lg"
//       >
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#" style={{ color: "white" }}>
//             Navbar
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             style={{ borderColor: "green" }} // Green border for the toggler button
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   aria-current="page"
//                   href="#"
//                   style={{ color: "white" }}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#" style={{ color: "white" }}>
//                   Link
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                   style={{ color: "white" }}
//                 >
//                   Dropdown
//                 </a>
//                 <ul
//                   className="dropdown-menu"
//                   style={{
//                     backgroundColor: "black",
//                     border: "1px solid green",
//                   }}
//                 >
//                   <li>
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       style={{ color: "white" }}
//                     >
//                       Action
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       style={{ color: "white" }}
//                     >
//                       Another action
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       style={{ color: "white" }}
//                     >
//                       Something else here
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link disabled"
//                   aria-disabled="true"
//                   style={{ color: "white" }}
//                 >
//                   Disabled
//                 </a>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 style={{
//                   backgroundColor: "black", // Black background for search input
//                   color: "white", // White text for input
//                   border: "1px solid green", // Green border for input
//                 }}
//               />
//               <button
//                 className="btn btn-outline-success"
//                 type="submit"
//                 style={{ color: "white", borderColor: "green" }}
//               >
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;











import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-success">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu bg-dark border-success">
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
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

