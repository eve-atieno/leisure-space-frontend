
// import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom";
// import SignUp from "./SignUp";
// import Login from "./Login";
// import NavBar from "./NavBar";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

import BookingPage from "./BookingPage";



function App() {
  // const [user, setUser] = useState(null);


  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  return (
    <>
    
    <BookingPage />
      {/* <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <Home user={user}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
        {/* )}
      </main> */}
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar user={user} setUser={setUser} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <BookingPage />

        
      </BrowserRouter>

    </>
  );
}

export default App;
