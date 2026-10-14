import { useState } from "react";
import { Search } from "lucide-react";
import { cars, categories, siteConfig, type Car } from "@/data/site";
import { CarCard } from "./CarCard";

const today = () => new Date().toISOString().slice(0, 10);

export function QuickBooking({ onView, favorites, toggleFav }: { onView: (c: Car) => void; favorites: Set<string>; toggleFav: (id: string) => void }) {
  const [f, setF] = useState({ location: "", pickup: "", ret: "", category: "All Cars" });
  const [errors, setErrors] = useState<Partial<Record<"location"|"pickup"|"ret"|"name"|"email"|"phone"|"message", string>>>({});
  const [results, setResults] = useState<Car[] | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Partial<Record<"location"|"pickup"|"ret"|"name"|"email"|"phone"|"message", string>> = {};
    if (!f.location) er.location = "Choose a pickup location";
    if (!f.pickup) er.pickup = "Choose a pickup date";
    else if (f.pickup < today()) er.pickup = "Pickup can't be in the past";
    if (!f.ret) er.ret = "Choose a return date";
    else if (f.pickup && f.ret < f.pickup) er.ret = "Return must be on or after pickup";
    setErrors(er);
    if (Object.keys(er).length) return setResults(null);
    setResults(f.category === "All Cars" ? cars : cars.filter((c) => c.category === f.category));
    setTimeout(() => document.getElementById("booking-results")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground";
  const err = (k: "location"|"pickup"|"ret"|"name"|"email"|"phone"|"message") => errors[k] && <p role="alert" className="mt-1 text-xs text-destructive">{errors[k]}</p>;

  return (
    <section id="booking" aria-label="Quick booking" className="relative z-10 mx-auto -mt-36 max-w-7xl px-5 lg:px-8">
      <form noValidate onSubmit={submit} className="grid gap-4 rounded-2xl border border-border bg-card/95 p-5 shadow-elegant backdrop-blur-md sm:grid-cols-2 sm:p-7 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:items-start">
        <div>
          <label htmlFor="qb-loc" className={label}>Pickup location</label>
          <select id="qb-loc" className="field" value={f.location} onChange={(e) => setF({ ...f, location: e.target.value })} aria-invalid={!!errors.location}>
            <option value="">Select location</option>
            {siteConfig.locations.map((l) => <option key={l}>{l}</option>)}
          </select>
          {err("location")}
        </div>
        <div>
          <label htmlFor="qb-pick" className={label}>Pickup date</label>
          <input id="qb-pick" type="date" min={today()} className="field" value={f.pickup} onChange={(e) => setF({ ...f, pickup: e.target.value })} aria-invalid={!!errors.pickup} />
          {err("pickup")}
        </div>
        <div>
          <label htmlFor="qb-ret" className={label}>Return date</label>
          <input id="qb-ret" type="date" min={f.pickup || today()} className="field" value={f.ret} onChange={(e) => setF({ ...f, ret: e.target.value })} aria-invalid={!!errors.ret} />
          {err("ret")}
        </div>
        <div>
          <label htmlFor="qb-cat" className={label}>Vehicle category</label>
          <select id="qb-cat" className="field" value={f.category} onChange={(e) => setF({ ...f, category: e.target.value })}>
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2 lg:col-span-1 lg:pt-[1.6rem]">
          <button type="submit" className="btn-gold w-full whitespace-nowrap"><Search size={16} /> Search Available Cars</button>
        </div>
      </form>

      {results && (
        <div id="booking-results" className="mt-10 scroll-mt-24">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
            <h2 className="text-2xl font-bold">{results.length} vehicles match your search</h2>
            <p className="text-sm text-muted-foreground">Demo results from our sample fleet — not live availability.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((c) => <CarCard key={c.id} car={c} onView={onView} fav={favorites.has(c.id)} toggleFav={toggleFav} />)}
          </div>
        </div>
      )}
    </section>
  );
}
