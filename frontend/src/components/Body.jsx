import { ToastContainer, toast } from "react-toastify";
import "../App.css";
const Body = ({ toggleSidebar, isLoggedIn }) => {
  const handleClick = () => {
    if (isLoggedIn) {
      toggleSidebar(); 
    } else {
      toast.error("Firstly register and then Login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  }
  return (
    <>
      <center>
        <h1 className="moving-text">
          Welcome to our Online Assessment WebSite....
        </h1>
        <h4 style={{ color: "whitesmoke" }}>
         For finding Questions click on this Info button here.
          <button type="button" class="btn btn-info ty" onClick={handleClick}>Info</button>
        </h4>
       
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
      </center>
    </>
  );
}
export default Body;