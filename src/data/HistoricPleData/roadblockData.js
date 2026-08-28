import logo2016_1 from "../../assets/img/historicEvents/LogoRoadblock/2016-1.png";
import logo2016_2 from "../../assets/img/historicEvents/LogoRoadblock/2016-2.png";

export const roadblockDetail = {
  roadblock: {
    id: "roadblock",
    title: "Roadblock",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "roadblock",
        items: [
          {
            id: "roadblock-2016-march",
            title: "Roadblock",
            description: "Road Closed Ahead 2016",
            imgUrl: logo2016_1,
          },
          {
            id: "roadblock-2016-december",
            title: "Roadblock",
            description: "End of the Line 2016",
            imgUrl: logo2016_2,
          },
        ],
      },
    ],
  },
};
