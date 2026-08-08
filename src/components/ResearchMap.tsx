import { useLanguage } from "@/i18n/LanguageContext";
import mapAsset from "@/assets/maps-without-background.png.asset.json";

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

      <div className="relative w-full flex items-center justify-center">
        <img
          src={mapAsset.url}
          alt="Map of Kazakhstan and Uzbekistan showing research fieldwork sites"
          className="w-full h-auto max-h-[420px] object-contain block select-none pointer-events-none mix-blend-multiply"
          draggable={false}
        />
      </div>
    </div>
  );
}
