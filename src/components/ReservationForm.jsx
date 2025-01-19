import React, { useState } from 'react';
import './ReservationForm.css'

export const ReservationForm = () => {
    const [data, setData] = useState({
        fullName:'',
        phone: '',
        email:'',
        date: '',
        occasion: '',
        seating: '',
        party: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
                <div>
                    <label htmlFor="fullName" autoFocus >Name *</label>
                    <input 
                        type="text" 
                        name='fullName'
                        id='fullName' 
                        required 
                        aria-required="true" 
                        placeholder='Enter name'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type='text' 
                        id='phone' 
                        name='phone'
                        required 
                        aria-required="true" 
                        minLength={10} 
                        maxLength={10} 
                        placeholder='Enter number'
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='form-container'>
                <div>
                    <label htmlFor="email">Email *</label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email'
                        required 
                        aria-required="true" 
                        placeholder='Enter email'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input 
                        type='date' 
                        id='date' 
                        name='date'
                        required 
                        aria-required="true" 
                        placeholder='MM/DD/YYYY'
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='form-container'>
                <div>
                    <label htmlFor="party">Party</label>
                    <input 
                        type='number' 
                        id='party' 
                        name='party'
                        required 
                        aria-required="true" 
                        min={2} 
                        max={8}
                        onChange={handleChange} 
                    />
                </div>
            </div>
            <div className='form-container'>
                <div>
                    <select 
                        id='occasion' 
                        name='occasion' 
                        onChange={handleChange}
                    >
                        <option value="Occasion" disabled selected></option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                    </select>
                </div>
                <div>
                    <select id='seating' name='seating' onChange={handleChange}>
                        <option value="" disabled selected>Seating</option>
                        <option value="Patio">Patio</option>
                        <option value="Interior">Interior</option>
                    </select>
                </div>
            </div>
            <button type='submit'>Reserve A Table</button>
        </form>
    )
}
