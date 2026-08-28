import logo2015 from "../../assets/img/historicEvents/LogoFastlane/2015.png";
import logo2016_2017 from "../../assets/img/historicEvents/LogoFastlane/2016-2017.png";
import logo2018 from "../../assets/img/historicEvents/LogoFastlane/2018.png";
import logo2019_2021 from "../../assets/img/historicEvents/LogoFastlane/2019-2021.png";
import logo2023 from "../../assets/img/historicEvents/LogoFastlane/2023.png";

export const fastlaneDetail = {
  fastlane: {
    id: "fastlane",
    title: "Fastlane",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "fastlane",
        items: [
          {
            id: "fastlane-2015",
            title: "Fastlane",
            description: "Get in the Fastlane on the Road to WrestleMania! 2015",
            imgUrl: logo2015,
          },
          {
            id: "fastlane-2016",
            title: "Fastlane",
            description: "2016 - 2017",
            imgUrl: logo2016_2017,
          },
          {
            id: "fastlane-2018",
            title: "Fastlane",
            description: "2018",
            imgUrl: logo2018,
          },
          {
            id: "fastlane-2019",
            title: "Fastlane",
            description: "2019 - 2021",
            imgUrl: logo2019_2021,
          },
          {
            id: "fastlane-2023",
            title: "Fastlane",
            description: "2023",
            imgUrl: logo2023,
          },
        ],
      },
    ],
  },
};
