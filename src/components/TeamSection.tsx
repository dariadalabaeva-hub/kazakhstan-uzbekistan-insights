import { Mail } from "lucide-react";
import { teamMembers } from "@/data/siteData";

export function TeamSection() {
  return (
    <section id="team" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Our Team
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            An interdisciplinary team of researchers bringing expertise in anthropology, economics, and regional studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <span className="font-heading text-3xl font-semibold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 font-body text-sm font-medium text-secondary">
                  {member.role}
                </p>
                <p className="mt-4 font-body text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Email */}
                <a
                  href={`mailto:${member.email}`}
                  className="mt-6 inline-flex items-center gap-2 font-body text-sm text-primary hover:text-secondary transition-colors"
                >
                  <Mail size={16} />
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
