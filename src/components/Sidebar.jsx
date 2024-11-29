import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import some custom styles
import { ToastContainer, toast } from "react-toastify";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar, isLoggedIn }) => {
  const navigate = useNavigate();
  // Handle sidebar toggle
  const handleSidebarClick = () => {
    if (isLoggedIn) {
      toggleSidebar(); // Open sidebar only if logged in
      navigate("/sidebar");
    } else {
      toast.error("Firstly register and then Login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <div
        className="hamburger-icon"
        onClick={handleSidebarClick} // Check if the user is logged in
      >
        {/* <RiSidebarUnfoldFill /> */}
        <BsLayoutTextSidebarReverse
          className={`sidebar-icon ${isOpen ? "open" : ""}`}
        />
      </div>
      {/* Sidebar */}
      <h3 className="yt">Sidebar</h3>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h3 style={{ margin: "30px 0px" }}>DSA Topics</h3>
        <ul>
          <li className="company-name">
            <Link to="/topic/">Visa</Link>
          </li>
          <li className="company-name">
            <Link to="/topic/media">Media.Net</Link>
          </li>
          <li className="company-name">
            <Link to="/topic/deutsche" >
              Deutsche
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Microsoft">
              Microsoft
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/BNY">
              BNY
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Salesforce">
              Salesforce
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Cisco" >
              Cisco
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Unifyapps" >
              UnifyApps
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Google" >
              Google
            </Link>
          </li>

          <li className="company-name">
            <Link to="/topic/Amazon">
              Amazon
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/WellsFargo">
              WellsFargo
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Intuit">
              Intuit
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/MasterCard">
              MasterCard
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/UiPath" >
              UiPath
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Jlr" >
              Jlr
            </Link>
          </li>
          {/* Add more topics as needed */}
        </ul>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Sidebar;
