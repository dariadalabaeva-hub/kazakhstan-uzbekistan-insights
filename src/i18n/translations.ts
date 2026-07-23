// UI string translations.
// English is authoritative. Populate the `kk` and `ru` objects line-by-line
// to translate the site — any missing key automatically falls back to English.

import { Locale } from "./types";

export const uiStrings = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.team": "Team",
    "nav.activities": "Activities",
    "nav.publications": "Publications",
    "nav.partners": "Partners",
    "nav.contact": "Contact",
    "nav.toggleMenu": "Toggle menu",

    // Hero
    "hero.status": "Status",
    "hero.meetTeam": "Meet the Team",
    "hero.viewPublications": "View Publications",

    // Team
    "team.title": "Our Team",
    "team.subtitle":
      "Our team is composed of scholars from anthropology, sociology, political science, public policy, economics, and entrepreneurship, reflecting a strongly interdisciplinary approach.",
    "team.linkedin": "LinkedIn",
    "team.researchPortal": "NU Research Portal",
    "team.nurce": "NURCE Profile",

    // Activities
    "activities.title": "Research Activities",
    "activities.subtitle": "Updates from our fieldwork, workshops, and collaborative events.",
    "activities.activeTag": "Active Research",
    "activities.pastTag": "Past Event",
    "activities.showMore": "Show more",
    "activities.showLess": "Show less",
    "activities.moreCount": "more",
    "activities.showFullText": "... Show full text",
    "activities.showLessText": "Show less",

    // Publications
    "publications.title": "Publications and Outputs",
    "publications.subtitle":
      "This section showcases selected publications by members of the project team on entrepreneurship. These works, including research produced prior to the current project, demonstrate the team's established engagement with the topic.",
    "publications.view": "View publication",
    "publications.requestEmail": "Request via Email",
    "publications.showMore": "Show more",
    "publications.showLess": "Show less",
    "publications.moreCount": "more",

    // Partners
    "partners.title": "Partners",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Interested in our research or collaboration opportunities? We'd love to hear from you.",

    // Footer
    "footer.rights": "All rights reserved.",
  },

  // Populate Kazakh translations here. Missing keys fall back to English.
  kk: {
    // Navigation
    "nav.home": "Басты Бет",
    "nav.team": "Біздің Ұжым",
    "nav.activities": "Зерттеу Жұмысымыз",
    "nav.publications": "Ғылыми Мақалаларымыз",
    "nav.partners": "Серіктестеріміз",
    "nav.contact": "Байланысқа Шығу",
    "nav.toggleMenu": "Мәзірді ашу/жабу",

    // Hero
    "hero.status": "Ғылыми жобаның статусы",
    "hero.meetTeam": "Біздің Ұжым",
    "hero.viewPublications": "Ғылыми Мақалаларды Шолу",

    // Team
    "team.title": "Біздің Ұжым",
    "team.subtitle":
      "Біздің ұжым антропология, социология, саясаттану, мемлекеттік саясат, экономика және кәсіпкерлік сала мамандарынан құралып, зерттеу тақырыбына сәйкес пәнаралық сараптама ұсынады.",
    "team.linkedin": "LinkedIn",
    "team.researchPortal": "NU Research Portal",
    "team.nurce": "NURCE профилі",

    // Activities
    "activities.title": "Зерттеу Жұмысымыз",
    "activities.subtitle": "Далалық зерттеулер, семинарлар мен бірлескен іс-шаралар бойынша соңғы жаңалықтар.",
    "activities.activeTag": "Жүргізіліп Жатқан Зерттеулер",
    "activities.pastTag": "Өткен Іс-шара",
    "activities.showMore": "Барлығын көрсету",
    "activities.showLess": "Азырақ көрсету",
    "activities.moreCount": "тағы",
    "activities.showFullText": "... толық мәтінді көрсету",
    "activities.showLessText": "азырақ көрсету",

    // Publications
    "publications.title": "Ғылыми Мақалаларымыз",
    "publications.subtitle":
      "Бұл бөлімде жоба мүшелерінің кәсіпкерлік тақырыбындағы ғылыми басылымдары ұсынылған.",
    "publications.view": "Толық нұсқасын қарау",
    "publications.requestEmail": "Пошта арқылы сұрау",
    "publications.showMore": "Барлығын көрсету",
    "publications.showLess": "Азырақ көрсету",
    "publications.moreCount": "тағы",

    // Partners
    "partners.title": "Серіктестеріміз",

    // Contact
    "contact.title": "Байланысқа Шығу",
    "contact.subtitle":
      "Зерттеу жобаларымызға қызығасыз ба? Бірлескен жұмыс мүмкіндіктерін талқылауға дайынбыз.",

    // Footer
    "footer.rights": "Барлық құқықтар қорғалған.",
  } as Partial<Record<string, string>>,


  // Populate Russian translations here. Missing keys fall back to English.
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.team": "Команда",
    "nav.activities": "Исследовательская Деятельность",
    "nav.publications": "Публикации",
    "nav.partners": "Партнёры",
    "nav.contact": "Контакты",
    "nav.toggleMenu": "Открыть/закрыть меню",

    // Hero
    "hero.status": "Статус",
    "hero.meetTeam": "Познакомиться с Командой",
    "hero.viewPublications": "Просмотреть Публикации",

    // Team
    "team.title": "Наша Команда",
    "team.subtitle":
      "Наша команда состоит из исследователей в области антропологии, социологии, политологии, государственной политики, экономики и предпринимательства, что отражает выраженный междисциплинарный подход.",
    "team.linkedin": "LinkedIn",
    "team.researchPortal": "NU Research Portal",
    "team.nurce": "Профиль NURCE",

    // Activities
    "activities.title": "Исследовательская Деятельность",
    "activities.subtitle": "Обновления с наших полевых исследований, семинаров и совместных мероприятий.",
    "activities.activeTag": "Активное Исследование",
    "activities.pastTag": "Прошедшее Мероприятие",
    "activities.showMore": "Показать ещё",
    "activities.showLess": "Скрыть",
    "activities.moreCount": "ещё",
    "activities.showFullText": "... Показать больше",
    "activities.showLessText": "Показать меньше",

    // Publications
    "publications.title": "Публикации и Результаты",
    "publications.subtitle":
      "В этом разделе представлены избранные публикации членов исследовательской команды по теме предпринимательства. Эти работы, включая исследования, выполненные до начала текущего проекта, демонстрируют устойчивую вовлечённость команды в данную проблематику.",
    "publications.view": "Просмотреть публикацию",
    "publications.requestEmail": "Запросить по электронной почте",
    "publications.showMore": "Показать ещё",
    "publications.showLess": "Скрыть",
    "publications.moreCount": "ещё",

    // Partners
    "partners.title": "Партнёры",

    // Contact
    "contact.title": "Связаться с Нами",
    "contact.subtitle":
      "Заинтересованы в наших исследованиях или возможностях сотрудничества? Мы будем рады вашему обращению.",

    // Footer
    "footer.rights": "Все права защищены.",
  } as Partial<Record<string, string>>,
} as const;

export type UiKey = keyof typeof uiStrings.en;

export function t(locale: Locale, key: UiKey): string {
  const localized = (uiStrings[locale] as Partial<Record<string, string>>)[key];
  if (localized) return localized;
  return uiStrings.en[key];
}
