import React, { useEffect, useState } from "react";
import BookingPage from "./BookingPage";
import ReviewDetails from "./ReviewDetails";
import AddReviewForm from "./AddReviewForm";
import ReviewList from "./ReviewList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import Spaces from "./Cards/Cards.js"
import Reserve from "./Reserve";





function App() {

    
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={[<Home/>]} />
        <Route path="/booking" element={[,<BookingPage />]} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/reserve" element={<Reserve />} />
        
      </Routes>
      <Footer/>
    
      </BrowserRouter>
      

  );
}

export default App;