import React from 'react';
import SpecialCard from '../components/SpecialCard';
import { specials } from '../testData';
import './Specials.css';

const Speacials = () => {
  return (
    <section className='specials-section'>
    
      {
        specials.map((special) => (
          <SpecialCard special={special} />
        ))
      }
    
    </section>
  )
}

export default Speacials
