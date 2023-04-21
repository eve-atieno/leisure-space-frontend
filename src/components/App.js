import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom";
// import SignUp from "./SignUp";
// import Login from "./Login";
// import NavBar from "./NavBar";
// import Home from "./Home";
import BookingPage from "./BookingPage";
import ReviewDetails from "./ReviewDetails";
import AddReviewForm from "./AddReviewForm";
import ReviewList from "./ReviewList";



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

    const [reviews, setReviews] = useState([
      { id: 1, name: 'John Doe', rating: 4, text: 'Great place!' },
      { id: 2, name: 'Jane Doe', rating: 5, text: 'I loved it!' },
    ]);
    const [selectedReview, setSelectedReview] = useState(null);
  
    const handleAddReview = (newReview) => {
      setReviews([...reviews, { id: Date.now(), ...newReview }]);
    };
    const handleReviewSelect = (review) => {
      setSelectedReview(review);
    };

  return (
    <>
    
    <BookingPage />
    <ReviewList 
       reviews={reviews} 
       onReviewSelect={handleReviewSelect} />

      <AddReviewForm 
      onAddReview={handleAddReview} />
      {selectedReview && <ReviewDetails review={selectedReview} />}

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
    </>
  );
}

export default App;
