import { useLanguage } from "@/i18n/LanguageContext";

type Pin = {
  id: string;
  x: number;
  y: number;
  name: { en: string; kk: string; ru: string };
  tag: { en: string; kk: string; ru: string };
};

const PINS: Pin[] = [
  {
    id: "astana",
    x: 248,
    y: 64,
    name: { en: "Astana", kk: "Астана", ru: "Астана" },
    tag: {
      en: "Policy & Institutional Engagement",
      kk: "Саясат және институционалдық зерттеу",
      ru: "Политика и институциональные интервью",
    },
  },
  {
    id: "almaty",
    x: 302,
    y: 196,
    name: { en: "Almaty", kk: "Алматы", ru: "Алматы" },
    tag: {
      en: "IT Ecosystem Interviews",
      kk: "IT экожүйесі бойынша сұхбаттар",
      ru: "Интервью в IT-экосистеме",
    },
  },
  {
    id: "atyrau",
    x: 58,
    y: 131,
    name: { en: "Atyrau", kk: "Атырау", ru: "Атырау" },
    tag: {
      en: "Green Hydrogen Fieldwork",
      kk: "Жасыл сутегі бойынша далалық зерттеу",
      ru: "Полевые исследования по зелёному водороду",
    },
  },
  {
    id: "aktau",
    x: 50,
    y: 189,
    name: { en: "Aktau", kk: "Ақтау", ru: "Актау" },
    tag: {
      en: "Green Hydrogen Fieldwork",
      kk: "Жасыл сутегі бойынша далалық зерттеу",
      ru: "Полевые исследования по зелёному водороду",
    },
  },
  {
    id: "tashkent",
    x: 227,
    y: 228,
    name: { en: "Tashkent", kk: "Ташкент", ru: "Ташкент" },
    tag: {
      en: "IT Ecosystem Interviews",
      kk: "IT экожүйесі бойынша сұхбаттар",
      ru: "Интервью в IT-экосистеме",
    },
  },
];

const KAZAKHSTAN =
  "M 19.5 16.7 L 185.4 16.7 L 292.7 16.7 L 400 100 L 341.5 166.7 L 214.6 250 L 87.8 216.7 L 48.8 166.7 L 58.5 133.3 L 19.5 83.3 Z";
const UZBEKISTAN =
  "M 97.6 166.7 L 136.6 166.7 L 195.1 200 L 263.4 216.7 L 244 250 L 204.9 233.3 L 156.1 283.3 L 97.6 233.3 Z";

const HEADER: Record<string, string> = {
  en: "Research Fieldwork Sites",
  kk: "Далалық Зерттеу Алаңдары",
  ru: "Локации Полевых Исследований",
};

export function ResearchMap() {
  const { locale } = useLanguage();

  return (
    <div className="relative w-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] backdrop-blur-md p-5 sm:p-6 shadow-elevated">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
        <h3 className="font-body text-xs sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-primary-foreground/80">
          {HEADER[locale] ?? HEADER.en}
        </h3>
      </div>

      <div className="relative">
        <svg
          viewBox="0 0 400 300"
          className="w-full h-auto"
          role="img"
          aria-label="Research fieldwork map of Central Asia"
        >
          <defs>
            <pattern id="mapGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="hsl(var(--primary-foreground))" strokeOpacity="0.08" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="400" height="300" fill="url(#mapGrid)" />

          <path
            d={KAZAKHSTAN}
            fill="hsl(var(--primary-foreground))"
            fillOpacity="0.08"
            stroke="hsl(var(--primary-foreground))"
            strokeOpacity="0.55"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path
            d={UZBEKISTAN}
            fill="hsl(var(--primary-foreground))"
            fillOpacity="0.08"
            stroke="hsl(var(--primary-foreground))"
            strokeOpacity="0.55"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {PINS.map((pin) => (
            <g key={pin.id} className="group cursor-pointer">
              <circle cx={pin.x} cy={pin.y} r="22" fill="url(#pinGlow)" />
              <circle
                cx={pin.x}
                cy={pin.y}
                r="6"
                fill="hsl(var(--secondary))"
                opacity="0.35"
                className="origin-center"
                style={{ transformBox: "fill-box", transformOrigin: "center", animation: "pulse-ring 2.4s ease-out infinite" }}
              />
              <circle
                cx={pin.x}
                cy={pin.y}
                r="4"
                fill="hsl(var(--secondary))"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="1.2"
              />
            </g>
          ))}
        </svg>

        {/* HTML overlay for tooltips */}
        <div className="absolute inset-0 pointer-events-none">
          {PINS.map((pin) => (
            <div
              key={pin.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
              style={{ left: `${(pin.x / 400) * 100}%`, top: `${(pin.y / 300) * 100}%` }}
            >
              <div className="h-5 w-5 rounded-full" />
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+6px)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <div className="whitespace-nowrap rounded-md bg-primary-foreground text-primary shadow-elevated px-3 py-1.5 text-xs font-body">
                  <div className="font-semibold">{pin.name[locale as "en" | "kk" | "ru"] ?? pin.name.en}</div>
                  <div className="text-[11px] text-primary/70">{pin.tag[locale as "en" | "kk" | "ru"] ?? pin.tag.en}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { r: 4; opacity: 0.6; }
          80% { r: 18; opacity: 0; }
          100% { r: 18; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
