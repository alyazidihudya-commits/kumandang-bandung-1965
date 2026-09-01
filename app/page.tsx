import Button from "@/components/Button";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import agenda from "@/data/agenda.json";
import { formatTanggal, sortByTanggal } from "@/lib/content";
import type { AgendaItem } from "@/lib/content";
import BackgroundEffects from "@/components/BackgroundEffects";
import globals from "@/app/globals.css";

export default function HomePage() {
  const upcoming = sortByTanggal(
    (agenda as AgendaItem[]).filter((item) => item.status === "akan-datang"),
    "asc",
  ).slice(0, 3);

  return (
    <>
    <BackgroundEffects />
      <Hero
        title="Rumah Kedua Mahasiswa Pandeglang di Bandung"
        subtitle="KUMANDANG BANDUNG adalah organisasi kekeluargaan mahasiswa asal Pandeglang yang kuliah di Bandung. Di sini kita tumbuh bersama, saling jaga, dan tetap satu keluarga meski jauh dari kampung halaman."
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dusk-gradient opacity-[0.12]" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Tentang Kami"
            title="Dari kampung ke kota, tetap satu keluarga"
            description="Wadah silaturahmi, solidaritas, dan rumah kedua bagi mahasiswa Pandeglang yang merantau ke Bandung."
          />
          <div className="flex flex-col items-start gap-4">
            <p className="text-ink-300">
              Lewat kegiatan rutin, pengabdian, dan kebersamaan sehari-hari, KUMANDANG merawat rasa
              kekeluargaan yang tidak berhenti di gerbang kampus.
            </p>
            <Button href="/tentang" variant="secondary">
              Baca cerita kami
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Agenda"
              title="Kegiatan terdekat"
              description="Ikuti pertemuan, kajian, dan kegiatan bersama keluarga KUMANDANG."
            />
            <Button href="/agenda" variant="outline" className="w-fit shrink-0">
              Lihat semua
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {upcoming.map((item) => (
              <article
                key={`${item.judul}-${item.tanggal}`}
                className="rounded-2xl border border-white/10 bg-ink-800 p-5"
              >
                <p className="text-gradient-accent text-xs font-semibold uppercase tracking-wider">
                  {formatTanggal(item.tanggal)}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-white">{item.judul}</h3>
                <p className="mt-2 text-sm text-ink-300">{item.deskripsi}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
