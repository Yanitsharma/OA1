import Body from "./Body";

function Home({isOpen , toggleSidebar,isLoggedIn})
 {
  
  return <Body  isOpen={isOpen}
  toggleSidebar={toggleSidebar}
  isLoggedIn={isLoggedIn} />;
}

export default Home;
