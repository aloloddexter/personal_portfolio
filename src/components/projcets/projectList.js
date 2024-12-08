import website from "./assets/website.webp";
import pos from "./assets/pos.webp";
import dissertation from "./assets/dissertation.webp";
import planknow from "./assets/planknow.webp";
export const projectList = [
  {
    title: "Worpress Website",
    description: "This WordPress website is dedicated to showcasing Vigan City, a place rich in history and culture. The content beautifully highlights the unique blend of its colonial past and vibrant present. Visitors can explore various aspects of Vigan, including its famous cobblestone streets, heritage buildings, local festivals, and culinary specialties.",
    
    image: website,
    type: "Landing Page",
  },
  {
    title: "NEMSU POS",
    link: "https://sarisari-tracker.netlify.app/",
    source: "https://github.com/patwicks/sarisari",
    description:
      "A hybrid point of sale system with integrated inventory management for NEMSU Lianga Canteen",
   
    image: pos,
    type: "Native Mobile App and Web Based App",
  },
  {
    title: "NEMSU Dissertation Management System",
    description:
      "Nemsu Dissertation Record System, your premier academic resource for research. As a visionary digital repository, our mission is to streamline the process of archiving and accessing scholarly dissertations.",

    image: dissertation,
    type: "Web Based App",
  },
  {
    title: "PlanKnow",
  
    description: "A mobile and web-based procurement app that categorizes supply needs for startups in accordance with the Commission on Audit's financial plan. This app helps startups identify the appropriate categories for their procurement needs, ensuring compliance with COA rules and simplifying the process for users",
    image: planknow,
    type: "Native Mobile App and Web Based App",
  },
];
