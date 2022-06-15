import React from 'react';
import { render, screen } from '@testing-library/react';
import EntryPage from './pages/EntryPage';

test('renders entry page screen', () => {
  render(<EntryPage />);
  const titleElement = screen.getByText(/Chewsy/i);
  expect(titleElement).toBeInTheDocument();
});
