import Button from "@/components/Button";
import Container from "@/components/Container";

type HeroProps = {
  title: string;
  subtitle: string;
  imageSrc?: "/images/gradien.mp4";
};

export default function Hero({
  title,
  subtitle,
  imageSrc = "/images/gradien.mp4",
}: HeroProps) {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-hero-overlay-mobile md:bg-hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-0 via-transparent to-ink-0/40" />

      <Container className="relative flex min-h-[88vh] items-end pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-32">
        <div className="max-w-3xl">
          <p className="text-gradient-accent text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm">
            Organisasi Kekeluargaan
          </p>
          <h1 className="font-display mt-4 text-[2.15rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/agenda">Lihat Agenda</Button>
            <Button href="/tentang" variant="outline">
              Tentang Kami
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
