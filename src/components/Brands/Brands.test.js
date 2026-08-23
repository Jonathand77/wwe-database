import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Brands } from './Brands';

jest.mock('react-multi-carousel', () => ({ children }) => <div>{children}</div>);

describe('Brands', () => {
  test('calls onSelectBrand when clicking a brand', () => {
    const onSelectBrand = jest.fn();
    render(<Brands onSelectBrand={onSelectBrand} />);

    userEvent.click(screen.getByRole('button', { name: /open raw details/i }));

    expect(onSelectBrand).toHaveBeenCalledWith('raw');
  });
});
