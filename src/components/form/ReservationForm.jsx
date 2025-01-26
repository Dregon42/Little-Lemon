import React, { useState } from 'react';
import './ReservationForm.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ConfirmationModal from '../MUI/ConfirmationModal';
import { data } from 'react-router';

const schema = yup.object({
    fullName: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required().email(),
    // date: yup.date().required().min(new Date(2025, 0, 27)).max(new Date(2025, 1, 1).e),
    party: yup.number().positive().required(),
    occassion: yup.string().notRequired(),
    seating: yup.string().notRequired()
}).required()

let reservation;

export const ReservationForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({ resolver: yupResolver(schema)});


    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }; 

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data) => {

        reservation = data
        console.log(reservation)
    }

    

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='form-container'>
                <div>
                    <label htmlFor="fullName" autoFocus >Name*</label>
                    <input 
                        type="text" 
                        name='fullName'
                        id='fullName' 
                        aria-required="true" 
                        placeholder='Enter name'
                        {...register('fullName', { required: 'Your name is required' })}
                        aria-invalid={errors.fullName ? 'true' : 'false'}
                    />
                    {errors.fullName && <span role='alert'>{errors.fullName.message}</span>}
                </div>
                <div>
                    <label htmlFor="phone">Phone Number*</label>
                    <input 
                        type='text' 
                        id='phone' 
                        name='phone'
                        placeholder='Enter number'
                        {...register('phone', {
                            required: 'Phone number is required', 
                            minLength: 10
                        })}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                    />
                    <span role='alert'>{errors.phone?.message}</span>
                </div>
            </div>
            <div className='form-container'>
                <div>
                    <label htmlFor="email">Email*</label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email'
                        aria-required="true" 
                        placeholder='Enter email'
                        {...register('email', { required: 'Email Required',
                            pattern: {
                                value:  /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
                                message: 'Invalid email'
                            }

                        })}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    <span role='alert'>{errors.email?.message}</span>
                </div>
                <div>
                    <label htmlFor="date">Date*</label>
                    <input 
                        type='date' 
                        id='date' 
                        name='date'
                        aria-required="true" 
                        placeholder='MM/DD/YYYY'
                        {...register('date', {
                            required: 'Required',
                            validate: {
                                inRange: (day) => {
                                    const selectedDate = new Date(day);
                                    const minDate = new Date("01-27-2025");
                                    const maxDate = new Date("02-01-2025");
                                    return selectedDate >= minDate && selectedDate <= maxDate || 
                                        'Date must be between 2025-01-27 and 2025-02-01';
                                }
                            }
                            
                        })}
                        aria-invalid={errors.date ? 'true' : 'false'}
                    />
                    <span role='alert'>{errors.date?.message}</span>
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
                        {...register('occassion')}
                    >
                        <option value="" disabled></option>
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
                        <option value="" disabled></option>
                        <option value="Patio">Patio</option>
                        <option value="Interior">Interior</option>
                    </select>
                </div>
            </div>
            <button type='submit' className='submitButton'>
                Reserve
            </button>
            {/* <ConfirmationModal reservation={reservation}  open={open} handleOpen={handleOpen} handleClose={handleClose} /> */}
        </form>
    )
};
