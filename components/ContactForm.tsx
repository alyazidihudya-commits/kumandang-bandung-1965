"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/Button";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-white/10 bg-ink-800 p-6">
        <p className="font-display text-xl font-bold text-white">Pesan tercatat di layar ini.</p>
        <p className="mt-2 text-sm text-ink-300">
          Form ini masih tampilan saja. Hubungi kami lewat WhatsApp atau email untuk pesan yang
          benar-benar sampai.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <label className="block text-sm text-ink-200">
        Nama
        <input
          name="nama"
          required
          className="mt-1 w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-white outline-none focus:border-ember"
        />
      </label>
      <label className="block text-sm text-ink-200">
        Email
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-white outline-none focus:border-ember"
        />
      </label>
      <label className="block text-sm text-ink-200">
        Pesan
        <textarea
          name="pesan"
          rows={5}
          required
          className="mt-1 w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-white outline-none focus:border-ember"
        />
      </label>
      <Button type="submit">Kirim pesan</Button>
    </form>
  );
}
