import React from 'react';
import './Navbar.css';
import { Link } from 'react-router';


export const Navbar = () => {
  return (
    <nav>
        <div>
            <Link to={'/'}>
                <img className='logo' src='src/assets/LL_Logo.jpg' alt="Little Lemon Logo" />
            </Link>
        </div>
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
