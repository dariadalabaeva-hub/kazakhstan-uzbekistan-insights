import { MinusCircle, PlusCircle } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { researchCasesContent, ResearchCase } from "@/data/researchCasesData";
import { useLanguage } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/useT";

function CaseDetails({ researchCase }: { researchCase: ResearchCase }) {
  const { locale } = useLanguage();
  const { labels } = researchCasesContent[locale];

  if (researchCase.placeholder) return null;

  return (
    <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:p-10">
      <div className="space-y-7">
        <div className="flex flex-wrap gap-2">
          {researchCase.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <h4 className="font-body text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {labels.timeline}
          </h4>
          <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
            {researchCase.timeline}
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs font-semibold uppercase text-muted-foreground">
            {labels.researchers}
          </h4>
          <ul className="mt-3 space-y-3">
            {researchCase.researchers.map((researcher) => (
              <li key={researcher.text} className="flex gap-3 font-body text-sm leading-relaxed text-muted-foreground">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-research-accent" />
                <span>
                  {researcher.href ? (
                    <a
                      href={researcher.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-research-accent/60 underline-offset-2 transition-colors hover:text-primary"
                    >
                      {researcher.text}
                    </a>
                  ) : (
                    researcher.text
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-7 border-t border-border pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
        <div>
          <h4 className="font-body text-xs font-semibold uppercase text-muted-foreground">
            {labels.methodology}
          </h4>
          <div className="mt-3 space-y-4">
            {researchCase.methodology.map((block, index) =>
              block.type === "paragraph" ? (
                <p key={index} className="font-body text-sm leading-relaxed text-muted-foreground">
                  {block.text}
                </p>
              ) : (
                <ul key={index} className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item.text} className="flex gap-3 font-body text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-research-accent" />
                      <span>
                        {item.lead && (
                          <strong className="font-semibold text-foreground">{item.lead}: </strong>
                        )}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResearchCasesSection() {
  const { locale } = useLanguage();
  const t = useT();
  const { cases } = researchCasesContent[locale];

  return (
    <section id="research-cases" className="bg-muted/50 py-24 scroll-mt-16 lg:scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            {t("researchCases.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-body text-lg leading-relaxed text-muted-foreground">
            {t("researchCases.subtitle")}
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-6xl space-y-4"
        >
          {cases.map((researchCase) => (
            <AccordionItem
              key={researchCase.id}
              value={`case-${researchCase.id}`}
              className="overflow-hidden rounded-xl border-0 shadow-card"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="group flex min-h-20 w-full items-center justify-between gap-5 rounded-xl bg-research-header px-5 py-5 text-left transition-colors hover:bg-research-header/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-research-accent focus-visible:ring-offset-2 data-[state=open]:rounded-b-none sm:px-7">
                  <span className="font-body text-lg font-semibold leading-snug text-primary-foreground">
                    {researchCase.title}
                  </span>
                  <span className="shrink-0 text-research-accent" aria-hidden="true">
                    <PlusCircle className="h-6 w-6 group-data-[state=open]:hidden" />
                    <MinusCircle className="hidden h-6 w-6 group-data-[state=open]:block" />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="border border-t-0 border-border bg-card p-0">
                <CaseDetails researchCase={researchCase} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}