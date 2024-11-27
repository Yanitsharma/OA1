import "../App.css";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              <p>
                © 2024 Placement Help. Your trusted platform for placement
                preparation with real previous year questions.
              </p>
              <p>
                Empowering students and job seekers to achieve their career
                goals with confidence.
              </p>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              Email: sharmayanit@gmail.com Email: vivekdiwakar6000@gmail.com
              <br />
              TelePhone: 18003000123
            </p>
            <ul className="list-unstyled d-flex">
              <li>
                <a
                  href="#"
                  className="text-white me-3"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white me-3"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  <i className="bi bi-instagram"></i>
                </a>
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
