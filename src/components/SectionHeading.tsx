import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export default function SectionHeading({ eyebrow, title, sub, align = "center", dark = false }: SectionHeadingProps) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <span
        data-reveal="up"
        className={
          dark
            ? "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-sky-300 backdrop-blur"
            : "eyebrow"
        }
      >
        <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-sky-400" : "bg-gradient-to-r from-brand-500 to-violet-500"}`} />
        {eyebrow}
      </span>
      <h2
        data-reveal="up"
        data-delay="0.08"
        className={`heading-xl max-w-3xl ${dark ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {sub && (
        <p data-reveal="up" data-delay="0.16" className={`subtext max-w-2xl ${dark ? "text-slate-400" : ""}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
