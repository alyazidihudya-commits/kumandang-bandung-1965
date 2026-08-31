import type { Metadata } from "next";
import pengurus from "@/data/pengurus.json";

export const metadata: Metadata = {
  title: "Struktur Organisasi",
};

export default function StrukturPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-display text-4xl font-bold text-white">Struktur organisasi</h1>
      <p className="mt-3 max-w-2xl text-ink-200">
        Pengurus Kumandang Bandung 1965 periode berjalan.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pengurus.map((orang) => (
          <article
            key={orang.id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800"
          >
            <div className="aspect-square bg-ink-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={orang.foto} alt={orang.nama} className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-wider text-accent">{orang.jabatan}</p>
              <h2 className="font-display mt-1 text-xl font-bold text-white">{orang.nama}</h2>
              <p className="mt-1 text-sm text-ink-300">{orang.periode}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
