import { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  meta?: string;
  children?: ReactNode;
};

export default function Card({ title, description, meta, children }: CardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-ink-800 p-6 transition hover:border-accent/40">
      {meta && (
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">
          {meta}
        </p>
      )}
      <h3 className="font-display text-xl font-bold text-white">{title}</h3>
      {description && <p className="mt-2 text-sm leading-relaxed text-ink-200">{description}</p>}
      {children}
    </article>
  );
}
