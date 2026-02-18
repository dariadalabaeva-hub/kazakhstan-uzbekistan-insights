import nurceLogo from "@/assets/partners/NURCE.png";
import casSeminarLogo from "@/assets/partners/Central_Asian_Seminar.png";
import isdcLogo from "@/assets/partners/ISDC.png";
import bmuLogo from "@/assets/partners/British_Management_University.png";

const partners = [
  {
    name: "Nazarbayev University's Research Centre for Entrepreneurship (NURCE)",
    url: "https://nurce.kz",
    logo: nurceLogo,
  },
  {
    name: "Humboldt University, Central Asian Seminar",
    url: "https://www.iaaw.hu-berlin.de/en/region/centralasia/central-asian-seminar-1",
    logo: casSeminarLogo,
  },
  {
    name: "International Security and Development Center (ISDC)",
    url: "https://isdc.org/",
    logo: isdcLogo,
  },
  {
    name: "British Management University, Tashkent",
    url: "https://bmu-edu.uz",
    logo: bmuLogo,
  },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-14">
          Partners
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16 lg:gap-20">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              title={partner.name}
              className="group relative"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
