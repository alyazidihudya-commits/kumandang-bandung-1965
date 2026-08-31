import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function Hero({
  eyebrow = "Kumandang Bandung 1965",
  title,
  subtitle,
  ctaLabel = "Lihat agenda",
  ctaHref = "/agenda",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="font-display max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-200">{subtitle}</p>
        <Link
          href={ctaHref}
          className="mt-8 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-muted"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
