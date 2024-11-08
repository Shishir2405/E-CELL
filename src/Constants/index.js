import { eSummit, c2, c1, b3, b2, b1, a1, a2, a3 } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "mission",
    title: "Mission",
  },
  {
    id: "vision",
    title: "Vision",
  },

  {
    id: "event",
    title: "Events",
  },

  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "contact",
    title: "Contact",
  },

  // {
  //   id: "/team",
  //   title: "Team",
  // },
  // {
  //   id: "https://docs.google.com/forms/d/e/1FAIpQLSckw7XDF13EV4DMprYjhzg9AgT4ICu6AWbHlztlOgG-LKgZEg/viewform?vc=0&c=0&w=1&flr=0",
  //   title: "Register",
  // },
];
const events = [
  {
    title: "Induction Program",
    icon: eSummit,
    iconBg: "#383E56",
    date: "19 September 2024",
    points: [
      "Empowering first-year students with entrepreneurial insights, fostering innovation, and setting the stage for future startup leaders.",
    ],
    site: "https://www.google.com/",
  },

  {
    title: "Pitching Contest",
    icon: eSummit,
    iconBg: "#383E56",
    date: "4 October 2024",
    points: [
      "Organized a pitching competition to promote entrepreneurship at IPS Academy, providing early-stage startups with a platform to gain exposure and network with mentors.",
    ],
    site: "https://www.google.com/",
  },
];

// const teams = {
//   lead: [
//     {
//       name: "Pratikash Panda",
//       designation: "Co-ordinator",
//       url: Pratikash,
//       ilink: "#",
//       flink: "#",
//       llink: "#",
//       tlink: "#",
//     },
//     {
//       name: "Shradha Mohapatra ",
//       designation: "Assistant Coordinator ",
//       url: Shradha,
//       ilink: "https://instagram.com/__shradha_032?igshid=Y2M0YTlkZGNmOQ==",
//       flink: "#",
//       llink: "https://www.linkedin.com/in/shradha-mohapatra-818b05238",
//       tlink: "#",
//     },
//     ,
//   ],
// };

const GalleryData = [
  {
    id: 1,
    titile: "TedX",
    image: a1,
  },
  {
    id: 2,
    titile: "TedX",
    image: a2,
  },
  {
    id: 3,
    titile: "TedX",
    image: a3,
  },
  {
    id: 4,
    titile: "Innobuzz",
    image: b1,
  },
  {
    id: 5,
    titile: "Innobuzz",
    image: b2,
  },
  {
    id: 6,
    titile: "Innobuzz",
    image: b3,
  },
  {
    id: 7,
    titile: "Family",
    image: c1,
  },
  {
    id: 8,
    titile: "Family",
    image: c2,
  },
];

export { events, GalleryData };
