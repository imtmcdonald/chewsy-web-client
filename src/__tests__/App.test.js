import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from "../App";

test("renders the header", () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const header = screen.getByText(/Chewsy/i);
    expect(header).toBeInTheDocument();
});

test("renders the tagline", () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const tagline = screen.getByText(/Let's Eat Together!/i);
    expect(tagline).toBeInTheDocument();
});

test("renders the landing page", () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const createAGroupButton = screen.getByText(/Create a Group/i);
    expect(createAGroupButton).toBeInTheDocument();

    const joinAGroupButton = screen.getByText(/Join a Group/i);
    expect(joinAGroupButton).toBeInTheDocument();

    const moreInfoButton = screen.getByText(/More Info/i);
    expect(moreInfoButton).toBeInTheDocument();
});