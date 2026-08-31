import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
};

export default function KontakPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-display text-4xl font-bold text-white">Kontak</h1>
      <p className="mt-3 text-ink-200">
        Hubungi sekretariat Kumandang Bandung 1965.
      </p>

      <div className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-ink-800 p-6 text-sm text-ink-200">
        <p>Email: kumandang65@gmail.com</p>
        <p>Kota: Bandung, Jawa Barat</p>
        <p>Alamat: Jl. Tamansari Bawah No.27/59, Tamansari, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40116</p>
      </div>

      <form className="mt-8 space-y-4" action="#" method="post">
        <label className="block text-sm">
          Nama
          <input
            name="nama"
            required
            className="mt-1 w-full rounded-lg border border-white/10 bg-ink-800 px-3 py-2 text-white outline-none focus:border-accent"
          />
        </label>
        <label className="block text-sm">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-lg border border-white/10 bg-ink-800 px-3 py-2 text-white outline-none focus:border-accent"
          />
        </label>
        <label className="block text-sm">
          Pesan
          <textarea
            name="pesan"
            rows={5}
            required
            className="mt-1 w-full rounded-lg border border-white/10 bg-ink-800 px-3 py-2 text-white outline-none focus:border-accent"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 hover:bg-accent-muted"
        >
          Kirim pesan
        </button>
      </form>
    </section>
  );
}
