import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import kontak from "@/data/kontak.json";

export const metadata: Metadata = {
  title: "Kontak",
};

const details = [
  { label: "Email", value: kontak.email, href: `mailto:${kontak.email}` },
  {
    label: "WhatsApp",
    value: kontak.whatsappLabel,
    href: `https://wa.me/${kontak.whatsapp}`,
  },
  { label: "Alamat sekretariat", value: kontak.alamat },
  {
    label: "Instagram",
    value: kontak.instagramHandle,
    href: kontak.instagram,
  },
];

export default function KontakPage() {
  return (
    <section className="pt-24 pb-16 sm:pb-20">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Hubungi Kami"
            title="Kontak KUMANDANG BANDUNG"
            description="Silakan sapa pengurus lewat kanal di bawah, atau tulis pesan lewat formulir."
          />
          <ul className="mt-8 space-y-4">
            {details.map((item) => (
              <li key={item.label} className="rounded-2xl border border-white/10 bg-ink-800 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-white hover:text-ember"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-white">{item.value}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-ink-800 p-5 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-white">Kirim pesan</h2>
          <p className="mt-2 mb-6 text-sm text-ink-300">Formulir tampilan saja, tanpa backend.</p>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
