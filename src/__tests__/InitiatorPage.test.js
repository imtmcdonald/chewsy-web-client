import React from "react";
import { render, screen } from '@testing-library/react';
import InitiatorPage from "../pages/InitiatorPage";
import { MemoryRouter } from 'react-router-dom';

test("renders the initiator page tagline", () => {
    render(
        <MemoryRouter initialEntries={[
            {
                state: {
                    location: "01001",
                    radius: "5",
                    duration: "3",
                },
            }
        ]}>
            <InitiatorPage />
        </MemoryRouter>
    );
    const initiatorPageTagline = screen.getByText(/Initiating Your Group!/i);
    expect(initiatorPageTagline).toBeInTheDocument();
});
