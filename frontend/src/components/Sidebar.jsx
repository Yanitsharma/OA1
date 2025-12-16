import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 
import { ToastContainer, toast } from "react-toastify";
import { BsLayoutTextSidebarReverse, BsBuilding } from "react-icons/bs"; // Added building icon

const Sidebar = React.forwardRef(({ isOpen, toggleSidebar, isLoggedIn }, ref) => {
  
  // List of companies (Easier to manage here)
  const companies = [
    "Visa", "Media.net", "Deutsche Bank", "Microsoft", "BNY Mellon", "Salesforce",
    "Cisco", "UnifyApps", "Google", "Amazon", "Wells Fargo", 
    "Intuit", "MasterCard", "UiPath", "JLR"
  ];

  const handleSidebarClick = () => {
    if (isLoggedIn) {
      toggleSidebar();
    } else {
      toast.error("Please Register and Login first!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div ref={ref}>
        {/* Hamburger Icon Toggle */}
        <div className="hamburger-wrapper" onClick={handleSidebarClick}>
          <BsLayoutTextSidebarReverse 
            className={`sidebar-toggle-icon ${isOpen ? "active" : ""}`} 
          />
        </div>

        {/* The Sliding Sidebar */}
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <h3>Company Questions</h3>
            <p className="sidebar-subtitle">Ace your Coding Assesment</p>
          </div>

          <ul className="sidebar-list">
            {companies.map((company, index) => (
              <li key={index} className="sidebar-item">
                <Link 
                  to={`/topic/${company}`} 
                  className="sidebar-link" 
                  onClick={toggleSidebar}
                >
                  <BsBuilding className="link-icon" />
                  <span className="link-text">{company}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Toast Notification */}
        <ToastContainer theme="dark" />
      </div>
    </>
  );
});

export default Sidebar;