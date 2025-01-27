import {  it, test, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import { ReservationForm } from './ReservationForm.jsx';

describe('Reservation Form', () => {
  test('completed form', () => {
    render(<ReservationForm title={'Form'}/>)

    expect(screen.getByLabelText('Name*')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number*')).toBeInTheDocument();
    expect(screen.getByLabelText('Email*')).toBeInTheDocument();
    expect(screen.getByLabelText('Date*')).toBeInTheDocument();
    expect(screen.getByLabelText('Party')).toBeInTheDocument();
  })
})