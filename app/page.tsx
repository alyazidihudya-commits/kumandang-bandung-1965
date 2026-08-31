import Card from "@/components/Card";
import Hero from "@/components/Hero";
import agenda from "@/data/agenda.json";
import Link from "next/link";

export default function HomePage() {
  const upcoming = agenda.slice(0, 3);

  return (
    <>
      <Hero
        title="Berangkat dari Pandeglang, bertumbuh di Bandung, dan bersama-sama melangkah untuk masa depan."
        subtitle="Merawat silaturahmi, kegiatan komunitas, dan warisan kota. Ruang ini untuk anggota, alumni, dan siapa pun yang ingin berkarya bersama."
        ctaLabel="Tentang kami"
        ctaHref="/tentang"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-white">Agenda terdekat</h2>
          <Link href="/agenda" className="text-sm text-accent hover:underline">
            Lihat semua
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {upcoming.map((item) => (
            <Card
              key={item.id}
              title={item.judul}
              meta={item.tanggal}
              description={`${item.waktu} · ${item.lokasi}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
