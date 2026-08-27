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
import { insurrextionDetail } from "../HistoricPleData/insurrextionData";
import { judgmentDayDetail } from "../HistoricPleData/judmentDayData";
import { invasionDetail } from "../HistoricPleData/invasionData";
import { vengeanceDetail } from "../HistoricPleData/vengeanceData";
import { badBloodDetail } from "../HistoricPleData/badBloodData";
import { greatAmericanBashDetail } from "../HistoricPleData/greatAmericanBashData";
import { tabooTuesdayDetail } from "../HistoricPleData/tabooTuesdayData";
import { newYearsRevolutionDetail } from "../HistoricPleData/newYearsRevolutionData";
import { oneNightStandDetail } from "../HistoricPleData/oneNightStandData";
import { cyberSundayDetail } from "../HistoricPleData/cyberSundayData";
import { decemberToDismemberDetail } from "../HistoricPleData/decemberToDismemberData";
import { nightOfChampionsDetail } from "../HistoricPleData/nightOfChampionsData";
import { breakingPointDetail } from "../HistoricPleData/breakingPointData";
import { hellInACellDetail } from "../HistoricPleData/hellInACellData";
import { braggingRightsDetail } from "../HistoricPleData/braggingRightsData";

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
  ...insurrextionDetail,
  ...judgmentDayDetail,
  ...invasionDetail,
  ...vengeanceDetail,
  ...badBloodDetail,
  ...greatAmericanBashDetail,
  ...tabooTuesdayDetail,
  ...newYearsRevolutionDetail,
  ...oneNightStandDetail,
  ...cyberSundayDetail,
  ...decemberToDismemberDetail,
  ...nightOfChampionsDetail,
  ...breakingPointDetail,
  ...hellInACellDetail,
  ...braggingRightsDetail,
};

export const getEventDetailById = (eventId) => eventDetails[eventId] || null;

export const hasEventDetail = (eventId) => Boolean(eventDetails[eventId]);
