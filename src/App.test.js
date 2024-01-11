import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the counter component when loading the app', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /Increase/i })).toBeInTheDocument();
});
