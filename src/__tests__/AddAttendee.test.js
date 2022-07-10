import React from "react";
import { render, screen } from '@testing-library/react';
import AddAttendees from "../pages/AddAttendees";
import { MemoryRouter } from 'react-router-dom';

test("renders the add attendees page tagline", () => {
    const email = "test@email.com";
    const session = "1";
    render(
        <MemoryRouter initialEntries={[
            '/',
            {
                pathname: `/addattendees/${session}`,
                state: {
                    initiator: email,
                },
            }
        ]}>
            <AddAttendees />
        </MemoryRouter>
    );
    const addAttendeesPageTagline = screen.getByText(/Add Attendees/i);
    expect(addAttendeesPageTagline).toBeInTheDocument();
});

test("renders the go back button", () => {
    const email = "test@email.com";
    const session = "1";
    render(
        <MemoryRouter initialEntries={[
            '/',
            {
                pathname: `/addattendees/${session}`,
                state: {
                    initiator: email,
                },
            }
        ]}>
            <AddAttendees />
        </MemoryRouter>
    );
    const goBackButton = screen.getByRole('button', { name: /back/i })
    expect(goBackButton).toBeInTheDocument();
});

test("renders the invite attendees button", () => {
    const email = "test@email.com";
    const session = "1";
    render(
        <MemoryRouter initialEntries={[
            '/',
            {
                pathname: `/addattendees/${session}`,
                state: {
                    initiator: email,
                },
            }
        ]}>
            <AddAttendees />
        </MemoryRouter>
    );
    const inviteAttendeesButton = screen.getByRole('button', { name: /invite/i })
    expect(inviteAttendeesButton).toBeInTheDocument();
});

test("renders the add attendee button", () => {
    const email = "test@email.com";
    const session = "1";
    render(
        <MemoryRouter initialEntries={[
            '/',
            {
                pathname: `/addattendees/${session}`,
                state: {
                    initiator: email,
                },
            }
        ]}>
            <AddAttendees />
        </MemoryRouter>
    );
    const addAttendeeButton = screen.getByRole('button', { name: /add/i })
    expect(addAttendeeButton).toBeInTheDocument();
});

test("renders the skip button", () => {
    const email = "test@email.com";
    const session = "1";
    render(
        <MemoryRouter initialEntries={[
            '/',
            {
                pathname: `/addattendees/${session}`,
                state: {
                    initiator: email,
                },
            }
        ]}>
            <AddAttendees />
        </MemoryRouter>
    );
    const skipButton = screen.getByRole('button', { name: /skip/i })
    expect(skipButton).toBeInTheDocument();
});

test("renders the email address form", () => {
    const email = "test@email.com";
    const session = "1";
    render(
        <MemoryRouter initialEntries={[
            '/',
            {
                pathname: `/addattendees/${session}`,
                state: {
                    initiator: email,
                },
            }
        ]}>
            <AddAttendees />
        </MemoryRouter>
    );
    const emailAddressLabel = screen.getByText(/Email address:/i);
    expect(emailAddressLabel).toBeInTheDocument();
});

test("renders the name form", () => {
    const email = "test@email.com";
    const session = "1";
    render(
        <MemoryRouter initialEntries={[
            '/',
            {
                pathname: `/addattendees/${session}`,
                state: {
                    initiator: email,
                },
            }
        ]}>
            <AddAttendees />
        </MemoryRouter>
    );
    const nameLabel = screen.getByText(/Name:/i);
    expect(nameLabel).toBeInTheDocument();
});
