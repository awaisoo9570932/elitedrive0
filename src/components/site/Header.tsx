import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { id: "home", label: "Home" },
  { id: "fleet", label: "Our Fleet" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" aria-label="ELITE DRIVE home"><Logo /></a>
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? "page" : undefined}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all ${
                active === l.id ? "text-gold after:w-full" : "text-foreground/80 after:w-0 hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#booking" className="btn-gold hidden sm:inline-flex">Book a Car</a>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background px-5 pb-6 lg:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`block border-b border-border py-4 text-base font-medium ${active === l.id ? "text-gold" : ""}`}
            >
              {l.label}
            </a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="btn-gold mt-6 w-full">Book a Car</a>
        </nav>
      )}
    </header>
  );
}
