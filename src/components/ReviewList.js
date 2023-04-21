import React from 'react'
import ReviewItem from "./ReviewItem"

const ReviewList = ({reviews}) => {
  
  return (
    <div>
        <h2>Reviews</h2>
        {reviews.map((review)=>(
            <ReviewItem key={review.id} review={review}/>
        ))}
        <button>Add Review</button>
    </div>
  )
}

export default ReviewList