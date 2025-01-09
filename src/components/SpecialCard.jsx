import React from 'react';


const SpecialCard = ({special}) => {
  return (
    <figure key={special.name} className="special-card">
      <img src={special.image} alt={special.name} />
      <figcaption className="special-details">
        <div>
          <h3 className='special-name'>{special.name}</h3>
          <p className="special-price">{special.price}</p>
        </div>
        <p className='special-description'>{special.description}</p>
      </figcaption>
    </figure>
  )  
}

export default SpecialCard;
