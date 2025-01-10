import React from 'react';
import './Navbar.css';


export const Navbar = () => {
  return (
    <nav>
        <img className='logo' src='src/assets/LL_Logo.jpg' alt="Little Lemon Logo" />
        <ul className='nav-list'>
            <li className='nav-item' >
                <a href="#">About</a>
            </li>
            <li className='nav-item' >
                <a href="#">Reservation</a>
            </li>
            <li className='nav-item' >
                <a href="#">Order Online</a>
            </li>
            <li className='nav-item' >
                <a href="#">Login</a>
            </li>
        </ul>
    </nav>
  )
}
