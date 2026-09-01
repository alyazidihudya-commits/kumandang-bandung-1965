import type { Metadata } from "next";
import Container from "@/components/Container";
import GalleryGrid from "@/components/GalleryGrid";
import SectionHeading from "@/components/SectionHeading";
import galeri from "@/data/galeri.json";
import type { GaleriItem } from "@/lib/content";

export const metadata: Metadata = {
  title: "Galeri",
};

export default function GaleriPage() {
  return (
    <section className="pt-24 pb-16 sm:pb-20">
      <Container>
        <SectionHeading
          eyebrow="Dokumentasi"
          title="Galeri kegiatan"
          description="Cuplikan kebersamaan keluarga KUMANDANG. Klik foto untuk melihat lebih besar."
        />
        <div className="mt-10">
          <GalleryGrid items={galeri as GaleriItem[]} />
        </div>
      </Container>
    </section>
  );
}
