import React from 'react';
import './Hero.css';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className='hero-section' >
      <div className='hero-textContainer'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p className='hero-subtext'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Nobis consequuntur atque ducimus sint qui aspernatur nostrum reprehenderit, 
            omnis ipsa veritatis id? Quisquam, cupiditate ullam.
        </p>
        <button  type="button">
          <Link to={'/reservation'}>
            Reserve a Table
          </Link>
        </button>
      </div>
      <div className='image-container'>
        <img className='hero-image' src="src/assets/Grilled_Fish.jpg" alt="Image of fish being grilled" />
      </div>
    </section>
  )
}

export default Hero
