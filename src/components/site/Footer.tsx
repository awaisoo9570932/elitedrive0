import { useEffect, useState } from "react";
import { ArrowUp, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  const socials = [
    [Instagram, "Instagram", siteConfig.social.instagram], [Facebook, "Facebook", siteConfig.social.facebook],
    [Twitter, "X", siteConfig.social.x], [Youtube, "YouTube", siteConfig.social.youtube],
  ] as const;
  const col = "text-sm text-muted-foreground transition-colors hover:text-gold";
  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">An original luxury car rental concept. Exceptional cars, considered service.</p>
          <div className="mt-6 flex gap-2">
            {socials.map(([I, n, url]) => url ? (
              <a key={n} href={url} target="_blank" rel="noreferrer" aria-label={n} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-gold"><I size={16} /></a>
            ) : (
              <span key={n} title={`${n} — add your profile link`} aria-label={`${n} (not configured)`} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border opacity-40"><I size={16} /></span>
            ))}
          </div>
        </div>
        <nav aria-label="Footer"><h3 className="eyebrow">Explore</h3><ul className="mt-5 space-y-3">
          {[["home", "Home"], ["fleet", "Our Fleet"], ["services", "Services"], ["about", "About"], ["contact", "Contact"]].map(([id, l]) => <li key={id}><a href={`#${id}`} className={col}>{l}</a></li>)}
        </ul></nav>
        <div><h3 className="eyebrow">Services</h3><ul className="mt-5 space-y-3">
          {["Luxury Car Rental", "Airport Transfers", "Chauffeur Service", "Business Travel", "Special Occasions"].map((s) => <li key={s}><a href="#services" className={col}>{s}</a></li>)}
        </ul></div>
        <div><h3 className="eyebrow">Contact (demo)</h3><ul className="mt-5 space-y-3 text-sm text-muted-foreground">
          <li>{siteConfig.contact.phone}</li><li>{siteConfig.contact.email}</li><li>{siteConfig.contact.address}</li>
        </ul></div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} ELITE DRIVE. Demonstration website.</p>
          <div className="flex gap-6"><a href="#privacy" className={col} onClick={(e) => { e.preventDefault(); alert("Privacy Policy: add your business's privacy policy here."); }}>Privacy Policy</a><a href="#terms" className={col} onClick={(e) => { e.preventDefault(); alert("Terms: add your business's rental terms here."); }}>Terms</a></div>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-gold transition-all ${show ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
