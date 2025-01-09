import React from 'react';
import { testimonials } from '../testData';
import { ReviewCard } from '../components/ReviewCard';
import './Reviews.css';

const Reviews = () => {
  return (
    <section className='reviews-section'>
      {
        testimonials.map((review) => (
          <ReviewCard review={review} />
        ))
      }
    </section>
  )
}

export default Reviews
