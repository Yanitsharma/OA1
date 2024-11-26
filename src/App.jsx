// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Sidebar from "./Sidebar";
// import Register from "./components/Register";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//     <Router>
//       <div className="wrapper">
//         <Navbar />
//         <div className="content">
//           <Routes>
//             {/* Define routes for different components */}
//             <Route path="/" element={<Header />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>

//     </>
//   );
// }

// export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Visa from "./components/Visa";
import  Media from "./components/MediaNet";
import  Deutsche from "./components/Deutsche";
import  BNY from "./components/BNY";
import Register from "./components/Register";

import Microsoft from "./components/Microsoft";
import Salesforce from "./components/Salesforce";
import Cisco from "./components/Cisco";
import Amazon from "./components/Amazon";
import Google from "./components/Google";
import WellsFargo from "./components/WellsFargo";
import UnifyApps from "./components/UnifyApps";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopicPage from "./components/TopicPage";
import QuestionPage from "./components/QuestionPage";
import { useState } from "react";  // Import useState to manage sidebar state


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);  // Manage sidebar state

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);  // Toggle sidebar state
  };

  return (
    <>
      <Router>
        {/* <div className="wrapper"> */}
          <Navbar />
          {/* Pass the toggleSidebar function to Sidebar */}
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> 
          <div
            // className="content"
            // style={{
            //   marginLeft: sidebarOpen ? "270px" : "0px",  // Adjust content margin
            //   padding: "20px",
            //   transition: "margin-left 0.3s ease",  // Smooth transition
            // }}
          >
            <Routes>
              {/* <Route path="/" element={<Header />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Define route for topics and questions */}
              <Route path="/topic/" element={<Visa />} />
              <Route path="/topic/media" element={<Media />} />
              <Route path="/topic/deutsche" element={<Deutsche />} />
              <Route path="/topic/Unifyapps" element={<UnifyApps />} />
              <Route path="/topic/Salesforce" element={<Salesforce/>} />
              <Route path="/topic/Cisco" element={<Cisco/>} />
              <Route path="/topic/Microsoft" element={<Microsoft/>} />
              <Route path="/topic/Amazon" element={<Amazon/>} />
              <Route path="/topic/Google" element={<Google/>} />
              <Route path="/topic/WellsFargo" element={<WellsFargo/>} />
              <Route path="/topic/BNY" element={<BNY/>} />
              <Route path="/topic/:topicName" element={<TopicPage />} />
              {/* <Route path="/topic/:topicName/:questionName" element={<QuestionPage />} /> */}
            </Routes>
          </div>

          <Footer />
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
