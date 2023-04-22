import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Images/navbar.png'


const NavBar = () => {

  return (  
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-navy blue-500 p-6">
  <div class="ml-11 ">
    <img src={Logo} alt="logo" className='w-20 h-20 mt-2' />
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-lg text-center  lg:flex-grow">
      <Link to="/home" class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold" 
      >
        HOME
      </Link>
     
      <Link to='/spaces' class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold" 
      >
        SPACES
      </Link>
      <Link to='/login' class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold" 
      >
        LOGIN
      </Link>
      <Link to='/logout' class="block mt-2 mx-5 lg:inline-block text-2xl no-underline lg:mt-0 text-orange-600 mr-4 font-bold" 
      >
        LOG OUT
      </Link>
     
    

    
     
    
      </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
