import logo2023 from "../../assets/img/nxtEvents/LogoBattleground/Battleground.png";
import logo2024 from "../../assets/img/nxtEvents/LogoBattleground/Battleground2024.png";
import logo2025 from "../../assets/img/nxtEvents/LogoBattleground/Battleground2025.png";

export const nxtBattlegroundDetail = {
  "nxt-battleground": {
    id: "nxt-battleground",
    title: "NXT Battleground",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "nxt-battleground",
        items: [
          {
            id: "nxt-battleground-2023",
            title: "Battleground",
            description: "2023",
            imgUrl: logo2023,
          },
          {
            id: "nxt-battleground-2024",
            title: "Battleground",
            description: "From UFC APEX 2024",
            imgUrl: logo2024,
          },
          {
            id: "nxt-battleground-2025",
            title: "Battleground",
            description: "Tampa 2025",
            imgUrl: logo2025,
          },
        ],
      },
    ],
  },
};
