import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const heading = screen.getByText(/Eric Koch - Cybersecurity Portfolio/i);
  expect(heading).toBeInTheDocument();
});
