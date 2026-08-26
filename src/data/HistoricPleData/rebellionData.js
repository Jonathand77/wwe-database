import logo1999_2000 from "../../assets/img/historicEvents/LogoRebellion/1999-2000.png";
import logo2001_2002 from "../../assets/img/historicEvents/LogoRebellion/2001-2002.png";

export const rebellionDetail = {
  rebellion: {
    id: "rebellion",
    title: "Rebellion",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "rebellion",
        items: [
          {
            id: "rebellion-1999",
            title: "Rebellion",
            description: "1999 - 2000",
            imgUrl: logo1999_2000,
          },
          {
            id: "rebellion-2001",
            title: "Rebellion",
            description: "Manchester Divided 2001",
            imgUrl: logo2001_2002,
          },
          {
            id: "rebellion-2002",
            title: "Rebellion",
            description: "2002",
            imgUrl: logo2001_2002,
          },
        ],
      },
    ],
  },
};
