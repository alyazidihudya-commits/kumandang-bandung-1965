type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-gradient-accent text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-[1.75rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
