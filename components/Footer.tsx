import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-ink-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-lg font-bold">
          Kumandang<span className="text-accent"> 1965</span>
        </p>
        <p className="text-sm text-ink-300">
          © {new Date().getFullYear()} Kumandang Bandung 1965. Bandung, Jawa Barat.
        </p>
        <div className="flex gap-4 text-sm text-ink-200">
          <Link href="/kontak" className="hover:text-accent">
            Hubungi kami
          </Link>
          <Link href="/agenda" className="hover:text-accent">
            Agenda
          </Link>
        </div>
      </div>
    </footer>
  );
}
