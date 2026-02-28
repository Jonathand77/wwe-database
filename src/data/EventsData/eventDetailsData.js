import { royalRumbleEventDetails } from '../PleData/royalRumbleData';
import { eliminationChamberDetail } from '../PleData/eliminationChamberData';

export const eventDetails = {
  ...royalRumbleEventDetails,
  'elimination-chamber': eliminationChamberDetail,
};

export const getEventDetailById = (eventId) => eventDetails[eventId] || null;

export const hasEventDetail = (eventId) => Boolean(eventDetails[eventId]);
