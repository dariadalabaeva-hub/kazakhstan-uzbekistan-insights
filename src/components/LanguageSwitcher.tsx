import { useLanguage } from "@/i18n/LanguageContext";
import { LOCALES, LOCALE_LABELS, Locale } from "@/i18n/types";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={`inline-flex items-center gap-1 text-sm font-body ${className}`}>
      {LOCALES.map((l: Locale, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1 text-muted-foreground/50">|</span>}
          <button
            type="button"
            onClick={() => setLocale(l)}
            className={`px-1 transition-colors ${
              locale === l
                ? "font-semibold text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
            aria-label={`Switch language to ${LOCALE_LABELS[l]}`}
            aria-current={locale === l ? "true" : undefined}
          >
            {LOCALE_LABELS[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
