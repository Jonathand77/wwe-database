import worldChampion from '../../assets/img/ImgRoster/Champions/WorldChampion.png';
import wweChampion from '../../assets/img/ImgRoster/Champions/WWEChampion.png';
import usChampion from '../../assets/img/ImgRoster/Champions/USChampion.png';
import icChampion from '../../assets/img/ImgRoster/Champions/ICChampion.png';
import wweTagChampions from '../../assets/img/ImgRoster/Champions/WWETagChampions.png';
import worldTagChampions from '../../assets/img/ImgRoster/Champions/WorldTagChampions.png';
import worldWomenChampion from '../../assets/img/ImgRoster/Champions/WorldWomenChampion.png';
import wweWomenChampion from '../../assets/img/ImgRoster/Champions/WWEWomenChampion.png';
import womenTagChampions from '../../assets/img/ImgRoster/Champions/TagWomensChampions.png';
import nxtChampion from '../../assets/img/ImgRoster/Champions/NXTChampion.png';
import northAmericanChampion from '../../assets/img/ImgRoster/Champions/NAChampion.png';
import nxtTagChampions from '../../assets/img/ImgRoster/Champions/NXTTagChampions.png';
import nxtWomenChampion from '../../assets/img/ImgRoster/Champions/NXTWomenChampion.png';
import nxtWomenNaChampion from '../../assets/img/ImgRoster/Champions/NAWomenChampion.png';

import brayWyatt from '../../assets/img/ImgRoster/Wyatt/BrayWyatt.png';
import uncleHowdy from '../../assets/img/ImgRoster/Wyatt/UncleHowdy.png';
import lukeHarper from '../../assets/img/ImgRoster/Wyatt/LukeHarper.png';
import erickRowan from '../../assets/img/ImgRoster/Wyatt/Rowan.png';
import braunStrowman from '../../assets/img/ImgRoster/Wyatt/Strowman.png';
import dexterLumis from '../../assets/img/ImgRoster/Wyatt/DexterLumis.png';
import joeGacy from '../../assets/img/ImgRoster/Wyatt/JoeGacy.png';
import nikkiCross from '../../assets/img/ImgRoster/Wyatt/Nikki.png';
import wyattSicks from '../../assets/img/ImgRoster/Wyatt/WyattSicks.png';

import soloSikoa from '../../assets/img/ImgRoster/MFT/SoloSikoa.png';
import tamaTonga from '../../assets/img/ImgRoster/MFT/TamaTonga.png';
import tongaLoa from '../../assets/img/ImgRoster/MFT/TangaLoa.png';
import jcMateo from '../../assets/img/ImgRoster/MFT/JCMateo.png';
import tallaTonga from '../../assets/img/ImgRoster/MFT/TallaTonga.png';
import mft from '../../assets/img/ImgRoster/MFT/MFT.png';

