import { useState } from "react";
import { Calendar, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { ResearchMap } from "./ResearchMap";
import { useLanguage } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/useT";
import { getSiteInfo } from "@/i18n/content";

export function HeroSection() {
  const { locale } = useLanguage();
  const t = useT();
  const siteInfo = getSiteInfo(locale);
  const [abstractOpen, setAbstractOpen] = useState(false);

  const paragraphs = Array.isArray(siteInfo.description)
    ? siteInfo.description
    : [siteInfo.description];

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-32">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-3 text-left">

          {/* Status & Duration Info Box */}
          <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span className="font-body text-sm font-medium text-primary-foreground">
                {t("hero.status")}: {siteInfo.status}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20">
              <Calendar className="w-4 h-4 text-primary-foreground/80" />
              <span className="font-body text-sm font-medium text-primary-foreground">
                {siteInfo.duration.start} → {siteInfo.duration.end}
              </span>
            </div>
          </div>

          <h1
            className="font-heading text-3xl sm:text-4xl font-semibold text-primary-foreground text-balance animate-fade-in"
            style={{ animationDelay: "0.2s", lineHeight: 1.2 }}
          >
            {siteInfo.title}
          </h1>

          <p
            className="mt-6 font-body text-base sm:text-lg text-primary-foreground/70 font-normal animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {siteInfo.grantInfo}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <button
              type="button"
              onClick={() => setAbstractOpen((v) => !v)}
              aria-expanded={abstractOpen}
              aria-controls="project-abstract"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-body font-medium text-primary bg-primary-foreground rounded-lg hover:bg-primary-foreground/90 transition-all shadow-elevated"
            >
              {abstractOpen ? t("hero.hideAbstract") : t("hero.readAbstract")}
              {abstractOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            <a
              href="#team"
              className="inline-flex items-center justify-center px-8 py-3 font-body font-medium text-primary-foreground border-2 border-primary-foreground/30 rounded-lg hover:bg-primary-foreground/10 transition-all"
            >
              {t("hero.meetTeam")}
            </a>
          </div>

          {/* Expandable Abstract */}
          <div
            id="project-abstract"
            className={`grid transition-all duration-500 ease-in-out ${
              abstractOpen ? "grid-rows-[1fr] opacity-100 mt-10" : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-4">
                {paragraphs.map((paragraph, i) => (
                  <p key={i} className="font-body text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {siteInfo.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center h-10 px-5 whitespace-nowrap bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-sm font-body rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/25 transition-colors"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
