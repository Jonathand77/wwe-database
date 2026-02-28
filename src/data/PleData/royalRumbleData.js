import logo1 from '../../assets/img/RoyalRumble/Logos/1988.png';
import logo2 from '../../assets/img/RoyalRumble/Logos/1989.png';
import logo3 from '../../assets/img/RoyalRumble/Logos/1990-1994.png';
import logo4 from '../../assets/img/RoyalRumble/Logos/1995.png';
import logo5 from '../../assets/img/RoyalRumble/Logos/1996-1997.png';
import logo6 from '../../assets/img/RoyalRumble/Logos/1998.png';
import logo7 from '../../assets/img/RoyalRumble/Logos/1999.png';
import logo8 from '../../assets/img/RoyalRumble/Logos/2000.png';
import logo9 from '../../assets/img/RoyalRumble/Logos/2001.png';
import logo10 from '../../assets/img/RoyalRumble/Logos/2002.png';
import logo11 from '../../assets/img/RoyalRumble/Logos/2003.png';
import logo12 from '../../assets/img/RoyalRumble/Logos/2004.png';
import logo13 from '../../assets/img/RoyalRumble/Logos/2005.png';
import logo14 from '../../assets/img/RoyalRumble/Logos/2006.png';
import logo15 from '../../assets/img/RoyalRumble/Logos/2007.png';
import logo16 from '../../assets/img/RoyalRumble/Logos/2008.png';
import logo17 from '../../assets/img/RoyalRumble/Logos/2009.png';
import logo18 from '../../assets/img/RoyalRumble/Logos/2010.png';
import logo19 from '../../assets/img/RoyalRumble/Logos/2011.png';
import logo20 from '../../assets/img/RoyalRumble/Logos/2012.png';
import logo21 from '../../assets/img/RoyalRumble/Logos/2013-2014.png';
import logo22 from '../../assets/img/RoyalRumble/Logos/2015.png';
import logo23 from '../../assets/img/RoyalRumble/Logos/2016.png';
import logo24 from '../../assets/img/RoyalRumble/Logos/2017-2018.png';
import logo25 from '../../assets/img/RoyalRumble/Logos/2019-2020.png';
import logo26 from '../../assets/img/RoyalRumble/Logos/2021.png';
import logo27 from '../../assets/img/RoyalRumble/Logos/2022-2024.png';
import logo28 from '../../assets/img/RoyalRumble/Logos/2025.png';
import logo29 from '../../assets/img/RoyalRumble/Logos/2026.png';

import winner1 from '../../assets/img/RoyalRumble/Winners/JimDuggan.png';
import winner2 from '../../assets/img/RoyalRumble/Winners/BigJohnStudd.webp';
import winner3 from '../../assets/img/RoyalRumble/Winners/HulkHogan.png';
import winner5 from '../../assets/img/RoyalRumble/Winners/RicFlair.png';
import winner6 from '../../assets/img/RoyalRumble/Winners/Yokozuna.png';
import winner7 from '../../assets/img/RoyalRumble/Winners/Hart&Luger.png';
import winner8 from '../../assets/img/RoyalRumble/Winners/ShawnMichaels.png';
import winner10 from '../../assets/img/RoyalRumble/Winners/StoneCold.png';
import winner12 from '../../assets/img/RoyalRumble/Winners/Vince.png';
import winner13 from '../../assets/img/RoyalRumble/Winners/Rock.png';
import winner14 from '../../assets/img/RoyalRumble/Winners/SteveAustin.png';
import winner15 from '../../assets/img/RoyalRumble/Winners/TripleH.png';
import winner16 from '../../assets/img/RoyalRumble/Winners/BrockLesnar.png';
import winner17 from '../../assets/img/RoyalRumble/Winners/ChrisBenoit.png';
import winner18 from '../../assets/img/RoyalRumble/Winners/Batista.png';
import winner19 from '../../assets/img/RoyalRumble/Winners/ReyMysterio.png';
import winner20 from '../../assets/img/RoyalRumble/Winners/Undertaker.png';
import winner21 from '../../assets/img/RoyalRumble/Winners/JohnCena.png';
import winner22 from '../../assets/img/RoyalRumble/Winners/RandyOrton.png';
import winner23 from '../../assets/img/RoyalRumble/Winners/Edge.png';
import winner24 from '../../assets/img/RoyalRumble/Winners/Alberto.png';
import winner25 from '../../assets/img/RoyalRumble/Winners/Sheamus.png';
import winner26 from '../../assets/img/RoyalRumble/Winners/JohnCena2.png';
import winner27 from '../../assets/img/RoyalRumble/Winners/Batista2.png';
import winner28 from '../../assets/img/RoyalRumble/Winners/RomanReigns.png';
import winner29 from '../../assets/img/RoyalRumble/Winners/TripleH2.png';
import winner30 from '../../assets/img/RoyalRumble/Winners/RandyOrton2.png';
import winner31 from '../../assets/img/RoyalRumble/Winners/ShinsukeNakamura.png';
import winner32 from '../../assets/img/RoyalRumble/Winners/SethRollins.png';
import winner33 from '../../assets/img/RoyalRumble/Winners/DrewMcIntyre.png';
import winner34 from '../../assets/img/RoyalRumble/Winners/Edge2.png';
import winner35 from '../../assets/img/RoyalRumble/Winners/BrockLesnar2.png';
import winner36 from '../../assets/img/RoyalRumble/Winners/CodyRhodes.png';
import winner38 from '../../assets/img/RoyalRumble/Winners/JeyUso.webp';
import winner39 from '../../assets/img/RoyalRumble/Winners/RomanReigns2.png';

