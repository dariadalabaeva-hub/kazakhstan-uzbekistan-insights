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
import dariyaImg from "@/assets/team/Dariya_Dalabayeva.jpeg";
import balgynImg from "@/assets/team/Balgyn_Orazaly.jpeg";

// Activity images
import conferenceImg from "@/assets/activities/Entrepreneurship_Heritage_and_Sustainability.jpeg";
import oyDetoxImg from "@/assets/activities/Oy-detox.png";
import almatyFieldworkImg from "@/assets/activities/fieldwork_in_Almaty_by_Indira.png";
import greenHydrogenImg from "@/assets/activities/Green_Hydrogen_Fieldwork.jpeg";
import keynoteImg from "@/assets/activities/Keynote_Lecture_by_Philipp_Schroeder.jpg";
import craftingIdentityImg from "@/assets/activities/Crafting_Identity_and_Nationhood.jpeg";

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
    image: dariyaImg,
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
    image: balgynImg,
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

export interface Activity {
  id: number;
  title: string;
  date: string;
  location?: string;
  description: string;
  type: "past" | "upcoming" | "active";
  image?: string;
}

export const activities: Activity[] = [
  // 1. Active/Ongoing - First
  {
    id: 1,
    title: "Launch of Fieldwork and Multi-Sited Data Collection",
    date: "Ongoing",
    location: "Almaty, Astana, and Tashkent",
    description: "Philipp Schroeder, Indira Alibayeva, and Kholida Khaldarova have initiated comprehensive research across Kazakhstan and Uzbekistan. The team is currently conducting a series of online interviews with green entrepreneurs in Uzbekistan to map the regional entrepreneurial ecosystem.",
    type: "active",
  },
  // 2. Past Events - Reverse chronological order (most recent first)
  {
    id: 2,
    title: "Fieldwork on Green Hydrogen: Socio-Cultural Perceptions in Western Kazakhstan",
    date: "November 2025",
    location: "Atyrau and Aktau, Kazakhstan",
    description: "In November 2025, Philipp Schroeder and Nurlykhan Aljanova conducted data-collection in Western Kazakhstan (Atyrau and Mangystau regions). The research focused on socio-cultural perceptions of green entrepreneurship, with particular attention to the emerging opportunities and challenges surrounding green hydrogen development in the region. The team conducted a series of in-depth interviews and focus group discussions with a diverse set of expert stakeholders—industry specialists, municipal officials, environmental practitioners, and representatives of local business communities.",
    type: "past",
    image: greenHydrogenImg,
  },
  {
    id: 3,
    title: "Conference: \"Entrepreneurship, Heritage and Sustainability: Exploring the Nexus of Economy, Culture and Applied Research\"",
    date: "24-26 September 2025",
    location: "Nazarbayev University",
    description: "This three-day event brought together academics from diverse disciplines and practitioners from the business, cultural, and sustainability sectors. The conference's mission was to provide a platform for the exchange of perspectives and the fostering of new partnerships between science, applied research, and professional domains.",
    type: "past",
    image: conferenceImg,
  },
  {
    id: 4,
    title: "Keynote Lecture: \"Theorizing Entrepreneurship in Central Asia\"",
    date: "22-23 July 2025",
    location: "FU Berlin, Germany",
    description: "Philipp Schroeder delivered a keynote lecture at the \"Workshop on Russian and East European Politics\" held at FU Berlin. The presentation focused on developing theoretical frameworks to better understand the unique entrepreneurial landscapes within the Central Asian region.",
    type: "past",
    image: keynoteImg,
  },
  {
    id: 5,
    title: "Crafting Identity and Nationhood: The Multifaceted Role of Artisans in Uzbekistan's Contemporary Development",
    date: "22 July 2025",
    location: "UCL, London, UK",
    description: "Indira Alibayeva presented her research at the ICCEES XI World Congress hosted by University College London. The talk explored how artisans contribute to the complex interplay of cultural heritage, national identity, and economic development in modern Uzbekistan.",
    type: "past",
  },
  {
    id: 6,
    title: "Ethnographic Fieldwork: Green Entrepreneurs in Almaty",
    date: "24 June – 2 July 2025",
    location: "Almaty, Kazakhstan",
    description: "Indira Alibayeva conducted on-site research visiting workplaces and performing structured and semi-structured interviews. Initial analysis indicates that green entrepreneurs are predominantly driven by intrinsic motivation and ecological concerns rather than profit maximization.",
    type: "past",
    image: almatyFieldworkImg,
  },
  {
    id: 7,
    title: "Podcast Guest Appearance: \"Why We Need Social Sciences\" (Oy-detox)",
    date: "2025",
    location: "Digital/Online",
    description: "Indira Alibayeva featured on the \"Oy-detox\" podcast to discuss the essential role of social sciences and anthropology in understanding modern society and the motivations behind entrepreneurship.",
    type: "past",
    image: oyDetoxImg,
  },
  // 3. Upcoming Events - Placeholder slots at the end
  {
    id: 7,
    title: "Upcoming Event",
    date: "TBA",
    description: "New research activities and fieldwork updates will be announced here soon.",
    type: "upcoming",
  },
  {
    id: 8,
    title: "Future Research Activity",
    date: "TBA",
    description: "New research activities and fieldwork updates will be announced here soon.",
    type: "upcoming",
  },
  {
    id: 9,
    title: "Future Research Activity",
    date: "TBA",
    description: "New research activities and fieldwork updates will be announced here soon.",
    type: "upcoming",
  },
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
  contactEmail: "green-it.project@nu.edu.kz"
};
