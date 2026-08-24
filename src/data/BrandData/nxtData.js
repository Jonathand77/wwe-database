import nxtChampion from "../../assets/img/roster/champions/NXTChampion.png";
import northAmericanChampion from "../../assets/img/roster/champions/NAChampion.png";
import nxtTagChampions from "../../assets/img/roster/champions/NXTTagChampions.png";
import nxtWomenChampion from "../../assets/img/roster/champions/NXTWomenChampion.png";
import nxtWomenNaChampion from "../../assets/img/roster/champions/NAWomenChampion.png";

import logo1 from "../../assets/img/brands/BrandNXT.png";

export const nxtDetail = {
  id: "nxt",
  title: "NXT",
  subtitle: "Explore the current champions and the brand logo.",
  tabs: [
    {
      id: "champions",
      label: "Champions",
      variant: "nxt",
      items: [
        {
          id: "tony-d'angelo",
          title: "Tony D'Angelo",
          description: "NXT Champion",
          imgUrl: nxtChampion,
        },
        {
          id: "myles-borne",
          title: "Myles Borne",
          description: "NXT North American Champion",
          imgUrl: northAmericanChampion,
        },
        {
          id: "borne-heights",
          title: "Myles Borne & Tavion Heights",
          description: "NXT Tag Team Champions",
          imgUrl: nxtTagChampions,
        },
        {
          id: "kendal-grey",
          title: "Kendal Grey",
          description: "NXT Women´s Champion",
          imgUrl: nxtWomenChampion,
        },
        {
          id: "Zaria",
          title: "Zaria",
          description: "NXT Women´s North American Champion",
          imgUrl: nxtWomenNaChampion,
        },
      ],
    },
    {
      id: "logos",
      label: "Editions",
      variant: "nxt",
      items: [
        {
          id: "nxt-logo-1",
          title: "NXT",
          description: "Current",
          imgUrl: logo1,
        },
      ],
    },
  ],
};
