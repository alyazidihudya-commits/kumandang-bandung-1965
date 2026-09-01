import type { Metadata } from "next";
import AgendaBoard from "@/components/AgendaBoard";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import agenda from "@/data/agenda.json";
import type { AgendaItem } from "@/lib/content";

export const metadata: Metadata = {
  title: "Agenda",
};

export default function AgendaPage() {
  return (
    <section className="pt-24 pb-16 sm:pb-20">
      <Container>
        <SectionHeading
          eyebrow="Kegiatan"
          title="Agenda & kegiatan"
          description="Daftar kegiatan KUMANDANG BANDUNG — yang akan datang maupun yang sudah terlaksana."
        />
        <div className="mt-10">
          <AgendaBoard items={agenda as AgendaItem[]} />
        </div>
      </Container>
    </section>
  );
}
