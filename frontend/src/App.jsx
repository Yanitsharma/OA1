import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/NavBar";
import MobileNavbar from "./components/MobileNavbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react"; 


import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import TopicPage from "./components/TopicPage";
import Microsoft from "./components/Microsoft";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  
  const handleIsLoggedIn = () => {
    setIsLoggedIn(true);
  };

  
  useEffect(() => {
  const handleClickOutside = (event) => {
    
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };
  
  document.addEventListener("mousedown", handleClickOutside);
  // ...
}, []);

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar toggleSidebar={toggleSidebar} isLoggedIn={isLoggedIn} isSidebarOpen={isSidebarOpen}/>

        <Sidebar ref={sidebarRef}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          isLoggedIn={isLoggedIn} 
        />
        
        <div className="d-lg-none">
          <MobileNavbar />
        </div>

        <div
          className="content"
          style={{
            marginLeft: isSidebarOpen ? "270px" : "0px", 
            padding: "0px",
            transition: "margin-left 0.3s ease", 
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route path="/sidebar" element={<Sidebar/>} />
            <Route
              path="/login"
              element={<Login handleIsLoggedIn={handleIsLoggedIn} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
             
             
            <Route path="/topic/:topicName" element={<TopicPage />} />
          </Routes>
        </div>

        <Footer />
       
      </div>
    </Router>
  );
}

export default App;
