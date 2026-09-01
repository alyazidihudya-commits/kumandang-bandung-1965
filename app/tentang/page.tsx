import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import tentang from "@/data/tentang.json";

export const metadata: Metadata = {
  title: "Tentang",
};

export default function TentangPage() {
  return (
    <div className="pt-24">
      <section className="pb-16 sm:pb-20">
        <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={tentang.labelSejarah}
              title={tentang.judulSejarah}
              description={tentang.sejarah[0]}
            />
            <div className="mt-6 space-y-4 text-ink-300">
              {tentang.sejarah.slice(1).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {tentang.fotoSejarah.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className={`overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dusk-gradient opacity-20" />
        <Container className="relative grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Visi" title="Arah yang kami jaga" />
            <p className="mt-5 text-lg leading-relaxed text-ink-200">{tentang.visi}</p>
          </div>
          <div>
            <p className="text-gradient-accent text-xs font-semibold uppercase tracking-[0.22em]">
              Misi
            </p>
            <ul className="mt-4 space-y-3">
              {tentang.misi.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-ink-800/80 px-4 py-3 text-ink-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Nilai Kami"
            title="Kekeluargaan yang dijunjung"
            description="Empat nilai yang menjadi cara kami hidup bersama di perantauan."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {tentang.nilai.map((item) => (
              <article key={item.nama} className="rounded-2xl border border-white/10 bg-ink-800 p-6">
                <h3 className="font-display text-2xl font-bold text-white">{item.nama}</h3>
                <p className="mt-2 text-ink-300">{item.deskripsi}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
