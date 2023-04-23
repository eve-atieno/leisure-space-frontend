import React from 'react';

const ReviewDetails = ({ review }) => {
  return (
    <div>
      <h2>{review.name}</h2>
      <p>Rating: {review.rating}</p>
      <p>{review.text}</p>
    </div>
  );
};

export default ReviewDetails;