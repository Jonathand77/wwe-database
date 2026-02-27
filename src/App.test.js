import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar home link', () => {
  render(<App />);
  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument();
});
