import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";



const AddReviewForm = ({spaces, reviews}) => {
  const [users, setUsers] = useState([]);

  const {id} = useParams();
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    fetch('http://127.0.0.1:3000/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
            });
  }, []);


//show the user id that is equal to users id
  const user_id = users.filter((user) => user.id === user.id)
  console.log("user_id", user_id)

  console.log("user",user_id.profile_id)

// post a review
  // const [name, setName] = useState('')
  const [rating, setRating] = useState('')
  const [text, setText] = useState('')

  const handleRating = (e) => {
    setRating(e.target.value)
  }

  const handleText = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const review = {
      rating: rating,
       comment: text,
        profile_id: 1,
       space_id: 1
      }
    console.log(review)
    fetch('http://127.0.0.1:3000/reviews', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review)
    }).then(() => {
      console.log(review)
    })
  }







  return (

<>
<div className="flex flex-col">
<div className="text-center">
      <h3>Reviews</h3>
      </div>
< div className ="flex flex-row justify-around" >
 
<div className="flex flex-col">
{reviews.map((review) => (
  <div key={review.id}>
    <p>Rating: {review.rating}</p>
    <p>Comment:{review.comment}</p>
  </div>
))}
</div>

 <div class="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Add Review</h3>

  <form onSubmit={handleSubmit}>
    <div class="relative mb-6" data-te-input-wrapper-init>
      <input
        type="number"
        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInput91"
        placeholder="rating"
        value={rating}
        onChange={handleRating}
          />
      <label
        for="exampleInput91"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >rating
      </label>
    </div>
    <div class="relative mb-6" data-te-input-wrapper-init>
      <textarea
        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlTextarea13"
        rows="3"
        placeholder="Review"
        value={text} 
        onChange={handleText}
        ></textarea>
      <label
        for="exampleFormControlTextarea13"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Review 
      </label>
    </div>
   
  
    <button
    className="bg-orange-400 hover:bg-primary-dark text-white font-bold py-2 px-4 rounded" 
      type="submit"
      data-te-ripple-init
      data-te-ripple-color="light">
      Submit
    </button>
  
  </form>


    
    </div>
    </div>
    </div>
    </>
  )
}

export default AddReviewForm