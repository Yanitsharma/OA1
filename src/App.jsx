
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react"; // Import useState to manage sidebar state

// Import components
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Visa from "./components/Visa";
import Media from "./components/MediaNet";
import Deutsche from "./components/Deutsche";
import BNY from "./components/BNY";
import Microsoft from "./components/Microsoft";
import Salesforce from "./components/Salesforce";
import Cisco from "./components/Cisco";
import Amazon from "./components/Amazon";
import Google from "./components/Google";
import WellsFargo from "./components/WellsFargo";
import UnifyApps from "./components/UnifyApps";
import TopicPage from "./components/TopicPage";
import Intuit from "./components/Intuit";
import MasterCard from "./components/MasterCard";
import UiPath from "./components/UiPath";
import Jlr from "./components/Jlr";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Handle login state change
  const handleIsLoggedIn = () => {
    setIsLoggedIn(true);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) // Click is outside sidebar
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          isLoggedIn={isLoggedIn} // Pass the isLoggedIn state
        />

        <div
          className="content"
          style={{
            marginLeft: isSidebarOpen ? "270px" : "0px", // Adjust content margin based on sidebar state
            padding: "0px",
            transition: "margin-left 0.3s ease", // Smooth transition
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login handleIsLoggedIn={handleIsLoggedIn} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/topic" element={<Visa />} />
            <Route path="/topic/media" element={<Media />} />
            <Route path="/topic/deutsche" element={<Deutsche />} />
            <Route path="/topic/Unifyapps" element={<UnifyApps />} />
            <Route path="/topic/Salesforce" element={<Salesforce />} />
            <Route path="/topic/Cisco" element={<Cisco />} />
            <Route path="/topic/Microsoft" element={<Microsoft />} />
            <Route path="/topic/Amazon" element={<Amazon />} />
            <Route path="/topic/Google" element={<Google />} />
            <Route path="/topic/WellsFargo" element={<WellsFargo />} />
            <Route path="/topic/BNY" element={<BNY />} />
            <Route path="/topic/:topicName" element={<TopicPage />} />
            <Route path="/topic/UiPath" element={<UiPath />} />
            <Route path="/topic/MasterCard" element={<MasterCard />} />
            <Route path="/topic/Intuit" element={<Intuit />} />
            <Route path="/topic/Jlr" element={<Jlr />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
