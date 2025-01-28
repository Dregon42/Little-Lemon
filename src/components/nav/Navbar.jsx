import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    

  return (
    <nav>
        
        <Link to={'/'} className='logo-container'>
            <img className='logo' src='src/assets/LL_Logo.jpg' alt="Little Lemon Logo" />
        </Link>

        <button className='menu-button' onClick={() => setMenuOpen(!menuOpen)}>
            {
                !menuOpen ?
                (

                    <FontAwesomeIcon icon={faBars} />
                )
                :
                (
                    <FontAwesomeIcon icon={faXmark}/>
                )
            }
        </button>
        {
            menuOpen ? (
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

            ) 
            :
            null
        }
    </nav>
  )
}
