import SectionHeading from "./SectionHeading";
import { STATS } from "../data/content";

export default function Achievements() {
  return (
    <section id="results" className="section-pad relative scroll-mt-24 overflow-hidden bg-slate-950">
      {/* decor */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute -top-40 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[110px]" data-parallax="35" />
      <div className="absolute -bottom-32 right-[-6rem] h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />
      <div className="absolute -bottom-32 left-[-6rem] h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />

      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="Our Track Record"
          title={
            <>
              Results That <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Speak for Us</span>
            </>
          }
          sub="Numbers earned one student at a time — through patience, practice and honest teaching."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 md:grid-cols-3 lg:grid-cols-5 lg:gap-5" data-reveal-group data-stagger="0.09">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.07] md:p-7"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-500/20 to-violet-500/20 opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/25 to-violet-500/25 text-sky-300 ring-1 ring-white/15">
                <s.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <p className="relative mt-4 font-display text-4xl font-extrabold tracking-tight text-white md:text-[2.75rem]">
                <span data-count={s.value} data-suffix={s.suffix}>0{s.suffix}</span>
              </p>
              <p className="relative mt-2 text-[12px] font-semibold tracking-wide text-slate-400 md:text-[13px]">{s.label}</p>
            </div>
          ))}
        </div>

        <div data-reveal="fade" className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
          {["Merit-based certification", "Monthly parent progress reports", "Verified student portfolios", "Small 15-student batches"].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
