import React from 'react';
import './SpecialCard.css'

const SpecialCard = ({special}) => {
  return (
    <figure key={special.name} className="special-card">
      <img className='special-image' src={special.image} alt={special.name} />
      <div className='special-content'>
        <figcaption className="special-details">
          <div className='dish-header'>
            <h3 className='special-name'>{special.name}</h3>
            <p className="special-price">{special.price}</p>
          </div>
          <p className='special-description'>{special.description}</p>
        </figcaption>
        <div className='delivery-button'>
          <p>Order a Delivery</p>
          <img className='delivery-icon' src="src/assets/delivery.png" alt="Delivery Truck" />
        </div>
      </div>
    </figure>
  )  
}

export default SpecialCard;
