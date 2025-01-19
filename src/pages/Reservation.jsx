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
          <img src="src/assets/entree.jpg" alt="" />
        </div>
    </section>
  )
}
