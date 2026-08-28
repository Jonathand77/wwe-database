import logo2013 from "../../assets/img/historicEvents/LogoBattleground/2013.png";
import logo2014 from "../../assets/img/historicEvents/LogoBattleground/2014.png";
import logo2015_2016 from "../../assets/img/historicEvents/LogoBattleground/2015-2016.png";
import logo2017 from "../../assets/img/historicEvents/LogoBattleground/2017.png";

export const battlegroundDetail = {
  battleground: {
    id: "battleground",
    title: "Battleground",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "battleground",
        items: [
          {
            id: "battleground-2013",
            title: "Battleground",
            description: "2013",
            imgUrl: logo2013,
          },
          {
            id: "battleground-2014",
            title: "Battleground",
            description: "2014",
            imgUrl: logo2014,
          },
          {
            id: "battleground-2015",
            title: "Battleground",
            description: "2015 - 2016",
            imgUrl: logo2015_2016,
          },
          {
            id: "battleground-2017",
            title: "Battleground",
            description: "The Return of the Punjabi Prison 2017",
            imgUrl: logo2017,
          },
        ],
      },
    ],
  },
};
