import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Tentang",
};

export default function TentangPage() {
  return (
    <>
      <Hero
        title="Tentang Kumandang Bandung 1965"
        subtitle="Komunitas Bandung yang merawat kebersamaan, kegiatan, dan jejak yang sudah berjalan sejak 1965."
        ctaLabel="Struktur organisasi"
        ctaHref="/struktur-organisasi"
      />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-ink-200 leading-relaxed">
        <p>
          Kumandang Bandung merupakan wadah bagi keluarga mahasiswa pandeglang yang berkuliah di bandung dan sekitarnya, 
        </p>
        <p>
          Melalui situs ini, pengurus, anggota, dan mitra dapat mengikuti profil organisasi,
          agenda, dokumentasi, serta cara menghubungi sekretariat.
        </p>
      </section>
    </>
  );
}
