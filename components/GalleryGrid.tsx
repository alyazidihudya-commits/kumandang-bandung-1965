"use client";

import { useEffect, useState } from "react";
import type { GaleriItem } from "@/lib/content";

const spans = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-1",
  "sm:col-span-2",
  "sm:col-span-1",
];

export default function GalleryGrid({ items }: { items: GaleriItem[] }) {
  const [active, setActive] = useState<GaleriItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div className="grid auto-rows-[180px] grid-cols-1 gap-3 sm:auto-rows-[160px] sm:grid-cols-2 md:auto-rows-[200px] md:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={() => setActive(item)}
            className={`group relative overflow-hidden rounded-2xl ${spans[index % spans.length]}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.caption}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition group-hover:opacity-100" />
            <span className="absolute inset-x-0 bottom-0 p-4 text-left text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.caption} className="max-h-[78vh] w-full object-contain" />
            <p className="bg-ink-900 px-4 py-3 text-sm text-ink-200">{active.caption}</p>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-sm text-white"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
}
