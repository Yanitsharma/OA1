// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import "./App.css"; // Import your custom CSS
// import Navbar from "./components/NavBar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Header></Header>
//       <Footer></Footer>
     
     
//     </>
//   );
// }

// export default App;


import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css"; // Import your custom CSS
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="content">
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
