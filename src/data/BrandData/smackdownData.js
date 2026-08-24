import wweChampion from "../../assets/img/roster/champions/WWEChampion.png";
import usChampion from "../../assets/img/roster/champions/USChampion.png";
import wweTagChampions from "../../assets/img/roster/champions/WWETagChampions.png";
import wweWomenChampion from "../../assets/img/roster/champions/WWEWomenChampion.png";
import womenTagChampions from "../../assets/img/roster/champions/TagWomensChampions.png";
import usWomenChampion from "../../assets/img/roster/champions/USWomenChampion.png";

import logo1999 from "../../assets/img/brands/SMACKDOWNLogo/1999-2001.png";
import logo2001 from "../../assets/img/brands/SMACKDOWNLogo/2001-2005.png";
import logo2005 from "../../assets/img/brands/SMACKDOWNLogo/2005-2006.png";
import logo2006 from "../../assets/img/brands/SMACKDOWNLogo/2006-2008.png";
import logo2008 from "../../assets/img/brands/SMACKDOWNLogo/2008-2009.png";
import logo2009 from "../../assets/img/brands/SMACKDOWNLogo/2009-2010.png";
import logo2010 from "../../assets/img/brands/SMACKDOWNLogo/2010-2014.png";
import logo2014 from "../../assets/img/brands/SMACKDOWNLogo/2014-2016.png";
import logo2016 from "../../assets/img/brands/SMACKDOWNLogo/2016-2019.png";
import logo2019 from "../../assets/img/brands/SMACKDOWNLogo/2019-2025.png";
import logoCurrent from "../../assets/img/brands/SMACKDOWNLogo/Current.png";

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
          id: "smackdown-logo-1999-2001",
          title: "SmackDown!",
          description: "1999 - 2001",
          imgUrl: logo1999,
        },
        {
          id: "smackdown-logo-2001-2005",
          title: "SmackDown!",
          description: "2001 - 2005",
          imgUrl: logo2001,
        },
        {
          id: "smackdown-logo-2005-2006",
          title: "Friday Night SmackDown!",
          description: "2005 - 2006",
          imgUrl: logo2005,
        },
        {
          id: "smackdown-logo-2006-2008",
          title: "SmackDown!",
          description: "2006 - 2008",
          imgUrl: logo2006,
        },
        {
          id: "smackdown-logo-2008-2009",
          title: "SmackDown",
          description: "2008 - 2009",
          imgUrl: logo2008,
        },
        {
          id: "smackdown-logo-2009-2010",
          title: "SmackDown",
          description: "2009 - 2010",
          imgUrl: logo2009,
        },
        {
          id: "smackdown-logo-2010-2014",
          title: "SmackDown",
          description: "2010 - 2014",
          imgUrl: logo2010,
        },
        {
          id: "smackdown-logo-2014-2016",
          title: "SmackDown",
          description: "2014 - 2016",
          imgUrl: logo2014,
        },
        {
          id: "smackdown-logo-2016-2019",
          title: "SmackDown Live",
          description: "2016 - 2019",
          imgUrl: logo2016,
        },
        {
          id: "smackdown-logo-2019-2025",
          title: "SmackDown",
          description: "2019 - 2025",
          imgUrl: logo2019,
        },
        {
          id: "smackdown-logo-current",
          title: "SmackDown",
          description: "Current",
          imgUrl: logoCurrent,
        },
      ],
    },
  ],
};
