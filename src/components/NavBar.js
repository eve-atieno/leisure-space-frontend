import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Logo from "../assets/Images/navbar.png";
import Profile from "../assets/Images/Profile.png";


const NavBar = () => {
  const navigate = useNavigate();
  const {  setUser, setAdmin } = useContext(AuthContext); // Get user and admin from context

  const handleLogout = () => {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("admin");
    setUser(null);
    setAdmin(false); // Set admin to false on logout
    navigate("/");
  };

  const user = JSON.parse(sessionStorage.getItem("user"));
  const admin = JSON.parse(sessionStorage.getItem("admin"));



  return (
    <div className="sticky top-0 z-50">
    <nav
  class="flex items-center shadow-md backdrop-blur-lg flex-wrap bg-navy blue-500 p-6 opacity-90">
    <div class="ml-11 mt-4">
    <img src={Logo} alt="logo" className="w-20 h-20 " />
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-lg text-center  lg:flex-grow">
      <Link
        to="/"
        class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold"
      >
        HOME
      </Link>
      <Link
        to="/spaces"
        class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold"
      >
        SPACES
      </Link>
       
        {admin && (
          <>
           <Link
        to="/addspace"
        class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold"
      >
        ADD SPACE
      </Link>
    
      
          </>
        )}
        {!user && !admin && (
          <>
            <Link
          to="/login"
          class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold"
        >
          LOGIN
        </Link>
          </>
        )}
        {(user || admin) && (
          <>
           <p class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-black-600 mr-4 ">
           Hello, {user ? user.name : admin ? admin.name : "Guest"}
         </p>
         <Link
           to="/profile"
           class=" lg:inline-block text-2xl no-underline  "
         >
           <img
             src={Profile}
             alt="profile"
             className="w-8 h-8 mt-9 rounded-full shadow-md"
           />
         </Link>
           <Link
           onClick={ handleLogout }
           to="/login"
           class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold"
         >
           LOG OUT
         </Link>
         </>
        )}
    </div>
  </div>
</nav>
</div>
  );
};

export default NavBar;

