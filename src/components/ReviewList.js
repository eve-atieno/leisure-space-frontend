import React from 'react'
import ReviewItem from "./ReviewItem"

const ReviewList = ({reviews}) => {
  
  return (
    <div>
      
        {reviews.map((review)=>(
            <ReviewItem key={review.id} review={review}/>
        ))}
      
    </div>
  )
}

export default ReviewList