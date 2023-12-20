import React from "react";
import { FiLinkedin } from "react-icons/fi";
import Pradeep from "../../assets/images/experts/pradeep.jpg";
import Marcus from "../../assets/images/experts/marcus.png";
import Cynthia from "../../assets/images/experts/cynthia.jpeg";

export const TeamData = [
  {
    image: Pradeep,
    name: "Pradeep Kumar",
    designation: "Founder",
    location: "Salem, India",
    description:
      "Pradeep is the founder of Strategy Fox, a business strategy company. Pradeep did his Master of Engineering Management (MEM) in Duke University with focus on Strategy and Analytics. He then went on to work for Amazon in California as a Level 5 Engineer specializing in the areas of Product management, Artificial Intelligence and Data Analytics, devising universal strategies to power Alexa's growth. Pradeep chose to return to India quitting his lucrative job to follow his passion of strategic thinking and problem solving.",
    socialNetwork: [
      {
        icon: <FiLinkedin />,
        url: "https://www.linkedin.com/in/pradeep-kumar29/",
      },
    ],
  },
  {
    image: Marcus,
    name: "Marcus Bullock",
    designation: "Operations Consultant",
    location: "Raleigh, United States",
    description:
      "Marcus is the Operations expert of the company. Marcus did his Master of Engineering Management (MEM) in Duke university with focus on Operations and Supply chain. He currently works as a Business leader for Procter and Gamble. He is an expert in assisting a company in succeeding their expectations of keeping costs down, productivity improvement and continuous quality improvement of their services. Marcus is known for his personable skills and his ability to create something out of nothing.",
    socialNetwork: [
      {
        icon: <FiLinkedin />,
        url: "https://www.linkedin.com/in/marcus-bullock/",
      },
    ],
  },
  {
    image: Cynthia,
    name: "Cynthia Mayer",
    designation: "Finance and Product Consultant",
    location: "Paris, France",
    description:
      "Cynthia is the Finance, Design and Product expert of the company. Cynthia did her Master of Engineering Management (MEM) in Duke university with focus on Product Management and Design Thinking. She worked as a Product Manager at Visa helping them formulate and build several new international payment services, and also has experience in Healthcare, Public Sector, and Transportation. She is also a Lead Web Designer, User Research Consultant for different startups and nonprofits. Cynthia is known for her problem solving ability, presentation skills, artistic thinking and her incredible polyglot skills.",
    socialNetwork: [
      {
        icon: <FiLinkedin />,
        url: "https://www.linkedin.com/in/mayercynthia/",
      },
    ],
  },
];
