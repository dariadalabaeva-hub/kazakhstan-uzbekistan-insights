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
    <section id="partners" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto items-start">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-6 rounded-xl border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300"
            >
              <div className="h-20 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 w-auto object-contain group-hover:scale-105 group-hover:opacity-80 transition-all duration-300"
                />
              </div>
              <p className="font-body text-sm text-muted-foreground text-center leading-snug">
                {partner.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
