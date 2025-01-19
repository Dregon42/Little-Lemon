import React from 'react';
import './ReservationForm.css'

export const ReservationForm = () => {
  return (
    <form>
        <div className='form-container'>
            <div>
                <label htmlFor="name" autoFocus >Name *</label>
                <input type="text" id='name' required placeholder='Enter name'/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type='number' id='phone' required minLength={10} placeholder='Enter number'/>
            </div>
        </div>
        <div className='form-container'>
            <div>
                <label htmlFor="email">Email *</label>
                <input type="text" id='email' required placeholder='Enter email'/>
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input type='date' id='date' required placeholder='MM/DD/YYYY'/>
            </div>
        </div>
        <div className='form-container'>
            <div>
                <select id='occasion' defaultValue={'Occasion'} >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                </select>
            </div>
            <div>
                <select id='seating' name='Seating' defaultValue={'Seating'} >
                    <option value="Patio">Patio</option>
                    <option value="Interior">Interior</option>
                </select>
            </div>
        </div>
    </form>
  )
}
