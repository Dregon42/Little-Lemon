import React from 'react';
import { testimonials } from '../testData';
import { ReviewCard } from '../components/ReviewCard';

const Reviews = () => {
  return (
    <section>
      {
        testimonials.map((review) => (
          <ReviewCard review={review} />
        ))
      }
    </section>
  )
}

export default Reviews
