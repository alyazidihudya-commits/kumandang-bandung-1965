import Button from "@/components/Button";
import Container from "@/components/Container";

type HeroProps = {
  title: string;
  subtitle: string;
  
};

export default function Hero({
  title,
  subtitle,
}: HeroProps) {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden">
     
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
