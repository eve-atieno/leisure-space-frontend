import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddReviewForm = ({ spaces, reviews, setReviews }) => {
  const [users, setUsers] = useState([]);

  const { id } = useParams();
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    fetch("hhttps://leisure.onrender.com")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const user_id = users.filter((user) => user.id === user.id);
  
  const [rating, setRating] = useState("");
  const [text, setText] = useState("");
  const [change, setOnChange] = useState(false);

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      rating: rating,
      comment: text,
      user_id: user.id,
      space_id: id,
    };
    console.log("review", review);

    fetch("https://leisure.onrender.com/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
// reviews that match the space id only
  const spaceReviews = reviews.filter((review) => review.space_id == id);
  console.log("spaceReviews", spaceReviews);

  return (
    <>
      <div className="flex flex-row justify-center ml-20 pl-10">
        <div className="flex-1">
          {/* Reviews List */}
          <div className="flex flex-col">
            <div className="text-center">
              <h3>Reviews</h3>
            </div>
            <div className="flex flex-row justify-around">
              <div className="flex flex-col">
                {spaceReviews.map((review) => (
                  <div
                    key={review.id}
                    className="border border-gray-200 rounded-lg p-2 mb-2"
                  >
                    <p className="text-lg font-medium">
                      Rating:{review.rating} stars
                    </p>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 ml-20 pl-20">
          {/* Add Review Form */}

          <div className="block max-w-sm  rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Add Review
            </h3>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="relative mb-6">
                <input
                  type="number"
                  className="peer block w-full px-3 py-2 text-gray-700 placeholder-transparent border-b-2 border-orange-600 focus:outline-none focus:border-orange-600"
                  id="exampleInput91"
                  placeholder="rating"
                  value={rating}
                  onChange={handleRating}
                  required
                />
                <label
                  htmlFor="exampleInput91"
                  className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2"
                >
                  Rating
                </label>
              </div>
              <div className="relative mb-6">
                <textarea
                  className="peer block w-full px-3 py-2 text-gray-700 placeholder-transparent border-b-2 border-orange-600 focus:outline-none focus:border-orange-600 resize-none"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Review"
                  value={text}
                  onChange={handleText}
                  required
                ></textarea>
                <label
                  htmlFor="exampleFormControlTextarea13"
                  className="absolute left-0 -top-3.5 text-gray-500 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2"
                >
                  Review
                </label>
              </div>
              <button
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                type="submit"
               
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReviewForm;
