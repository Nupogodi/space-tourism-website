import LaunchLandscape from "assets/images/technology/image-launch-vehicle-landscape.jpg";
import LaunchPortrait from "assets/images/technology/image-launch-vehicle-portrait.jpg";
import SpaceportLandscape from "assets/images/technology/image-spaceport-landscape.jpg";
import SpaceportPortrait from "assets/images/technology/image-spaceport-portrait.jpg";
import SpaceCapsuleLandscape from "assets/images/technology/image-space-capsule-landscape.jpg";
import SpaceCapsulePortrait from "assets/images/technology/image-space-capsule-portrait.jpg";

export const TECHNOLOGIES = {
  launchVehicle: {
    id: 1,
    title: "Launch Vehicle",
    image: {
      src: {
        mobile: LaunchLandscape,
        desktop: LaunchPortrait,
      },
      alt: "Launch Vehicle",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  spaceport: {
    id: 2,
    title: "Spaceport",
    image: {
      src: {
        mobile: SpaceportLandscape,
        desktop: SpaceportPortrait,
      },
      alt: "Spaceport",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  spaceCapsule: {
    id: 3,
    title: "Space Capsule",
    image: {
      src: {
        mobile: SpaceCapsuleLandscape,
        desktop: SpaceCapsulePortrait,
      },
      alt: "Space Capsule",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};

export const TECHNOLOGIES_ARRAY = Object.values(TECHNOLOGIES);
