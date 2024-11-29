
import styles from "./Login.module.css";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import "../App.css";

const Login = ({ handleIsLoggedIn }) => {
  const emailID = useRef();
  const passwordId = useRef();

  // State to manage form input
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
  });

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
    const data = {
      emailId: emailId,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        data
      );
      console.log(response);
      alert("Successfully logged in");
      handleIsLoggedIn(); // Trigger login state change

      // Reset form data
      setFormData({
        emailId: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      alert("Invalid username or password");
    }
  };

  return (
    <Container
      className={`mt-4 login`}
      style={{ width: "30%", margin: "0 auto" }}
      className={styles.vivek}
    >
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
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              handleLoginClick(e); // Properly pass 'e' to the function
            }}
          >
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
