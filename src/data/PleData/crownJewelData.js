import logo1 from "../../assets/img/CrownJewel/Logos/2019-2020.png";
import logo2 from "../../assets/img/CrownJewel/Logos/2021-2024.png";
import logo3 from "../../assets/img/CrownJewel/Logos/2025.png";

import winner1 from "../../assets/img/CrownJewel/Winners/GRRTitle.png";
import winner2 from "../../assets/img/CrownJewel/Winners/GRRTrophy.png";
import winner3 from "../../assets/img/CrownJewel/Winners/TagTeamWorldCup.png";
import winner5 from "../../assets/img/CrownJewel/Winners/TuwaiqMountainTrophy.png";
import winner4 from "../../assets/img/CrownJewel/Winners/WorldCup.png";
import winner6 from "../../assets/img/CrownJewel/Winners/CodyRhodes.png";
import winner7 from "../../assets/img/CrownJewel/Winners/SethRollins.png";

export const crownJewelDetail = {
  id: "crown-jewel",
  title: "Crown Jewel",
  subtitle: "Explore winners and event editions in a dedicated event view.",
  tabs: [
    {
      id: "winners",
      label: "Winners",
      variant: "crown-jewel",
      items: [
        {
          id: "cj-winner-GRRTitle",
          title: "Greatest Royal Rumble Title",
          description: "Braun Strowman 2018",
          imgUrl: winner1,
        },
        {
          id: "cj-winner-GRRTrophy",
          title: "Greatest Royal Rumble Trophy",
          description: "Braun Strowman",
          imgUrl: winner2,
        },
        {
          id: "cj-winner-WorldCup",
          title: "Best In The World Cup",
          description: "Shane McMahon 2018",
          imgUrl: winner4,
        },
        {
          id: "cj-winner-TagCup",
          title: "Tag Team World Cup",
          description: "The O.C. (Karl Anderson & Luke Gallows) 2019",
          imgUrl: winner3,
        },
        {
          id: "cj-winner-TuwaiqTrophy",
          title: "Tuwaiq Mountain Trophy",
          description: "The Undertaker 2020",
          imgUrl: winner5,
        },
        {
          id: "cj-winner-CodyRhodes",
          title: "Crown Jewel Champion",
          description: "Cody Rhodes 2024",
          imgUrl: winner6,
        },
        {
          id: "cj-winner-SethRollins",
          title: "Crown Jewel Champion",
          description: "Seth Rollins 2025",
          imgUrl: winner7,
        },
      ],
    },
    {
      id: "logos",
      label: "Logos",
      variant: "crown-jewel",
      items: [
        {
          id: "crown-jewel-logo-main",
          title: "Crown Jewel",
          description: "2018 - 2019",
          imgUrl: logo1,
        },
        {
          id: "crown-jewel-logo-2021-2024",
          title: "Crown Jewel",
          description: "2021-2024",
          imgUrl: logo2,
        },
        {
          id: "crown-jewel-logo-2025",
          title: "Crown Jewel",
          description: "2025",
          imgUrl: logo3,
        },
      ],
    },
  ],
};



