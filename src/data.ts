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
} from "react-icons/ai";

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
};

export default data;
