import { Heart, Settings2, Users } from "lucide-react";
import type { Car } from "@/data/site";

export function CarCard({ car, onView, fav, toggleFav }: { car: Car; onView: (c: Car) => void; fav: boolean; toggleFav: (id: string) => void }) {
  return (
    <article className="card-lift group flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-[3/2] overflow-hidden">
        <img src={car.image} alt={`${car.name}, ${car.category.toLowerCase()} rental car`} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-gold backdrop-blur">{car.category}</span>
        <button
          onClick={() => toggleFav(car.id)}
          aria-pressed={fav}
          aria-label={fav ? `Remove ${car.name} from favorites` : `Add ${car.name} to favorites`}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur transition hover:scale-110"
        >
          <Heart size={17} className={fav ? "fill-gold text-gold" : "text-foreground"} />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold">{car.name}</h3>
        <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Settings2 size={14} /> {car.transmission}</span>
          <span className="flex items-center gap-1.5"><Users size={14} /> {car.seats}</span>
        </div>
        <div className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-4">
          <div>
            <p className="text-2xl font-extrabold">${car.price}<span className="text-sm font-medium text-muted-foreground">/day</span></p>
            <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">Demo pricing</p>
          </div>
          <button onClick={() => onView(car)} className="btn-outline min-h-10 px-4 text-xs">View Details</button>
        </div>
      </div>
    </article>
  );
}
