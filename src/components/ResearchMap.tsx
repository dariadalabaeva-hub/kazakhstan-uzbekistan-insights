import { useLanguage } from "@/i18n/LanguageContext";

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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 650"
        className="w-full h-auto max-h-[350px]"
        role="img"
        aria-label="Research fieldwork map of Central Asia"
      >
        {/* Kazakhstan Path */}
        <path
          id="KAZ"
          name="Kazakhstan"
          fill="#1e293b"
          fillOpacity="0.6"
          stroke="#94a3b8"
          strokeWidth="1.5"
          d="M135,398 L168,367 L172,319 L100,265 L108,235 L48,220 L68,175 L120,195 L144,142 L256,128 L305,172 L372,130 L452,148 L520,105 L602,112 L670,75 L738,135 L810,140 L855,198 L850,250 L915,258 L952,365 L920,402 L862,410 L860,452 L812,448 L780,410 L755,418 L738,368 L702,365 L668,390 L595,355 L570,392 L508,398 L475,445 L415,440 L385,410 L300,432 L215,435 L175,465 Z"
          className="transition-colors hover:fill-slate-700"
        />

        {/* Uzbekistan Path */}
        <path
          id="UZB"
          name="Uzbekistan"
          fill="#0f172a"
          fillOpacity="0.8"
          stroke="#38bdf8"
          strokeWidth="1.5"
          d="M215,435 L300,432 L385,410 L415,440 L475,445 L508,398 L570,392 L595,355 L668,390 L635,430 L580,460 L540,510 L490,520 L440,490 L390,515 L320,485 L260,495 Z"
          className="transition-colors hover:fill-slate-800"
        />

        {/* City Pin Markers (Glowing Dots & Labels) */}
        {/* Astana */}
        <g className="group cursor-pointer">
          <circle cx="520" cy="220" r="6" className="fill-amber-400 animate-pulse" />
          <circle cx="520" cy="220" r="12" className="fill-amber-400/30" />
          <text x="535" y="225" className="fill-slate-200 text-xs font-semibold">Astana</text>
        </g>

        {/* Almaty */}
        <g className="group cursor-pointer">
          <circle cx="760" cy="390" r="6" className="fill-amber-400 animate-pulse" />
          <circle cx="760" cy="390" r="12" className="fill-amber-400/30" />
          <text x="775" y="395" className="fill-slate-200 text-xs font-semibold">Almaty</text>
        </g>

        {/* Atyrau */}
        <g className="group cursor-pointer">
          <circle cx="160" cy="395" r="6" className="fill-amber-400 animate-pulse" />
          <circle cx="160" cy="395" r="12" className="fill-amber-400/30" />
          <text x="105" y="390" className="fill-slate-200 text-xs font-semibold">Atyrau</text>
        </g>

        {/* Aktau */}
        <g className="group cursor-pointer">
          <circle cx="140" cy="445" r="6" className="fill-amber-400 animate-pulse" />
          <circle cx="140" cy="445" r="12" className="fill-amber-400/30" />
          <text x="85" y="455" className="fill-slate-200 text-xs font-semibold">Aktau</text>
        </g>

        {/* Tashkent */}
        <g className="group cursor-pointer">
          <circle cx="585" cy="435" r="6" className="fill-sky-400 animate-pulse" />
          <circle cx="585" cy="435" r="12" className="fill-sky-400/30" />
          <text x="600" y="440" className="fill-sky-200 text-xs font-semibold">Tashkent</text>
        </g>
      </svg>
    </div>
  );
}
