import React from 'react';
import './ReviewCard.css';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

export const ReviewCard = ({review}) => {
  return (
    <div className='review-container'>
      <img className='review-image' src={review.picture} alt={review.name} />
      <div className='review-content'>
        <h4>{review.name}</h4>
        <span>
          {review.rating.map((ratingPoint, index) => 
            <FontAwesomeIcon 
            key={index} 
            icon={ratingLevels[ratingPoint]} 
            size="xs" 
            />
          )}
        </span>
        <p className='comment'>{review.quote}</p>
      </div>
    </div>
  )
}
