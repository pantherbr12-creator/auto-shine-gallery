import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { Reveal } from "./Reveal";

type Fields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  service: "Exterior Wash",
  message: "",
};

const services = [
  "Exterior Wash",
  "Interior Cleaning",
  "Ceramic Coating",
  "Full Detailing",
];

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15)
    errors.phone = "Enter a valid phone number.";
  if (values.message.trim().length < 10)
    errors.message = "Tell us a little more (10+ characters).";
  return errors;
}

const details = [
  { icon: Phone, label: "Phone", value: "+1 (415) 555-0182", href: "tel:+14155550182" },
  { icon: Mail, label: "Email", value: "hello@pantherautocare.com", href: "mailto:hello@pantherautocare.com" },
  { icon: MapPin, label: "Studio", value: "48 Kingsway Industrial Park, Unit 6, Fremont, CA 94538" },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 8:00 – 18:00" },
];

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setSent(true);
    setValues(empty);
  };

  const field =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            Book your slot
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your car and we'll come back within one working day
            with a time and a fixed quote.
          </p>

          <dl className="mt-10 space-y-6">
            {details.map((d) => (
              <div key={d.label} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border bg-surface text-primary">
                  <d.icon size={18} strokeWidth={1.7} />
                </span>
                <div className="min-w-0">
                  <dt className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
                    {d.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">
                    {d.href ? (
                      <a href={d.href} className="hover:text-primary">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <form
            noValidate
            onSubmit={onSubmit}
            className="rounded-xl border border-border bg-surface p-6 sm:p-9"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {sent && (
              <p className="mb-6 flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-primary">
                <Check size={16} /> Thanks — your request has been received.
              </p>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-bold tracking-wide">
                  Full name
                </label>
                <input
                  id="name"
                  className={field}
                  placeholder="Jordan Alvarez"
                  value={values.name}
                  aria-invalid={!!errors.name}
                  onChange={(e) => update("name", e.target.value)}
                />
                {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-xs font-bold tracking-wide">
                  Phone
                </label>
                <input
                  id="phone"
                  className={field}
                  placeholder="+1 415 555 0123"
                  value={values.phone}
                  aria-invalid={!!errors.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
                {errors.phone && <p className="mt-2 text-xs text-destructive">{errors.phone}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-2 block text-xs font-bold tracking-wide">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={field}
                  placeholder="you@email.com"
                  value={values.email}
                  aria-invalid={!!errors.email}
                  onChange={(e) => update("email", e.target.value)}
                />
                {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="service" className="mb-2 block text-xs font-bold tracking-wide">
                  Service
                </label>
                <select
                  id="service"
                  className={field}
                  value={values.service}
                  onChange={(e) => update("service", e.target.value)}
                >
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-xs font-bold tracking-wide">
                  Your car &amp; what it needs
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`${field} resize-none`}
                  placeholder="2019 Golf GTI, black. Lots of swirl marks and a stained rear seat."
                  value={values.message}
                  aria-invalid={!!errors.message}
                  onChange={(e) => update("message", e.target.value)}
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-md bg-primary py-4 text-sm font-bold tracking-wide text-primary-foreground transition-transform hover:scale-[1.01]"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              Request my booking
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
