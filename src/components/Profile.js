import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Link } from "react-router-dom";
import logo from "../assets/Images/navbar.png";


function Profile({profile}) {
  const { user} = useContext(AuthContext);


  
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">

    <div className="max-w-md mx-auto mt-20 mb-20 bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col items-center justify-center mt-10">
        <Link to="/">
          <img className="h-12 mb-5 mx-auto" src={logo} alt="logo" />
        </Link>
      </div>
    <h2 className="text-3xl font-bold text-black mb-4">Account</h2>
    <div className="space-y-4">
      <div className="border-b border-black pb-2 flex flex-row">
        <label htmlFor="name" className="block   font-bold text-black">Name:</label>
         <p className="text-black text-lg ml-2">{user?.name }</p> 
      </div>
      <div className="border-b border-black pb-2  flex flex-row">
        <label htmlFor="email" className="block mb-1  font-bold text-black">Email Address:</label>
       <p className="text-black text-lg ml-2">{user?.email }</p> 
      </div>
      <div className="border-b border-black pb-4">
        <h3 className="text-xl font-bold text-black  mb-2">Leisure Space</h3>
        <ul className="space-y-2">
        </ul>
      </div>
    </div>
  </div>
    </div>
  
  );
}

export default Profile;