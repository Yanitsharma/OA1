
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
function Register() {
  const userID=useRef();
  const passwordId=useRef();
  const navigate = useNavigate();
  const handleSubmit =async (event) => {
    event.preventDefault();
    const emailId = userID.current.value;
    const password = passwordId.current.value;
    const data={
      emailId:emailId,
      password:password,
    }
  try{
   const response=await axios.post("http://localhost:4000/api/signup", data);
      console.log(response);
      console.log(response.status);
      toast.success('registered succesfully', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        }); 
     navigate("/");
  }
  catch(error){
    const err=  JSON.parse(error.config.data);
       if(err.password===""){
        toast('empty password', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
        // alert("empty password");
       }
       if(err.password!==""){
   if(error.request.status===500){
    toast('user already registered', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    
      });
    // alert("user already registered");
    }
  }
     console.log(error);
    
   }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center">Register</h3>
              
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"

                  ref= {userID}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    ref={passwordId}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3" onClick={handleSubmit}>
                  Register
                </button>
              <div className="text-center mt-3">
                <p>Already have an account?</p>
                <a href="/login" className="btn btn-link">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  );
}

export default Register;
