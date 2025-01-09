import React from 'react';

export const Navbar = () => {
  return (
    <nav>
        <img src={'src/assets/LL_Logo.jpg'} alt="" />
        <ul>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Reservation</a>
            </li>
            <li>
                <a href="#">Order Online</a>
            </li>
            <li>
                <a href="#">Login</a>
            </li>
        </ul>
    </nav>
  )
}
