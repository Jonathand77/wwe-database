import { royalRumbleEventDetails } from "../PleData/royalRumbleData";
import { eliminationChamberDetail } from "../PleData/eliminationChamberData";
import { wrestlemaniaDetail } from "../PleData/wrestlemaniaData";
import { backlashDetail } from "../PleData/backlashData";
import { clashAtTheCastleDetail } from "../PleData/clashData";
import { moneyInTheBankDetail } from "../PleData/moneyInTheBankData";
import { summerSlamDetail } from "../PleData/summerSlamData";
import { crownJewelDetail } from "../PleData/crownJewelData";
import { survivorSeriesDetail } from "../PleData/survivorSeriesData";
import { theWrestlingClassicDetail } from "../HistoricPleData/theWrestlingClassicData";
import { kingOfTheRingDetail } from "../HistoricPleData/kingOfTheRingData";
import { thisTuesdayInTexasDetail } from "../HistoricPleData/thisTuesdayInTexasData";
import { inYourHouseDetail } from "../HistoricPleData/inYourHouseData";
import { oneNightOnlyDetail } from "../HistoricPleData/oneNightOnlyData";
import { mayhemInManchesterDetail } from "../HistoricPleData/mayhemData";
import { capitalCarnageDetail } from "../HistoricPleData/capitolCarnageData";
import { armageddonDetail } from "../HistoricPleData/armageddonData";
import { fullyLoadedDetail } from "../HistoricPleData/fullyLoadedData";
import { noMercyDetail } from "../HistoricPleData/noMercyData";
import { overTheEdgeDetail } from "../HistoricPleData/overTheEdgeData";
import { rebellionDetail } from "../HistoricPleData/rebellionData";
import { unforgivenDetail } from "../HistoricPleData/unforgivenData";
import { noWayOutDetail } from "../HistoricPleData/noWayOutData";

export const eventDetails = {
  ...royalRumbleEventDetails,
  "elimination-chamber": eliminationChamberDetail,
  wrestlemania: wrestlemaniaDetail,
  backlash: backlashDetail,
  catc: clashAtTheCastleDetail,
  mitb: moneyInTheBankDetail,
  summerslam: summerSlamDetail,
  "crown-jewel": crownJewelDetail,
  "survivor-series": survivorSeriesDetail,
  ...theWrestlingClassicDetail,
  ...kingOfTheRingDetail,
  ...thisTuesdayInTexasDetail,
  ...inYourHouseDetail,
  ...oneNightOnlyDetail,
  ...mayhemInManchesterDetail,
  ...capitalCarnageDetail,
  ...armageddonDetail,
  ...fullyLoadedDetail,
  ...noMercyDetail,
  ...overTheEdgeDetail,
  ...rebellionDetail,
  ...unforgivenDetail,
  ...noWayOutDetail,
};

export const getEventDetailById = (eventId) => eventDetails[eventId] || null;

export const hasEventDetail = (eventId) => Boolean(eventDetails[eventId]);
