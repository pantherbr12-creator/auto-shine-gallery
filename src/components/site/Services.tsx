import { Droplets, Sparkles, ShieldCheck, Gem } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Droplets,
    title: "Exterior Wash",
    price: "from $49",
    description:
      "Two-bucket hand wash, foam pre-soak, decontaminated wheels and a spray sealant that keeps water beading for weeks.",
    points: ["pH-neutral foam", "Wheel & arch detail", "Streak-free glass"],
  },
  {
    icon: Sparkles,
    title: "Interior Cleaning",
    price: "from $89",
    description:
      "Deep vacuum, steam extraction of fabrics, leather cleaned and conditioned, every vent and seam brought back to new.",
    points: ["Steam sanitising", "Leather conditioning", "Odour removal"],
  },
  {
    icon: ShieldCheck,
    title: "Ceramic Coating",
    price: "from $499",
    description:
      "A 9H graphene-infused coating applied over corrected paint for years of gloss, chemical resistance and easy washes.",
    points: ["Up to 5-year gloss", "UV & chemical shield", "Hydrophobic finish"],
  },
  {
    icon: Gem,
    title: "Full Detailing",
    price: "from $349",
    description:
      "The complete reset: multi-stage paint correction, engine bay, interior restoration and protection inside and out.",
    points: ["Paint correction", "Engine bay clean", "Inside & out"],
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <p className="eyebrow">What we do</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl sm:text-5xl lg:text-6xl">
          Four services. One standard.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Every package is carried out in our climate-controlled bay with
          filtered water, pro-grade chemistry and a fixed technician per car.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <article
              className="group flex h-full flex-col rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <s.icon
                className="text-primary transition-transform duration-300 group-hover:scale-110"
                size={28}
                strokeWidth={1.6}
              />
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-1 text-sm font-bold text-primary">{s.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5 text-xs tracking-wide text-muted-foreground">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
