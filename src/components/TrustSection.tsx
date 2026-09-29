import { ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { TRUST_ITEMS } from "../data/content";

export default function TrustSection() {
  return (
    <section id="trust" className="section-pad relative scroll-mt-24 bg-white">
      <div className="dots-bg absolute left-8 top-24 h-32 w-32 opacity-60" data-parallax="30" />
      <div className="container-x relative">
        <div className="flex flex-col items-center gap-5">
          {/* animated shield visual */}
          <div data-reveal="scale" className="relative">
            <span className="ring-orbit absolute -inset-3" />
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl shadow-brand-600/25">
              <ShieldCheck className="h-8 w-8" strokeWidth={1.9} />
            </span>
            <span className="absolute -right-1.5 -top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white ring-4 ring-white">
              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                <path d="M2 6.2 4.8 9 10 3.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>

        <SectionHeading
          eyebrow="For Parents"
          title={
            <>
              A Learning Environment <span className="text-gradient">Parents Can Trust.</span>
            </>
          }
          sub="We know a coaching centre is a place of trust. Here is exactly how we earn it — every single day, in every single batch."
        />

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.title}
              className="card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_20px_45px_-18px_rgba(67,86,234,0.22)]"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-center gap-4">
                <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.tint} transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105`}>
                  <item.icon className={`h-6 w-6 ${item.iconColor}`} strokeWidth={2} />
                </span>
                <h3 className="font-display text-[17px] font-bold tracking-tight text-slate-900">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
