import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "They spent two days on my A4 and handed it back better than the day I collected it from the dealer. The swirl marks are simply gone.",
    name: "Priya Nair",
    detail: "Ceramic coating · Audi A4",
  },
  {
    quote:
      "Three kids, one very abused back seat. I honestly expected them to give up — the interior came back smelling and feeling new.",
    name: "Daniel Okoye",
    detail: "Interior cleaning · Honda CR-V",
  },
  {
    quote:
      "Fair pricing, no upsell theatre, and they actually explain what they're doing and why. My whole family uses Raja now.",
    name: "Meera Shah",
    detail: "Full detailing · BMW 3 Series",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            What our clients say
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure
                className="flex h-full flex-col rounded-xl border border-border bg-background p-7"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs tracking-wide text-muted-foreground">
                    {t.detail}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
