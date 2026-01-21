import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="aurora px-5 pb-12 pt-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="max-w-2xl text-sm text-white/70">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}
