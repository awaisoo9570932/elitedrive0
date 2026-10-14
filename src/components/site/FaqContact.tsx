import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cars, faqs, siteConfig } from "@/data/site";

export function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 lg:py-32">
      <div className="text-center">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Good to know.</h2>
        <p className="mt-4 text-sm text-muted-foreground">General illustrative answers. Actual rental policies must be configured by the business.</p>
      </div>
      <Accordion type="single" collapsible className="mt-12">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`f${i}`} className="border-border">
            <AccordionTrigger className="py-5 text-left text-base font-semibold hover:text-gold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function Contact() {
  const empty = { name: "", email: "", phone: "", vehicle: "", message: "" };
  const [f, setF] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (f.name.trim().length < 2) er.name = "Enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) er.email = "Enter a valid email";
    if (f.phone && !/^[+\d\s()-]{6,20}$/.test(f.phone)) er.phone = "Enter a valid phone number";
    if (f.message.trim().length < 10) er.message = "Message should be at least 10 characters";
    setErrors(er);
    if (!Object.keys(er).length) { setSent(true); setF(empty); }
  };
  const err = (k: string) => errors[k] && <p role="alert" className="mt-1 text-xs text-destructive">{errors[k]}</p>;
  const lbl = "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground";

  return (
    <section id="contact" className="border-t border-border bg-charcoal py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Let's plan your drive.</h2>
          <p className="mt-5 text-muted-foreground">Tell us about your journey and preferred vehicle.</p>
          <ul className="mt-10 space-y-5 text-sm">
            {[[Phone, siteConfig.contact.phone], [Mail, siteConfig.contact.email], [MapPin, siteConfig.contact.address], [Clock, siteConfig.contact.hours]].map(([I, v]) => {
              const Icon = I as typeof Phone;
              return <li key={v as string} className="flex items-center gap-3"><span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40"><Icon size={16} className="text-gold" /></span>{v as string}</li>;
            })}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">Contact details shown are demonstration placeholders.</p>
        </div>
        <div className="lg:col-span-3">
          {sent ? (
            <div role="status" className="flex h-full flex-col items-center justify-center rounded-2xl border border-gold/40 bg-card p-10 text-center">
              <CheckCircle2 size={44} className="text-gold" />
              <h3 className="mt-4 text-2xl font-bold">Thank you — message received</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">This is a demonstration form. Your message was validated locally and was not emailed or stored.</p>
              <button onClick={() => setSent(false)} className="btn-outline mt-6">Send another message</button>
            </div>
          ) : (
            <form noValidate onSubmit={submit} className="grid gap-5 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2 sm:p-8">
              <div><label htmlFor="c-n" className={lbl}>Name *</label><input id="c-n" className="field" maxLength={100} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />{err("name")}</div>
              <div><label htmlFor="c-e" className={lbl}>Email *</label><input id="c-e" type="email" className="field" maxLength={255} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />{err("email")}</div>
              <div><label htmlFor="c-p" className={lbl}>Phone</label><input id="c-p" type="tel" className="field" maxLength={20} value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />{err("phone")}</div>
              <div><label htmlFor="c-v" className={lbl}>Preferred vehicle</label>
                <select id="c-v" className="field" value={f.vehicle} onChange={(e) => setF({ ...f, vehicle: e.target.value })}>
                  <option value="">No preference</option>
                  {cars.map((c) => <option key={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2"><label htmlFor="c-m" className={lbl}>Message *</label><textarea id="c-m" rows={5} maxLength={1000} className="field py-3" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />{err("message")}</div>
              <button type="submit" className="btn-gold sm:col-span-2">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
