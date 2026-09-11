import logo2022_2023 from "../../assets/img/nxtEvents/LogoHeatwave/Heatwave2022-2023.png";
import logo2024 from "../../assets/img/nxtEvents/LogoHeatwave/Heatwave2024.png";
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
            description: "NXT special episodes 2022 - 2023",
            imgUrl: logo2022_2023,
          },
          {
            id: "nxt-heat-wave-2024",
            title: "Heatwave",
            description: "2024",
            imgUrl: logo2024,
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
