import { useState } from "react";
import { MessageCircle, Phone, Plus } from "lucide-react";
import { FAQS, PHONE_DISPLAY, PHONE_TEL, waLink } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative scroll-mt-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_370px] lg:gap-16">
          {/* left: heading + accordion */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="FAQs"
              title={
                <>
                  Questions? <span className="text-gradient">Answered.</span>
                </>
              }
              sub="Everything students and parents usually ask before joining — in plain language."
            />

            <div className="mt-10 space-y-3" data-reveal-group data-stagger="0.06">
              {FAQS.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={faq.q}
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen ? "border-brand-200 shadow-[0_14px_35px_-16px_rgba(67,86,234,0.25)]" : "border-slate-200/80 shadow-sm hover:border-brand-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6"
                      aria-expanded={isOpen}
                    >
                      <span className={`font-display text-[15px] font-bold tracking-tight transition-colors sm:text-base ${isOpen ? "text-brand-800" : "text-slate-800"}`}>
                        {faq.q}
                      </span>
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen ? "rotate-45 bg-gradient-to-br from-blue-600 to-violet-600 text-white" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                      <div>
                        <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* right: sticky help card */}
          <div className="lg:pt-24" data-reveal="left">
            <div className="sticky top-28 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-600 via-brand-600 to-violet-600 p-7 text-white shadow-xl shadow-brand-600/25 sm:p-8">
              <div className="dots-bg absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)" }} />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight">Still have questions?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  Our counsellor replies within minutes on WhatsApp — no forms, no waiting, no obligation.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={waLink("Hello, I have a question about TechSpire Academy courses.")}
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-white px-5 py-3 text-sm font-bold text-brand-700 shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ask on WhatsApp
                  </a>
                  <a href={`tel:${PHONE_TEL}`} className="btn-glasslight px-5 py-3 text-sm">
                    <Phone className="h-4 w-4" />
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
                <p className="mt-5 flex items-center gap-2 text-[11.5px] font-semibold text-white/75">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                  Counsellor available today · 8 AM – 8 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
