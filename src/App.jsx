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
import Register from "./components/Register";
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
