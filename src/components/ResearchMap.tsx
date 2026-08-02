import { useLanguage } from "@/i18n/LanguageContext";
import mapAsset from "@/assets/central-asia-map.png.asset.json";

const HEADER: Record<string, string> = {
  en: "Research Fieldwork Sites",
  kk: "Далалық Зерттеу Алаңдары",
  ru: "Локации Полевых Исследований",
};

type CityKey = "astana" | "almaty" | "atyrau" | "aktau" | "tashkent";

const CITY_LABELS: Record<string, Record<CityKey, string>> = {
  en: {
    astana: "Astana",
    almaty: "Almaty",
    atyrau: "Atyrau",
    aktau: "Aktau",
    tashkent: "Tashkent",
  },
  kk: {
    astana: "Астана",
    almaty: "Алматы",
    atyrau: "Атырау",
    aktau: "Ақтау",
    tashkent: "Ташкент",
  },
  ru: {
    astana: "Астана",
    almaty: "Алматы",
    atyrau: "Атырау",
    aktau: "Актау",
    tashkent: "Ташкент",
  },
};

const CITY_TAGS: Record<string, Record<CityKey, string>> = {
  en: {
    astana: "Policy & Institutional Engagement",
    almaty: "IT Ecosystem Interviews",
    atyrau: "Green Hydrogen Fieldwork",
    aktau: "Green Hydrogen Fieldwork",
    tashkent: "IT Ecosystem Interviews",
  },
  kk: {
    astana: "Саясат және Институционалдық Жұмыс",
    almaty: "IT Экожүйесі Сұхбаттары",
    atyrau: "Жасыл Сутегі Далалық Зерттеу",
    aktau: "Жасыл Сутегі Далалық Зерттеу",
    tashkent: "IT Экожүйесі Сұхбаттары",
  },
  ru: {
    astana: "Политика и Институциональная Работа",
    almaty: "Интервью в IT-Экосистеме",
    atyrau: "Полевые Исследования Зелёного Водорода",
    aktau: "Полевые Исследования Зелёного Водорода",
    tashkent: "Интервью в IT-Экосистеме",
  },
};

// Percent coordinates on the uploaded clean map image
const CITIES: Array<{
  key: CityKey;
  x: number;
  y: number;
  color: "gold" | "cyan";
  labelSide: "left" | "right";
}> = [
  { key: "astana", x: 60, y: 22, color: "gold", labelSide: "right" },
  { key: "almaty", x: 77, y: 65, color: "gold", labelSide: "right" },
  { key: "atyrau", x: 15, y: 42, color: "gold", labelSide: "right" },
  { key: "aktau", x: 12, y: 58, color: "gold", labelSide: "right" },
  { key: "tashkent", x: 55, y: 72, color: "cyan", labelSide: "right" },
];

export function ResearchMap() {
  const { locale } = useLanguage();
  const labels = CITY_LABELS[locale] ?? CITY_LABELS.en;
  const tags = CITY_TAGS[locale] ?? CITY_TAGS.en;

  return (
    <div className="relative w-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] backdrop-blur-md p-5 sm:p-6 shadow-elevated">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
        <h3 className="font-body text-xs sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-primary-foreground/80">
          {HEADER[locale] ?? HEADER.en}
        </h3>
      </div>

      <div className="relative w-full">
        <img
          src={mapAsset.url}
          alt="Map of Kazakhstan and Uzbekistan showing research fieldwork sites"
          className="w-full h-auto object-contain block select-none pointer-events-none"
          draggable={false}
        />

        {/* City pin markers */}
        {CITIES.map((city) => {
          const dotColor = city.color === "gold" ? "#fbbf24" : "#38bdf8";
          const haloColor =
            city.color === "gold" ? "rgba(251,191,36,0.35)" : "rgba(56,189,248,0.35)";
          return (
            <div
              key={city.key}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${city.x}%`, top: `${city.y}%` }}
            >
              <span
                className="absolute inset-0 -m-2 rounded-full blur-sm animate-pulse"
                style={{ backgroundColor: haloColor }}
                aria-hidden
              />
              <span
                className="relative block w-2.5 h-2.5 rounded-full ring-2 ring-primary-foreground/40"
                style={{
                  backgroundColor: dotColor,
                  boxShadow: `0 0 10px ${dotColor}`,
                }}
              />
              <span
                className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-bold drop-shadow-lg text-white ${
                  city.labelSide === "right" ? "left-4" : "right-4"
                }`}
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}
              >
                {labels[city.key]}
              </span>
              {/* Tooltip */}
              <span
                className={`pointer-events-none absolute z-10 top-1/2 -translate-y-1/2 ${
                  city.labelSide === "right" ? "left-4" : "right-4"
                } mt-6 translate-y-3 whitespace-nowrap rounded-md bg-slate-900/95 border border-primary-foreground/15 px-2.5 py-1.5 text-[11px] text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity shadow-lg`}
              >
                <span className="block font-semibold">{labels[city.key]}</span>
                <span className="block text-primary-foreground/70">
                  {tags[city.key]}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
