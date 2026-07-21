// Localized content overrides for data-driven sections (team, activities,
// publications, siteInfo). English lives in `src/data/*` and is authoritative.
// Populate the `kk` / `ru` maps line-by-line — any missing field falls back
// to the English source.

import { Locale } from "./types";
import {
  teamMembers as enTeam,
  activities as enActivities,
  siteInfo as enSiteInfo,
  TeamMember,
  Activity,
} from "@/data/siteData";
import { publications as enPublications, Publication } from "@/data/publicationsData";

// ---------- Team ----------
type TeamOverride = Partial<Pick<TeamMember, "name" | "role">>;
type TeamOverrides = Record<number, TeamOverride>;

const teamOverrides: Record<Locale, TeamOverrides> = {
  en: {},
  kk: {
    1: { name: "Филипп Шрёдер", role: "Жоба Жетекшісі" },
    2: { name: "Шумайла Юсафзай", role: "Қосалқы Жоба Жетекшісі" },
    3: { name: "Серик Оразгалиев", role: "Қосалқы Жоба Жетекшісі" },
    5: { name: "Индира Алибаева", role: "Постдокторант-Зерттеуші" },
    6: { name: "Нұрлыхан Алжанова", role: "Постдокторант-Зерттеуші" },
    13: { name: "Қасымхан Каппаров", role: "Ғылыми Қызметкер" },
    7: { name: "Холида Халдарова", role: "Зерттеу Ассистенті" },
    8: { name: "Айтолкын Алжанова", role: "Зерттеу Ассистенті" },
    9: { name: "Аяжан Темірболат", role: "Зерттеу Ассистенті" },
    10: { name: "Дария Далабаева", role: "Зерттеу Ассистенті" },
    11: { name: "Ғалия Сақтағанова", role: "Зерттеу Ассистенті" },
    12: { name: "Балгын Оразалы", role: "Зерттеу Ассистенті" },
  },
  ru: {},
};

export function getTeamMembers(locale: Locale): TeamMember[] {
  const overrides = teamOverrides[locale] ?? {};
  return enTeam.map((m) => ({ ...m, ...(overrides[m.id] ?? {}) }));
}

// ---------- Activities ----------
type ActivityOverride = Partial<
  Pick<Activity, "title" | "date" | "location" | "description" | "tag">
>;
type ActivityOverrides = Record<number, ActivityOverride>;

const activityOverrides: Record<Locale, ActivityOverrides> = {
  en: {},
  kk: {
    // 1: { title: "...", date: "...", location: "...", description: "...", tag: "..." },
  },
  ru: {
    // 1: { title: "...", date: "...", location: "...", description: "...", tag: "..." },
  },
};

export function getActivities(locale: Locale): Activity[] {
  const overrides = activityOverrides[locale] ?? {};
  return enActivities.map((a) => ({ ...a, ...(overrides[a.id] ?? {}) }));
}

// ---------- Publications ----------
type PublicationOverride = Partial<Pick<Publication, "title" | "authors">>;
type PublicationOverrides = Record<number, PublicationOverride>;

const publicationOverrides: Record<Locale, PublicationOverrides> = {
  en: {},
  kk: {
    // 1: { title: "...", authors: "..." },
  },
  ru: {
    // 1: { title: "...", authors: "..." },
  },
};

export function getPublications(locale: Locale): Publication[] {
  const overrides = publicationOverrides[locale] ?? {};
  return enPublications.map((p) => ({ ...p, ...(overrides[p.id] ?? {}) }));
}

// ---------- Site Info (Hero) ----------
type SiteInfoOverride = Partial<{
  title: string;
  shortTitle: string;
  grantInfo: string;
  status: string;
  description: string[];
  keywords: string[];
}>;

const siteInfoOverrides: Record<Locale, SiteInfoOverride> = {
  en: {},
  kk: {
    title:
      "Қазақстан мен Өзбекстандағы IT және жасыл экономика кәсіпкерлігіне салыстырмалы, пәнаралық және қолданбалы этнологиялық көзқарас",
    grantInfo:
      "Назарбаев Университет, Бірлес Зерттеу Бағдарламасы (111024CRP2004)",
    status: "Зерттеу жүргізілуде",
    description: [
      "Біздің жоба кәсіпкерлік саласын тереңірек түсіну үшін «этнологиялық перспектива», яғни мәдени тәжірибелер мен әлеуметтік қатынастарға аса назар аудару маңызды деп сенеді.",
      "Ғылыми тұрғыдан біз Қазақстан мен Өзбекстандағы ІТ және жасыл экономика саласы туралы салыстырмалы, эмпирикалық деректер жинаймыз. Зерттеуіміз аралас әдіснамаға негізделеді: кәсіпкерлермен терең сұхбаттар жүргізіліп, бақылау деректері жиналған соң, сол сапалық деректерге сүйене отыра сауалнама құралы әзірленеді. Сапалық нарративті есепке бағынатын өлшемдермен байланыстыру арқылы жобамыз Орта Азия мәдениетіне жақын «жетістік», «сенімділік» және «нетворкинг» ұғымдарын қолданып, жергілікті кәсіпкерлік теориясын дамытуға ат салысады.",
      "Жобаның қолданбалы бөлігін іске асыру үшін біз екі елдің де мемлекет пен жеке сектор өкілдерін сұхбат, семинар секілді ойталқыға шақырып, тығыз байланыста жұмыс істейміз. Зерттеу жұмысымыздың алғашқы кезеңдерінен бастап кәсіпкер, саясаткер және ұйым мүшелері бөліскен шынайы мәселелерді басшылыққа ала отырып, өзекті зерттеу сұрақтарын қалыптастырдық. Ал келер уақытта, кәсіпкерлікті дамыту саясатында қолдануға болатын дерек көздерін арттыру үшін саясат шолулары, бағдарлама бағалаулары мен оқу материалдары сияқты қолданбалы деректерді жариялаймыз.",
    ],
    keywords: [
      "Кәсіпкерлік",
      "Қазақстан және Өзбекстан",
      "ІТ және жасыл экономика",
      "әлеуметтік-мәдени антропология",
      "аралас әдістер",
      "эмикалық теория",
      "мүмкіндіктер құрылымы теориясы",
      "қолданбалы зерттеулер",
    ],
  },

  ru: {
    // title: "...",
    // grantInfo: "...",
    // status: "...",
    // description: ["...", "...", "..."],
    // keywords: ["...", "...", "...", "...", "...", "...", "...", "..."],
  },
};

export function getSiteInfo(locale: Locale): typeof enSiteInfo {
  const overrides = siteInfoOverrides[locale] ?? {};
  return { ...enSiteInfo, ...overrides };
}
