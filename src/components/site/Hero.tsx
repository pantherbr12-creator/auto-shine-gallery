import heroImage from "@/assets/hero.jpg";

const stats = [
  { value: "12+", label: "Years detailing" },
  { value: "4,800", label: "Cars restored" },
  { value: "4.9★", label: "Average rating" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Freshly detailed black sports car in a dark studio"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-20 lg:px-8 lg:pb-28">
        <p className="eyebrow animate-in fade-in slide-in-from-bottom-3 duration-700 text-white">
          Premium detailing · Since 2013
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.92] text-white sm:text-7xl lg:text-8xl">
          Your car deserves
          <span className="text-white"> showroom glass</span> every single day.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white sm:text-lg">
          Raja Auto Care is a boutique detailing studio built around paint
          correction, ceramic protection and obsessive interior work — done by
          hand, never rushed.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="rounded-md bg-primary px-8 py-4 text-center text-sm font-bold tracking-wide text-white transition-transform hover:scale-[1.03]"
            style={{ boxShadow: "var(--shadow-gold)" }}
          >
            Book Now
          </a>
          <a
            href="#services"
            className="rounded-md border border-border bg-background/40 px-8 py-4 text-center text-sm font-bold tracking-wide text-white backdrop-blur transition-colors hover:bg-surface"
          >
            View services
          </a>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl text-white sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-xs tracking-wide text-white">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
