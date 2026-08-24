import icChampion from "../../assets/img/roster/champions/ICChampion.png";
import worldTagChampions from "../../assets/img/roster/champions/WorldTagChampions.png";
import worldWomenChampion from "../../assets/img/roster/champions/WorldWomenChampion.png";
import womenTagChampions from "../../assets/img/roster/champions/TagWomensChampions.png";
import worldChampion from "../../assets/img/roster/champions/WorldChampion.png";
import icWomenChampion from "../../assets/img/roster/champions/ICWomenChampion.png";

import logo1 from "../../assets/img/brands/BrandRaw.png";

export const rawDetail = {
  id: "raw",
  title: "RAW",
  subtitle: "Explore the current champions and the brand logo.",
  tabs: [
    {
      id: "champions",
      label: "Champions",
      variant: "raw",
      items: [
        {
          id: "roman-reigns",
          title: "Roman Reigns",
          description: "World Champion",
          imgUrl: worldChampion,
        },
        {
          id: "chad-gable",
          title: "Chad Gable",
          description: "Intercontinental Champion",
          imgUrl: icChampion,
        },
        {
          id: "vision",
          title: "The Vision",
          description: "World Tag Team Champions",
          imgUrl: worldTagChampions,
        },
        {
          id: "liv-morgan",
          title: "Liv Morgan",
          description: "World Women´s Champion",
          imgUrl: worldWomenChampion,
        },
        {
          id: "raquel-rodriguez",
          title: "Raquel Rodriguez",
          description: "Intercontinental Women´s Champion",
          imgUrl: icWomenChampion,
        },
        {
          id: "fatal-influence",
          title: "Fatal Influence",
          description: "World Tag Team Women´s Champions",
          imgUrl: womenTagChampions,
        },
      ],
    },
    {
      id: "logos",
      label: "Editions",
      variant: "raw",
      items: [
        {
          id: "raw-logo-1",
          title: "RAW",
          description: "Current",
          imgUrl: logo1,
        },
      ],
    },
  ],
};
