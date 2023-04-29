import React, { useEffect, useState } from "react";
import BookingPage from "./BookingPage";
import AddReviewForm from "./AddReviewForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import Spaces from "./Spaces/Spaces";
import Reserve from "./Reserve";
import AuthProvider from "./AuthContext";
import AddSpace from "../admin/AddSpace";
import CreateAdmin from "../admin/CreateAdmin";
import Invoice from "./Invoice/Invoice";
import AgreementIncubator from "./AgreementIncubator";

function ReviewsContainer({ spaces, reviews, onAddReview }) {
  return (
    <>
      {/* <ReviewList reviews={reviews} onReviewSelect={onReviewSelect} /> */}
      <AddReviewForm
        reviews={reviews}
        spaces={spaces}
        onAddReview={onAddReview}
      />
    </>
  );
}

function App() {
  const [reviews, setReviews] = useState([
    // { id: 1, name: "John Doe", rating: 4, text: "Great product!" },
    // { id: 2, name: "Jane Doe", rating: 5, text: "I loved it!" },
  ]);

  const handleAddReview = (newReview) => {
    setReviews([...reviews, { id: Date.now(), ...newReview }]);
  };
  const handleReviewSelect = (review) => {
    // setSelectedReview(review);
  };

  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/spaces")
      .then((res) => res.json())
      .then((data) => {
        setSpaces(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  // function AddReview

  return (
    <BrowserRouter>
      <AuthProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={[ <Home />]} />
          <Route
            path="/booking/:id"
            element={[
             
              <BookingPage spaces={spaces} />,
              <ReviewsContainer
                spaces={spaces}
                reviews={reviews}
                onReviewSelect={handleReviewSelect}
                onAddReview={handleAddReview}
              />,
            ]}
          />
          <Route path="/signup" element={ 
             
          <SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/spaces"
            element={<Spaces spaces={spaces} setSpaces={setSpaces} />}
          />
          <Route path="/reserve" element={<Reserve
            spaces={spaces}
           />} />
          <Route path="/addspace" element={<AddSpace />} />
          <Route path="/createadmin" element={<CreateAdmin />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/agreement" element={<AgreementIncubator />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
