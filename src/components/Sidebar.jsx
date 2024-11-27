import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import some custom styles

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div>
      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h3 style={{ margin: "30px 0px" }}>DSA Topics</h3>
        <ul>
          <li className="company-name">
            <Link to="/topic/" onClick={toggleSidebar}>
              Visa
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/media" onClick={toggleSidebar}>
              Media.Net
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/deutsche" onClick={toggleSidebar}>
              Deutsche
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Microsoft" onClick={toggleSidebar}>
              Microsoft
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/BNY" onClick={toggleSidebar}>
              BNY
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Salesforce" onClick={toggleSidebar}>
              Salesforce
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Cisco" onClick={toggleSidebar}>
              Cisco
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Unifyapps" onClick={toggleSidebar}>
              UnifyApps
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Google" onClick={toggleSidebar}>
              Google
            </Link>
          </li>

          <li className="company-name">
            <Link to="/topic/Amazon" onClick={toggleSidebar}>
              Amazon
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/WellsFargo" onClick={toggleSidebar}>
              WellsFargo
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Intuit" onClick={toggleSidebar}>
              Intuit
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/MasterCard" onClick={toggleSidebar}>
              MasterCard
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/UiPath" onClick={toggleSidebar}>
              UiPath
            </Link>
          </li>
          <li className="company-name">
            <Link to="/topic/Jlr" onClick={toggleSidebar}>
              Jlr
            </Link>
          </li>
          {/* Add more topics as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
