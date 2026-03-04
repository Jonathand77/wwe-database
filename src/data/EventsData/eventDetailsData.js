import { royalRumbleEventDetails } from '../PleData/royalRumbleData';
import { eliminationChamberDetail } from '../PleData/eliminationChamberData';
import { wrestlemaniaDetail } from '../PleData/wrestlemaniaData';
import { clashAtTheCastleDetail } from '../PleData/clashData';
import { moneyInTheBankDetail } from '../PleData/moneyInTheBank';
import { summerSlamDetail } from '../PleData/summerSlamData';
import { crownJewelDetail } from '../PleData/crownJewelData';
import { survivorSeriesDetail } from '../PleData/survivorSeriesData';

export const eventDetails = {
  ...royalRumbleEventDetails,
  'elimination-chamber': eliminationChamberDetail,
  wrestlemania: wrestlemaniaDetail,
  catc: clashAtTheCastleDetail,
  mitb: moneyInTheBankDetail,
  summerslam: summerSlamDetail,
  'crown-jewel': crownJewelDetail,
  'survivor-series': survivorSeriesDetail,
};

export const getEventDetailById = (eventId) => eventDetails[eventId] || null;

export const hasEventDetail = (eventId) => Boolean(eventDetails[eventId]);


