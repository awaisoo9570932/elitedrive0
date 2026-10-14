import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { Car } from "@/data/site";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { QuickBooking } from "@/components/site/QuickBooking";
import { Fleet } from "@/components/site/Fleet";
import { CarModal } from "@/components/site/CarModal";
import { WhyUs, Experience, Services, HowItWorks, Testimonials, CTA } from "@/components/site/Sections";
import { FAQ, Contact } from "@/components/site/FaqContact";
import { Footer, BackToTop } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELITE DRIVE — Luxury & Sports Car Rental" },
      { name: "description", content: "Rent exceptional luxury, sports, SUV and electric cars with ELITE DRIVE. Flexible rentals and personalized service." },
      { property: "og:title", content: "ELITE DRIVE — Drive the Extraordinary" },
      { property: "og:description", content: "Exceptional cars. Unforgettable journeys. A luxury rental experience designed around you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<Car | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const toggleFav = (id: string) =>
    setFavorites((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <>
      <a href="#fleet" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to fleet</a>
      <Header />
      <main>
        <Hero />
        <QuickBooking onView={setSelected} favorites={favorites} toggleFav={toggleFav} />
        <Fleet onView={setSelected} favorites={favorites} toggleFav={toggleFav} />
        <WhyUs />
        <Experience />
        <Services />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CarModal car={selected} onClose={() => setSelected(null)} />
    </>
  );
}
