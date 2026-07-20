import { createContext, useContext, ReactNode, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Locale, LOCALES } from "./types";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  pathFor: (l: Locale) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function localeFromPath(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "kk" || seg === "ru") return seg;
  return "en";
}

function stripLocale(pathname: string): string {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "kk" || seg === "ru") {
    const rest = pathname.replace(/^\/(kk|ru)/, "");
    return rest || "/";
  }
  return pathname || "/";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const locale = localeFromPath(location.pathname);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      pathFor: (l) => {
        const base = stripLocale(location.pathname);
        const prefix = l === "en" ? "" : `/${l}`;
        const path = base === "/" ? "/" : base;
        return `${prefix}${path === "/" && prefix ? "" : path}${location.hash || ""}`;
      },
      setLocale: (l) => {
        const base = stripLocale(location.pathname);
        const prefix = l === "en" ? "" : `/${l}`;
        const path = base === "/" ? "" : base;
        navigate(`${prefix}${path || "/"}${location.hash || ""}`);
      },
    }),
    [locale, location.pathname, location.hash, navigate]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

export { LOCALES };
