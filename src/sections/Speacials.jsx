import React from 'react'
import SpecialCard from '../components/SpecialCard';
import { specials } from '../testData';

const Speacials = () => {
  return (
    <section>
    
      {
        specials.map((special) => (
          <SpecialCard special={special} />
        ))
      }
    
    </section>
  )
}

export default Speacials
