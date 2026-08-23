import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Events } from './Events';

jest.mock('react-multi-carousel', () => ({ children }) => <div>{children}</div>);

describe('Events', () => {
  test('calls onSelectEvent when clicking an event that has a detail page', () => {
    const onSelectEvent = jest.fn();
    render(<Events onSelectEvent={onSelectEvent} />);

    userEvent.click(screen.getByRole('button', { name: /open wrestlemania details/i }));

    expect(onSelectEvent).toHaveBeenCalledWith('wrestlemania');
  });

  test('does not call onSelectEvent for an event without a detail page', () => {
    const onSelectEvent = jest.fn();
    render(<Events onSelectEvent={onSelectEvent} />);

    const backlashButton = screen.getByRole('button', { name: /open backlash details/i });
    expect(backlashButton).toBeDisabled();

    userEvent.click(backlashButton);

    expect(onSelectEvent).not.toHaveBeenCalled();
  });
});
