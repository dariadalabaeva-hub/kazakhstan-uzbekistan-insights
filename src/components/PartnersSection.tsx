import nurceLogo from "@/assets/partners/NURCE.png";
import casSeminarLogo from "@/assets/partners/Humboldt_University_of_Berlin.png";
import isdcLogo from "@/assets/partners/ISDC.png";
import bmuLogo from "@/assets/partners/British_Management_University.png";
import { useT } from "@/i18n/useT";
import { useLanguage } from "@/i18n/LanguageContext";
import { Locale } from "@/i18n/types";

interface Partner {
  id: string;
  name: string;
  url: string;
  logo: string;
}

const partners: Partner[] = [
  {
    id: "nurce",
    name: "Nazarbayev University's Research Center for Entrepreneurship",
    url: "https://nurce.kz",
    logo: nurceLogo,
  },
  {
    id: "cas-seminar",
    name: "Department of Asian and African Studies, Central Asian Seminar",
    url: "https://www.iaaw.hu-berlin.de/en/region/centralasia/central-asian-seminar-1",
    logo: casSeminarLogo,
  },
  {
    id: "isdc",
    name: "International Security and Development Center, Berlin",
    url: "https://isdc.org/",
    logo: isdcLogo,
  },
  {
    id: "bmu",
    name: "British Management University, Tashkent",
    url: "https://bmu-edu.uz",
    logo: bmuLogo,
  },
];

// Localized partner name overrides. Add entries keyed by partner id to
// translate — missing entries fall back to the English name above.
const partnerNameOverrides: Record<Locale, Record<string, string>> = {
  en: {},
  kk: {
    "nurce": "Назарбаев Университетінің Кәсіпкерлікті Зерттеу Орталығы",
    "cas-seminar": "Азия және Африка Зерттеулері Кафедрасы, Орталық Азия Семинары",
    "isdc": "Берлин Халықаралық Қауіпсіздік және Даму Орталығы",
    "bmu": "Ташкенттегі Британдық Менеджмент Университеті",
  },
  ru: {},
};

export function PartnersSection() {
  const t = useT();
  const { locale } = useLanguage();
  const overrides = partnerNameOverrides[locale] ?? {};

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-14">
          {t("partners.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {partners.map((partner) => {
            const displayName = overrides[partner.id] ?? partner.name;
            return (
              <a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center gap-4"
              >
                <img
                  src={partner.logo}
                  alt={displayName}
                  className="h-16 sm:h-[72px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <span className="text-sm sm:text-[15px] leading-snug font-medium text-[hsl(220,50%,20%)] group-hover:text-primary transition-colors duration-300">
                  {displayName}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
