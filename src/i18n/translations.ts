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
    // "nav.home": "Басты бет",
  } as Partial<Record<string, string>>,

  // Populate Russian translations here. Missing keys fall back to English.
  ru: {
    // "nav.home": "Главная",
  } as Partial<Record<string, string>>,
} as const;

export type UiKey = keyof typeof uiStrings.en;

export function t(locale: Locale, key: UiKey): string {
  const localized = (uiStrings[locale] as Partial<Record<string, string>>)[key];
  if (localized) return localized;
  return uiStrings.en[key];
}
