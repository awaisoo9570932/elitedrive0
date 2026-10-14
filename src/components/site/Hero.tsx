import { ShieldCheck, CalendarClock, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img src={hero} alt="Black luxury sports car on a wet city street at dusk" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[60%_center]" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-48 pt-32 lg:px-8">
        <p className="eyebrow fade-up">Luxury car rental</p>
        <h1 className="fade-up mt-5 max-w-4xl text-[2.6rem] font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl" style={{ animationDelay: "0.1s" }}>
          DRIVE THE <span className="text-gold-gradient">EXTRAORDINARY.</span>
        </h1>
        <p className="fade-up mt-6 max-w-xl text-base text-foreground/80 sm:text-lg" style={{ animationDelay: "0.2s" }}>
          Exceptional cars. Unforgettable journeys. A rental experience designed around you.
        </p>
        <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.3s" }}>
          <a href="#fleet" className="btn-gold">Explore Our Fleet</a>
          <a href="#booking" className="btn-outline">Book Your Ride</a>
        </div>
        <ul className="fade-up mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-foreground/75" style={{ animationDelay: "0.4s" }}>
          <li className="flex items-center gap-2"><Sparkles size={16} className="text-gold" /> Premium vehicles</li>
          <li className="flex items-center gap-2"><CalendarClock size={16} className="text-gold" /> Flexible rentals</li>
          <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-gold" /> Personalized service</li>
        </ul>
      </div>
    </section>
  );
}
