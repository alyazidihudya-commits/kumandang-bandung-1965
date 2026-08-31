import type { Metadata } from "next";
import galeri from "@/data/galeri.json";

export const metadata: Metadata = {
  title: "Galeri",
};

export default function GaleriPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-display text-4xl font-bold text-white">Galeri</h1>
      <p className="mt-3 max-w-2xl text-ink-200">
        Dokumentasi kegiatan Kumandang Bandung 1965.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galeri.map((item) => (
          <figure
            key={item.id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800"
          >
            <div className="aspect-[8/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.judul} className="h-full w-full object-cover" />
            </div>
            <figcaption className="p-4">
              <p className="text-xs uppercase tracking-wider text-accent">{item.kategori}</p>
              <p className="font-display mt-1 font-bold text-white">{item.judul}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
