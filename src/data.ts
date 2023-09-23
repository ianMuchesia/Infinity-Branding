import {
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobelightroom,
  SiAdobepremierepro,
} from "react-icons/si";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineBlock,
} from "react-icons/ai";

import { FaDiceD20, FaCube, FaUsersGear } from "react-icons/fa6";

const data = {
  pageSections: ["about", "projects", "skills"],
  skills: [
    "photoshop",
    "XD",
    "illustrator",
    "after effects",
    "premiere pro",
    "indesign",
    "lightroom",
    "figma",
  ],
  tools: [
    {
      name: "photoshop",
      percentage: 90,
      id: 1,
      icon: SiAdobephotoshop,
    },
    {
      name: "XD",
      percentage: 90,
      id: 2,
      icon: SiAdobexd,
    },
    {
      name: "illustrator",
      percentage: 90,
      id: 3,
      icon: SiAdobeillustrator,
    },
    {
      name: "after effects",
      percentage: 90,
      id: 4,
      icon: SiAdobeaftereffects,
    },
    {
      name: "premiere pro",
      percentage: 90,
      id: 5,
      icon: SiAdobepremierepro,
    },
    {
      name: "indesign",
      percentage: 90,
      id: 6,
      icon: SiAdobeindesign,
    },
    {
      name: "lightroom",
      percentage: 90,
      id: 7,
      icon: SiAdobelightroom,
    },
  ],
  socials: [
    {
      name: "facebook",
      id: 1,
      url: "https://www.facebook.com/",
      icon: AiFillFacebook,
    },
    {
      name: "instagram",
      id: 2,
      url: "https://www.instagram.com/",
      icon: AiFillTwitterCircle,
    },
    {
      name: "twitter",

      id: 3,
      url: "https://twitter.com/",
      icon: AiFillInstagram,
    },
  ],
  cards: [
    {
      id: 1,
      title: " Design and Branding",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptate.",
      icon: FaDiceD20,
    },
    {
      id: 2,
      title: "Branding Strategy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptate.",
      icon: FaCube,
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptate.",
      icon: FaUsersGear,
    },
  ],
  team:[
    {
      id:1,
      name:"Douglas Atiya",
      position:"CEO",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptate.",
      src:"/image_1.jpg",
    },
    {
      id:2,
      name:"Hillary Ouma",
      position:"Product Manager",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptate.",
      src:"/image_7.jpg",
    },
    {
      id:3,
      name:"Msodoki Mwanza Mwanza",
      position:"Software Developer",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptate.",
      src:"/image_3.jpg",
    },

  ]
};

export default data;
