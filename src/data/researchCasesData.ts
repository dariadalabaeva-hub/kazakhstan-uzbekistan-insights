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
      researchers: "Researchers",
      locations: "Countries and Locations",
      methodology: "Project Description & Methodology",
    },
    cases: [
      {
        id: 1,
        title: "Supporting Kazakhstan’s Green Hydrogen Transition: Social Acceptance, Institutional Readiness and Workforce Development",
        tags: ["Active Policy Case", "Kazakhstan–Germany (H₂-diplo)"],
          timeline: "October 2025 – April 2026 (Fieldwork: November 2025; Final Forum: April 2026; Dissemination: 2026)",
        researchers: [
          "Dr. Philipp Schroeder & Dr. Nurlykhan Aljanova (Nazarbayev University)",
        ],
        locations: [
          { name: "Astana", description: "Coordination, expert discussions, working-group meetings, and Green Hydrogen Concept Note preparation." },
          { name: "Aktau & communities in the Mangystau Region", description: "Semi-structured interviews, focus group discussions, and regional stakeholder engagement." },
          { name: "Atyrau & surrounding rural communities", description: "Field interviews, focus groups, and assessment of the social consequences of the energy transition." },
          { name: "Germany", description: "International institutional support through H₂-diplo, an initiative implemented by GIZ on behalf of the German Federal Foreign Office and financed by the International Climate Initiative." },
        ],
        methodology: [
          "The project contributed to the development of Kazakhstan’s Green Hydrogen Concept by examining the social, institutional and workforce conditions necessary for a sustainable and just hydrogen transition. While Kazakhstan possesses significant wind and solar resources, the study emphasized that technological potential alone cannot guarantee the successful development of green hydrogen.",
          "The Nazarbayev University research team, represented by Dr Philipp Schroeder and Dr Nurlykhan Aljanova, conducted a qualitative-dominant study combining institutional stakeholder interviews, regional fieldwork and employment and education analysis. The research involved 24 interviews with representatives of government, industry, civil society and academia, as well as 24 interviews and eight focus groups involving 48 local participants in Mangystau and Atyrau. Altogether, the empirical study engaged 96 participants.",
          "The research explored public awareness, environmental and social risks, institutional readiness, employment expectations, skills gaps, public trust and the conditions under which local communities would support green hydrogen development. The findings were translated into practical recommendations for the Green Hydrogen Concept Note.",
        ],
      },
      { id: 2, title: "Upcoming Case Study", tags: [], timeline: "", researchers: [], locations: [], methodology: [], placeholder: true },
      { id: 3, title: "Upcoming Case Study", tags: [], timeline: "", researchers: [], locations: [], methodology: [], placeholder: true },
    ],
  },
  kk: {
    labels: {
      timeline: "Мерзімі",
      researchers: "Зерттеушілер",
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
        ],
        locations: [
          { name: "Астана", description: "Үйлестіру, сараптамалық талқылаулар, жұмыс топтары және Жасыл сутек тұжырымдамасын әзірлеу." },
          { name: "Ақтау және Маңғыстау облысы", description: "Сұхбаттар, фокус-топтар және өңірлік стейкхолдерлермен байланыс." },
          { name: "Атырау және ауылдық елді мекендер", description: "Сұхбаттар, фокус-топтар және энергетикалық көшудің әлеуметтік әсерін бағалау." },
          { name: "Германия", description: "GIZ / H₂-diplo арқылы халықаралық ынтымақтастық." },
        ],
        methodology: [
          "Жоба тұрақты және әділ сутекке көшу үшін қажетті әлеуметтік, институционалдық және кадрлық жағдайларды зерделей отырып, Қазақстанның «Жасыл» сутек тұжырымдамасын әзірлеуге үлес қосты. Қазақстанның айтарлықтай жел және күн ресурстарына ие екеніне қарамастан, зерттеуде тек технологиялық әлеуеттің өзі жасыл сутектің сәтті дамуына кепіл бола алмайтыны атап өтілді.",
          "Назарбаев Университетінің зерттеу тобы (д-р Филипп Шрёдер мен д-р Нұрлыхан Әлжанова) институционалдық мүдделі тараптармен сұхбаттарды, өңірлік далалық зерттеулерді және жұмыспен қамту мен білім беру саласын талдауды ұштастырған сапалық басым зерттеу жүргізді. Жұмыс барысында мемлекеттік органдар, өндіріс, азаматтық қоғам және академиялық орта өкілдерімен 24 сұхбат, сондай-ақ Маңғыстау мен Атырауда 24 сұхбат және 48 жергілікті тұрғынның қатысуымен сегіз фокус-топ өткізілді. Жалпы алғанда, эмпирикалық зерттеуге 96 қатысушы тартылды.",
          "Зерттеу барысында халықтың хабардарлығы, экологиялық және әлеуметтік тәуекелдер, институционалдық дайындық, жұмыспен қамту күтулері, біліктілік тапшылығы, қоғамдық сенім және жергілікті қауымдастықтардың жасыл сутекті дамытуға қолдау көрсету шарттары қаралды. Зерттеу нәтижелері «Жасыл» сутек тұжырымдамасына арналған практикалық ұсынымдар түрінде ұсынылды.",
        ],
      },
      { id: 2, title: "Жақында", tags: [], timeline: "", researchers: [], locations: [], methodology: [], placeholder: true },
      { id: 3, title: "Жақында", tags: [], timeline: "", researchers: [], locations: [], methodology: [], placeholder: true },
    ],
  },
  ru: {
    labels: {
      timeline: "Период",
      researchers: "Исследователи",
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
        ],
        locations: [
          { name: "Астана", description: "Координация, экспертные обсуждения, рабочие группы и подготовка Концепции зеленого водорода." },
          { name: "Актау и Мангистауская область", description: "Интервью, фокус-группы и взаимодействие с региональными стейкхолдерами." },
          { name: "Атырау и сельские сообщества", description: "Полевые интервью, фокус-группы и оценка социальных последствий энергоперехода." },
          { name: "Германия", description: "Межинституциональное партнерство через GIZ / H₂-diplo." },
        ],
        methodology: [
          "Проект внес вклад в разработку Концепции зеленого водорода Казахстана путем изучения социальных, институциональных и кадровых условий, необходимых для устойчивого и справедливого водородного перехода. Несмотря на то что Казахстан обладает значительными ветровыми и солнечными ресурсами, в исследовании подчеркивается, что один лишь технологический потенциал не может гарантировать успешное развитие отрасли зеленого водорода.",
          "Исследовательская группа Назарбаев Университета в лице д-ра Филиппа Шрёдера и д-ра Нурлыхан Альжановой провела исследование с преобладанием качественных методов, объединившее интервью с институциональными стейкхолдерами, региональные полевые исследования, а также анализ занятости и образования. Исследование включило 24 интервью с представителями государственных органов, индустрии, гражданского общества и академических кругов, а также 24 интервью и восемь фокус-групп с участием 48 местных жителей в Мангистау и Атырау. В общей сложности в эмпирическом исследовании приняли участие 96 человек.",
          "В рамках исследования изучались осведомленность общественности, экологические и социальные риски, институциональная готовность, ожидания в сфере занятости, дефицит навыков, общественное доверие и условия, при которых местные сообщества поддержат развитие зеленого водорода. Результаты были преобразованы в практические рекомендации для Концепции зеленого водорода.",
        ],
      },
      { id: 2, title: "Скоро", tags: [], timeline: "", researchers: [], locations: [], methodology: [], placeholder: true },
      { id: 3, title: "Скоро", tags: [], timeline: "", researchers: [], locations: [], methodology: [], placeholder: true },
    ],
  },
};