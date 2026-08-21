import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-wide">Raja Auto Care</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Boutique car detailing studio in Fremont, CA. Paint correction,
              ceramic protection and interior restoration since 2013.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon size={17} strokeWidth={1.7} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-foreground hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">
              Studio
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>48 Kingsway Industrial Park</li>
              <li>Unit 6, Fremont, CA 94538</li>
              <li>
                <a href="tel:+14155550182" className="hover:text-primary">
                  +1 (415) 555-0182
                </a>
              </li>
              <li>
                <a href="mailto:hello@rajaautocare.com" className="hover:text-primary">
                  hello@rajaautocare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Raja Auto Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
