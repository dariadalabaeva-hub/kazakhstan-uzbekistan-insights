import { Locale } from "@/i18n/types";

export interface ResearcherEntry {
  text: string;
  href?: string;
}

export type MethodologyBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: { lead?: string; text?: string; subItems?: string[] }[] };

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
          { type: "subheading", text: "Fieldwork & Empirical Scope:" },
          {
            type: "bullets",
            items: [
              { lead: "Astana", text: "National policy dialogue, expert working groups, and drafting recommendations for the Green Hydrogen Concept Note." },
              { lead: "Mangystau (Aktau) & Atyrau Regions", text: "Identical multi-sited field research assessing social impacts, local employment expectations, and skills readiness." },
              {
                lead: "Empirical Sample (96 Participants)",
                subItems: [
                  "24 institutional stakeholder interviews across government agencies, energy companies, academia, and civil society.",
                  "24 in-depth interviews and 8 focus groups (48 community members) with local residents, workers, youth, and women.",
                ],
              },
            ],
          },
          {
            type: "paragraph",
            text: "The findings directly informed actionable recommendations adopted in Kazakhstan’s Green Hydrogen Concept Note.",
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
            text: "Жоба тұрақты әрі әділ энергетикалық көшу үшін қажетті әлеуметтік, институционалдық және кадрлық жағдайларды зерделей отырып, Қазақстанның «Жасыл» сутек тұжырымдамасын әзірлеуге үлес қосты. Зерттеу барысында еліміздің күн мен жел ресурстарына бай болуы маңызды болғанымен, қоғамдық сенім мен институционалдық дайындықсыз тек технологиялық және ресурстық әлеуеттің өзі сәтті дамуға кепіл бола алмайтыны көрсетілді.",
          },
          { type: "subheading", text: "Далалық жұмыстар мен деректер ауқымы:" },
          {
            type: "bullets",
            items: [
              { lead: "Астана", text: "Ұлттық деңгейдегі саяси диалог, сараптамалық жұмыс топтары және «Жасыл» сутек тұжырымдамасына ұсыныстар дайындау." },
              { lead: "Маңғыстау (Ақтау) және Атырау облыстары", text: "Әлеуметтік әсерді, еңбек нарығындағы күтулер мен біліктілік тапшылығын бағалауға бағытталған бірыңғай көп локациялы далалық зерттеулер." },
              {
                lead: "Эмпирикалық база (96 қатысушы)",
                subItems: [
                  "Мемлекеттік органдар, энергетикалық кәсіпорындар, академиялық орта және азаматтық қоғам өкілдерімен 24 институционалдық сұхбат.",
                  "Жергілікті тұрғындар, өндіріс жұмысшылары, жастар және әйелдермен өткізілген 24 тереңдетілген сұхбат пен 8 фокус-топ (48 қатысушы).",
                ],
              },
            ],
          },
          {
            type: "paragraph",
            text: "Зерттеу қорытындылары Қазақстанның «Жасыл» сутек тұжырымдамасының жобасына тікелей ұсынымдар ретінде енгізілді.",
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
            text: "Проект внес вклад в разработку Концепции зеленого водорода Казахстана путем комплексного изучения социальных, институциональных и кадровых условий, необходимых для устойчивого и справедливого энергетического перехода. Исследование показало, что одного лишь природно-технологического потенциала ветровой и солнечной энергии недостаточно: ключевыми факторами успеха выступают общественное доверие и институциональная готовность.",
          },
          { type: "subheading", text: "Полевые исследования и охват:" },
          {
            type: "bullets",
            items: [
              { lead: "Астана", text: "Национальный экспертно-политический диалог, участие в рабочих группах и подготовка рекомендаций для Концепции зеленого водорода." },
              { lead: "Мангистауская (Актау) и Атырауская области", text: "Комплексные полевые исследования по единой методологии для оценки социальных последствий, ожиданий рынка труда и дефицита навыков." },
              {
                lead: "Выборка исследования (96 участников)",
                subItems: [
                  "24 институциональных интервью с представителями государственных органов, энергетических компаний, научного сообщества и гражданского общества.",
                  "24 глубинных интервью и 8 фокус-групп (48 участников) с местными жителями, работниками предприятий, молодежью и женщинами.",
                ],
              },
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
