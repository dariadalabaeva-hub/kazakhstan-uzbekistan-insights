import { Locale } from "@/i18n/types";

export interface ResearchCaseLocation {
  name: string;
  description: string;
}

export interface ResearchCase {
  id: number;
  title: string;
  tags: string[];
  timeline: string[];
  researchersIntro: string[];
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
      researchers: "Collaborators",
      locations: "Countries and Locations",
      methodology: "Project Description",
    },
    cases: [
      {
        id: 1,
        title: "Supporting Kazakhstan’s Green Hydrogen Transition: Social Acceptance, Institutional Readiness and Workforce Development",
        tags: ["Active Policy Case", "Kazakhstan–Germany (H₂-diplo)"],
        timeline: [
          "The specific research and Concept Note contribution described here was conducted primarily from October 2025 to April 2026.",
          "The intensive regional fieldwork took place from 19 to 30 November 2025.",
          "The main analytical reports were finalized in February 2026, followed by the final project forum and presentation of findings in April 2026.",
          "Academic and educational dissemination continued during 2026.",
        ],
        researchersIntro: [
          "The project was implemented within Kazakhstan–Germany cooperation under the H₂-diplo initiative.",
          "The project involved collaboration and engagement with:",
        ],
        researchers: [
          "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH and the H₂-diplo Office Kazakhstan;",
          "Dr Philipp Schroeder and Dr Nurlykhan Aljanova, Nazarbayev University;",
          "representatives of Kazakhstan’s national and regional public authorities;",
          "energy, extractive-industry and private-sector organizations;",
          "civil society and environmental organizations;",
          "universities, researchers and technical experts;",
          "regional educational institutions, including engagement with Yessenov University and the Kazakh-German Institute for Sustainable Engineering;",
          "residents, workers, women, young people and rural and urban communities in Mangystau and Atyrau.",
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
      { id: 2, title: "Upcoming Case Study", tags: [], timeline: [], researchersIntro: [], researchers: [], locations: [], methodology: [], placeholder: true },
      { id: 3, title: "Upcoming Case Study", tags: [], timeline: [], researchersIntro: [], researchers: [], locations: [], methodology: [], placeholder: true },
    ],
  },
  kk: {
    labels: {
      timeline: "Мерзімі мен кезеңдері",
      researchers: "Серіктестер",
      locations: "Өңірлер мен география",
      methodology: "Жобаның сипаттамасы",
    },
    cases: [
      {
        id: 1,
        title: "Қазақстанның «жасыл» сутекке көшуін қолдау: әлеуметтік қабылдау, институционалдық дайындық және кадрлық әлеуетті дамыту",
        tags: ["Қолданбалы кейс", "Қазақстан–Германия (H₂-diplo)"],
        timeline: [
          "Мұнда сипатталған нақты зерттеу және Тұжырымдама жобасына қосқан үлес негізінен 2025 жылдың қазанынан 2026 жылдың сәуіріне дейін жүргізілді.",
          "Қарқынды өңірлік далалық зерттеулер 2025 жылғы 19–30 қараша аралығында өтті.",
          "Негізгі талдамалық есептер 2026 жылдың ақпанында аяқталып, одан кейін 2026 жылдың сәуірінде қорытынды жобалық форум мен нәтижелердің таныстырылымы ұйымдастырылды.",
          "Академиялық және білім беру бағытындағы тарату жұмыстары 2026 жыл бойы жалғасты.",
        ],
        researchersIntro: [
          "The project was implemented within Kazakhstan–Germany cooperation under the H₂-diplo initiative.",
          "Жоба аясында төмендегі тараптармен ынтымақтастық пен өзара байланыс орнатылды:",
        ],
        researchers: [
          "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH және Қазақстандағы H₂-diplo кеңсесі;",
          "Д-р Филипп Шрёдер және д-р Нұрлыхан Әлжанова, Назарбаев Университеті;",
          "Қазақстанның ұлттық және өңірлік мемлекеттік органдарының өкілдері;",
          "Энергетика, өндіруші сала және жеке сектор ұйымдары;",
          "Азаматтық қоғам және экологиялық ұйымдар;",
          "Университеттер, зерттеушілер және техникалық сарапшылар;",
          "Өңірлік білім беру мекемелері, соның ішінде Yessenov University және Тұрақты инженерия қазақ-неміс институты;",
          "Маңғыстау мен Атыраудағы тұрғындар, жұмысшылар, әйелдер, жастар, сондай-ақ ауылдық және қалалық қауымдастықтар.",
        ],
        locations: [
          { name: "Астана", description: "Үйлестіру, сараптамалық талқылаулар, жұмыс топтарының кездесулері және «Жасыл» сутек тұжырымдамасын әзірлеу." },
          { name: "Ақтау және Маңғыстау облысының елді мекендері", description: "Жартылай құрылымдалған сұхбаттар, фокус-топтық талқылаулар және өңірлік мүдделі тараптармен (стейкхолдерлермен) байланыс." },
          { name: "Атырау және оған іргелес ауылдық елді мекендер", description: "Далалық сұхбаттар, фокус-топтар және энергетикалық көшудің әлеуметтік салдарын бағалау." },
          { name: "Германия", description: "Германия Федералды Сыртқы істер министрлігінің атынан GIZ жүзеге асыратын және Халықаралық климаттық бастама қаржыландыратын H₂-diplo бастамасы арқылы халықаралық институционалдық қолдау." },
        ],
        methodology: [
          "Жоба тұрақты және әділ сутекке көшу үшін қажетті әлеуметтік, институционалдық және кадрлық жағдайларды зерделей отырып, Қазақстанның «Жасыл» сутек тұжырымдамасын әзірлеуге үлес қосты. Қазақстанның айтарлықтай жел және күн ресурстарына ие екеніне қарамастан, зерттеуде тек технологиялық әлеуеттің өзі жасыл сутектің сәтті дамуына кепіл бола алмайтыны атап өтілді.",
          "Назарбаев Университетінің зерттеу тобы (д-р Филипп Шрёдер мен д-р Нұрлыхан Әлжанова) институционалдық мүдделі тараптармен сұхбаттарды, өңірлік далалық зерттеулерді және жұмыспен қамту мен білім беру саласын талдауды ұштастырған сапалық басым зерттеу жүргізді. Жұмыс барысында мемлекеттік органдар, өндіріс, азаматтық қоғам және академиялық орта өкілдерімен 24 сұхбат, сондай-ақ Маңғыстау мен Атырауда 24 сұхбат және 48 жергілікті тұрғынның қатысуымен сегіз фокус-топ өткізілді. Жалпы алғанда, эмпирикалық зерттеуге 96 қатысушы тартылды.",
          "Зерттеу барысында халықтың хабардарлығы, экологиялық және әлеуметтік тәуекелдер, институционалдық дайындық, жұмыспен қамту күтулері, біліктілік тапшылығы, қоғамдық сенім және жергілікті қауымдастықтардың жасыл сутекті дамытуға қолдау көрсету шарттары қаралды. Зерттеу нәтижелері «Жасыл» сутек тұжырымдамасына арналған практикалық ұсынымдар түрінде ұсынылды.",
        ],
      },
      { id: 2, title: "Жақында", tags: [], timeline: [], researchersIntro: [], researchers: [], locations: [], methodology: [], placeholder: true },
      { id: 3, title: "Жақында", tags: [], timeline: [], researchersIntro: [], researchers: [], locations: [], methodology: [], placeholder: true },
    ],
  },
  ru: {
    labels: {
      timeline: "Хронология и сроки",
      researchers: "Партнеры и сотрудничество",
      locations: "География и локации",
      methodology: "Описание проекта",
    },
    cases: [
      {
        id: 1,
        title: "Поддержка перехода Казахстана к зеленому водороду: социальное признание, институциональная готовность и развитие трудовых ресурсов",
        tags: ["Прикладной кейс", "Сотрудничество Казахстан–Германия (H₂-diplo)"],
        timeline: [
          "Описанные исследовательские мероприятия и вклад в разработку Концепции проводились преимущественно с октября 2025 года по апрель 2026 года.",
          "Интенсивный этап региональных полевых исследований проходил с 19 по 30 ноября 2025 года.",
          "Основные аналитические отчеты были завершены в феврале 2026 года, после чего в апреле 2026 года состоялись итоговый форум проекта и презентация результатов.",
          "Академическое и образовательное распространение результатов продолжалось в течение 2026 года.",
        ],
        researchersIntro: [
          "The project was implemented within Kazakhstan–Germany cooperation under the H₂-diplo initiative.",
          "Проект включал сотрудничество и взаимодействие со следующими сторонами:",
        ],
        researchers: [
          "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH и Офис H₂-diplo в Казахстане;",
          "Д-р Филипп Шрёдер и д-р Нурлыхан Альжанова, Назарбаев Университет;",
          "Представители национальных и региональных органов государственной власти Казахстана;",
          "Организации энергетического сектора, добывающей промышленности и частного бизнеса;",
          "Организации гражданского общества и экологические объединения;",
          "Университеты, исследователи и технические эксперты;",
          "Региональные образовательные учреждения, включая взаимодействие с Yessenov University и Казахстанско-Немецким институтом устойчивой инженерии;",
          "Жители, работники, женщины, молодежь, а также сельские и городские сообщества Мангистау и Атырау.",
        ],
        locations: [
          { name: "Астана", description: "Координация, экспертные обсуждения, заседания рабочих групп и подготовка Концепции зеленого водорода." },
          { name: "Актау и сообщества Мангистауской области", description: "Полуструктурированные интервью, фокус-групповые дискуссии и взаимодействие с региональными стейкхолдерами." },
          { name: "Атырау и прилегающие сельские сообщества", description: "Полевые интервью, фокус-группы и оценка социальных последствий энергетического перехода." },
          { name: "Германия", description: "Международная институциональная поддержка в рамках инициативы H₂-diplo, реализуемой GIZ от имени Федерального министерства иностранных дел Германии и финансируемой Международной климатической инициативой." },
        ],
        methodology: [
          "Проект внес вклад в разработку Концепции зеленого водорода Казахстана путем изучения социальных, институциональных и кадровых условий, необходимых для устойчивого и справедливого водородного перехода. Несмотря на то что Казахстан обладает значительными ветровыми и солнечными ресурсами, в исследовании подчеркивается, что один лишь технологический потенциал не может гарантировать успешное развитие отрасли зеленого водорода.",
          "Исследовательская группа Назарбаев Университета в лице д-ра Филиппа Шрёдера и д-ра Нурлыхан Альжановой провела исследование с преобладанием качественных методов, объединившее интервью с институциональными стейкхолдерами, региональные полевые исследования, а также анализ занятости и образования. Исследование включило 24 интервью с представителями государственных органов, индустрии, гражданского общества и академических кругов, а также 24 интервью и восемь фокус-групп с участием 48 местных жителей в Мангистау и Атырау. В общей сложности в эмпирическом исследовании приняли участие 96 человек.",
          "В рамках исследования изучались осведомленность общественности, экологические и социальные риски, институциональная готовность, ожидания в сфере занятости, дефицит навыков, общественное доверие и условия, при которых местные сообщества поддержат развитие зеленого водорода. Результаты были преобразованы в практические рекомендации для Концепции зеленого водорода.",
        ],
      },
      { id: 2, title: "Скоро", tags: [], timeline: [], researchersIntro: [], researchers: [], locations: [], methodology: [], placeholder: true },
      { id: 3, title: "Скоро", tags: [], timeline: [], researchersIntro: [], researchers: [], locations: [], methodology: [], placeholder: true },
    ],
  },
};
