import React from 'react'
import ReviewItem from "./ReviewItem"

const ReviewList = ({reviews,setReviews}) => {
  
  return (
    <div>
      
        {reviews.map((review)=>(
            <ReviewItem key={review.id} review={review} setReviews={setReviews}/>
        ))}
      
    </div>
  )
}

export default ReviewList