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



import Footer from "./Footer";


function App() {

    const [reviews, setReviews] = useState([
      { id: 1, name: 'John Doe', rating: 4, text: 'This place is stunning! I’ve never been at such an Airbnb. It is literally in the middle of nowhere. Exactly what you’re looking for when trying to escape the noice of a big city. Every detail of this place is well done. My designer heart was almost exploding when I discovered the house. I enjoyed my time over there so much. I def wanna come back again.' },
      { id: 2, name: 'Jane Doe', rating: 5, text: 'Beautiful location. Wonderful break from daily life and the city.' },
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
