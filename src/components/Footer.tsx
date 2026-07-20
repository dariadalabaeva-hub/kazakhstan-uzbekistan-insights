import { siteInfo } from "@/data/siteData";
import { useT } from "@/i18n/useT";

export function Footer() {
  const t = useT();
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {siteInfo.shortTitle}. {t("footer.rights")}
          </p>

          <nav className="flex items-center gap-6">
            <a href="#home" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.home")}
            </a>
            <a href="#team" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.team")}
            </a>
            <a href="#activities" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.activities")}
            </a>
            <a href="#publications" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.publications")}
            </a>
            <a href="#partners" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.partners")}
            </a>
            <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("nav.contact")}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
