import { teamMembers } from "@/data/siteData";

export function TeamSection() {
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("");
  };

  return (
    <section id="team" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Our Team
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team is composed of scholars from anthropology, sociology, political science, public policy, economics, and entrepreneurship, reflecting a strongly interdisciplinary approach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20"
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
              <div className="text-center">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 font-body text-sm font-medium text-secondary">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
