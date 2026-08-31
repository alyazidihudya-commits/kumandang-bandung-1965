import type { Metadata } from "next";
import Card from "@/components/Card";
import agenda from "@/data/agenda.json";

export const metadata: Metadata = {
  title: "Agenda",
};

export default function AgendaPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-display text-4xl font-bold text-white">Agenda</h1>
      <p className="mt-3 max-w-2xl text-ink-200">
        Jadwal kegiatan Kumandang Bandung 1965.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {agenda.map((item) => (
          <Card key={item.id} title={item.judul} meta={item.tanggal} description={item.deskripsi}>
            <p className="mt-4 text-sm text-ink-300">
              {item.waktu} · {item.lokasi}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
