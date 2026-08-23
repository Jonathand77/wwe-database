import logo1 from "../../assets/img/ple/clash/1.png";
import logo2 from "../../assets/img/ple/clash/2.png";
import logo3 from "../../assets/img/ple/clash/3.png";
import logo4 from "../../assets/img/ple/clash/4.png";

export const clashAtTheCastleDetail = {
  id: "catc",
  title: "Clash at the Castle",
  subtitle: "Explore event editions in a dedicated event view.",
  tabs: [
    {
      id: "logos",
      label: "Editions",
      variant: "clash-at-the-castle",
      items: [
        {
          id: "catc-logo-main",
          title: "Clash at the Castle",
          description: "Cardiff, Gales 2022",
          imgUrl: logo1,
        },
        {
          id: "catc-logo-2",
          title: "Clash at the Castle",
          description: "Glasgow, Scotland 2024",
          imgUrl: logo2,
        },
        {
          id: "catc-logo-3",
          title: "Clash in Paris",
          description: "Paris, France 2025",
          imgUrl: logo3,
        },
        {
          id: "catc-logo-4",
          title: "Clash in Italy",
          description: "Turín, Italy 2026",
          imgUrl: logo4,
        },
      ],
    },
  ],
};
