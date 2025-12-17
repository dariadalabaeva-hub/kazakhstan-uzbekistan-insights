// Site content data - easily editable

// Team member photos
import philippImg from "@/assets/team/Philipp_Schroeder.jpeg";
import shumailaImg from "@/assets/team/Shumaila_Yousafzai.jpeg";
import serikImg from "@/assets/team/Serik_Orazgaliyev.jpeg";
import indiraImg from "@/assets/team/Indira_Alibayeva.jpeg";
import nurlykhanImg from "@/assets/team/Nurlykhan_Aljanova.jpeg";
import kholidaImg from "@/assets/team/Kholida_Khaldarova.jpeg";
import aitolkynImg from "@/assets/team/Aitolkyn_Alzhanova.jpeg";
import ayazhanImg from "@/assets/team/Ayazhan_Temirbolat.jpeg";
import galiyaImg from "@/assets/team/Galiya_Saktaganova.jpeg";

export const teamMembers = [
  {
    id: 1,
    name: "Philipp Schroeder",
    role: "Principal Investigator",
    image: philippImg,
  },
  {
    id: 2,
    name: "Shumaila Yousafzai",
    role: "Co-Principal Investigator",
    image: shumailaImg,
  },
  {
    id: 3,
    name: "Serik Orazgaliyev",
    role: "Co-Principal Investigator",
    image: serikImg,
  },
  {
    id: 4,
    name: "Leila Bimendiyeva",
    role: "Co-Principal Investigator",
    image: null, // Placeholder with initials
  },
  {
    id: 5,
    name: "Indira Alibayeva",
    role: "Postdoctoral Researcher",
    image: indiraImg,
  },
  {
    id: 6,
    name: "Nurlykhan Aljanova",
    role: "Postdoctoral Researcher",
    image: nurlykhanImg,
  },
  {
    id: 7,
    name: "Kholida Khaldarova",
    role: "Doctoral Researcher",
    image: kholidaImg,
  },
  {
    id: 8,
    name: "Aitolkyn Alzhanova",
    role: "Graduate Research Assistant",
    image: aitolkynImg,
  },
  {
    id: 9,
    name: "Ayazhan Temirbolat",
    role: "Undergraduate Research Assistant",
    image: ayazhanImg,
  },
  {
    id: 10,
    name: "Dariya Dalabayeva",
    role: "Graduate Research Assistant",
    image: null, // Photo not uploaded
  },
  {
    id: 11,
    name: "Galiya Saktaganova",
    role: "Graduate Research Assistant",
    image: galiyaImg,
  },
  {
    id: 12,
    name: "Balgyn Orazaly",
    role: "Undergraduate Research Assistant",
    image: null, // Photo not uploaded
  },
];

export const publications = [
  {
    id: 1,
    title: "Digital Entrepreneurs in the Steppe: IT Innovation Ecosystems in Kazakhstan",
    year: 2024,
    description: "An ethnographic study examining the emergence of technology startups in Almaty and Nur-Sultan, exploring cultural factors shaping entrepreneurial practices.",
    link: "#"
  },
  {
    id: 2,
    title: "Green Transitions: Sustainable Business Models in Central Asian Economies",
    year: 2023,
    description: "Comparative analysis of green economy initiatives across Kazakhstan and Uzbekistan, with focus on local entrepreneurial responses to climate policy.",
    link: "#"
  }
];

export const activities = [
  {
    id: 1,
    title: "Fieldwork in Tashkent",
    date: "November 2024",
    excerpt: "Our team conducted extensive interviews with green technology entrepreneurs in Uzbekistan's capital, documenting emerging sustainable business practices.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Interview with IT Startup Founders",
    date: "October 2024",
    excerpt: "In-depth conversations with founders of three prominent tech companies in Almaty revealed unique perspectives on innovation culture in Kazakhstan.",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Workshop on Comparative Methods",
    date: "September 2024",
    excerpt: "International workshop bringing together scholars from Germany, Kazakhstan, and Uzbekistan to discuss methodological approaches to entrepreneurship research.",
    image: "/placeholder.svg"
  }
];

export const siteInfo = {
  title: "Towards a Comparative, Interdisciplinary and Applied Ethnological Perspective on Entrepreneurship in the IT- and Green Economy Industries of Kazakhstan and Uzbekistan",
  shortTitle: "IT & Green Economy Research",
  grantInfo: "Collaborative Research Program",
  status: "Active",
  duration: {
    start: "1/1/25",
    end: "12/31/27"
  },
  description: "The project aspires to demonstrate that an 'ethnological perspective' can make a valuable contribution to the study of entrepreneurship. In its academic component, the project will employ a mixed methods-approach to collect comparative evidence and engage in emically inspired theory-building on entrepreneurial ecosystems in the IT and Green Economy industries of Kazakhstan and Uzbekistan. In its applied research component, the project will integrate closely with practitioners of the public and private sectors to create socioeconomic impact beyond academia, such as in the field of policy advice.",
  keywords: [
    "entrepreneurship",
    "Kazakhstan & Uzbekistan",
    "IT & Green Economy",
    "sociocultural anthropology",
    "mixed methods",
    "emic theory-building",
    "opportunity structures",
    "applied research"
  ],
  contactEmail: "research.centralasia@university.edu"
};
