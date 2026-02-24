import { useState } from "react";
import { Calendar, MapPin, Presentation, Search, ChevronDown, ChevronUp } from "lucide-react";
import { activities, Activity } from "@/data/siteData";
import { Button } from "@/components/ui/button";

function PastEventCard({ activity }: { activity: Activity }) {
  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-card border border-border h-full flex flex-col">
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
              <Presentation className="text-primary" size={36} />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
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

        <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed flex-1">
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

function ActiveEventCard({ activity }: { activity: Activity }) {
  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-card border-2 border-secondary/50 h-full flex flex-col">
      {/* Research visual */}
      <div className="aspect-video relative overflow-hidden">
        {activity.image ? (
          <img 
            src={activity.image} 
            alt={activity.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-secondary/20 via-primary/10 to-secondary/20 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center animate-pulse">
              <Search className="text-secondary" size={36} />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
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
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary">
            Active Research
          </span>
        </div>
      </div>
    </article>
  );
}

export function ActivitiesSection() {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 6;

  const allActivities = [
    ...activities.filter((a) => a.type === "active"),
    ...activities.filter((a) => a.type === "past"),
  ];

  const visibleActivities = showAll ? allActivities : allActivities.slice(0, INITIAL_COUNT);
  const hasMore = allActivities.length > INITIAL_COUNT;

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
          {visibleActivities.map((activity, index) => (
            <div
              key={activity.id}
              className={index >= INITIAL_COUNT ? "animate-fade-in" : ""}
            >
              {activity.type === "active" ? (
                <ActiveEventCard activity={activity} />
              ) : (
                <PastEventCard activity={activity} />
              )}
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <Button
              variant="default"
              onClick={() => setShowAll(!showAll)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show More ({allActivities.length - INITIAL_COUNT} more)
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
