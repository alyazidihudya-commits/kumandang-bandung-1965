import type { Metadata } from "next";
import Container from "@/components/Container";
import PengurusCard, { splitPengurus } from "@/components/PengurusCard";
import SectionHeading from "@/components/SectionHeading";
import pengurus from "@/data/pengurus.json";

export const metadata: Metadata = {
  title: "Struktur Organisasi",
};

export default function StrukturPage() {
  const { featured, rest } = splitPengurus(pengurus);

  return (
    <section className="pt-24 pb-16 sm:pb-20">
      <Container>
        <SectionHeading
          eyebrow="Kepengurusan"
          title="Struktur organisasi"
          description="Wajah-wajah yang merawat rumah kedua mahasiswa Pandeglang di Bandung."
        />

        {featured.length > 0 && (
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            {featured.map((orang) => (
              <PengurusCard
                key={`${orang.nama}-${orang.jabatan}`}
                nama={orang.nama}
                jabatan={orang.jabatan}
                foto={orang.foto}
                featured
              />
            ))}
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((orang) => (
            <PengurusCard
              key={`${orang.nama}-${orang.jabatan}`}
              nama={orang.nama}
              jabatan={orang.jabatan}
              foto={orang.foto}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
