import { siteInfo } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {siteInfo.shortTitle}. All rights reserved.
          </p>
          
          <nav className="flex items-center gap-6">
            <a href="#home" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#team" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Team
            </a>
            <a href="#activities" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Activities
            </a>
            <a href="#publications" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Publications
            </a>
            <a href="#partners" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Partners
            </a>
            <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
