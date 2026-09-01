import { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  meta?: string;
  children?: ReactNode;
  className?: string;
};

export default function Card({ title, description, meta, children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-white/10 bg-ink-800 p-5 transition hover:border-ember/40 sm:p-6 ${className}`}
    >
      {meta && (
        <p className="text-gradient-accent mb-2 text-xs font-semibold uppercase tracking-wider">
          {meta}
        </p>
      )}
      <h3 className="font-display text-xl font-bold text-white">{title}</h3>
      {description && <p className="mt-2 text-sm leading-relaxed text-ink-300">{description}</p>}
      {children}
    </article>
  );
}
