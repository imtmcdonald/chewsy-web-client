import React from "react";
import { render, screen } from '@testing-library/react';
import AddAttendees from "../pages/AddAttendees";
import { MemoryRouter } from 'react-router-dom';

test("renders the add attendees page tagline", () => {
    render(
        <MemoryRouter initialEntries={['addattendees/1']}>
            <AddAttendees />
        </MemoryRouter>
    );
    const addAttendeesPageTagline = screen.getByText(/Add Attendees/i);
    expect(addAttendeesPageTagline).toBeInTheDocument();
});

test("renders the go back button", () => {
    render(
        <MemoryRouter initialEntries={['addattendees/1']}>
            <AddAttendees />
        </MemoryRouter>
    );
    const goBackButton = screen.getByRole('button', { name: /back/i })
    expect(goBackButton).toBeInTheDocument();
});

test("renders the invite attendees button", () => {
    render(
        <MemoryRouter initialEntries={['addattendees/1']}>
            <AddAttendees />
        </MemoryRouter>
    );
    const inviteAttendeesButton = screen.getByRole('button', { name: /invite/i })
    expect(inviteAttendeesButton).toBeInTheDocument();
});

test("renders the add attendee button", () => {
    render(
        <MemoryRouter initialEntries={['addattendees/1']}>
            <AddAttendees />
        </MemoryRouter>
    );
    const addAttendeeButton = screen.getByRole('button', { name: /add/i })
    expect(addAttendeeButton).toBeInTheDocument();
});

test("renders the skip button", () => {
    render(
        <MemoryRouter initialEntries={['addattendees/1']}>
            <AddAttendees />
        </MemoryRouter>
    );
    const skipButton = screen.getByRole('button', { name: /skip/i })
    expect(skipButton).toBeInTheDocument();
});

test("renders the email address form", () => {
    render(
        <MemoryRouter initialEntries={['addattendees/1']}>
            <AddAttendees />
        </MemoryRouter>
    );
    const emailAddressLabel = screen.getByText(/Email address:/i);
    expect(emailAddressLabel).toBeInTheDocument();
});

test("renders the name form", () => {
    render(
        <MemoryRouter initialEntries={['addattendees/1']}>
            <AddAttendees />
        </MemoryRouter>
    );
    const nameLabel = screen.getByText(/Name:/i);
    expect(nameLabel).toBeInTheDocument();
});
