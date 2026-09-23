import { Locale } from "@/i18n/types";

export interface ResearcherEntry {
  text: string;
  href?: string;
}

export type MethodologyBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: { lead?: string; text: string }[] };

export interface ResearchCase {
  id: number;
  title: string;
  tags: string[];
  timeline: string;
  researchers: ResearcherEntry[];
  methodology: MethodologyBlock[];
  placeholder?: boolean;
}

export interface ResearchCasesContent {
  labels: {
    timeline: string;
    researchers: string;
    methodology: string;
  };
  cases: ResearchCase[];
}

export const GIZ_H2DIPLO_URL =
  "https://www.giz.de/en/projects/h2-diplo-decarbonization-diplomacy";

export const researchCasesContent: Record<Locale, ResearchCasesContent> = {
  en: {
    labels: {
      timeline: "Timeline",
      researchers: "Collaborators",
      methodology: "Project Description",
    },
    cases: [
      {
        id: 1,
        title: "Supporting Kazakhstan’s Green Hydrogen Transition: Social Acceptance, Institutional Readiness and Workforce Development",
        tags: ["Active Policy Case", "Kazakhstan–Germany (H₂-diplo)"],
        timeline: "October 2025 – April 2026",
        researchers: [
          {
            text: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH and the H₂-diplo Office Kazakhstan",
            href: GIZ_H2DIPLO_URL,
          },
          { text: "Dr Philipp Schroeder and Dr Nurlykhan Aljanova, Nazarbayev University" },
        ],
        methodology: [
          {
            type: "paragraph",
            text: "The project contributed to the development of Kazakhstan’s Green Hydrogen Concept by examining the social, institutional, and workforce conditions necessary for a sustainable and just energy transition. While Kazakhstan possesses significant wind and solar resources, the study emphasized that technological and resource potential alone cannot guarantee successful green hydrogen development without public trust and institutional readiness.",
          },
          {
            type: "paragraph",
            text: "The research combined high-level policy dialogue with intensive regional fieldwork across key strategic locations:",
          },
          {
            type: "bullets",
            items: [
              { lead: "Astana", text: "Coordination, expert discussions, working-group meetings, and contribution to the national Green Hydrogen Concept Note;" },
              { lead: "Aktau & Mangystau Region", text: "Semi-structured interviews, focus groups, and regional stakeholder engagement;" },
              { lead: "Atyrau & surrounding communities", text: "Fieldwork assessing local employment, skills readiness, and the social impact of the transition." },
            ],
          },
          {
            type: "paragraph",
            text: "In total, the qualitative-dominant empirical inquiry engaged 96 participants:",
          },
          {
            type: "bullets",
            items: [
              { text: "24 institutional stakeholder interviews across national and regional public authorities, energy and extractive-industry enterprises, civil society, environmental organizations, and regional academic institutions (including Yessenov University and the Kazakh-German Institute for Sustainable Engineering);" },
              { text: "24 in-depth interviews and 8 focus groups (48 participants) with local residents, industry workers, women, youth, and community members in Mangystau and Atyrau." },
            ],
          },
          {
            type: "paragraph",
            text: "The findings provided actionable recommendations directly integrated into Kazakhstan’s Green Hydrogen Concept Note.",
          },
        ],
      },
      { id: 2, title: "Upcoming Case Study", tags: [], timeline: "", researchers: [], methodology: [], placeholder: true },
      { id: 3, title: "Upcoming Case Study", tags: [], timeline: "", researchers: [], methodology: [], placeholder: true },
    ],
  },
  kk: {
    labels: {
      timeline: "Мерзімі мен кезеңдері",
      researchers: "Серіктестер",
      methodology: "Жобаның сипаттамасы",
    },
    cases: [
      {
        id: 1,
        title: "Қазақстанның «жасыл» сутекке көшуін қолдау: әлеуметтік қабылдау, институционалдық дайындық және кадрлық әлеуетті дамыту",
        tags: ["Қолданбалы кейс", "Қазақстан–Германия (H₂-diplo)"],
        timeline: "Қазан 2025 – Сәуір 2026",
        researchers: [
          {
            text: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH және Қазақстандағы H₂-diplo кеңсесі",
            href: GIZ_H2DIPLO_URL,
          },
          { text: "Д-р Филипп Шрёдер және д-р Нұрлыхан Әлжанова, Назарбаев Университеті" },
        ],
        methodology: [
          {
            type: "paragraph",
            text: "Жоба әділ әрі тұрақты энергетикалық көшуге қажетті әлеуметтік, институционалдық және кадрлық жағдайларды зерделей отырып, Қазақстанның «Жасыл» сутек тұжырымдамасын әзірлеуге үлес қосты. Зерттеу барысында еліміздің күн мен жел ресурстарына бай болуы маңызды болғанымен, қоғамдық сенім мен кадрлық дайындықсыз тек технологиялық әлеуеттің өзі сәтті дамуға кепіл бола алмайтыны көрсетілді.",
          },
          {
            type: "paragraph",
            text: "Зерттеу саяси диалог пен өңірлік далалық жұмыстарды біріктірді:",
          },
          {
            type: "bullets",
            items: [
              { lead: "Астана", text: "Үйлестіру, сараптамалық талқылаулар, жұмыс топтары және Жасыл сутек тұжырымдамасына ұсыныстар дайындау;" },
              { lead: "Ақтау және Маңғыстау облысы", text: "Жартылай құрылымдалған сұхбаттар, фокус-топтар және өңірлік мүдделі тараптармен байланыс орнату;" },
              { lead: "Атырау және оған іргелес елді мекендер", text: "Жергілікті деңгейдегі жұмыспен қамту, біліктілік тапшылығы және энергетикалық көшудің әлеуметтік әсерін бағалау бойынша далалық зерттеулер." },
            ],
          },
          {
            type: "paragraph",
            text: "Сапалық әдіске негізделген эмпирикалық кезеңге барлығы 96 қатысушы тартылды:",
          },
          {
            type: "bullets",
            items: [
              { text: "Ұлттық және жергілікті мемлекеттік органдар, энергетика және өндіріс кәсіпорындары, азаматтық сектор және білім беру мекемелері (соның ішінде Yessenov University және Тұрақты инженерия қазақ-неміс институты) өкілдерімен 24 институционалдық сұхбат;" },
              { text: "Маңғыстау мен Атыраудағы жергілікті тұрғындар, өндіріс жұмысшылары, әйелдер, жастар және қауымдастық мүшелерімен өткізілген 24 тереңдетілген сұхбат пен 8 фокус-топ (48 қатысушы)." },
            ],
          },
          {
            type: "paragraph",
            text: "Зерттеу нәтижелері бойынша дайындалған ұсынымдар Қазақстанның «Жасыл» сутек тұжырымдамасының жобасына тікелей енгізілді.",
          },
        ],
      },
      { id: 2, title: "Жақында", tags: [], timeline: "", researchers: [], methodology: [], placeholder: true },
      { id: 3, title: "Жақында", tags: [], timeline: "", researchers: [], methodology: [], placeholder: true },
    ],
  },
  ru: {
    labels: {
      timeline: "Хронология и сроки",
      researchers: "Партнеры и сотрудничество",
      methodology: "Описание проекта",
    },
    cases: [
      {
        id: 1,
        title: "Поддержка перехода Казахстана к зеленому водороду: социальное признание, институциональная готовность и развитие трудовых ресурсов",
        tags: ["Прикладной кейс", "Сотрудничество Казахстан–Германия (H₂-diplo)"],
        timeline: "Октябрь 2025 – Апрель 2026",
        researchers: [
          {
            text: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH и Офис H₂-diplo в Казахстане",
            href: GIZ_H2DIPLO_URL,
          },
          { text: "Д-р Филипп Шрёдер и д-р Нурлыхан Альжанова, Назарбаев Университет" },
        ],
        methodology: [
          {
            type: "paragraph",
            text: "Проект внес вклад в разработку Концепции зеленого водорода Казахстана путем комплексного изучения социальных, институциональных и кадровых условий, необходимых для устойчивого и справедливого энергетического перехода. Исследование показало, что одного лишь природно-технологического потенциала ветровой и солнечной энергии недостаточно: ключевыми факторами успеха выступают общественное доверие, кадровая база и институциональная готовность.",
          },
          {
            type: "paragraph",
            text: "Исследование объединило экспертно-политический диалог и интенсивную полевую работу в стратегических регионах:",
          },
          {
            type: "bullets",
            items: [
              { lead: "Астана", text: "Координация, экспертные обсуждения, заседания рабочих групп и подготовка рекомендаций для Концепции зеленого водорода;" },
              { lead: "Актау и Мангистауская область", text: "Полуструктурированные интервью, фокус-группы и взаимодействие с региональными стейкхолдерами;" },
              { lead: "Атырау и прилегающие сообщества", text: "Полевые исследования для оценки занятости, дефицита навыков и социальных последствий энергоперехода." },
            ],
          },
          {
            type: "paragraph",
            text: "В общей сложности эмпирическое исследование охватило 96 участников:",
          },
          {
            type: "bullets",
            items: [
              { text: "24 институциональных интервью с представителями центральных и местных органов власти, энергетических и промышленных предприятий, гражданского общества, экологических организаций и академических кругов (включая Yessenov University и Казахстанско-Немецкий институт устойчивой инженерии);" },
              { text: "24 глубинных интервью и 8 фокус-групп (48 участников) с местными жителями, работниками предприятий, женщинами, молодежью и сельскими сообществами Мангистау и Атырау." },
            ],
          },
          {
            type: "paragraph",
            text: "Полученные выводы легли в основу практических рекомендаций, интегрированных в Концепцию развития зеленого водорода в Казахстане.",
          },
        ],
      },
      { id: 2, title: "Скоро", tags: [], timeline: "", researchers: [], methodology: [], placeholder: true },
      { id: 3, title: "Скоро", tags: [], timeline: "", researchers: [], methodology: [], placeholder: true },
    ],
  },
};
