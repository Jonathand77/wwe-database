import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrandDetail } from './BrandDetail';

describe('BrandDetail', () => {
  test('renders the brand title, champions and calls onBack when the back button is clicked', () => {
    const onBack = jest.fn();
    render(<BrandDetail brandId="raw" onBack={onBack} />);

    expect(screen.getByRole('heading', { level: 2, name: /raw/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /champions/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /logo/i })).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /back to brands/i }));

    expect(onBack).toHaveBeenCalledTimes(1);
  });

  test('renders nothing for a brand id without a detail page', () => {
    const { container } = render(<BrandDetail brandId="does-not-exist" onBack={jest.fn()} />);

    expect(container).toBeEmptyDOMElement();
  });
});
