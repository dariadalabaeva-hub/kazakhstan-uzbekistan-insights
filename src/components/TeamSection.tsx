import linkedinIcon from "@/assets/icons/linkedin.png";
import researchNuIcon from "@/assets/icons/research-nu.png";
import nurceIcon from "@/assets/icons/nurce-team.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/useT";
import { getTeamMembers } from "@/i18n/content";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function TeamSection() {
  const { locale } = useLanguage();
  const t = useT();
  const allMembers = getTeamMembers(locale);
  const [expanded, setExpanded] = useState(false);
  const visibleMembers = allMembers.slice(0, allMembers.length - 3);
  const hiddenMembers = allMembers.slice(allMembers.length - 3);

  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("");
  };

  const renderCard = (member: ReturnType<typeof getTeamMembers>[number], index: number) => (

            <div
              key={member.id}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20 flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-5">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                      <span className="font-heading text-2xl font-semibold text-primary">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="text-center flex-1">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 font-body text-sm font-medium text-secondary">
                  {member.role}
                </p>
              </div>

              {/* Social Links */}
              {(member.nurce || member.researchPortal || member.linkedin) && (
                <div className="flex items-center justify-center gap-3 mt-4 pt-3 border-t border-border">
                  {member.nurce && (
                    <a
                      href={member.nurce}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t("team.nurce")}
                      className="opacity-70 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <img src={nurceIcon} alt="NURCE" className="h-5 w-auto" />
                    </a>
                  )}
                  {member.researchPortal && (
                    <a
                      href={member.researchPortal}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t("team.researchPortal")}
                      className="opacity-70 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <img src={researchNuIcon} alt="Research Portal" className="h-5 w-auto" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t("team.linkedin")}
                      className="opacity-70 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-auto" />
                    </a>
                  )}
                </div>
              )}
            </div>
  );

  return (
    <section id="team" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            {t("team.title")}
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("team.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {visibleMembers.map(renderCard)}
        </div>

        {hiddenMembers.length > 0 && (
          <>
            <div
              className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                expanded ? "max-h-[3000px] opacity-100 mt-6" : "max-h-0 opacity-0"
              } grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto`}
              aria-hidden={!expanded}
            >
              {hiddenMembers.map(renderCard)}
            </div>

            <div className="flex justify-center mt-10">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-6 py-3 font-body text-sm font-semibold text-amber-500 shadow-sm transition-all duration-300 hover:bg-amber-50/50 hover:text-amber-600"
              >
                {expanded ? t("team.showLess") : t("team.showMore")}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
