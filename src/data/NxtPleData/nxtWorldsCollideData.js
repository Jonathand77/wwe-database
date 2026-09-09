import logo2019 from "../../assets/img/nxtEvents/LogoWorldsCollide/2019WC.png";
import logo2020 from "../../assets/img/nxtEvents/LogoWorldsCollide/2020WC.png";
import logoModern from "../../assets/img/nxtEvents/LogoWorldsCollide/WorldsCollide.png";

export const nxtWorldsCollideDetail = {
  "nxt-worlds-collide": {
    id: "nxt-worlds-collide",
    title: "NXT Worlds Collide",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "nxt-worlds-collide",
        items: [
          {
            id: "nxt-worlds-collide-2019",
            title: "Worlds Collide",
            description: "NXT Vs. NXT UK Vs. 205 Live 2019",
            imgUrl: logo2019,
          },
          {
            id: "nxt-worlds-collide-2020",
            title: "Worlds Collide",
            description: "NXT Vs. NXT UK 2020",
            imgUrl: logo2020,
          },
          {
            id: "nxt-worlds-collide-2024",
            title: "Worlds Collide",
            description: "2022",
            imgUrl: logoModern,
          },
        ],
      },
    ],
  },
};
