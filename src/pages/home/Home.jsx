import React from 'react';
import Hero from '../../sections/hero/Hero';
import Speacials from '../../sections/specials/Speacials';
import Reviews from '../../sections/reviews/Reviews';
import Highlights from '../../sections/highlights/Highlights';
import Footer from '../../sections/footer/Footer';
import './Home.css'


export const Home = () => {
  return (
    <section className='home-page'>
      <Hero />
      <Speacials />
      <Reviews />
      <Highlights />
      <Footer />
    </section>
  )
}
