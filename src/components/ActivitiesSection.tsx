import { Calendar, MapPin, Users } from "lucide-react";
import { activities, Activity } from "@/data/siteData";

function PastEventCard({ activity }: { activity: Activity }) {
  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-card border border-border">
      {/* Conference visual */}
      <div className="aspect-video relative overflow-hidden">
        {activity.image ? (
          <img 
            src={activity.image} 
            alt={activity.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="text-primary" size={36} />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-secondary">
            <Calendar size={14} />
            <span className="font-body font-medium">{activity.date}</span>
          </div>
          {activity.location && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={14} />
              <span className="font-body">{activity.location}</span>
            </div>
          )}
        </div>

        <h3 className="mt-4 font-heading text-lg font-semibold text-foreground leading-snug">
          {activity.title}
        </h3>

        <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">
          {activity.description}
        </p>

        <div className="mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            Past Event
          </span>
        </div>
      </div>
    </article>
  );
}

function UpcomingEventCard({ activity }: { activity: Activity }) {
  return (
    <article className="group bg-card/50 rounded-xl overflow-hidden border-2 border-dashed border-border/60 opacity-75 hover:opacity-90 transition-opacity">
      {/* Placeholder visual */}
      <div className="aspect-video bg-muted/30 relative overflow-hidden flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center">
          <Calendar className="text-muted-foreground/50" size={28} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground/70">
          <Calendar size={14} />
          <span className="font-body text-sm font-medium">{activity.date}</span>
        </div>

        <h3 className="mt-3 font-heading text-lg font-semibold text-muted-foreground">
          {activity.title}
        </h3>

        <p className="mt-2 font-body text-sm text-muted-foreground/70 leading-relaxed">
          {activity.description}
        </p>

        <div className="mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
            Coming Soon
          </span>
        </div>
      </div>
    </article>
  );
}

export function ActivitiesSection() {
  const pastActivities = activities.filter((a) => a.type === "past");
  const upcomingActivities = activities.filter((a) => a.type === "upcoming");

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pastActivities.map((activity) => (
            <PastEventCard key={activity.id} activity={activity} />
          ))}
          {upcomingActivities.map((activity) => (
            <UpcomingEventCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
