import logoClassic from "../../assets/img/nxtEvents/LogoHeatwave/Heatwave.png";
import logo2025 from "../../assets/img/nxtEvents/LogoHeatwave/Heatwave2025.png";
import logo2026 from "../../assets/img/nxtEvents/LogoHeatwave/Heatwave2026.png";

export const nxtHeatWaveDetail = {
  "nxt-heat-wave": {
    id: "nxt-heat-wave",
    title: "NXT Heatwave",
    subtitle: "Explore the event editions in a dedicated event view.",
    tabs: [
      {
        id: "editions",
        label: "Editions",
        variant: "nxt-heat-wave",
        items: [
          {
            id: "nxt-heat-wave-2022",
            title: "Heatwave",
            description: "2024",
            imgUrl: logoClassic,
          },
          {
            id: "nxt-heat-wave-2025",
            title: "Heatwave",
            description: "2025",
            imgUrl: logo2025,
          },
          {
            id: "nxt-heat-wave-2026",
            title: "Heatwave",
            description: "Edinburg, Texas 2026",
            imgUrl: logo2026,
          },
        ],
      },
    ],
  },
};
