import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <div className="flex flex-col sticky top-0 z-50">
      {/* <!-- Navbar --> */}
      <nav className="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full">
        {/* <!-- Logo Container --> */}
        <div>
          {/* <!-- Logo --> */}
          <Link to="/" className="cursor-pointer">
            <img
              className="w-1/6"
              src=""
              alt="Store Logo"
              style={{ width: "120px" }}
            />
          </Link>
        </div>
            {/* <!-- Links Section --> */}
            <div className="items-center hidden space-x-8 lg:flex">
          <Link
            to="/"
            className="flex text-blue-900 font-bold  hover:text-blue-700 cursor-pointer transition-colors duration-300 text-sm "
          >
            HOME
          </Link>
          <Link
            to="/spaces"
            className="flex text-blue-900 font-bold  hover:text-blue-700 cursor-pointer transition-colors duration-300 text-sm "
          >
            SPACES
          </Link>
          <Link
            to="/booking"
            className="flex text-blue-900 font-bold hover:text-blue-700 cursor-pointer transition-colors duration-300  text-sm "
          >
            BOOKING
          </Link>
        </div>
        {/* <!-- Icon Menu Section --> */}
        <div className="flex items-center space-x-5">
         
           
       
              {/* <!-- User Avatar --> */}
              <Link to="/account">
                <img
                  src=""
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              </Link>
              {/* <!-- User Name --> */}
              <p className="font-bold text-m">Hello, !</p>
              <button
                className="text-blue-900 font-bold text-sm"
      
              >
                LOGOUT
              </button>
         

            <Link
              to="/login"
              className="flex text-blue-900 text-sm font-bold hover:text-blue-700 cursor-pointer transition-colors duration-300"
            >
              LOGIN
            </Link>
  
            <Link
              to="/signup"
              className="flex text-blue-900 text-sm font-bold hover:text-blue-700 cursor-pointer transition-colors duration-300"
            >
              REGISTER
            </Link>
        
        </div>
      </nav>
    </div>
      
    </div>
  )
}

export default NavBar

