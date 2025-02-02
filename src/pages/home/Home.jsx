import React from 'react';
import Hero from '../../sections/hero/Hero';
import Speacials from '../../sections/Speacials';
import Reviews from '../../sections/Reviews';
import Highlights from '../../sections/Highlights';
import Footer from '../../sections/Footer';
import './Home.css'


export const Home = () => {
  return (
    <section className='home-page'>
      <Hero />
      <Speacials />
      <Reviews />
      {/* <Highlights />
      <Footer /> */}
    </section>
  )
}