export const rosterTabs = [
  {
    id: 'first',
    label: 'Champions',
    variant: 'champions',
    items: [
      { id: 'cm-punk', 
        title: 'CM Punk', 
        description: 'World Champion', 
        imgUrl: worldChampion 
      },
      { id: 'drew-mcintyre', 
        title: 'Drew McIntyre', 
        description: 'WWE Champion', 
        imgUrl: wweChampion 
      },
      {
        id: 'carmelo-hayes',
        title: 'Carmelo Hayes',
        description: 'United States Champion',
        imgUrl: usChampion,
      },
      {
        id: 'dominik-mysterio',
        title: '´Dirty´ Dominik Mysterio',
        description: 'Intercontinental Champion',
        imgUrl: icChampion,
      },
      { id: 'mft-tag', 
        title: 'MFT', 
        description: 'WWE Tag Team Champions', 
        imgUrl: wweTagChampions 
      },
      {
        id: 'usos',
        title: 'The Usos',
        description: 'World Tag Team Champions',
        imgUrl: worldTagChampions,
      },
      {
        id: 'stephanie-vaquer',
        title: 'Stephanie Vaquer',
        description: 'World Women´s Champion',
        imgUrl: worldWomenChampion,
      },
      { id: 'jade-cargill', 
        title: 'Jade Cargill', 
        description: 'WWE Women´s Champion', 
        imgUrl: wweWomenChampion 
      },
      {
        id: 'rhio',
        title: 'Rhio',
        description: 'World Tag Team Women´s Champions',
        imgUrl: womenTagChampions,
      },
      { id: 'joe-hendry', 
        title: 'Joe Hendry', 
        description: 'NXT Champion', 
        imgUrl: nxtChampion 
      },
      {
        id: 'ethan-page',
        title: 'Ethan Page',
        description: 'NXT North American Champion',
        imgUrl: northAmericanChampion,
      },
      { id: 'darkstate', 
        title: 'DarkState', 
        description: 'NXT Tag Team Champions', 
        imgUrl: nxtTagChampions 
      },
      {
        id: 'jacy-jayne',
        title: 'Jacy Jayne',
        description: 'NXT Women´s Champion',
        imgUrl: nxtWomenChampion,
      },
      {
        id: 'izzi-dame',
        title: 'Izzi Dame',
        description: 'NXT Women´s North American Champion',
        imgUrl: nxtWomenNaChampion,
      },
    ],
  },
  {
    id: 'second',
    label: 'Wyatts',
    variant: 'wyatts',
    items: [
      { id: 'bray-wyatt', 
        title: 'Bray Wyatt', 
        description: 'Wyatt Patriarch', 
        imgUrl: brayWyatt 
      },
      { id: 'uncle-howdy', 
        title: 'Uncle Howdy', 
        description: 'Wyatt Sicks Leader', 
        imgUrl: uncleHowdy 
      },
      { id: 'luke-harper', 
        title: 'Luke Harper', 
        description: 'Wyatt Son', 
        imgUrl: lukeHarper 
      },
      { id: 'erick-rowan', 
        title: 'Erick Rowan', 
        description: 'Ramblin´ Rabbit', 
        imgUrl: erickRowan 
      },
      { id: 'braun-strowman', 
        title: 'Braun Strowman', 
        description: 'The Black Sheep', 
        imgUrl: braunStrowman 
      },
      { id: 'dexter-lumis', 
        title: 'Dexter Lumis', 
        description: 'Mercy The Buzzard', 
        imgUrl: dexterLumis 
      },
      { id: 'joe-gacy', 
        title: 'Joe Gacy', 
        description: 'Huskus The Pig', 
        imgUrl: joeGacy 
      },
      { id: 'nikki-cross', 
        title: 'Nikki Cross', 
        description: 'Abby The Witch', 
        imgUrl: nikkiCross 
      },
      { id: 'wyatt-sicks', 
        title: 'Wyatt Sicks', 
        description: 'Faction', 
        imgUrl: wyattSicks 
      },
    ],
  },
  {
    id: 'third',
    label: 'MFT',
    variant: 'mft',
    items: [
      { id: 'solo-sikoa', 
        title: 'Solo Sikoa', 
        description: 'MFT Leader', 
        imgUrl: soloSikoa 
      },
      { id: 'tama-tonga', 
        title: 'Tama Tonga', 
        description: 'MFT Right Hand', 
        imgUrl: tamaTonga 
      },
      { id: 'tonga-loa', 
        title: 'Tanga Loa', 
        description: 'MFT Member', 
        imgUrl: tongaLoa 
      },
      { id: 'jc-mateo', 
        title: 'JC Mateo', 
        description: 'MFT Member', 
        imgUrl: jcMateo 
      },
      { id: 'talla-tonga', 
        title: 'Talla Tonga', 
        description: 'MFT Enforcer', 
        imgUrl: tallaTonga 
      },
      { id: 'mft', 
        title: 'MFT', 
        description: 'My Family Tree', 
        imgUrl: mft 
      },
    ],
  },
];


