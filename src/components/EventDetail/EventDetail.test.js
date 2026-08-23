import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EventDetail } from './EventDetail';

describe('EventDetail', () => {
  test('renders the event title and calls onBack when the back button is clicked', () => {
    const onBack = jest.fn();
    render(<EventDetail eventId="wrestlemania" onBack={onBack} />);

    expect(screen.getByRole('heading', { level: 2, name: /wrestlemania/i })).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /back to events/i }));

    expect(onBack).toHaveBeenCalledTimes(1);
  });

  test('renders nothing for an event id without a detail page', () => {
    const { container } = render(<EventDetail eventId="does-not-exist" onBack={jest.fn()} />);

    expect(container).toBeEmptyDOMElement();
  });
});
