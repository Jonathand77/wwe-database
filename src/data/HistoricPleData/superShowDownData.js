import logo2018 from "../../assets/img/historicEvents/LogoSuperShowdown/2018.png";
import logo2019 from "../../assets/img/historicEvents/LogoSuperShowdown/2019.png";

export const superShowDownDetail = {
  "super-showdown": {
    id: "super-showdown",
    title: "Super ShowDown",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "super-showdown",
        items: [
          {
            id: "super-showdown-2018",
            title: "Super Show-Down",
            description: "Last Time Ever 2018",
            imgUrl: logo2018,
          },
          {
            id: "super-showdown-2019",
            title: "Super ShowDown",
            description: "Saudi Arabia 2019 - 2020",
            imgUrl: logo2019,
          },
        ],
      },
    ],
  },
};
