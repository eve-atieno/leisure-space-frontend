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
import Spaces from "./Spaces/Spaces";
import Reserve from "./Reserve";
import AuthProvider  from "./AuthContext";

import AddSpace from "../admin/AddSpace";
import CreateAdmin from "../admin/CreateAdmin";


function App() {

  const [spaces, setSpaces] = useState([]);


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

    // Fech data from API

    useEffect(() => {
      fetch("http://127.0.0.1:4000/spaces")
        .then((res) => res.json())
        .then((data) => {
          setSpaces(data);
          
        });
    }, []);

    
  return (
    <BrowserRouter>
      <AuthProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/booking/:id" element={<BookingPage
        spaces={spaces}
        />} />
        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/spaces" element={<Spaces 
        spaces={spaces}
        setSpaces={setSpaces}/>} />
     
        <Route path="/reserve" element={<Reserve />} />
  
        <Route path="/addspace" element={<AddSpace />} />
        <Route path="/createadmin" element={<CreateAdmin />} />


        {/* <div className="flex flex-row justify-evenly"> */}
    {/* <ReviewList 
       reviews={reviews} 
       onReviewSelect={handleReviewSelect} />

      <AddReviewForm 
      onAddReview={handleAddReview} />
      {selectedReview && <ReviewDetails review={selectedReview} />}
      </div> */}  
        
      </Routes>
      <Footer/>
    </AuthProvider>
      </BrowserRouter>
      

  );
}

export default App;