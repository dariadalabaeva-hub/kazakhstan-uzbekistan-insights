import { Locale } from "@/i18n/types";

export interface ResearchCaseLocation {
  name: string;
  description: string;
}

export interface ResearchCase {
  id: number;
  title: string;
  tags: string[];
  timeline: string;
  researchers: string[];
  locations: ResearchCaseLocation[];
  methodology: string[];
  placeholder?: boolean;
}

export interface ResearchCasesContent {
  labels: {
    timeline: string;
    researchers: string;
    locations: string;
    methodology: string;
  };
  cases: ResearchCase[];
}

export const researchCasesContent: Record<Locale, ResearchCasesContent> = {
  en: {
    labels: {
      timeline: "Timeline",
      researchers: "Researchers / Partners",
      locations: "Countries and Locations",
      methodology: "Project Description & Methodology",
    },
    cases: [
      {
        id: 1,
        title: "Supporting Kazakhstan’s Green Hydrogen Transition: Social Acceptance, Institutional Readiness and Workforce Development",
        tags: ["Active Policy Case", "Kazakhstan–Germany (H₂-diplo)"],
        timeline: "October 2025 – April 2026 (Fieldwork: Nov 2025; Final Forum: Apr 2026; Dissemination: 2026)",
        researchers: [
          "Dr. Philipp Schroeder & Dr. Nurlykhan Aljanova (Nazarbayev University)",
          "Supported through the H₂-diplo initiative, implemented by GIZ on behalf of the German Federal Foreign Office, financed by the International Climate Initiative (IKI).",
        ],
        locations: [
          { name: "Astana", description: "Coordination, expert discussions, working-group meetings, and Green Hydrogen Concept Note preparation." },
          { name: "Aktau & Mangystau Region", description: "Semi-structured interviews, focus group discussions, and regional stakeholder engagement." },
          { name: "Atyrau & rural communities", description: "Field interviews, focus groups, and social impact assessment of the energy transition." },
          { name: "Germany", description: "International institutional cooperation and programmatic support via GIZ / H₂-diplo." },
        ],
        methodology: [
          "The project contributed to Kazakhstan’s Green Hydrogen Concept by examining the social, institutional, and workforce conditions essential for a sustainable and just transition. Emphasizing that technological capacity alone cannot guarantee success, the research combined institutional interviews, regional fieldwork, and skills analysis.",
          "The qualitative-dominant empirical inquiry engaged 96 total participants: 24 institutional interviews across government, industry, academia, and civil society, alongside 24 in-depth interviews and 8 focus groups (48 participants) in Mangystau and Atyrau. The findings directly informed actionable recommendations for Kazakhstan's Green Hydrogen Concept Note.",
        ],
      },
      { id: 2, title: "Upcoming Case Study", tags: [], timeline: "", researchers: [], locations: [], methodology: [], placeholder: true },
      { id: 3, title: "Upcoming Case Study", tags: [], timeline: "", researchers: [], locations: [], methodology: [], placeholder: true },
    ],
  },
  kk: {
    labels: {
      timeline: "Мерзімі",
      researchers: "Зерттеушілер мен серіктестер",
      locations: "Өңірлер мен география",
      methodology: "Жобаның сипаттамасы мен әдістемесі",
    },
    cases: [
      {
        id: 1,
        title: "Қазақстанның «жасыл» сутекке көшуін қолдау: әлеуметтік қабылдау, институционалдық дайындық және кадрлық әлеуетті дамыту",
        tags: ["Қолданбалы кейс", "Қазақстан–Германия (H₂-diplo)"],
        timeline: "Қазан 2025 – Сәуір 2026 (Далалық зерттеу: қараша 2025; Қорытынды форум: сәуір 2026)",
        researchers: [
          "Д-р Филипп Шрёдер, д-р Нұрлыхан Әлжанова (Назарбаев Университеті)",
          "Германия Федералды Сыртқы істер министрлігінің атынан GIZ жүзеге асыратын және Халықаралық климаттық бастама (IKI) қаржыландыратын H₂-diplo бастамасы аясында.",
        ],
        locations: [
          { name: "Астана", description: "Үйлестіру, сараптамалық талқылаулар, жұмыс топтары және Жасыл сутек тұжырымдамасын әзірлеу." },
          { name: "Ақтау және Маңғыстау облысы", description: "Сұхбаттар, фокус-топтар және өңірлік стейкхолдерлермен байланыс." },
          { name: "Атырау және ауылдық елді мекендер", description: "Сұхбаттар, фокус-топтар және энергетикалық көшудің әлеуметтік әсерін бағалау." },
          { name: "Германия", description: "GIZ / H₂-diplo арқылы халықаралық ынтымақтастық." },
        ],
        methodology: [
          "Жоба әділ әрі тұрақты сутекке көшу үшін қажетті әлеуметтік, институционалдық және еңбек нарығы жағдайларын зерделей отырып, Қазақстанның Жасыл сутек тұжырымдамасына үлес қосты.",
          "Сапалық әдіске негізделген эмпирикалық кезең 96 қатысушыны қамтыды: мемлекеттік орган, өндіріс және азаматтық сектор өкілдерімен 24 сұхбат, сондай-ақ Маңғыстау мен Атырауда 24 сұхбат және 8 фокус-топ (48 жергілікті тұрғын). Нәтижелер Тұжырымдама жобасына арналған нақты ұсынымдарға айналды.",
        ],
      },
      { id: 2, title: "Жақында", tags: [], timeline: "", researchers: [], locations: [], methodology: [], placeholder: true },
      { id: 3, title: "Жақында", tags: [], timeline: "", researchers: [], locations: [], methodology: [], placeholder: true },
    ],
  },
  ru: {
    labels: {
      timeline: "Период",
      researchers: "Исследователи и партнеры",
      locations: "География и локации",
      methodology: "Описание и методология",
    },
    cases: [
      {
        id: 1,
        title: "Поддержка перехода Казахстана к зеленому водороду: социальное признание, институциональная готовность и развитие трудовых ресурсов",
        tags: ["Прикладной кейс", "Сотрудничество Казахстан–Германия (H₂-diplo)"],
        timeline: "Октябрь 2025 – Апрель 2026 (Полевой этап: ноябрь 2025; Финальный форум: апрель 2026)",
        researchers: [
          "Д-р Филипп Шрёдер, д-р Нурлыхан Альжанова (Назарбаев Университет)",
          "Поддержано инициативой H₂-diplo, реализуемой GIZ от имени Федерального министерства иностранных дел Германии и финансируемой Международной климатической инициативой (IKI).",
        ],
        locations: [
          { name: "Астана", description: "Координация, экспертные обсуждения, рабочие группы и подготовка Концепции зеленого водорода." },
          { name: "Актау и Мангистауская область", description: "Интервью, фокус-группы и взаимодействие с региональными стейкхолдерами." },
          { name: "Атырау и сельские сообщества", description: "Полевые интервью, фокус-группы и оценка социальных последствий энергоперехода." },
          { name: "Германия", description: "Межинституциональное партнерство через GIZ / H₂-diplo." },
        ],
        methodology: [
          "Проект внес вклад в разработку Концепции зеленого водорода Казахстана, изучив социальные, институциональные и кадровые предпосылки справедливого энергоперехода. Исследование показало, что технологического потенциала недостаточно без учета общественной поддержки.",
          "Эмпирическая база охватила 96 участников: 24 экспертных интервью с представителями госорганов, индустрии и НПО, а также 24 глубинных интервью и 8 фокус-групп (48 участников) в Мангистау и Атырау. Результаты легли в основу практических рекомендаций для Концепции развития отрасли.",
        ],
      },
      { id: 2, title: "Скоро", tags: [], timeline: "", researchers: [], locations: [], methodology: [], placeholder: true },
      { id: 3, title: "Скоро", tags: [], timeline: "", researchers: [], locations: [], methodology: [], placeholder: true },
    ],
  },
};