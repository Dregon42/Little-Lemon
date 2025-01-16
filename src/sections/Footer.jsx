import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='col-one'>
        <div className='footer-imageContainer'>
          <img src="src/assets/LL_Logo.jpg" alt="" className='footer-image' />
        </div>
      </div>
      <div className='col-two'>
        <h4>Links</h4>
        <ul className='footer-list'>
            <li className='footer-item' >
                <a href="#">Home</a>
            </li>
            <li className='footer-item' >
                <a href="#">About</a>
            </li>
            <li className='footer-item' >
                <a href="#">Reservation</a>
            </li>
            <li className='footer-item' >
                <a href="#">Order Online</a>
            </li>
            <li className='footer-item' >
                <a href="#">Login</a>
            </li>
        </ul>
      </div>
      <div className='col-three'>
        <h4>Contact</h4>
        <div>

        </div>
        <div>
          <p>Address</p>
          <p>1243 Main Street, Underland, MI 89456</p>
        </div>
      </div>
      <div className='col-four'>
        <h4>Follow Us</h4>  
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
      </div>
    </div>
  );
};

export default Footer;
