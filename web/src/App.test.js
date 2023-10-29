import { render, screen } from '@testing-library/react';
import App from './App';

test('renders generate workout link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Generate a workout!/i);
  expect(linkElement).toBeInTheDocument();
});
