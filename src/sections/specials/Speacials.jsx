import React from 'react';
import SpecialCard from '../../components/specialsCard/SpecialCard';
import { specials } from '../../testData.js';
import './Specials.css';

const Speacials = () => {
  return (
    <section className='specials-section'>
      <div className='specials-container'>
        <div className='special-text'>
          <h3>Weekly Specials</h3>
          <button type="button">On the Menu</button>
        </div>
        <div className='cards-container'>
          {
            specials.map((special) => (
                <SpecialCard special={special} key={special.name} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Speacials
