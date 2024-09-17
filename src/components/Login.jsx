

import styles from "./Login.module.css";

import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../App.css";

const Login = () => {
  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle input change for email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle input change for password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent page reload
    // For now, log the email and password (you can add API calls here)
    console.log("Email:", email);
    console.log("Password:", password);

    // Add further logic like form validation, authentication, etc.
    if (email && password) {
      // Example: Show an alert on successful submission (replace with actual login logic)
      alert(`Login successful with email: ${email}`);
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <Container 
      className={`mt-4 login`}
      style={{ width: "30%", margin: "0 auto" }}
      className = {styles.vivek}
    >
      <center>
        <h2>Login</h2>
      </center>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: "white", fontSize: "34px" }}>
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange} // Add onChange handler for email
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "white", fontSize: "34px" }}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange} // Add onChange handler for password
          />
        </Form.Group>
        <center>
          <Button variant="primary" type="submit" onClick={handleLoginClick}>
            Login
          </Button>
          <center>
            <p style={{ color: "white", margin: "20px 0px", fontSize: "24px" }}>
              Don't have an account? <a href="/register">Register</a>
            </p>
          </center>
        </center>
      </Form>
    </Container>
  );
};

export default Login;
