import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../../component/Counter';

describe('<Counter/>', () => {
  it('renders the needed button when loading', () => {
    render(<Counter />);
    expect(screen.getByRole('button', { name: /Increase/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Decrease/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reset/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /set Count/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Save Count/i })).toBeInTheDocument();
    expect(screen.getByText('You clicked 0 times')).toBeTruthy();
  });

  it('adapt counter when action buttons are clicked', () => {
    render(<Counter />);
    expect(screen.getByText('You clicked 0 times')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /Increase/i }));
    fireEvent.click(screen.getByRole('button', { name: /Increase/i }));
    fireEvent.click(screen.getByRole('button', { name: /Increase/i }));
    fireEvent.click(screen.getByRole('button', { name: /Increase/i }));
    expect(screen.getByText('You clicked 4 times')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /Decrease/i }));
    fireEvent.click(screen.getByRole('button', { name: /Decrease/i }));
    expect(screen.getByText('You clicked 2 times')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /Reset/i }));
    expect(screen.getByText('You clicked 0 times')).toBeTruthy();
  });

  it('show saved counter in list when action buttons are clicked', () => {
    render(<Counter />);
    expect(screen.getByText('You clicked 0 times')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /Increase/i }));
    fireEvent.click(screen.getByRole('button', { name: /Increase/i }));
    expect(screen.getByText('You clicked 2 times')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /Save Count/i }));
    expect(screen.getByText('Counter 1: 2')).toBeTruthy();
  });
});
