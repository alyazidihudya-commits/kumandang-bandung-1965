export type AgendaStatus = "akan-datang" | "selesai";

export type Pengurus = {
  nama: string;
  jabatan: string;
  foto: string;
};

export type AgendaItem = {
  tanggal: string;
  judul: string;
  deskripsi: string;
  status: AgendaStatus;
  foto?: string;
  waktu?: string;
  lokasi?: string;
};

export type GaleriItem = {
  src: string;
  caption: string;
};

const idDate = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatTanggal(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return idDate.format(date);
}

export function sortByTanggal<T extends { tanggal: string }>(items: T[], dir: "asc" | "desc" = "asc") {
  return [...items].sort((a, b) => {
    const diff = a.tanggal.localeCompare(b.tanggal);
    return dir === "asc" ? diff : -diff;
  });
}

export function isFeaturedJabatan(jabatan: string) {
  const value = jabatan.toLowerCase();
  return value.includes("ketua") || value.includes("wakil");
}
