import Link from "next/link";
import Container from "@/components/Container";
import kontak from "@/data/kontak.json";

const socials = [
  { href: kontak.instagram, label: "Instagram" },
  { href: `https://wa.me/${kontak.whatsapp}`, label: "WhatsApp" },
  { href: `mailto:${kontak.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-ink-950 sm:mt-24">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">
            KUMANDANG <span className="text-gradient-accent">BANDUNG</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-300">{kontak.deskripsi}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">Navigasi</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-ink-200">
            <Link href="/tentang" className="hover:text-ember">
              Tentang Kami
            </Link>
            <Link href="/agenda" className="hover:text-ember">
              Agenda
            </Link>
            <Link href="/galeri" className="hover:text-ember">
              Galeri
            </Link>
            <Link href="/kontak" className="hover:text-ember">
              Kontak
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">Sosial</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-ink-200">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-ember"
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-xs text-ink-400 sm:text-sm">
          © {new Date().getFullYear()} KUMANDANG BANDUNG. Semua hak dilindungi.
        </Container>
      </div>
    </footer>
  );
}
