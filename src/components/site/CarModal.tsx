import { useEffect, useState } from "react";
import { CheckCircle2, Check, Gauge, Fuel, Settings2, Users, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Car } from "@/data/site";

const today = () => new Date().toISOString().slice(0, 10);

export function CarModal({ car, onClose }: { car: Car | null; onClose: () => void }) {
  const [f, setF] = useState({ name: "", email: "", pickup: "", ret: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  useEffect(() => { setDone(false); setErrors({}); setF({ name: "", email: "", pickup: "", ret: "" }); }, [car]);

  const days = f.pickup && f.ret && f.ret >= f.pickup ? Math.max(1, (new Date(f.ret).getTime() - new Date(f.pickup).getTime()) / 86400000) : 0;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (f.name.trim().length < 2) er.name = "Enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) er.email = "Enter a valid email";
    if (!f.pickup) er.pickup = "Choose a pickup date";
    else if (f.pickup < today()) er.pickup = "Pickup can't be in the past";
    if (!f.ret) er.ret = "Choose a return date";
    else if (f.pickup && f.ret < f.pickup) er.ret = "Return must be on or after pickup";
    setErrors(er);
    if (!Object.keys(er).length) setDone(true);
  };

  const err = (k: string) => errors[k] && <p role="alert" className="mt-1 text-xs text-destructive">{errors[k]}</p>;

  return (
    <Dialog open={!!car} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[92vh] max-w-4xl overflow-y-auto border-border bg-card p-0">
        {car && (
          <div className="grid md:grid-cols-2">
            <div className="relative">
              <img src={car.image} alt={car.name} className="aspect-[3/2] h-full w-full object-cover md:aspect-auto" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="eyebrow">{car.category}</p>
              <DialogTitle className="mt-2 text-2xl font-extrabold">{car.name}</DialogTitle>
              <DialogDescription className="mt-1 text-sm text-muted-foreground">
                ${car.price}/day · Demo pricing
              </DialogDescription>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                {[
                  [Zap, "Power", car.power], [Gauge, "Acceleration", car.acceleration],
                  [Settings2, "Transmission", car.transmission], [Users, "Seats", String(car.seats)],
                  [Fuel, "Fuel", car.fuel],
                ].map(([Icon, k, v]) => {
                  const I = Icon as typeof Zap;
                  return (
                    <div key={k as string} className="rounded-lg border border-border p-3">
                      <dt className="flex items-center gap-1.5 text-xs text-muted-foreground"><I size={13} /> {k as string}</dt>
                      <dd className="mt-1 font-semibold">{v as string}</dd>
                    </div>
                  );
                })}
              </dl>
              <ul className="mt-5 grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
                {car.features.map((x) => <li key={x} className="flex items-center gap-2"><Check size={14} className="text-gold" /> {x}</li>)}
              </ul>

              {done ? (
                <div className="mt-6 rounded-xl border border-gold/40 bg-secondary p-5 text-center" role="status">
                  <CheckCircle2 className="mx-auto text-gold" size={36} />
                  <p className="mt-3 font-bold">Demo reservation confirmed</p>
                  <p className="mt-1 text-sm text-muted-foreground">{car.name} · {f.pickup} → {f.ret}. This is a demonstration — no request was sent to a real rental service.</p>
                  <button onClick={onClose} className="btn-outline mt-4">Close</button>
                </div>
              ) : (
                <form noValidate onSubmit={submit} className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <input aria-label="Full name" placeholder="Full name" className="field" value={f.name} maxLength={100} onChange={(e) => setF({ ...f, name: e.target.value })} />{err("name")}
                  </div>
                  <div className="sm:col-span-2">
                    <input aria-label="Email" type="email" placeholder="Email" className="field" value={f.email} maxLength={255} onChange={(e) => setF({ ...f, email: e.target.value })} />{err("email")}
                  </div>
                  <div>
                    <label htmlFor="m-p" className="mb-1 block text-xs text-muted-foreground">Pickup</label>
                    <input id="m-p" type="date" min={today()} className="field" value={f.pickup} onChange={(e) => setF({ ...f, pickup: e.target.value })} />{err("pickup")}
                  </div>
                  <div>
                    <label htmlFor="m-r" className="mb-1 block text-xs text-muted-foreground">Return</label>
                    <input id="m-r" type="date" min={f.pickup || today()} className="field" value={f.ret} onChange={(e) => setF({ ...f, ret: e.target.value })} />{err("ret")}
                  </div>
                  {days > 0 && <p className="text-sm sm:col-span-2">Estimated demo total: <strong className="text-gold">${days * car.price}</strong> for {days} day{days > 1 ? "s" : ""}</p>}
                  <button type="submit" className="btn-gold sm:col-span-2">Book This Car</button>
                  <p className="text-xs text-muted-foreground sm:col-span-2">Reservations are demonstration-only and are not sent to a real rental service.</p>
                </form>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
