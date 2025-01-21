import React, { useState } from 'react';
import './ReservationForm.css';
import { useForm } from 'react-hook-form';

export const ReservationForm = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-container'>
                <div>
                    <label htmlFor="fullName" autoFocus >Name *</label>
                    <input 
                        type="text" 
                        name='fullName'
                        id='fullName' 
                        aria-required="true" 
                        placeholder='Enter name'
                        {...register('fullName', { required: 'This field required' })}
                        aria-invalid={errors.fullName ? 'true' : 'false'}
                    />
                    {errors.fullName && <span role='alert'>{errors.fullName.message}</span>}
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type='text' 
                        id='phone' 
                        name='phone'
                        placeholder='Enter number'
                        {...register('phone', {required: 'This field required', minLength: 10})}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                    />
                    {errors.phone && <span role='alert'>{errors.phone.message}</span>}
                </div>
            </div>
            <div className='form-container'>
                <div>
                    <label htmlFor="email">Email *</label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email'
                        aria-required="true" 
                        placeholder='Enter email'
                        {...register('email', { required: 'This field required'})}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && <span role='alert'>{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input 
                        type='date' 
                        id='date' 
                        name='date'
                        aria-required="true" 
                        placeholder='MM/DD/YYYY'
                        {...register('date', {required: 'Required'})}
                        aria-invalid
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
                        {...register('party', { required: 'This field is required',min: 2, max: 10})}
                        aria-invalid={errors.party ? 'true' : 'false'}
                    />
                    {errors.party && <span role='alert'>{errors.party.message}</span>}
                </div>
            </div>
            <div className='form-container'>
                <div>
                    <label htmlFor="occassion">Occassion</label>
                    <select 
                        id='occassion' 
                        name='occassion' 
                        {...register('occassion', { required: 'Required', })}
                    >
                        <option value="" disabled selected></option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Birthday">Birthday</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="seating">Seating</label>
                    <select 
                        id='seating' 
                        name='seating' 
                        {...register('seating')}
                    >
                        <option value="" disabled selected></option>
                        <option value="Patio">Patio</option>
                        <option value="Interior">Interior</option>
                    </select>
                </div>
            </div>
            <input type="submit" />
        </form>
    )
}
