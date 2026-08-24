import nxtChampion from "../../assets/img/roster/champions/NXTChampion.png";
import northAmericanChampion from "../../assets/img/roster/champions/NAChampion.png";
import nxtTagChampions from "../../assets/img/roster/champions/NXTTagChampions.png";
import nxtWomenChampion from "../../assets/img/roster/champions/NXTWomenChampion.png";
import nxtWomenNaChampion from "../../assets/img/roster/champions/NAWomenChampion.png";

import logo2010 from "../../assets/img/brands/NXTLogo/2010-2012.png";
import logo2012 from "../../assets/img/brands/NXTLogo/2012-2014.png";
import logo2014 from "../../assets/img/brands/NXTLogo/2014-2019.png";
import logo2019 from "../../assets/img/brands/NXTLogo/2019-2021.png";
import logo2021a from "../../assets/img/brands/NXTLogo/2021-2021.png";
import logo2021b from "../../assets/img/brands/NXTLogo/2021-2022.png";
import logo2022 from "../../assets/img/brands/NXTLogo/2022-2024.png";
import logoCurrent from "../../assets/img/brands/NXTLogo/Current.png";

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
          id: "nxt-logo-2010-2012",
          title: "NXT",
          description: "2010 - 2012",
          imgUrl: logo2010,
        },
        {
          id: "nxt-logo-2012-2014",
          title: "NXT",
          description: "2012 - 2014",
          imgUrl: logo2012,
        },
        {
          id: "nxt-logo-2014-2019",
          title: "NXT",
          description: "2014 - 2019",
          imgUrl: logo2014,
        },
        {
          id: "nxt-logo-2019-2021",
          title: "NXT",
          description: "2019 - 2021",
          imgUrl: logo2019,
        },
        {
          id: "nxt-logo-2021-2021",
          title: "NXT",
          description: "2021",
          imgUrl: logo2021a,
        },
        {
          id: "nxt-logo-2021-2022",
          title: "NXT 2.0",
          description: "2021 - 2022",
          imgUrl: logo2021b,
        },
        {
          id: "nxt-logo-2022-2024",
          title: "NXT",
          description: "2022 - 2024",
          imgUrl: logo2022,
        },
        {
          id: "nxt-logo-current",
          title: "NXT",
          description: "Current",
          imgUrl: logoCurrent,
        },
      ],
    },
  ],
};
