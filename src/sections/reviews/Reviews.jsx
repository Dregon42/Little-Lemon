import React from 'react';
import { testimonials } from '../../testData';
import { ReviewCard } from '../../components/reviews/ReviewCard';
import './Reviews.css';

const Reviews = () => {
  return (
    <section className='reviews-section'>
      {
        testimonials.map((review) => (
          <ReviewCard review={review} key={review.name} />
        ))
      }
    </section>
  )
}

export default Reviews
