import { Nunito, Syne } from "next/font/google";

const nunitoFont = Nunito({ subsets: ["latin"], weight: "400" });
const syneFont = Syne({ subsets: ["latin"], weight: "400" });

export const nuito = nunitoFont.className;
export const syne = syneFont.className;

export const header = "Take it to $$ the Creative level";
export const subHeader =
  "High-end digital experiences. Created at the heart of Manhattan, we are a human-sized team.";

export const about =
  "Whereby is the super simple way to connect over video. No downloads or long having into meeting links.";

export const marquee = "Build Your website with softlight Template Today.";

export const navlink = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Work", link: "/work" },
  { name: "News", link: "/news" },
  { name: "Contact", link: "/contact" },
];

export const dscards = [
  {
    img: "/ds/pot1.jpg",
    describtion:
      "High-end digital experiences. Created  the heart Manhattan, we are a should human team driving force.",
  },
  {
    img: "/ds/pot2.jpg",
    describtion:
      "High-end digital experiences. Created  the heart Manhattan, we are a should human team driving force.",
  },
  {
    img: "/ds/pot3.jpg",
    describtion:
      "High-end digital experiences. Created  the heart Manhattan, we are a should human team driving force.",
  },
];

export const procards = [
  { img: "/ds/project (1).png", title: "Website Design" },
  { img: "/ds/project (2).png", title: "Branding Design" },
  { img: "/ds/project (3).png", title: "Design Strategy" },
  { img: "/ds/project (4).png", title: "Different Things" },
  { img: "/ds/project (5).png", title: "Build Website" },
];

export const latests = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    time: "May 25 | 2024",
  },
  {
    id: 2,
    title: "Mobile App Dev - DEPO TECH",

    time: "May 15 | 2024",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    time: "June 6 | 2024",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    time: "April 29 | 2024",
  },
];
