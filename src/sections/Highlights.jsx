import React from 'react';
import './Highlights.css';

const Highlights = () => {
  return (
    <section className='highlights-container'>
      <div className='highlights-textContainer'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p className='highlight-subtext'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Nobis consequuntur atque ducimus sint qui aspernatur nostrum reprehenderit, 
            omnis ipsa veritatis id? Quisquam, cupiditate ullam.
        </p>
      </div>
      <div className='box'></div>
      <div className='highlightImage-container'>
        <div className='circle'></div>
        <img className='highlight-image' src="src/assets/Grilled_Fish.jpg" alt="Grilled Fish" />
      </div>
    </section>
  )
}

export default Highlights
