import logo2016 from "../../assets/img/historicEvents/LogoClashofChampions/2016.png";
import logo2017_2020 from "../../assets/img/historicEvents/LogoClashofChampions/2017-2020.png";

export const clashOfChampionsDetail = {
  "clash-of-champions": {
    id: "clash-of-champions",
    title: "Clash of Champions",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "clash-of-champions",
        items: [
          {
            id: "clash-of-champions-2016",
            title: "Clash of Champions",
            description: "2016",
            imgUrl: logo2016,
          },
          {
            id: "clash-of-champions-2017",
            title: "Clash of Champions",
            description: "2017 - 2019",
            imgUrl: logo2017_2020,
          },
          {
            id: "clash-of-champions-2020",
            title: "Clash of Champions",
            description: "Gold Rush 2020",
            imgUrl: logo2017_2020,
          },
        ],
      },
    ],
  },
};
