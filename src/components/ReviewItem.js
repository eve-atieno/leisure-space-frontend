import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <div>
      <h3>{review.name}</h3>
      <p>Rating: {review.rating}</p>
      <p>{review.text}</p>
    </div>
  );
};

export default ReviewItem;