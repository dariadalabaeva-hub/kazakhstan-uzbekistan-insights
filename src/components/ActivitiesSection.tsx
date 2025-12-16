import { Calendar, ArrowRight } from "lucide-react";
import { activities } from "@/data/siteData";

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Research Activities
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Updates from our fieldwork, workshops, and collaborative events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <article
              key={activity.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="text-primary" size={28} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-secondary">
                  <Calendar size={14} />
                  <span className="font-body text-sm font-medium">{activity.date}</span>
                </div>

                <h3 className="mt-3 font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>

                <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {activity.excerpt}
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-secondary transition-colors"
                >
                  Read More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
