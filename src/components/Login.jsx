

import styles from "./Login.module.css";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "../App.css";

const Login = ({ handleIsLoggedIn }) => {
  // State to manage form input
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
  });
  const navigate = useNavigate();
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleLoginClick = async (e) => {
    e.preventDefault();
    const { emailId, password } = formData;

    const data = { emailId, password };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        data
      );
      console.log(response);

      // Display success toast notification
      toast.success("Successfully logged in!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });

      // Trigger login state change
      handleIsLoggedIn();
      navigate("/");

      // Reset form data
      setFormData({ emailId: "", password: "" });
    } catch (error) {
      console.error(error);

      // Display error toast notification
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
    <Container className={styles.vivek} style={{ width: "30%", margin: "0 auto" }}>
      <center>
        <h2 style={{ color: "white" }}>Login</h2>
      </center>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: "white", fontSize: "34px" }}>
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "white", fontSize: "34px" }}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <center>
          <Button variant="primary" type="submit" onClick={handleLoginClick}>
            Login
          </Button>
          <p style={{ color: "white", margin: "20px 0px", fontSize: "24px" }}>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </center>
      </Form>
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
    </Container>
  );
};

export default Login;
