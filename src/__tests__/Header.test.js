import React from "react";
import { render, screen } from '@testing-library/react';
import Header from "../components/Header";

test("renders the header", () => {
    render(<Header />);
    const header = screen.getByText(/Chewsy/i);
    expect(header).toBeInTheDocument();
});