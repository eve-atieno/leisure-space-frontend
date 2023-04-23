
import { Fragment } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Images/navbar.png'



// const NavBar = () => {
// // const navigation = [
// //   { name: 'Home', href: '#', current: true },
// //   { name: 'SignIn', href: '#', current: false },
// //   { name: 'LogIn', href: '#', current: false },
// // ]




//   return (
//     <div>

//       <nav class="bg-white border-gray-200 dark:bg-gray-900" >
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a href="https://flowbite.com/" class="flex items-center">
//             <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
//             <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//           </a>
//           <div class="flex md:order-2">
//             <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
//             <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
//               <span class="sr-only">Open main menu</span>
//               <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//             </button>
//           </div>
//           <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">

//               <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                 <li>
//                   <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">

//                       Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">

//                       SignUp
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">

//                       Login
//                   </a>
//                 </li>
//               </ul>
//           </div>
//         </div>
//       </nav>
//     </div>

//   )
// }

// export default NavBar

 const NavBar = () => {


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