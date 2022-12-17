import Douglas from 'assets/images/crew/image-douglas-hurley.webp';
import Ansari from 'assets/images/crew/image-anousheh-ansari.webp';
import Mark from 'assets/images/crew/image-mark-shuttleworth.webp';
import Victor from 'assets/images/crew/image-victor-glover.webp';

export const CREW_MEMBERS = {
  douglas: {
    id: 1,
    name: 'Douglas Hurley',
    image: {
      src: Douglas,
      alt: 'Douglas Hurley',
    },
    role: 'Commander',
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  mark: {
    id: 2,
    name: 'Mark Shuttleworth',
    image: {
      src: Mark,
      alt: 'Mark Shuttleworth',
    },
    role: 'Mission Specialist',
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  victor: {
    id: 3,
    name: 'Victor Glover',
    image: {
      src: Victor,
      alt: 'Victor Glover',
    },
    role: 'Pilot',
    description:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  },
  ansari: {
    id: 4,
    name: 'Anousheh Ansari',
    image: {
      src: Ansari,
      alt: 'nousheh Ansari',
    },
    role: 'Flight Engineer',
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
};
