import { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {

        if (window.innerWidth <= 496) {
            setMenuOpen(false); 
            setIsMobile(true);
        } else {
            setIsMobile(false)
            setMenuOpen(true)
        }



    },[])
    


    

    return (
        <nav>
            
            <Link to={'/'} className='logo-container'>
                <img className='logo' src='src/assets/LL_Logo.jpg' alt="Little Lemon Logo" />
            </Link>

            {
               isMobile == true ? (
                    <button className='menu-button' onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                    </button>

                ) : null
            }

           
        

            {
               menuOpen  && (
                    <ul className='nav-list'>
                        <li className='nav-item' >
                            <Link className='item' to="#">About</Link>
                        </li>
                        <li className='nav-item' >
                            <Link className='item' to="/reservation">Reservation</Link>
                        </li>
                        <li className='nav-item' >
                            <Link className='item' to="#">Order Online</Link>
                        </li>
                        <li className='nav-item' >
                            <Link className='item' to="#">Login</Link>
                        </li>
                    </ul>

                ) 
            }
        </nav>
    )
}
