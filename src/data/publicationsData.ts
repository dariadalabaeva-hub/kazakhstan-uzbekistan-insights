// Publications data - stored separately for easy updates

export interface Publication {
  id: number;
  title: string;
  authors: string;
  year: number;
  link: string;
  linkType?: "external" | "email";
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "Leveraging the shift in the geocultural landscape towards internationalizing cultural entrepreneurship",
    authors: "Aljanova, N., Shakti, S., Bokebayev, N.",
    year: 2025,
    link: "https://doi.org/10.1177/23197145251313833",
  },
  {
    id: 2,
    title: "Empowerment and collective action: Feminist solidarity through women's entrepreneurship in Kyrgyzstan's community-based tourism",
    authors: "Yousafzai, S., Aljanova, N.",
    year: 2025,
    link: "https://doi.org/10.1108/IJGE-02-2024-0066",
  },
  {
    id: 3,
    title: "Roots of heritage: Honoring hunarmandchilik tradition in Uzbekistan. 17 narratives of craft entrepreneurs on preserving the nation's culture and tradition",
    authors: "Alibayeva, I., Aljanova, N., Yousafzai, S.",
    year: 2024,
    link: "mailto:green-it.project@nu.edu.kz?subject=Publication%20Inquiry",
    linkType: "email",
  },
  {
    id: 4,
    title: "Strength in constraint: 33 narratives of women-entrepreneurs in Kazakhstan",
    authors: "Alibayeva, I., Yessekeyeva, E., Aljanova, N., Yousafzai, S.",
    year: 2024,
    link: "mailto:green-it.project@nu.edu.kz?subject=Publication%20Inquiry",
    linkType: "email",
  },
  {
    id: 5,
    title: "Impact assessment: Evaluation of jobs-based programming for stability",
    authors: "Ferguson, N., Garcia, T. O., Schröder, P.",
    year: 2024,
    link: "https://isdc.org/publications/impact-assessment-evaluation-of-jobs-based-programming-for-stability/",
  },
  {
    id: 6,
    title: "'Made in Kyrgyzstan': An ethnographic exploration of 'new entrepreneurs' entering the Eurasian Economic Union",
    authors: "Schröder, P.",
    year: 2024,
    link: "https://www.e-elgar.com/shop/gbp/the-elgar-companion-to-the-eurasian-economic-union-9781800374997.html",
  },
  {
    id: 7,
    title: "Translocality, entrepreneurship and middle class across Eurasia: Kyrgyzstan's 'first capitalists' since the late Soviet era",
    authors: "Schröder, P.",
    year: 2024,
    link: "https://www.routledge.com/9781032657295",
  },
  {
    id: 8,
    title: "Masquerade of power: Women entrepreneurs reshaping gender norms in Kazakhstan's male-dominated sectors",
    authors: "Yousafzai, S., Aljanova, N., Omran, W.",
    year: 2024,
    link: "https://doi.org/10.1108/IJGE-02-2024-0028",
  },
  {
    id: 9,
    title: "A process model of combining life trauma and life passion into cultural entrepreneurship: A case study of Art-Shelter Bunker theatre",
    authors: "Aljanova, N., Yessekeyeva, E., Ernst, Y.",
    year: 2023,
    link: "https://doi.org/10.1177/2277977923118312",
  },
  {
    id: 10,
    title: "Environmental crisis as an enabler of entrepreneurial activities in a non-profit organization: A case study on Kendriya Vidyalaya",
    authors: "Pal, S., Aljanova, N., Biswas, S.",
    year: 2022,
    link: "https://doi.org/10.1177/22779779221099750",
  },
  {
    id: 11,
    title: "Religion as a dominant logic for entrepreneurial activities: Theorizing the dynamics in and around 'We'd Meat Burger, Kazakhstan'",
    authors: "Amanbayev, Y., Aljanova, N., Mirzaliyeva, S., Ghosh, A.",
    year: 2021,
    link: "https://doi.org/10.1177/22779779211036507",
  },
  {
    id: 12,
    title: "Business 2.0: Kyrgyz middlemen in Guangzhou",
    authors: "Schröder, P.",
    year: 2020,
    link: "https://doi.org/10.1080/02634937.2019.1711023",
  },
  {
    id: 13,
    title: "The economics of translocality – Epistemographic observations from fieldwork in(-between) Russia, China, and Kyrgyzstan",
    authors: "Schröder, P.",
    year: 2018,
    link: "https://doi.org/10.11647/OBP.0114.08",
  },
  {
    id: 14,
    title: "Entrepreneurship in Kyrgyzstan: Adjustments to a changing economic environment",
    authors: "Schröder, P., Schröder, E.",
    year: 2017,
    link: "https://library.fes.de/pdf-files/bueros/bischkek/13673-20171006.pdf",
  },
  {
    id: 15,
    title: "The institutionalization of mobility: Well-being and social hierarchies in Central Asian translocal livelihoods",
    authors: "Schröder, P., Stephan-Emmrich, M.",
    year: 2016,
    link: "https://doi.org/10.1080/17450101.2014.984939",
  },
];
