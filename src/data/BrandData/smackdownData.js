import wweChampion from "../../assets/img/roster/champions/WWEChampion.png";
import usChampion from "../../assets/img/roster/champions/USChampion.png";
import wweTagChampions from "../../assets/img/roster/champions/WWETagChampions.png";
import wweWomenChampion from "../../assets/img/roster/champions/WWEWomenChampion.png";
import womenTagChampions from "../../assets/img/roster/champions/TagWomensChampions.png";
import usWomenChampion from "../../assets/img/roster/champions/USWomenChampion.png";

import logo1 from "../../assets/img/brands/BrandSM.png";

export const smackdownDetail = {
  id: "smackdown",
  title: "SmackDown",
  subtitle: "Explore the current champions and the brand logo.",
  tabs: [
    {
      id: "champions",
      label: "Champions",
      variant: "smackdown",
      items: [
        {
          id: "cm-punk",
          title: "CM Punk",
          description: "WWE Champion",
          imgUrl: wweChampion,
        },
        {
          id: "baron-corbin",
          title: "Baron Corbin",
          description: "United States Champion",
          imgUrl: usChampion,
        },
        {
          id: "mft-tag",
          title: "MFT",
          description: "WWE Tag Team Champions",
          imgUrl: wweTagChampions,
        },
        {
          id: "chelsea-green",
          title: "Chelsea Green",
          description: "Interim WWE Women´s Champion",
          imgUrl: wweWomenChampion,
        },
        {
          id: "jacy-jayne",
          title: "Jacy Jayne",
          description: "United States Women´s Champion",
          imgUrl: usWomenChampion,
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
      variant: "smackdown",
      items: [
        {
          id: "smackdown-logo-1",
          title: "SmackDown",
          description: "Current",
          imgUrl: logo1,
        },
      ],
    },
  ],
};
