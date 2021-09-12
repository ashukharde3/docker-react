import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hello world text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World from the updated version!/i);
  expect(linkElement).toBeInTheDocument();
});
