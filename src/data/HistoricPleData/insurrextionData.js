import logo2000_2001 from "../../assets/img/historicEvents/LogoInsurrextion/2000-2001.png";
import logo2002_2003 from "../../assets/img/historicEvents/LogoInsurrextion/2002-2003.png";

export const insurrextionDetail = {
  insurrextion: {
    id: "insurrextion",
    title: "Insurrextion",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "insurrextion",
        items: [
          {
            id: "insurrextion-2000",
            title: "Insurrextion",
            description: "London Bridge isn't the only thing Falling Down 2000",
            imgUrl: logo2000_2001,
          },
          {
            id: "insurrextion-2001",
            title: "Insurrextion",
            description: "2001",
            imgUrl: logo2000_2001,
          },
          {
            id: "insurrextion-2002",
            title: "Insurrextion",
            description: "2002 - 2003",
            imgUrl: logo2002_2003,
          },
        ],
      },
    ],
  },
};
