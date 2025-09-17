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
     <>
    <div >
      {/* Hamburger Icon */}
      <div
        className="hamburger-icon"
        onClick={handleSidebarClick}
         // Check if the user is logged in
      >
        {/* <RiSidebarUnfoldFill /> */}
        <BsLayoutTextSidebarReverse
          className={`sidebar-icon ${isOpen ? "open" : ""}`}
        />
      </div>
      {/* Sidebar */}
      <h3 className="yt">Sidebar</h3>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h3 style={{ margin: "30px 0px" }}>CompanyWise Questions</h3>
        <ul>
          <li className="company-name">
            <Link to="/topic/" className="shiv" onClick={toggleSidebar}>
              Visa
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/media" className="shiv" onClick={toggleSidebar}>
              Media.Net
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/deutsche" className="shiv" onClick={toggleSidebar}>
              Deutsche
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Microsoft" className="shiv" onClick={toggleSidebar}>
              Microsoft
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/BNY" className="shiv"onClick={toggleSidebar}>
              BNY
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Salesforce" className="shiv"onClick={toggleSidebar}>
              Salesforce
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Cisco" className="shiv"onClick={toggleSidebar}>
              Cisco
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Unifyapps" className="shiv"onClick={toggleSidebar}>
              UnifyApps
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Google" className="shiv"onClick={toggleSidebar}>
              Google
            </Link>
          </li>

          <li className="company-name">
            <Link to="/topic/Amazon" className="shiv"onClick={toggleSidebar}>
              Amazon
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/WellsFargo" className="shiv"onClick={toggleSidebar}>
              WellsFargo
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Intuit" className="shiv"onClick={toggleSidebar}>
              Intuit
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/MasterCard" className="shiv"onClick={toggleSidebar}>
              MasterCard
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/UiPath" className="shiv"onClick={toggleSidebar}>
              UiPath
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Jlr" className="shiv"onClick={toggleSidebar}>
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
   
   </>
  );
};

export default Sidebar;
