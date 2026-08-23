import { eventDetails, getEventDetailById, hasEventDetail } from './eventDetailsData';

describe('eventDetailsData', () => {
  test('hasEventDetail returns true for an event with registered detail', () => {
    expect(hasEventDetail('wrestlemania')).toBe(true);
  });

  test('hasEventDetail returns false for an unknown event id', () => {
    expect(hasEventDetail('backlash')).toBe(false);
    expect(hasEventDetail('does-not-exist')).toBe(false);
  });

  test('getEventDetailById returns the matching detail object', () => {
    expect(getEventDetailById('wrestlemania')).toBe(eventDetails.wrestlemania);
  });

  test('getEventDetailById returns null for an unknown event id', () => {
    expect(getEventDetailById('does-not-exist')).toBeNull();
  });
});
