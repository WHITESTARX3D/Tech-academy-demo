import SectionHeading from "./SectionHeading";
import { WHY_US, WHY_STATS } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad relative scroll-mt-24 overflow-hidden">
      <div className="blob left-[-10rem] bottom-0 h-96 w-96 bg-cyan-200/40" data-parallax="45" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Why Us"
          title={
            <>
              Why Students <span className="text-gradient">Choose Us</span>
            </>
          }
          sub="Everything at TechSpire is designed around one goal — that every student finishes with a real, usable skill."
        />

        {/* feature grid */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5" data-reveal-group data-stagger="0.07">
          {WHY_US.map((f) => (
            <div
              key={f.title}
              className="card group p-5.5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-18px_rgba(67,86,234,0.2)] sm:p-6"
            >
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white group-hover:ring-transparent">
                <f.icon className="h-5.5 w-5.5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-[15.5px] font-bold leading-snug tracking-tight text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* animated counters strip */}
        <div
          data-reveal="up"
          className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-brand-600 to-violet-600 p-[1.5px] shadow-xl shadow-brand-600/20"
        >
          <div className="grid grid-cols-2 gap-y-8 rounded-[calc(2rem-1.5px)] bg-white/[0.97] px-6 py-8 sm:px-10 lg:grid-cols-4">
            {WHY_STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <p className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  <span className="text-gradient" data-count={s.value} data-suffix={s.suffix}>
                    0{s.suffix}
                  </span>
                </p>
                <p className="mt-1.5 text-xs font-semibold text-slate-500 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
