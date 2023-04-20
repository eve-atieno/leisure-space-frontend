import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import BookingPage from "./BookingPage";
import Footer from "./Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar user={user} setUser={setUser} />
        <BookingPage />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>

        
      </BrowserRouter>
    </>
  );
}

export default App;
