import logo1997 from "../../assets/img/historicEvents/LogoIYH/1997_18.png";
import logo2003 from "../../assets/img/historicEvents/LogoBadBlood/2003.png";
import logo2004 from "../../assets/img/historicEvents/LogoBadBlood/2004.png";
import logo2024 from "../../assets/img/historicEvents/LogoBadBlood/2024.png";

export const badBloodDetail = {
  "bad-blood": {
    id: "bad-blood",
    title: "Bad Blood",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "bad-blood",
        items: [
          {
            id: "bad-blood-1997",
            title: "Bad Blood",
            description: "In Your House 1997",
            imgUrl: logo1997,
          },
          {
            id: "bad-blood-2003",
            title: "Bad Blood",
            description: "2003",
            imgUrl: logo2003,
          },
          {
            id: "bad-blood-2004",
            title: "Bad Blood",
            description: "He's Back. Watch Yours. 2004",
            imgUrl: logo2004,
          },
          {
            id: "bad-blood-2024",
            title: "Bad Blood",
            description: "Atlanta 2024",
            imgUrl: logo2024,
          },
        ],
      },
    ],
  },
};
