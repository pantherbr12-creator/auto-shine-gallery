import aboutImage from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

const highlights = [
  "Single technician assigned to your car, start to finish",
  "Manufacturer-approved chemistry and filtered-water rinse",
  "Written condition report with before and after photos",
];

export function About() {
  return (
    <section id="about" className="border-y border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-32">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Raja Auto Care technician machine-polishing a dark car"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-xl object-cover"
              style={{ boxShadow: "var(--shadow-card)" }}
            />
            <div className="absolute -bottom-6 left-6 rounded-lg border border-border bg-background px-6 py-4 sm:-right-6 sm:left-auto">
              <p className="font-display text-3xl text-primary">12 yrs</p>
              <p className="text-xs tracking-wide text-muted-foreground">
                of hands-on detailing
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">About us</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            A two-bay studio, not a conveyor belt.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Raja Auto Care started in 2013 in a single rented garage with one
            polisher and a stubborn belief that most cars are washed far too
            quickly. Today we run a two-bay studio and still cap ourselves at
            four vehicles a day — because correction work simply cannot be
            hurried.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From daily drivers to collector cars, every vehicle is inspected
            under swirl-finder lighting before a single product touches the
            paint.
          </p>
          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
