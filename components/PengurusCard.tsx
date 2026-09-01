import { isFeaturedJabatan } from "@/lib/content";

type PengurusCardProps = {
  nama: string;
  jabatan: string;
  foto: string;
  featured?: boolean;
};

export default function PengurusCard({ nama, jabatan, foto, featured = false }: PengurusCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-white/10 bg-ink-800 ${
        featured ? "w-full max-w-md" : ""
      }`}
    >
      <div className={featured ? "aspect-[4/5]" : "aspect-square"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={foto}
          alt={nama}
          className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
        />
      </div>
      <div className="p-5">
        <p className="text-gradient-accent text-xs font-semibold uppercase tracking-wider">{jabatan}</p>
        <h2 className="font-display mt-1 text-xl font-bold text-white">{nama}</h2>
      </div>
    </article>
  );
}

export function splitPengurus<T extends { jabatan: string }>(list: T[]) {
  return {
    featured: list.filter((item) => isFeaturedJabatan(item.jabatan)),
    rest: list.filter((item) => !isFeaturedJabatan(item.jabatan)),
  };
}
