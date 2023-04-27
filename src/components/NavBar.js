
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Images/navbar.png'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'

 const NavBar = () => {

  const { logout } = useContext(AuthContext);

  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log("user", user);

  const triggerLogout = () => {
    logout();
  };


  return (   
     <div className='sticky top-0 z-50'>
      <nav class="flex items-center justify-between shadow-md backdrop-blur-md flex-wrap bg-navy blue-500 p-6">
  <div class="ml-11 ">
    <img src={Logo} alt="logo" className='w-20 h-20 mt-2' />
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-lg text-center  lg:flex-grow">

      <Link to="/" class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold" 
      >
        HOME
      </Link>  

      <Link to='/spaces' class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold" 
      >
        SPACES
      </Link>
      {isLoggedIn ? (
     <Link onClick ={triggerLogout} to='/login' class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold" 
      >
        LOG OUT
      </Link>
      ) : (
      <Link to='/login' class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold" 
      >
        LOGIN
      </Link>

      )}
      </div>
  </div>
</nav>
    </div>
    
  )
}

export default NavBar