import { render, screen } from '@testing-library/react';
import Counter from '../../component/Counter';

describe('<Counter/>', () => {
  xit('renders the needed button when loading', () => {
    render(<Counter />);
    expect(screen.getByText('You clicked 0 times')).toBeTruthy();
  });
});
