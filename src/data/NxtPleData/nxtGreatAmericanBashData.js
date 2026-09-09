import logoClassic from "../../assets/img/nxtEvents/LogoGAB/TGAB.png";
import logo2025 from "../../assets/img/nxtEvents/LogoGAB/TGAB2025.png";
import logo2026 from "../../assets/img/nxtEvents/LogoGAB/TGAB2026.png";

export const nxtGreatAmericanBashDetail = {
  "nxt-great-american-bash": {
    id: "nxt-great-american-bash",
    title: "NXT The Great American Bash",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "nxt-great-american-bash",
        items: [
          {
            id: "nxt-great-american-bash-2023",
            title: "The Great American Bash",
            description: "2023",
            imgUrl: logoClassic,
          },
          {
            id: "nxt-great-american-bash-2025",
            title: "The Great American Bash",
            description: "Atlanta 2025",
            imgUrl: logo2025,
          },
          {
            id: "nxt-great-american-bash-2026",
            title: "The Great American Bash",
            description: "Orlando 2026",
            imgUrl: logo2026,
          },
        ],
      },
    ],
  },
};
