import nurceLogo from "@/assets/partners/NURCE.png";
import casSeminarLogo from "@/assets/partners/Humboldt_University_of_Berlin.png";
import isdcLogo from "@/assets/partners/ISDC.png";
import bmuLogo from "@/assets/partners/British_Management_University.png";

const partners = [
  {
    name: "Nazarbayev University's Research Center for Entrepreneurship",
    url: "https://nurce.kz",
    logo: nurceLogo,
  },
  {
    name: "Department of Asian and African Studies, Central Asian Seminar",
    url: "https://www.iaaw.hu-berlin.de/en/region/centralasia/central-asian-seminar-1",
    logo: casSeminarLogo,
  },
  {
    name: "International Security and Development Center, Berlin",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-4"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 sm:h-[72px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-sm sm:text-[15px] leading-snug font-medium text-[hsl(220,50%,20%)] group-hover:text-primary transition-colors duration-300">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
