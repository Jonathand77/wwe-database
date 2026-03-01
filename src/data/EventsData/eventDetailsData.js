import { royalRumbleEventDetails } from '../PleData/royalRumbleData';
import { eliminationChamberDetail } from '../PleData/eliminationChamberData';
import { wrestlemaniaDetail } from '../PleData/wrestlemaniaData';

export const eventDetails = {
  ...royalRumbleEventDetails,
  'elimination-chamber': eliminationChamberDetail,
  wrestlemania: wrestlemaniaDetail,
};

export const getEventDetailById = (eventId) => eventDetails[eventId] || null;

export const hasEventDetail = (eventId) => Boolean(eventDetails[eventId]);
