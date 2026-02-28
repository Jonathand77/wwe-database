import { royalRumbleEventDetails } from './royalRumbleData';
import { eliminationChamberDetail } from './eliminationChamberData';

export const eventDetails = {
  ...royalRumbleEventDetails,
  'elimination-chamber': eliminationChamberDetail,
};

export const getEventDetailById = (eventId) => eventDetails[eventId] || null;

export const hasEventDetail = (eventId) => Boolean(eventDetails[eventId]);
