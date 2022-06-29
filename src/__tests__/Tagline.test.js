import React from "react";
import { render, screen } from '@testing-library/react';
import Tagline from "../components/Tagline";

test("renders the Tagline", () => {
    render(<Tagline />);
    const tagline = screen.getByText(/Let's Eat Together!/i);
    expect(tagline).toBeInTheDocument();
});