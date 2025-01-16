import React from 'react';
import Hero from '../sections/Hero';
import Speacials from '../sections/Speacials';
import Reviews from '../sections/Reviews';
import Highlights from '../sections/Highlights';
import Footer from '../sections/Footer';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Speacials />
      <Reviews />
      <Highlights />
      <Footer />
    </div>
  )
}
