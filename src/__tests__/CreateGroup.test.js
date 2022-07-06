import React from "react";
import { render, screen } from '@testing-library/react';
import CreateGroup from "../pages/CreateGroup";
import { BrowserRouter } from 'react-router-dom';

test("renders the create a group tagline", () => {
    render(<BrowserRouter><CreateGroup /></BrowserRouter>);
    const createAGroupTagline = screen.getByText(/Create a Group/i);
    expect(createAGroupTagline).toBeInTheDocument();
});

test("renders the go back button", () => {
    render(<BrowserRouter><CreateGroup /></BrowserRouter>);
    const goBackButton = screen.getByText(/Go Back/i);
    expect(goBackButton).toBeInTheDocument();
});

test("renders the create group button", () => {
    render(<BrowserRouter><CreateGroup /></BrowserRouter>);
    const createGroupButton = screen.getByText(/Create Group/i);
    expect(createGroupButton).toBeInTheDocument();
});

test("renders the email address form", () => {
    render(<BrowserRouter><CreateGroup /></BrowserRouter>);
    const emailAddressLabel = screen.getByText(/Email address:/i);
    expect(emailAddressLabel).toBeInTheDocument();
});

test("renders the location form", () => {
    render(<BrowserRouter><CreateGroup /></BrowserRouter>);
    const locationLabel = screen.getByText(/Location:/i);
    expect(locationLabel).toBeInTheDocument();
});

test("renders the radius form", () => {
    render(<BrowserRouter><CreateGroup /></BrowserRouter>);
    const radiusLabel = screen.getByText(/Radius \(miles\):/i);
    expect(radiusLabel).toBeInTheDocument();
});

test("renders the duration form", () => {
    render(<BrowserRouter><CreateGroup /></BrowserRouter>);
    const durationLabel = screen.getByText(/Duration \(days\):/i);
    expect(durationLabel).toBeInTheDocument();
});