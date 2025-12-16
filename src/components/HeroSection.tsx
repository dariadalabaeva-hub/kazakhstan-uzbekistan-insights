import { siteInfo } from "@/data/siteData";
import { Calendar, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-5xl mx-auto">
          {/* Status & Duration Info Box */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span className="font-body text-sm font-medium text-primary-foreground">
                Status: {siteInfo.status}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20">
              <Calendar className="w-4 h-4 text-primary-foreground/80" />
              <span className="font-body text-sm font-medium text-primary-foreground">
                {siteInfo.duration.start} → {siteInfo.duration.end}
              </span>
            </div>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary-foreground leading-tight text-balance animate-fade-in text-center">
            {siteInfo.title}
          </h1>
          
          <p className="mt-6 font-body text-lg sm:text-xl text-primary-foreground/80 font-light animate-fade-in text-center" style={{ animationDelay: "0.2s" }}>
            {siteInfo.subtitle}
          </p>

          {/* Project Description */}
          <div className="mt-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="font-body text-base sm:text-lg text-primary-foreground/90 leading-relaxed text-center">
              {siteInfo.description}
            </p>
          </div>

          {/* Keywords Tags */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {siteInfo.keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-4 py-1.5 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-sm font-body rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/25 transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="#team"
              className="inline-flex items-center justify-center px-8 py-3 font-body font-medium text-primary bg-primary-foreground rounded-lg hover:bg-primary-foreground/90 transition-all shadow-elevated"
            >
              Meet the Team
            </a>
            <a
              href="#publications"
              className="inline-flex items-center justify-center px-8 py-3 font-body font-medium text-primary-foreground border-2 border-primary-foreground/30 rounded-lg hover:bg-primary-foreground/10 transition-all"
            >
              View Publications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
