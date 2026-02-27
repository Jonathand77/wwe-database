import rawLogo from '../assets/img/Brands/BrandRaw.png';
import smackdownLogo from '../assets/img/Brands/BrandSM.png';
import nxtLogo from '../assets/img/Brands/BrandNXT.png';
import logo from '../assets/img/Banners/LogoPrueba.png';

import winner1 from '../assets/img/Champions/WorldChampion.png';
import winner2 from '../assets/img/Champions/WWEChampion.png';
import winner3 from '../assets/img/Champions/USChampion.png';
import winner4 from '../assets/img/Champions/WWEWomenChampion.png';

export const eventDetails = {
  'royal-rumble': {
    id: 'royal-rumble',
    title: 'Royal Rumble',
    subtitle: 'Explore winners and event logos in a dedicated event view.',
    tabs: [
      {
        id: 'winners',
        label: 'Winners',
        variant: 'royal-rumble',
        items: [
          { id: 'mens-rumble', title: 'Men’s Rumble Winner', description: 'Main Match Winner', imgUrl: winner1 },
          { id: 'womens-rumble', title: 'Women’s Rumble Winner', description: 'Main Match Winner', imgUrl: winner4 },
          { id: 'universal-highlight', title: 'Main Event Winner', description: 'Title Match Winner', imgUrl: winner2 },
          { id: 'midcard-highlight', title: 'Special Match Winner', description: 'Featured Bout Winner', imgUrl: winner3 },
        ],
      },
      {
        id: 'logos',
        label: 'Logos',
        variant: 'royal-rumble',
        items: [
          { id: 'logo', title: 'Royal Rumble', description: 'Official Event Logo', imgUrl: logo },
          { id: 'raw-brand', title: 'RAW', description: 'Participating Brand', imgUrl: rawLogo },
          { id: 'smackdown-brand', title: 'SmackDown', description: 'Participating Brand', imgUrl: smackdownLogo },
          { id: 'nxt-brand', title: 'NXT', description: 'Participating Brand', imgUrl: nxtLogo },
        ],
      },
    ],
  },
};

export const getEventDetailById = (eventId) => eventDetails[eventId] || null;

export const hasEventDetail = (eventId) => Boolean(eventDetails[eventId]);
