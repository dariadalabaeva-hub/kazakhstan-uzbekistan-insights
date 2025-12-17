import { Mail } from "lucide-react";

export function ContactSection() {
  const email = "green-it.project@nu.edu.kz";

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Get in Touch
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Interested in our research or collaboration opportunities? We'd love to hear from you.
          </p>

          {/* Email CTA */}
          <div className="mt-12">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-4 px-10 py-5 font-body text-xl font-medium text-primary hover:text-secondary transition-colors"
            >
              <Mail size={28} className="text-secondary" />
              <span>{email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
