import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import { Reveal } from "./Reveal";

const pairs = [
  {
    title: "Two-stage paint correction",
    car: "2018 Sedan · Graphite",
    before: before1,
    after: after1,
  },
  {
    title: "Full interior restoration",
    car: "2016 Hatchback · Daily driver",
    before: before2,
    after: after2,
  },
];

function Shot({
  src,
  label,
  alt,
}: {
  src: string;
  label: string;
  alt: string;
}) {
  return (
    <figure className="relative overflow-hidden rounded-lg">
      <img
        src={src}
        alt={alt}
        width={1024}
        height={768}
        loading="lazy"
        className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-64"
      />
      <figcaption className="absolute top-3 left-3 rounded bg-background/85 px-3 py-1 text-[0.65rem] font-bold tracking-[0.2em] text-foreground uppercase backdrop-blur">
        {label}
      </figcaption>
    </figure>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <p className="eyebrow">Gallery</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
          Before &amp; after
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Real cars from our bay. No filters, same lighting, same angle.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {pairs.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <div className="rounded-xl border border-border bg-surface p-4 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Shot src={p.before} label="Before" alt={`${p.title} before`} />
                <Shot src={p.after} label="After" alt={`${p.title} after`} />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-xl">{p.title}</h3>
                <p className="shrink-0 text-xs tracking-wide text-muted-foreground">
                  {p.car}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
