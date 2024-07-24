import { DiMongodb } from "react-icons/di";
import { FaCode, FaNode, FaPalette, FaReact } from "react-icons/fa";
import { GiPuzzle } from "react-icons/gi";
import { SiExpress } from "react-icons/si";

const BOOTSTRAP_FOR_SKILL_ICON =
  "text-4xl mx-auto inline-block text-typescript dark:text-vscode-green";
const data: {
  name: string;

  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  about: {
    title: string;
    description: string;
  };
  skills: {
    skillName: string;
    skillIcon: JSX.Element;
  }[];
  projects: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    source: string;
  }[];
} = {
  name: "Merrill Koshy Thomas",

  social: {
    github: "https://github.com/merrillkoshy",
    linkedin: "https://www.linkedin.com/in/merrill-koshy-thomas/",
    email: "mailto:merrillkoshy@gmail.com",
  },
  about: {
    title: "My Background",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper porta pharetra. Nunc porta dui eu mattis laoreet. Quisque lobortis orci sagittis, luctus ligula nec, sagittis leo. Ut convallis eu mi dignissim facilisis. Donec egestas vitae sapien quis bibendum. Sed rhoncus aliquet felis, ac cursus dui varius sit amet. Etiam eu nisi ligula. Sed sagittis massa a metus pulvinar, eu vestibulum nulla molestie. Nullam luctus sit amet felis quis ullamcorper. ",
  },
  skills: [
    {
      skillName: "MongoDB",
      skillIcon: <DiMongodb className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ExpressJS",
      skillIcon: <SiExpress className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "NodeJS",
      skillIcon: <FaNode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "UI/UX",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },

    {
      skillName: "Project Management",
      skillIcon: <GiPuzzle className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],

  projects: [
    {
      title: "Incomlend",
      description:
        "FinTech Platform architecture, development & tooling - Incomlend supports global trade by giving access to working capital to SMEs around the world. The platform is an intuitive PWA, offering users a real-time update on their trade financing application.",
      tags: [
        "ReactJS",
        "TypeScript",
        "PWA",
        "MUI",
        "Formik",
        "Storybook",
        "NPM",
        "RollupJS",
        "ESLint",
        "Postgres-Python",
      ],
      link: "https://app.incomlend.com",
      source: "/projects/incomlend.png",
    },
    {
      title: "LCLite",
      description:
        "Web3 FinTech Platform tooling - LC Lite is a blockchain-enabled platform digitizing global trade receivables finance through a unique token-powered transaction mechanism",
      tags: [
        "ReactJS",
        "TypeScript",
        "Storybook",
        "JSDoc",
        "ESLint",
        "Webpack",
        "RollupJS",
        "NPM",
        "GitLab",
      ],
      link: "https://marketplace.lclite.com",
      source: "/projects/lclite.png",
    },
    {
      title: "TAMM Abu Dhabi",
      description:
        "Project: TAMM, an eGovernance service platform for the Abu Dhabi Government.",
      tags: [
        "ReactJS",
        "TypeScript",
        "Redux",
        "NodeJS",
        "ExpressJS",
        "Jest",
        "enzyme",
        "Camunda",
      ],
      link: "https://www.tamm.abudhabi",
      source: "/projects/tamm.png",
    },
    {
      title: "United International Piping",
      description:
        "A NextJS project styled with SCSS - Providing piping solutions worldwide.",
      tags: ["NextJS", "React-Bootstrap", "SCSS", "Redux RTK"],
      link: "https://www.unitedintlpipinggroupuk.com/",
      source: "/projects/united-international-piping.png",
    },
    {
      title: "International Oilfield Supplies",
      description:
        "A NextJS project styled with SCSS - Providing oilfield supplies worldwide.",
      tags: ["NextJS", "React-Bootstrap", "SCSS", "Redux RTK"],
      link: "https://www.iosgroupoman.com",
      source: "/projects/ios-oman.png",
    },
    {
      title: "United Piping Solutions",
      description:
        "A NextJS project styled with SCSS - Providing piping solutions worldwide.",
      tags: ["NextJS", "React-Bootstrap", "SCSS", "Redux RTK"],
      link: "https://www.united-piping-solutions.vercel.com/",
      source: "/projects/ups.png",
    },
    {
      title: "MarketPlace UAE",
      description:
        "Responsive Trading Software with automated input collection routines, reminders, analysis & reports, salability & profitability analyzer, excel import and export.",
      tags: [
        "NextJS",
        "React",
        "TypeScript",
        "SCSS",
        "Bootstrap",
        "Redux ToolKit (RTK)",
        "NodeJS",
        "MongoDB",
        "Strapi",
        "Redis",
        "Firebase",
        "Github",
        "Travis CI",
        "Vercel",
        "Heroku",
      ],
      link: "#",
      source: "/projects/marketplace.png",
    },
    {
      title: "Gulf Motorcycles Web",
      description:
        "A NextJS project styled with SCSS - A business ideation offering affordable motorcycle services online",
      tags: [
        "NextJS",
        "React-Bootstrap",
        "SCSS",
        "Firebase RTDB",
        "Messaging",
        "Authentication",
        "Postman",
      ],
      link: "https://www.gulfmotorcycles.com",
      source: "/projects/gmr.png",
    },
    {
      title: "Gulf Motorcycles Admin Panel",
      description:
        "A PWA built with NextJS, styled with SCSS and backed by Firebase services - Distinctive admin panel for managing the Gulf Motorcycles business",
      tags: [
        "NextJS",
        "React-Bootstrap",
        "SCSS",
        "Firebase RTDB",
        "Messaging",
        "Authentication",
        "Postman",
      ],
      link: "https://www.gulfmotorcycles.com/admin",
      source: "/projects/gmradmin.png",
    },
    {
      title: "Gulf Motorcycles Mobile",
      description:
        "Cross-Platform Mobile App built with React Native and Expo SDK - A mobile app for the Gulf Motorcycles business",
      tags: [
        "React-Native",
        "Expo SDK",
        "Firebase RTDB",
        "Messaging",
        "Authentication",
        "Postman",
      ],
      link: "https://www.gulfmotorcycles.com",
      source: "/projects/gmrapp.png",
    },
    {
      title: "Sana'a Kayum",
      description:
        "An E-Commerce PWA using MERN and JAMstack - A fashion store for the young and trendy, primarily focussing on modest wear.",
      tags: [
        "NextJS",
        "GatsbyJS",
        "React-Razzle",
        "GraphQL",
        "Redux",
        "MongoDB",
        "NodeJS",
        "ExpressJS",
        "Ant Design",
        "React-Bootstrap",
        "material-ui",
        "Tailwind CSS",
      ],
      link: "https://www.sanaakayum.com",
      source: "/projects/sk.png",
    },
    {
      title: "Dot10 App",
      description:
        "A mobile project management tool made in Kotlin - Managing advertising projects across UAE.",
      tags: ["React Native", "Firebase"],
      link: "https://www.dot10.com",
      source: "/projects/dtapp.png",
    },
    {
      title: "Diplomat's Summit App",
      description:
        "A mobile app (Android) to view and register the latest diplomat events in UAE.",
      tags: ["Kotlin"],
      link: "https://diplomatssummit.com",
      source: "/projects/dsapp.png",
    },
    {
      title: "Diplomat's Summit",
      description:
        "A website to view and register for the latest diplomat events in UAE.",
      tags: ["Vanilla JS", "WordPress PHP", "JavaScript ReactJS"],
      link: "https://diplomatssummit.com",
      source: "/projects/ds.png",
    },
    {
      title: "The Label Sticks",
      description:
        "A PR website focussing on differend brands and its ambassadors worldwide.",
      tags: ["Vanilla JS", "JavaScript ReactJS"],
      link: "#",
      source: "/projects/tls.png",
    },
    {
      title: "Julian's Luxury",
      description:
        "A website providing luxury goods and customisation services worldwide.",
      tags: ["Vanilla JS", "WordPress PHP"],
      link: "#",
      source: "/projects/julian.png",
    },
    {
      title: "BuyDoBuy Advertising",
      description: "A website offering advertising services across UAE.",
      tags: ["Vanilla JS"],
      link: "http://www.bdbme.com",
      source: "/projects/bdb.png",
    },
    {
      title: "Design Lab DXB",
      description:
        "A website offering architecture and design services across UAE.",
      tags: ["Vanilla JS"],
      link: "#",
      source: "/projects/dldxb.png",
    },
    {
      title: "Marina Hotel Apartments",
      description:
        "A hotel portfolio website with online booking functionalities.",
      tags: ["Vanilla JS"],
      link: "https://www.marinahotelapt.com",
      source: "/projects/marina.png",
    },
    {
      title: "Mercedez-Benz (Gargash)",
      description:
        "A bilingual ecommerce webapp for the prestigious Mercedez-Benz's lifestyle accessories.",
      tags: ["Vanilla JS", "WordPress PHP"],
      link: "https://www.gargashonlineshop.com",
      source: "/projects/gargash.png",
    },
    {
      title: "Dot10",
      description:
        "A website offering advertising services, interior & fitout services across UAE.",
      tags: ["Vanilla JS"],
      link: "https://www.dot10.ae",
      source: "/projects/dot10.png",
    },
  ],
};
export default data;
