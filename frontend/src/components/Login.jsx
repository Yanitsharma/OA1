import React, { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "../App.css"; // Ensure this imports the CSS provided above

const Login = ({ handleIsLoggedIn }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleLoginClick = async (event) => {
    event.preventDefault();
    const emailId = emailRef.current.value;
    const password = passwordRef.current.value;

    const data = { emailId, password };
    
    try {
      const response = await axios.post(
        "https://oooo-gilt-kappa.vercel.app/api/login",
        data
      );
      console.log(response);

      toast.success("Successfully logged in!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      
      handleIsLoggedIn();
      navigate("/");
      
      // Reset the form manually since we aren't using Bootstrap Form control
      if(emailRef.current) emailRef.current.value = "";
      if(passwordRef.current) passwordRef.current.value = "";

    } catch (error) {
      console.error(error);
      toast.error("Invalid username or password", {
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
    <div className="login-page-overlay">
      <div className="glass-container">
        
        <h2 className="login-header">Login</h2>
        
        <form onSubmit={handleLoginClick}>
          
          {/* Email Input */}
          <div className="custom-input-group">
            <input
              type="email"
              placeholder="Email address"
              name="emailId"
              className="glass-input"
              ref={emailRef}
              required
            />
            <span className="input-icon-overlay">✉️</span>
          </div>

          {/* Password Input */}
          <div className="custom-input-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="glass-input"
              ref={passwordRef}
              required
            />
            <span className="input-icon-overlay">🔒</span>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-btn-animated">
            Login
          </button>

          {/* Register Link */}
          <p className="register-text">
            Don't have an account? 
            <Link to="/register">Register</Link>
          </p>
        </form>

        {/* Google Login Component */}
        <div className="google-login-wrapper">
          <GoogleLogin
            theme="filled_black"
            text="signin_with"
            shape="pill"
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              handleIsLoggedIn();
              navigate("/");
            }}
            onError={() => {
              console.log("Login failed");
              toast.error("Google Login failed");
            }}
          />
        </div>

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

export default Login;