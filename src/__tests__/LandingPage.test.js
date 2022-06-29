import React from "react";
import { render, screen } from '@testing-library/react';
import LandingPage from "../pages/LandingPage";

test("renders the create a group button", () => {
    render(<LandingPage />);
    const createAGroupButton = screen.getByText(/Create a Group/i);
    expect(createAGroupButton).toBeInTheDocument();
});

test("renders the join a group button", () => {
    render(<LandingPage />);
    const joinAGroupButton = screen.getByText(/Join a Group/i);
    expect(joinAGroupButton).toBeInTheDocument();
});

test("renders the more info button", () => {
    render(<LandingPage />);
    const moreInfoButton = screen.getByText(/More Info/i);
    expect(moreInfoButton).toBeInTheDocument();
});