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
      { id: 1, name: 'John Doe', rating: 4, text: 'This place is stunning!. Every detail of this place is well done. I enjoyed my time over there so much. ' },
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
    <div className="flex flex-row justify-evenly">
    <ReviewList 
       reviews={reviews} 
       onReviewSelect={handleReviewSelect} />

      <AddReviewForm 
      onAddReview={handleAddReview} />
      {selectedReview && <ReviewDetails review={selectedReview} />}
      </div>

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
