import { render, screen } from '@testing-library/react';
import Counter from "../../component/Counter";

test('renders the needed button when loading', () => {
  render(<Counter />);
  expect(screen.getByRole('button', { name: /Increase/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Decrease/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Reset/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /set Count/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Save Count/i })).toBeInTheDocument();
});
