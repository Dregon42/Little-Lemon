import { expect, it, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { ReservationForm } from './ReservationForm.jsx';

describe('Reservation Form', () => {

  it('form renders', () => {
    render(<ReservationForm title={'Form'}/>)
    expect(screen.getByLabelText('Name*')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number*')).toBeInTheDocument();
    expect(screen.getByLabelText('Email*')).toBeInTheDocument();
    expect(screen.getByLabelText('Date*')).toBeInTheDocument();
    expect(screen.getByLabelText('Party')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  })
  
  

  it('displays error validations', async () => {
    render(<ReservationForm />);

    const user = userEvent.setup();

    const testPhone = '124567890';
    const testEmail = 'test2test.com'; 
    const testDate = '2025-01-20';
    const testParty = -1;

    const phoneInput = await screen.findByLabelText('Phone Number*');
    const emailInput = await screen.findByLabelText('Email*');
    const dateInput = await screen.findByLabelText('Date*');
    const partyInput = await screen.findByLabelText('Party');

    // test with name not being entered;
    await user.type(phoneInput, testPhone);
    await user.type(emailInput, testEmail);
    await user.type(dateInput, testDate);
    await user.type(partyInput, testParty.toString());

    // expect name not being entered
    expect(phoneInput).toHaveValue(testPhone);
    expect(emailInput).toHaveValue(testEmail);
    expect(dateInput).toHaveValue(testDate);
    expect(partyInput).toHaveValue(testParty);

    const button = screen.getByRole('button', { name: /reserve/i });
    await user.click(button);

    expect(screen.getByText('Must be valid email'));
    expect(screen.getByText('Name is required'));
    expect(screen.getAllByText('Must Book 1/27/2025 thru 2/12025'));
    expect(screen.getAllByText('Must be 10 digit phone number'));
    expect(screen.getAllByText('Should be positive number'));
  });

  it('form completed successfully', async () => {
    render(<ReservationForm />);

    const user = userEvent.setup();

    const testName = 'Rae Babineaux';
    const testPhone = '123-456-7890';
    const testEmail = 'test@test.com'; 
    const testDate = '2025-01-29';
    const testParty = 5;

    const nameInput = await screen.findByLabelText('Name*');
    const phoneInput = await screen.findByLabelText('Phone Number*');
    const emailInput = await screen.findByLabelText('Email*');
    const dateInput = await screen.findByLabelText('Date*');
    const partyInput = await screen.findByLabelText('Party');

    await user.type(nameInput, testName);
    await user.type(phoneInput, testPhone);
    await user.type(emailInput, testEmail);
    await user.type(dateInput, testDate);
    await user.type(partyInput, testParty.toString());

    expect(nameInput).toHaveValue(testName);
    expect(phoneInput).toHaveValue(testPhone);
    expect(emailInput).toHaveValue(testEmail);
    expect(dateInput).toHaveValue(testDate);
    expect(partyInput).toHaveValue(testParty);

    const button = screen.getByRole('button', { name: /reserve/i });
    await user.click(button);


  });
});
