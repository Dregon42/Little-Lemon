import React from 'react'
import { ReservationForm } from '../components/ReservationForm';
import './Reservation.css';

export const Reservation = () => {
  return (
    <section className='reservation-container'>
        <div>
          <ReservationForm />
        </div>
        <div>
          <div className='reserve-heading'>
            <h1 className='main-heading'>Book Now!</h1>
            <p className='sub-heading'>4 Star Experience</p>
          </div>
          <img src="src/assets/entree.jpg" alt="" />
        </div>
    </section>
  )
}
