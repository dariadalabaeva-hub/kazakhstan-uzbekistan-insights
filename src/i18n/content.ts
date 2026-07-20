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
    // 1: { name: "...", role: "..." },
  },
  ru: {
    // 1: { name: "...", role: "..." },
  },
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
    // title: "...",
    // grantInfo: "...",
    // status: "...",
    // description: ["...", "...", "..."],
    // keywords: ["...", "...", "...", "...", "...", "...", "...", "..."],
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
