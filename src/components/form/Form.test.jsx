import { expect, it, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { ReservationForm } from './ReservationForm.jsx';

describe('Reservation Form', () => {
  it('displays error validations', async () => {
    render(<ReservationForm />);

    const user = userEvent.setup();

    const testName = 'Rae Babineaux';
    const testPhone = '123-456-7890';
    const testEmail = 'test2test.com'; // Invalid email
    const testDate = '2025-01-28';
    const testParty = 5;

    const nameInput = await screen.findByLabelText('Name*');
    const phoneInput = await screen.findByLabelText('Phone Number*');
    const emailInput = await screen.findByLabelText('Email*');
    const dateInput = await screen.findByLabelText('Date*');
    const partyInput = await screen.findByLabelText('Party');

    // await user.type(nameInput, testName);
    await user.type(phoneInput, testPhone);
    await user.type(emailInput, testEmail);
    await user.type(dateInput, testDate);
    await user.type(partyInput, testParty.toString());

    // expect(nameInput).toHaveValue(testName);
    expect(phoneInput).toHaveValue(testPhone);
    expect(emailInput).toHaveValue(testEmail);
    expect(dateInput).toHaveValue(testDate);
    expect(partyInput).toHaveValue(testParty);

    const button = screen.getByRole('button', { name: /reserve/i });
    await user.click(button);

    expect(screen.getByText('Must be valid email'));
    expect(screen.getByText('Your name is required'));
  });
});
