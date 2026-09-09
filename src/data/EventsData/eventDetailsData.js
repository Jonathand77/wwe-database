import { royalRumbleEventDetails } from "../PleData/royalRumbleData";
import { eliminationChamberDetail } from "../PleData/eliminationChamberData";
import { wrestlemaniaDetail } from "../PleData/wrestlemaniaData";
import { backlashDetail } from "../PleData/backlashData";
import { clashAtTheCastleDetail } from "../PleData/clashData";
import { moneyInTheBankDetail } from "../PleData/moneyInTheBankData";
import { summerSlamDetail } from "../PleData/summerSlamData";
import { crownJewelDetail } from "../PleData/crownJewelData";
import { survivorSeriesDetail } from "../PleData/survivorSeriesData";
import { nightOfChampionsDetail } from "../PleData/nightOfChampionsData";
import { saturdayNightsMainEventDetail } from "../PleData/saturdayNightsMainEventData";
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
import { breakingPointDetail } from "../HistoricPleData/breakingPointData";
import { hellInACellDetail } from "../HistoricPleData/hellInACellData";
import { braggingRightsDetail } from "../HistoricPleData/braggingRightsData";
import { tlcDetail } from "../HistoricPleData/tlcData";
import { extremeRulesDetail } from "../HistoricPleData/extremeRulesData";
import { overTheLimitDetail } from "../HistoricPleData/overTheLimitData";
import { fatal4WayDetail } from "../HistoricPleData/fatal4WayData";
import { capitolPunishmentDetail } from "../HistoricPleData/capitolPunishmentData";
import { paybackDetail } from "../HistoricPleData/paybackData";
import { battlegroundDetail } from "../HistoricPleData/battlegroundData";
import { fastlaneDetail } from "../HistoricPleData/fastlaneData";
import { networkSpecialsDetail } from "../HistoricPleData/networkSpecialsData";
import { roadblockDetail } from "../HistoricPleData/roadblockData";
import { clashOfChampionsDetail } from "../HistoricPleData/clashOfChampionsData";
import { greatBallsOfFireDetail } from "../HistoricPleData/greatBallsOfFireData";
import { greatestRoyalRumbleDetail } from "../HistoricPleData/greatestRoyalRumbleData";
import { superShowDownDetail } from "../HistoricPleData/superShowDownData";
import { evolutionDetail } from "../HistoricPleData/evolutionData";
import { stompingGroundsDetail } from "../HistoricPleData/stompingGroundsData";
import { day1Detail } from "../HistoricPleData/day1Data";
import { bashInBerlinDetail } from "../HistoricPleData/bashInBerlinData";
import { wrestlePaloozaDetail } from "../HistoricPleData/wrestlePaloozaData";
import { nxtArrivalDetail } from "../NxtPleData/nxtArrivalData";
import { nxtTakeOverDetail } from "../NxtPleData/nxtTakeOverData";
import { nxtStandAndDeliverDetail } from "../NxtPleData/nxtStandAndDeliverData";
import { nxtWarGamesDetail } from "../NxtPleData/nxtWarGamesData";
import { nxtInYourHouseDetail } from "../NxtPleData/nxtInYourHouseData";
import { nxtWorldsCollideDetail } from "../NxtPleData/nxtWorldsCollideData";
import { nxtHalloweenHavocDetail } from "../NxtPleData/nxtHalloweenHavocData";
import { nxtDeadlineDetail } from "../NxtPleData/nxtDeadlineData";
import { nxtVengeanceDayDetail } from "../NxtPleData/nxtVengeanceDayData";
import { nxtBattlegroundDetail } from "../NxtPleData/nxtBattlegroundData";
import { nxtGreatAmericanBashDetail } from "../NxtPleData/nxtGreatAmericanBashData";
import { nxtNoMercyDetail } from "../NxtPleData/nxtNoMercyData";
import { nxtHeatWaveDetail } from "../NxtPleData/nxtHeatWaveData";

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
  "night-of-champions": nightOfChampionsDetail,
  "saturday-nights-main-event": saturdayNightsMainEventDetail,
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
  ...breakingPointDetail,
  ...hellInACellDetail,
  ...braggingRightsDetail,
  ...tlcDetail,
  ...extremeRulesDetail,
  ...overTheLimitDetail,
  ...fatal4WayDetail,
  ...capitolPunishmentDetail,
  ...paybackDetail,
  ...battlegroundDetail,
  ...fastlaneDetail,
  ...networkSpecialsDetail,
  ...roadblockDetail,
  ...clashOfChampionsDetail,
  ...greatBallsOfFireDetail,
  ...greatestRoyalRumbleDetail,
  ...superShowDownDetail,
  ...evolutionDetail,
  ...stompingGroundsDetail,
  ...day1Detail,
  ...bashInBerlinDetail,
  ...wrestlePaloozaDetail,
  ...nxtArrivalDetail,
  ...nxtTakeOverDetail,
  ...nxtStandAndDeliverDetail,
  ...nxtWarGamesDetail,
  ...nxtInYourHouseDetail,
  ...nxtWorldsCollideDetail,
  ...nxtHalloweenHavocDetail,
  ...nxtDeadlineDetail,
  ...nxtVengeanceDayDetail,
  ...nxtBattlegroundDetail,
  ...nxtGreatAmericanBashDetail,
  ...nxtNoMercyDetail,
  ...nxtHeatWaveDetail,
};

export const getEventDetailById = (eventId) => eventDetails[eventId] || null;

export const hasEventDetail = (eventId) => Boolean(eventDetails[eventId]);
