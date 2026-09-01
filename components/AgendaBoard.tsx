"use client";

import { useMemo, useState } from "react";
import type { AgendaItem, AgendaStatus } from "@/lib/content";
import { formatTanggal, sortByTanggal } from "@/lib/content";

const tabs: { id: AgendaStatus; label: string }[] = [
  { id: "akan-datang", label: "Akan Datang" },
  { id: "selesai", label: "Sudah Terlaksana" },
];

export default function AgendaBoard({ items }: { items: AgendaItem[] }) {
  const [tab, setTab] = useState<AgendaStatus>("akan-datang");

  const filtered = useMemo(() => {
    const list = items.filter((item) => item.status === tab);
    return sortByTanggal(list, tab === "akan-datang" ? "asc" : "desc");
  }, [items, tab]);

  return (
    <div>
      <div className="inline-flex w-full rounded-full border border-white/10 bg-ink-800 p-1 sm:w-auto bg-grid-pattern">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition sm:flex-none sm:px-5 ${
              tab === item.id ? "bg-accent-gradient text-white" : "text-ink-300 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5">
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-white/10 bg-ink-800 px-5 py-10 text-center text-ink-300 bg-grid-pattern">
            Belum ada kegiatan pada kategori ini.
          </p>
        )}
        {filtered.map((item) => (
          <article
            key={`${item.judul}-${item.tanggal}`}
            className="grid overflow-hidden rounded-2xl border border-white/10 bg-ink-800 sm:grid-cols-[220px_1fr]"
          >
            <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[180px]bg-grid-pattern">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.foto || "/images/agenda/placeholder.jpg"}
                alt={item.judul}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-5 sm:p-6 bg-grid-pattern">
              <p className="text-gradient-accent text-xs font-semibold uppercase tracking-wider">
                {formatTanggal(item.tanggal)}
                {item.waktu ? ` · ${item.waktu}` : ""}
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold text-white">{item.judul}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-300 sm:text-base">{item.deskripsi}</p>
              {item.lokasi && <p className="mt-3 text-sm text-ink-400">{item.lokasi}</p>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
