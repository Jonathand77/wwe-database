import { royalRumbleEventDetails } from '../PleData/royalRumbleData';
import { eliminationChamberDetail } from '../PleData/eliminationChamberData';
import { wrestlemaniaDetail } from '../PleData/wrestlemaniaData';
import { clashAtTheCastleDetail } from '../PleData/clash';
import { moneyInTheBankDetail } from '../PleData/moneyInTheBank';

export const eventDetails = {
  ...royalRumbleEventDetails,
  'elimination-chamber': eliminationChamberDetail,
  wrestlemania: wrestlemaniaDetail,
  catc: clashAtTheCastleDetail,
  mitb: moneyInTheBankDetail,
};

export const getEventDetailById = (eventId) => eventDetails[eventId] || null;

export const hasEventDetail = (eventId) => Boolean(eventDetails[eventId]);
