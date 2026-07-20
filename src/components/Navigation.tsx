import { useState } from "react";
import { Menu, X } from "lucide-react";
import nuLogo from "@/assets/nu-logo.png";
import { useT } from "@/i18n/useT";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useT();

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#team", label: t("nav.team") },
    { href: "#activities", label: t("nav.activities") },
    { href: "#publications", label: t("nav.publications") },
    { href: "#partners", label: t("nav.partners") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <img
              src={nuLogo}
              alt="Nazarbayev University"
              className="h-10 lg:h-12 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher className="ml-2" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label={t("nav.toggleMenu")}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
