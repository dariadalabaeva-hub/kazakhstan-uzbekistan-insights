import { useState } from "react";
import { ExternalLink, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { publications } from "@/data/publicationsData";
import { Button } from "@/components/ui/button";

const INITIAL_DISPLAY_COUNT = 3;

export function PublicationsSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedPublications = showAll
    ? publications
    : publications.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id="publications" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Publications and Outputs
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            This section showcases selected publications by members of the project team on entrepreneurship. These works, including research produced prior to the current project, demonstrate the team's established engagement with the topic.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {displayedPublications.map((publication) => (
            <article
              key={publication.id}
              className="bg-background rounded-xl p-6 border border-border shadow-card"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg font-semibold text-foreground leading-snug mb-2">
                    {publication.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mb-1">
                    {publication.authors}
                  </p>
                  <p className="font-body text-secondary font-medium text-sm">
                    {publication.year}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View publication
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {publications.length > INITIAL_DISPLAY_COUNT && (
          <div className="text-center mt-8">
            <Button
              variant="default"
              onClick={() => setShowAll(!showAll)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {showAll ? (
                <>
                  Show less
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show more ({publications.length - INITIAL_DISPLAY_COUNT} more)
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
