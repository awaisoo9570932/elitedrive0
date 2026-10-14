import { useState } from "react";
import { cars, categories, type Car } from "@/data/site";
import { CarCard } from "./CarCard";

export function Fleet({ onView, favorites, toggleFav }: { onView: (c: Car) => void; favorites: Set<string>; toggleFav: (id: string) => void }) {
  const [cat, setCat] = useState<(typeof categories)[number]>("All Cars");
  const list = cat === "All Cars" ? cars : cars.filter((c) => c.category === cat);
  return (
    <section id="fleet" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p className="eyebrow">Our fleet</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Curated for the journey.</h2>
        </div>
        <div role="tablist" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`min-h-10 rounded-full border px-5 text-sm font-semibold transition ${cat === c ? "border-gold bg-gold text-primary-foreground" : "border-border text-foreground/80 hover:border-gold"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((c) => <CarCard key={c.id} car={c} onView={onView} fav={favorites.has(c.id)} toggleFav={toggleFav} />)}
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">All prices are illustrative demo rates and do not represent real offers.</p>
    </section>
  );
}
