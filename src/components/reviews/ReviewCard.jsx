import React from 'react';
import './ReviewCard.css'

export const ReviewCard = ({review}) => {
  return (
    <div className='review-container'>
        <div className='top-section'>
            <img className='review-image' src={review.picture} alt={review.name} />
            <h4>{review.name}</h4>
        </div>
        <p className='comment'>{review.quote}</p>
    </div>
  )
}
