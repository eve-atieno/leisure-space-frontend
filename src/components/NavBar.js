
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Images/navbar.png'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import Profile from '../assets/Images/Profile.png'

 const NavBar = () => {
  const { logout } = useContext(AuthContext);

  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log("user", user);

  const triggerLogout = () => {
    logout();
  };

  console.log ("user", user)


  return (   
     <div className='sticky top-0 z-50'>
      <nav class="flex items-center justify-between shadow-md
       backdrop-blur-lg flex-wrap bg-navy blue-500 p-6 opacity-90">
  <div class="ml-11 mt-4">
    <img src={Logo} alt="logo" className='w-20 h-20 ' />
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
        <>
  
         <p class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-black-600 mr-4 "
      >
        Hello, {user.name}
      </p>
       <Link to='/profile' class="block mt-4 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 "
        >
          <img src = {Profile} alt="profile" className='w-10 h-10 rounded-full' />
      </Link>
     
     
     

     <Link onClick ={triggerLogout} to='/login' class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold" 
      >
        LOG OUT
      </Link>
      </>
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