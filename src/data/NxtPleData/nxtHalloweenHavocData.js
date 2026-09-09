import logoClassic from "../../assets/img/nxtEvents/LogoHalloweenHavoc/HalloweenHavoc.png";
import logo2024 from "../../assets/img/nxtEvents/LogoHalloweenHavoc/HalloweenHavoc2024.png";
import logo2025 from "../../assets/img/nxtEvents/LogoHalloweenHavoc/HalloweenHavoc2025.png";

export const nxtHalloweenHavocDetail = {
  "nxt-halloween-havoc": {
    id: "nxt-halloween-havoc",
    title: "NXT Halloween Havoc",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "nxt-halloween-havoc",
        items: [
          {
            id: "nxt-halloween-havoc-2020",
            title: "Halloween Havoc",
            description: "2022",
            imgUrl: logoClassic,
          },
          {
            id: "nxt-halloween-havoc-2024",
            title: "Halloween Havoc",
            description: "2024",
            imgUrl: logo2024,
          },
          {
            id: "nxt-halloween-havoc-2025",
            title: "Halloween Havoc",
            description: "2025",
            imgUrl: logo2025,
          },
        ],
      },
    ],
  },
};