export const royalRumbleEventDetails = {
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
          { id: 'mens-rumble', title: 'Jim Duggan', description: '1988', imgUrl: winner1 },
          { id: 'mens-rumble', title: 'Big John Studd', description: '1989', imgUrl: winner2 },
          { id: 'mens-rumble', title: 'Hulk Hogan', description: '1990 - 1991', imgUrl: winner3 },
          { id: 'mens-rumble', title: 'Ric Flair', description: '1992', imgUrl: winner5 },
          { id: 'mens-rumble', title: 'Yokozuna', description: '1993', imgUrl: winner6 },
          { id: 'mens-rumble', title: 'Bret Hart & Lex Luger', description: '1994', imgUrl: winner7 },
          { id: 'mens-rumble', title: 'Shawn Michaels', description: '1995 - 1996', imgUrl: winner8 },
          { id: 'mens-rumble', title: '´Stone Cold´ Steve Austin', description: '1997 - 1998', imgUrl: winner10 },
          { id: 'mens-rumble', title: 'Vince McMahon', description: '1999', imgUrl: winner12 },
          { id: 'mens-rumble', title: 'The Rock', description: '2000', imgUrl: winner13 },
          { id: 'mens-rumble', title: '´Stone Cold´ Steve Austin', description: '2001', imgUrl: winner14 },
          { id: 'mens-rumble', title: 'Triple H', description: '2002', imgUrl: winner15 },
          { id: 'mens-rumble', title: 'Brock Lesnar', description: '2003', imgUrl: winner16 },
          { id: 'mens-rumble', title: 'Chris Benoit', description: '2004', imgUrl: winner17 },
          { id: 'mens-rumble', title: 'Batista', description: '2005', imgUrl: winner18 },
          { id: 'mens-rumble', title: 'Rey Mysterio', description: '2006', imgUrl: winner19 },
          { id: 'mens-rumble', title: 'The Undertaker', description: '2007', imgUrl: winner20 },
          { id: 'mens-rumble', title: 'John Cena', description: '2008', imgUrl: winner21 },
          { id: 'mens-rumble', title: 'Randy Orton', description: '2009', imgUrl: winner22 },
          { id: 'mens-rumble', title: 'Edge', description: '2010', imgUrl: winner23 },
          { id: 'mens-rumble', title: 'Alberto Del Rio', description: '2011', imgUrl: winner24 },
          { id: 'mens-rumble', title: 'Sheamus', description: '2012', imgUrl: winner25 },
          { id: 'mens-rumble', title: 'John Cena', description: '2013', imgUrl: winner26 },
          { id: 'mens-rumble', title: 'Batista', description: '2014', imgUrl: winner27 },
          { id: 'mens-rumble', title: 'Roman Reigns', description: '2015', imgUrl: winner28 },
          { id: 'mens-rumble', title: 'Triple H', description: '2016', imgUrl: winner29 },
          { id: 'mens-rumble', title: 'Randy Orton', description: '2017', imgUrl: winner30 },
          { id: 'mens-rumble', title: 'Shinsuke Nakamura', description: '2018', imgUrl: winner31 },
          { id: 'mens-rumble', title: 'Seth Rollins', description: '2019', imgUrl: winner32 },
          { id: 'mens-rumble', title: 'Drew McIntyre', description: '2020', imgUrl: winner33 },
          { id: 'mens-rumble', title: 'Edge', description: '2021', imgUrl: winner34 },
          { id: 'mens-rumble', title: 'Brock Lesnar', description: '2022', imgUrl: winner35 },
          { id: 'mens-rumble', title: 'Cody Rhodes', description: '2023 - 2024', imgUrl: winner36 },
          { id: 'mens-rumble', title: 'Jey Uso', description: '2025', imgUrl: winner38 },
          { id: 'mens-rumble', title: 'Roman Reigns', description: '2026', imgUrl: winner39 },
        ],
      },
      {
        id: 'logos',
        label: 'Logos',
        variant: 'royal-rumble',
        items: [
          { id: 'logo', title: 'Royal Rumble', description: '1988', imgUrl: logo1 },
          { id: 'logo', title: 'Royal Rumble', description: '1989', imgUrl: logo2 },
          { id: 'logo', title: 'Royal Rumble', description: '1990 - 1994', imgUrl: logo3 },
          { id: 'logo', title: 'Royal Rumble', description: '1995', imgUrl: logo4 },
          { id: 'logo', title: 'Royal Rumble', description: '1996 - 1997', imgUrl: logo5 },
          { id: 'logo', title: 'Royal Rumble', description: '1998', imgUrl: logo6 },
          { id: 'logo', title: 'Royal Rumble', description: '1999', imgUrl: logo7 },
          { id: 'logo', title: 'Royal Rumble', description: '2000', imgUrl: logo8 },
          { id: 'logo', title: 'Royal Rumble', description: '2001', imgUrl: logo9 },
          { id: 'logo', title: 'Royal Rumble', description: '2002', imgUrl: logo10 },
          { id: 'logo', title: 'Royal Rumble', description: '2003', imgUrl: logo11 },
          { id: 'logo', title: 'Royal Rumble', description: '2004', imgUrl: logo12 },
          { id: 'logo', title: 'Royal Rumble', description: '2005', imgUrl: logo13 },
          { id: 'logo', title: 'Royal Rumble', description: '2006', imgUrl: logo14 },
          { id: 'logo', title: 'Royal Rumble', description: '2007', imgUrl: logo15 },
          { id: 'logo', title: 'Royal Rumble', description: '2008', imgUrl: logo16 },
          { id: 'logo', title: 'Royal Rumble', description: '2009', imgUrl: logo17 },
          { id: 'logo', title: 'Royal Rumble', description: '2010', imgUrl: logo18 },
          { id: 'logo', title: 'Royal Rumble', description: '2011', imgUrl: logo19 },
          { id: 'logo', title: 'Royal Rumble', description: '2012', imgUrl: logo20 },
          { id: 'logo', title: 'Royal Rumble', description: '2013 - 2014', imgUrl: logo21 },
          { id: 'logo', title: 'Royal Rumble', description: '2015', imgUrl: logo22 },
          { id: 'logo', title: 'Royal Rumble', description: '2016', imgUrl: logo23 },
          { id: 'logo', title: 'Royal Rumble', description: '2017 - 2018', imgUrl: logo24 },
          { id: 'logo', title: 'Royal Rumble', description: '2019 - 2020', imgUrl: logo25 },
          { id: 'logo', title: 'Royal Rumble', description: '2021', imgUrl: logo26 },
          { id: 'logo', title: 'Royal Rumble', description: '2022 - 2024', imgUrl: logo27 },
          { id: 'logo', title: 'Royal Rumble', description: '2025', imgUrl: logo28 },
          { id: 'logo', title: 'Royal Rumble', description: '2026', imgUrl: logo29 },
        ],
      },
    ],
  },
};
