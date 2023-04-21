import React, { useState } from 'react';

const AddReviewForm = ({ onAddReview }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = { name, rating, text };
    onAddReview(newReview);
    setName('');
    setRating(0);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
      <textarea placeholder="Review" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <button type="submit">Submit Review</button>
    </form>
  );
};
export default AddReviewForm