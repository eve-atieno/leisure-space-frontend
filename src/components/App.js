import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import BookingPage from "./BookingPage";
import Footer from "./Footer";
import Spaces from "./Cards/Cards.js"



function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Home/>,<Footer/>]} />
        <Route path="/booking" element={[<NavBar/>,<BookingPage />]} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/spaces" element={<Spaces />} />
      </Routes>
      </BrowserRouter>
      
  
  );
}

export default App;
