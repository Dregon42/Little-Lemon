import React from 'react';
import './R'

export const ReviewCard = ({review}) => {
  return (
    <div className='review-container'>
        <div className='top-section'>
            <img src={review.picture} alt={review.name} />
            <h4>{review.name}</h4>
        </div>
        <p>{review.quote}</p>
    </div>
  )
}
