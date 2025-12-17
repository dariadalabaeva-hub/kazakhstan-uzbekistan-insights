import { FileText } from "lucide-react";

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Publications & Outputs
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic papers and research outputs from our project.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-background rounded-xl p-8 sm:p-12 border border-border shadow-card text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <FileText className="text-muted-foreground" size={28} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              Coming Soon
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed max-w-md mx-auto">
              This project is currently in its active research phase. Publications will be posted here as they become available. Please check back for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
