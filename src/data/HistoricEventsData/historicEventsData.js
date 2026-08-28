import eventTWC from "../../assets/img/historicEvents/LogoOnlysPPV/TWC.png";
import eventKOTR from "../../assets/img/historicEvents/LogoKOTR/1985-1995.png";
import eventTTIT from "../../assets/img/historicEvents/LogoOnlysPPV/TTIT.png";
import eventIYH from "../../assets/img/historicEvents/LogoIYH/1995_1-6.png";
import eventONO from "../../assets/img/historicEvents/LogoOnlysPPV/ONO.png";
import eventMayhem from "../../assets/img/historicEvents/LogoOnlysPPV/Mayhem.png";
import eventCapC from "../../assets/img/historicEvents/LogoOnlysPPV/CapC.png";
import eventUnforgiven from "../../assets/img/historicEvents/LogoUnforgiven/1998.png";
import eventOverTheEdge from "../../assets/img/historicEvents/LogoOverTheEdge/1998.png";
import eventFullyLoaded from "../../assets/img/historicEvents/LogoFullyLoaded/1998.png";
import eventNoMercy from "../../assets/img/historicEvents/LogoNoMercy/1999.png";
import eventRebellion from "../../assets/img/historicEvents/LogoRebellion/1999-2000.png";
import eventArmageddon from "../../assets/img/historicEvents/LogoArmageddon/1999.png";
import eventNoWayOut from "../../assets/img/historicEvents/LogoNoWayOut/2000.png";
import eventInsurrextion from "../../assets/img/historicEvents/LogoInsurrextion/2000-2001.png";
import eventJudgmentDay from "../../assets/img/historicEvents/LogoJudmentDay/2000.png";
import eventInvasion from "../../assets/img/historicEvents/LogoOnlysPPV/InV.png";
import eventVengeance from "../../assets/img/historicEvents/LogoVengeance/2001.png";
import eventBadBlood from "../../assets/img/historicEvents/LogoBadBlood/2003.png";
import eventGAB from "../../assets/img/historicEvents/LogoGAB/2004-2005.png";
import eventTaboo from "../../assets/img/historicEvents/LogoTaboo/2004.png";
import eventNYR from "../../assets/img/historicEvents/LogoNYR/2005.png";
import eventONS from "../../assets/img/historicEvents/LogoONS/2005.png";
import eventCyberSunday from "../../assets/img/historicEvents/LogoCyberSunday/2006.png";
import eventDTD from "../../assets/img/historicEvents/LogoOnlysPPV/DTD.png";
import eventBreakingPoint from "../../assets/img/historicEvents/LogoOnlysPPV/BP.png";
import eventHIAC from "../../assets/img/historicEvents/LogoHellInACell/2009.png";
import eventBraggingRights from "../../assets/img/historicEvents/LogoBraggingRights/2009.png";
import eventTLC from "../../assets/img/historicEvents/LogoTLC/2009.png";
import eventExtremeRules from "../../assets/img/historicEvents/LogoExtremeRules/2010.png";
import eventOverTheLimit from "../../assets/img/historicEvents/LogoOverTheLimit/2010.png";
import eventFatal4Way from "../../assets/img/historicEvents/LogoOnlysPPV/FF4.png";
import eventCapitolPunishment from "../../assets/img/historicEvents/LogoOnlysPPV/CapP.png";
import eventPayback from "../../assets/img/historicEvents/LogoPayback/2013.png";
import eventBattleground from "../../assets/img/historicEvents/LogoBattleground/2013.png";
import eventFastlane from "../../assets/img/historicEvents/LogoFastlane/2015.png";
import eventNetworkSpecials from "../../assets/img/historicEvents/LogoNetworkSpecials/BITE.png";
import eventRoadblock from "../../assets/img/historicEvents/LogoRoadblock/2016-1.png";
import eventClashOfChampions from "../../assets/img/historicEvents/LogoClashofChampions/2016.png";
import eventGreatBallsOfFire from "../../assets/img/historicEvents/LogoOnlysPPV/GBOF.png";
import eventGreatestRoyalRumble from "../../assets/img/historicEvents/LogoOnlysPPV/GRR.png";
import eventSuperShowDown from "../../assets/img/historicEvents/LogoSuperShowdown/2018.png";
import eventEvolution from "../../assets/img/historicEvents/LogoEvolution/2018.png";
import eventStompingGrounds from "../../assets/img/historicEvents/LogoOnlysPPV/SG.png";
import eventDay1 from "../../assets/img/historicEvents/LogoDay1/2022.png";
import eventBashInBerlin from "../../assets/img/historicEvents/LogoOnlysPPV/BIB.png";
import eventWrestlePalooza from "../../assets/img/historicEvents/LogoOnlysPPV/WP.png";
import { getEventDetailById } from "../EventsData/eventDetailsData";

