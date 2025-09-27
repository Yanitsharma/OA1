import "../App.css";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-dark text-white pt-4" style={{ marginTop: "25%"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            
              <p>
                 Placement Help. Your trusted platform for placement
                preparation with real previous year questions.
              </p>
              <p>
                Empowering students and job seekers to achieve their career
                goals with confidence.
              </p>
            
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                 to="/"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                ></Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              Email: sharmayanit@gmail.com 
              <br />
             Phone: 9352084018
            </p>
            <ul className="list-unstyled d-flex">
              <li>
                <Link
                 to="#"
                  className="text-white me-3"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-facebook"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white me-3"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-twitter"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center py-3">
          &copy; {new Date().getFullYear()} Study Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
