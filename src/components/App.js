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
import Profile from "./Profile";



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
  const [filteredSpaces, setFilteredSpaces] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch("https://leisure.onrender.com/spaces")
      .then((res) => res.json())
      .then((data) => {
        setSpaces(data);
        setFilteredSpaces(data);
      });
  }, []);


  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = spaces.filter((space) => {
      const name = space.name;
      return (
        name &&
        name.toLowerCase().includes(query.toLowerCase()) ||
        space.price.toString().includes(query.toLowerCase())
      );
    });
    setFilteredSpaces(filtered);
  };
  
  

  const handleSort = (event) => {
    const option = event.target.value;
    setSortOption(option);
    const sorted = [...filteredSpaces].sort((a, b) => {
      if (option === "price") {
        return a[option] - b[option];
      } else {
        return a[option].localeCompare(b[option]);
      }
    });
    setFilteredSpaces(sorted);
  };

  useEffect(() => {
    fetch("https://leisure.onrender.com/reviews")
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
                setReviews={setReviews}
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
            element={<Spaces 
              handleSearch={handleSearch}
              handleSort={handleSort}
              searchQuery={searchQuery}
              sortOption={sortOption}
              filteredSpaces={filteredSpaces}
            />}
          />
          <Route path="/reserve" element={<Reserve
            spaces={spaces}
           />} />
          <Route path="/addspace" element={<AddSpace />} />
          <Route path="/createadmin" element={<CreateAdmin />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/agreement" element={<AgreementIncubator />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
