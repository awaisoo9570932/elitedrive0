import { Gem, Receipt, MapPin, Headset, Car as CarIcon, Plane, UserRound, Briefcase, PartyPopper, Star, Quote } from "lucide-react";
import experience from "@/assets/experience.jpg";
import cta from "@/assets/cta.jpg";
import { testimonials } from "@/data/site";

function Heading({ eyebrow, title, center }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
    </div>
  );
}

export function WhyUs() {
  const items = [
    [Gem, "Carefully Selected Fleet", "Every vehicle is chosen for its character, maintained meticulously and detailed before each rental."],
    [Receipt, "Transparent Pricing", "Clear daily rates with no hidden surprises. You see what's included before you confirm."],
    [MapPin, "Flexible Pickup", "Collect from a convenient point or have your car delivered to your door or hotel."],
    [Headset, "Dedicated Customer Support", "A real person to help plan your journey, from the first enquiry to the final return."],
  ] as const;
  return (
    <section id="about" className="border-y border-border bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Heading eyebrow="Why Elite Drive" title="Uncompromising, by design." center />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, t, d]) => (
            <div key={t} className="card-lift rounded-2xl border border-border bg-card p-7">
              <Icon size={28} strokeWidth={1.25} className="text-gold" />
              <h3 className="mt-6 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-32">
      <div className="overflow-hidden rounded-2xl shadow-elegant">
        <img src={experience} alt="Cream leather luxury car interior with ambient gold lighting at sunset" loading="lazy" width={1200} height={1408} className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" />
      </div>
      <div>
        <p className="eyebrow">The experience</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">More Than a Rental. <span className="text-gold-gradient">An Experience.</span></h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Sink into hand-finished leather. Feel effortless power at your fingertips. Enjoy the convenience of a car that's ready exactly when and where you need it.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">Comfort, performance and convenience — considered down to the last detail, so the only thing left for you is the drive.</p>
        <a href="#services" className="btn-gold mt-9">Discover Our Services</a>
      </div>
    </section>
  );
}

export function Services() {
  const items = [
    [CarIcon, "Luxury Car Rental", "Daily, weekly or monthly rentals from our curated fleet."],
    [Plane, "Airport Transfers", "Arrive in style with a vehicle waiting on landing."],
    [UserRound, "Chauffeur Service", "Sit back with a professional driver at the wheel."],
    [Briefcase, "Business Travel", "Make the right impression for meetings and roadshows."],
    [PartyPopper, "Special Occasions", "Weddings, anniversaries and milestones made memorable."],
  ] as const;
  return (
    <section id="services" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Heading eyebrow="Services" title="Tailored to every occasion." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map(([Icon, t, d]) => (
            <div key={t} className="card-lift rounded-2xl border border-border bg-card p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40"><Icon size={20} strokeWidth={1.5} className="text-gold" /></span>
              <h3 className="mt-6 font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">Service examples are illustrative for this demonstration website.</p>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    ["Choose Your Car", "Browse the fleet and pick the vehicle that suits your journey."],
    ["Select Your Dates", "Set your pickup and return dates and preferred location."],
    ["Confirm Your Booking", "Review the details and confirm — your car will be ready."],
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Heading eyebrow="How it works" title="Three steps to the open road." center />
      <ol className="relative mt-16 grid gap-10 md:grid-cols-3">
        <div aria-hidden className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-px bg-gradient-to-r from-gold/0 via-gold/60 to-gold/0 md:block" />
        {steps.map(([t, d], i) => (
          <li key={t} className="relative text-center">
            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-background text-lg font-extrabold text-gold">0{i + 1}</span>
            <h3 className="mt-6 text-xl font-bold">{t}</h3>
            <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="border-y border-border bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Heading eyebrow="Sample testimonials" title="Words from the road." center />
        <p className="mt-4 text-center text-xs text-muted-foreground">Illustrative demonstration content — not verified customer reviews.</p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-lift flex flex-col rounded-2xl border border-border bg-card p-8">
              <Quote className="text-gold/50" size={28} />
              <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} className="fill-gold text-gold" />)}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/85">“{t.text}”</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-bold">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      <img src={cta} alt="Black grand tourer driving a coastal road at night" loading="lazy" width={1920} height={912} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-overlay/60" />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">YOUR NEXT JOURNEY <span className="text-gold-gradient">STARTS HERE.</span></h2>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#fleet" className="btn-gold">Explore the Fleet</a>
          <a href="#contact" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
