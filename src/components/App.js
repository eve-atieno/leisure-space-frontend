import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import BookingPage from "./BookingPage";
import Footer from "./Footer";


function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<NavBar/>, <Home />]} />
        <Route path="/booking" element={[<NavBar/>,<BookingPage />]} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
      </BrowserRouter>
      
  
  );
}

export default App;
