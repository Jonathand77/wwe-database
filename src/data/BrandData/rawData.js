import icChampion from "../../assets/img/roster/champions/ICChampion.png";
import worldTagChampions from "../../assets/img/roster/champions/WorldTagChampions.png";
import worldWomenChampion from "../../assets/img/roster/champions/WorldWomenChampion.png";
import womenTagChampions from "../../assets/img/roster/champions/TagWomensChampions.png";
import worldChampion from "../../assets/img/roster/champions/WorldChampion.png";
import icWomenChampion from "../../assets/img/roster/champions/ICWomenChampion.png";

import logo1993 from "../../assets/img/brands/RAWLogo/1993-1997.png";
import logo1997 from "../../assets/img/brands/RAWLogo/1997-2001.png";
import logo2001 from "../../assets/img/brands/RAWLogo/2001-2002.png";
import logo2002 from "../../assets/img/brands/RAWLogo/2002-2006.png";
import logo2006 from "../../assets/img/brands/RAWLogo/2006-2011.png";
import logo2011 from "../../assets/img/brands/RAWLogo/2011-2012.png";
import logo2012 from "../../assets/img/brands/RAWLogo/2012-2014.png";
import logo2014 from "../../assets/img/brands/RAWLogo/2014-2016.png";
import logo2016 from "../../assets/img/brands/RAWLogo/2016-2018.png";
import logo2018 from "../../assets/img/brands/RAWLogo/2018-2019.png";
import logo2019 from "../../assets/img/brands/RAWLogo/2019-2022.png";
import logo2022 from "../../assets/img/brands/RAWLogo/2022-2025.png";
import logoCurrent from "../../assets/img/brands/RAWLogo/Current.png";

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
          id: "raw-logo-1993-1997",
          title: "Monday Night RAW",
          description: "1993 - 1997",
          imgUrl: logo1993,
        },
        {
          id: "raw-logo-1997-2001",
          title: "RAW is WAR",
          description: "1997 - 2001",
          imgUrl: logo1997,
        },
        {
          id: "raw-logo-2001-2002",
          title: "RAW",
          description: "2001 - 2002",
          imgUrl: logo2001,
        },
        {
          id: "raw-logo-2002-2006",
          title: "RAW",
          description: "2002 - 2006",
          imgUrl: logo2002,
        },
        {
          id: "raw-logo-2006-2011",
          title: "RAW",
          description: "2006 - 2011",
          imgUrl: logo2006,
        },
        {
          id: "raw-logo-2011-2012",
          title: "RAW Super Show",
          description: "2011 - 2012",
          imgUrl: logo2011,
        },
        {
          id: "raw-logo-2012-2014",
          title: "RAW",
          description: "2012 - 2014",
          imgUrl: logo2012,
        },
        {
          id: "raw-logo-2014-2016",
          title: "RAW",
          description: "2014 - 2016",
          imgUrl: logo2014,
        },
        {
          id: "raw-logo-2016-2018",
          title: "RAW",
          description: "2016 - 2018",
          imgUrl: logo2016,
        },
        {
          id: "raw-logo-2018-2019",
          title: "RAW",
          description: "2018 - 2019",
          imgUrl: logo2018,
        },
        {
          id: "raw-logo-2019-2022",
          title: "RAW",
          description: "2019 - 2022",
          imgUrl: logo2019,
        },
        {
          id: "raw-logo-2022-2025",
          title: "RAW",
          description: "2022 - 2025",
          imgUrl: logo2022,
        },
        {
          id: "raw-logo-current",
          title: "RAW",
          description: "Current",
          imgUrl: logoCurrent,
        },
      ],
    },
  ],
};
