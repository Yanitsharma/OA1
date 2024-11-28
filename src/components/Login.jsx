

import styles from "./Login.module.css";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import "../App.css";

const Login = () => {
  const emailID=useRef();
  const passwordId=useRef();
  
  // Handle input change for password
 

  // Handle form submission
  const handleLoginClick = async (e) => {
    e.preventDefault(); 
    const emailId = emailID.current.value;
    const password = passwordId.current.value;
    const data={
      emailId:emailId,
      password:password,
    }
    try{
    const response= await axios.post("http://localhost:4000/api/login", data)
    console.log(response);
        console.log(response.status);
         alert("successfully login");
    }
    catch(error){
      console.log(error);
      
  alert('invalid username or password');
      console.log(error);
    }
  };

  return (
    <Container 
      className={`mt-4 login`}
      style={{ width: "30%", margin: "0 auto" }}
      class = {styles.vivek}
     
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
            ref={emailID}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "white", fontSize: "34px" }}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordId}
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
