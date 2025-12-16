import { Mail, Send } from "lucide-react";
import { siteInfo } from "@/data/siteData";

export function ContactSection() {
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
          <div className="mt-10">
            <a
              href={`mailto:${siteInfo.contactEmail}`}
              className="inline-flex items-center gap-3 px-8 py-4 font-body text-lg font-medium text-primary-foreground gradient-hero rounded-xl hover:opacity-90 transition-opacity shadow-elevated"
            >
              <Mail size={24} />
              {siteInfo.contactEmail}
            </a>
          </div>

          {/* Contact Form (Visual Only) */}
          <div className="mt-16 max-w-xl mx-auto">
            <div className="bg-background rounded-xl p-8 border border-border shadow-card">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2 text-left">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 font-body text-foreground bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2 text-left">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 font-body text-foreground bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-body text-sm font-medium text-foreground mb-2 text-left">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 font-body text-foreground bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2 text-left">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 font-body text-foreground bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 font-body font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
