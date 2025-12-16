import { FileText, ExternalLink } from "lucide-react";
import { publications } from "@/data/siteData";

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Publications
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic papers and research outputs from our project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <article
              key={pub.id}
              className="group bg-background rounded-xl p-6 sm:p-8 border border-border hover:border-primary/30 shadow-card hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg gradient-hero flex items-center justify-center">
                    <FileText className="text-primary-foreground" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span className="font-body text-sm font-medium text-secondary">
                        {pub.year}
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="mt-3 font-body text-muted-foreground leading-relaxed">
                    {pub.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={pub.link}
                      className="inline-flex items-center gap-2 px-4 py-2 font-body text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <FileText size={16} />
                      Download PDF
                    </a>
                    <a
                      href={pub.link}
                      className="inline-flex items-center gap-2 px-4 py-2 font-body text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
