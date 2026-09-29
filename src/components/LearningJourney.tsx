import { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { JOURNEY } from "../data/content";
import { gsap, reducedMotion } from "../lib/animate";

export default function LearningJourney() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion()) {
      if (fillRef.current) fillRef.current.style.transform = "scaleY(1)";
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 72%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" className="section-pad relative scroll-mt-24 bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Your Path"
          title={
            <>
              Your Learning Journey, <span className="text-gradient">Step by Step</span>
            </>
          }
          sub="From your first message to your first job conversation — a clear, guided path with no confusion and no pressure."
        />

        <div ref={wrapRef} className="relative mx-auto mt-14 max-w-4xl sm:mt-20">
          {/* spine */}
          <div className="absolute bottom-2 left-6 top-2 w-[3px] -translate-x-1/2 rounded-full bg-slate-100 lg:left-1/2">
            <div
              ref={fillRef}
              className="h-full w-full origin-top scale-y-0 rounded-full bg-gradient-to-b from-blue-600 via-violet-600 to-cyan-500"
            />
          </div>

          <ol className="space-y-10 lg:space-y-2">
            {JOURNEY.map((step, i) => {
              const leftSide = i % 2 === 0;
              return (
                <li key={step.title} className="relative lg:grid lg:grid-cols-2 lg:gap-x-20 lg:pb-14">
                  {/* node */}
                  <div
                    data-reveal="scale"
                    className="absolute left-6 top-1 z-10 -translate-x-1/2 lg:left-1/2 lg:top-3"
                  >
                    <span className="ring-orbit absolute -inset-2 animate-spin-slow" />
                    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-brand-600/30 ring-4 ring-white">
                      <step.icon className="h-5.5 w-5.5" strokeWidth={2.1} />
                    </span>
                  </div>

                  {/* card */}
                  <div
                    data-reveal={leftSide ? "right" : "left"}
                    className={`pl-20 lg:pl-0 ${leftSide ? "lg:col-start-1 lg:pr-2 lg:text-right" : "lg:col-start-2 lg:pl-2"}`}
                  >
                    <div className="card group inline-block w-full max-w-md p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(67,86,234,0.2)] sm:p-6 lg:max-w-none">
                      <p className="font-display text-[11px] font-extrabold tracking-[0.25em] text-brand-600">
                        STEP {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 flex items-center gap-2 font-display text-lg font-bold tracking-tight text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