// Events that keep the representative image defined below instead of deriving it
// from the last edition in their detail data.
const KEEP_ORIGINAL_IMAGE = new Set([
  "in-your-house",
  "new-years-revolution",
  "day-1",
  "great-american-bash",
]);

const getLastEditionImage = (eventId) => {
  const detail = getEventDetailById(eventId);
  if (!detail || !Array.isArray(detail.tabs)) return null;
  const editionsTab =
    detail.tabs.find((tab) => tab.id === "editions") || detail.tabs[0];
  const items =
    editionsTab && Array.isArray(editionsTab.items) ? editionsTab.items : [];
  if (items.length === 0) return null;
  return items[items.length - 1].imgUrl || null;
};

const baseHistoricEvents = [
  {
    id: "king-of-the-ring",
    name: "KING OF THE RING",
    image: eventKOTR,
    alt: "King of the Ring event poster",
  },
  {
    id: "wrestling-classic",
    name: "THE WRESTLING CLASSIC",
    image: eventTWC,
    alt: "The Wrestling Classic event poster",
  },
  {
    id: "this-tuesday-in-texas",
    name: "THIS TUESDAY IN TEXAS",
    image: eventTTIT,
    alt: "This Tuesday in Texas event poster",
  },
  {
    id: "in-your-house",
    name: "IN YOUR HOUSE",
    image: eventIYH,
    alt: "In Your House event poster",
  },
  {
    id: "one-night-only",
    name: "ONE NIGHT ONLY",
    image: eventONO,
    alt: "One Night Only event poster",
  },
  {
    id: "mayhem-in-manchester",
    name: "MAYHEM IN MANCHESTER",
    image: eventMayhem,
    alt: "Mayhem in Manchester event poster",
  },
  {
    id: "capital-carnage",
    name: "CAPITAL CARNAGE",
    image: eventCapC,
    alt: "Capital Carnage event poster",
  },
  {
    id: "no-mercy",
    name: "NO MERCY",
    image: eventNoMercy,
    alt: "No Mercy event poster",
  },
  {
    id: "over-the-edge",
    name: "OVER THE EDGE",
    image: eventOverTheEdge,
    alt: "Over the Edge event poster",
  },
  {
    id: "fully-loaded",
    name: "FULLY LOADED",
    image: eventFullyLoaded,
    alt: "Fully Loaded event poster",
  },
  {
    id: "unforgiven",
    name: "UNFORGIVEN",
    image: eventUnforgiven,
    alt: "Unforgiven event poster",
  },
  {
    id: "rebellion",
    name: "REBELLION",
    image: eventRebellion,
    alt: "Rebellion event poster",
  },
  {
    id: "armageddon",
    name: "ARMAGEDDON",
    image: eventArmageddon,
    alt: "Armageddon event poster",
  },
  {
    id: "no-way-out",
    name: "NO WAY OUT",
    image: eventNoWayOut,
    alt: "No Way Out event poster",
  },
  {
    id: "insurrextion",
    name: "INSURREXTION",
    image: eventInsurrextion,
    alt: "Insurrextion event poster",
  },
  {
    id: "judgment-day",
    name: "JUDGMENT DAY",
    image: eventJudgmentDay,
    alt: "Judgment Day event poster",
  },
  {
    id: "invasion",
    name: "INVASION",
    image: eventInvasion,
    alt: "Invasion event poster",
  },
  {
    id: "vengeance",
    name: "VENGEANCE",
    image: eventVengeance,
    alt: "Vengeance event poster",
  },
  {
    id: "bad-blood",
    name: "BAD BLOOD",
    image: eventBadBlood,
    alt: "Bad Blood event poster",
  },
  {
    id: "great-american-bash",
    name: "GREAT AMERICAN BASH",
    image: eventGAB,
    alt: "Great American Bash event poster",
  },
  {
    id: "taboo-tuesday",
    name: "TABOO TUESDAY",
    image: eventTaboo,
    alt: "Taboo Tuesday event poster",
  },
  {
    id: "new-years-revolution",
    name: "NEW YEAR'S REVOLUTION",
    image: eventNYR,
    alt: "New Year's Revolution event poster",
  },
  {
    id: "one-night-stand",
    name: "ONE NIGHT STAND",
    image: eventONS,
    alt: "One Night Stand event poster",
  },
  {
    id: "cyber-sunday",
    name: "CYBER SUNDAY",
    image: eventCyberSunday,
    alt: "Cyber Sunday event poster",
  },
  {
    id: "december-to-dismember",
    name: "DECEMBER TO DISMEMBER",
    image: eventDTD,
    alt: "December to Dismember event poster",
  },
  {
    id: "breaking-point",
    name: "BREAKING POINT",
    image: eventBreakingPoint,
    alt: "Breaking Point event poster",
  },
  {
    id: "hell-in-a-cell",
    name: "HELL IN A CELL",
    image: eventHIAC,
    alt: "Hell in a Cell event poster",
  },
  {
    id: "bragging-rights",
    name: "BRAGGING RIGHTS",
    image: eventBraggingRights,
    alt: "Bragging Rights event poster",
  },
  {
    id: "tlc",
    name: "TLC: TABLES, LADDERS & CHAIRS",
    image: eventTLC,
    alt: "TLC: Tables, Ladders & Chairs event poster",
  },
  {
    id: "extreme-rules",
    name: "EXTREME RULES",
    image: eventExtremeRules,
    alt: "Extreme Rules event poster",
  },
  {
    id: "over-the-limit",
    name: "OVER THE LIMIT",
    image: eventOverTheLimit,
    alt: "Over the Limit event poster",
  },
  {
    id: "fatal-4-way",
    name: "FATAL 4-WAY",
    image: eventFatal4Way,
    alt: "Fatal 4-Way event poster",
  },
  {
    id: "capitol-punishment",
    name: "CAPITOL PUNISHMENT",
    image: eventCapitolPunishment,
    alt: "Capitol Punishment event poster",
  },
  {
    id: "payback",
    name: "PAYBACK",
    image: eventPayback,
    alt: "Payback event poster",
  },
  {
    id: "battleground",
    name: "BATTLEGROUND",
    image: eventBattleground,
    alt: "Battleground event poster",
  },
  {
    id: "fastlane",
    name: "FASTLANE",
    image: eventFastlane,
    alt: "Fastlane event poster",
  },
  {
    id: "network-specials",
    name: "WWE NETWORK SPECIALS",
    image: eventNetworkSpecials,
    alt: "WWE Network Specials event poster",
  },
  {
    id: "roadblock",
    name: "ROADBLOCK",
    image: eventRoadblock,
    alt: "Roadblock event poster",
  },
  {
    id: "clash-of-champions",
    name: "CLASH OF CHAMPIONS",
    image: eventClashOfChampions,
    alt: "Clash of Champions event poster",
  },
  {
    id: "great-balls-of-fire",
    name: "GREAT BALLS OF FIRE",
    image: eventGreatBallsOfFire,
    alt: "Great Balls of Fire event poster",
  },
  {
    id: "greatest-royal-rumble",
    name: "GREATEST ROYAL RUMBLE",
    image: eventGreatestRoyalRumble,
    alt: "Greatest Royal Rumble event poster",
  },
  {
    id: "super-showdown",
    name: "SUPER SHOWDOWN",
    image: eventSuperShowDown,
    alt: "Super ShowDown event poster",
  },
  {
    id: "evolution",
    name: "EVOLUTION",
    image: eventEvolution,
    alt: "Evolution event poster",
  },
  {
    id: "stomping-grounds",
    name: "STOMPING GROUNDS",
    image: eventStompingGrounds,
    alt: "Stomping Grounds event poster",
  },
  {
    id: "day-1",
    name: "DAY 1",
    image: eventDay1,
    alt: "Day 1 event poster",
  },
  {
    id: "bash-in-berlin",
    name: "BASH IN BERLIN",
    image: eventBashInBerlin,
    alt: "Bash in Berlin event poster",
  },
  {
    id: "wrestlepalooza",
    name: "WRESTLEPALOOZA",
    image: eventWrestlePalooza,
    alt: "WrestlePalooza event poster",
  },
];

export const historicEvents = baseHistoricEvents.map((event) => {
  if (KEEP_ORIGINAL_IMAGE.has(event.id)) return event;
  const lastEditionImage = getLastEditionImage(event.id);
  return lastEditionImage ? { ...event, image: lastEditionImage } : event;
});
