import { ArrowDown, Award, BadgeCheck, MessageCircle, Phone, Sparkles, Users } from "lucide-react";
import { DEFAULT_WA_MESSAGE, PHONE_DISPLAY, PHONE_TEL, waLink } from "../data/content";

export default function AdmissionCTA() {
  return (
    <section id="admission" className="section-pad relative">
      <div className="container-x">
        <div
          data-reveal="scale"
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-brand-600 to-violet-700 px-6 py-14 text-center shadow-[0_35px_80px_-25px_rgba(67,86,234,0.5)] sm:rounded-[2.5rem] sm:px-14 sm:py-20"
        >
          {/* decor */}
          <div className="dots-bg absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)" }} />
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="ring-orbit absolute -right-16 -top-16 h-56 w-56 animate-spin-slow border-white/20" />
          <div className="ring-orbit absolute -bottom-20 -left-12 h-48 w-48 animate-spin-slow border-white/20" />

          {/* floating mini badges */}
          <div className="pointer-events-none absolute left-[6%] top-[16%] hidden lg:block">
            <span className="flex animate-float-slow items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[11px] font-bold text-white backdrop-blur-md">
              <BadgeCheck className="h-3.5 w-3.5 text-emerald-300" /> Free demo class
            </span>
          </div>
          <div className="pointer-events-none absolute bottom-[18%] right-[5%] hidden lg:block">
            <span className="flex animate-float-slower items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[11px] font-bold text-white backdrop-blur-md">
              <Users className="h-3.5 w-3.5 text-cyan-200" /> Small batches · 15 max
            </span>
          </div>
          <div className="pointer-events-none absolute right-[10%] top-[14%] hidden lg:block">
            <span className="flex animate-float-slow items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[11px] font-bold text-white backdrop-blur-md">
              <Award className="h-3.5 w-3.5 text-amber-300" /> Certificate included
            </span>
          </div>

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              Admissions Open
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
              Ready to Start Your Technology Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Talk to our counsellor and find the right course for you — with a free demo class and zero obligation.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="btn group w-full bg-white px-7 py-3.5 text-base font-bold text-emerald-600 shadow-xl hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                WhatsApp Enquiry
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-glasslight w-full px-7 py-3.5 text-base sm:w-auto">
                <Phone className="h-4.5 w-4.5" />
                Call {PHONE_DISPLAY}
              </a>
              <a href="#courses" className="btn-glasslight w-full px-7 py-3.5 text-base sm:w-auto">
                <ArrowDown className="h-4.5 w-4.5" />
                Get Course Details
              </a>
            </div>

            <p className="mt-7 text-[12px] font-semibold tracking-wide text-white/70">
              Free demo class &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; Limited seats per batch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
