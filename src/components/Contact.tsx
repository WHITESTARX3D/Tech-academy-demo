import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { ADDRESS, BATCHES, COURSES, EMAIL, HOURS, PHONE_DISPLAY, PHONE_TEL, waLink } from "../data/content";

const INFO = [
  { icon: MapPin, tint: "bg-blue-50 text-blue-600", label: "Visit Us", value: ADDRESS, href: null as string | null },
  { icon: Phone, tint: "bg-violet-50 text-violet-600", label: "Call Us", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { icon: MessageCircle, tint: "bg-emerald-50 text-emerald-600", label: "WhatsApp", value: PHONE_DISPLAY, href: waLink("Hello, I want to enquire about courses at TechSpire Academy.") },
  { icon: Mail, tint: "bg-rose-50 text-rose-600", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Clock, tint: "bg-amber-50 text-amber-600", label: "Opening Hours", value: HOURS, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", course: "", batch: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [
      "Hello TechSpire Academy!",
      "",
      "I would like to enquire about admission.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Course Interested In: ${form.course || "Not decided yet"}`,
      `Preferred Batch: ${form.batch || "Flexible"}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noreferrer");
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm font-medium text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100";

  return (
    <section id="contact" className="section-pad relative scroll-mt-24 overflow-hidden bg-white">
      <div className="blob left-[-10rem] top-32 h-80 w-80 bg-blue-200/40" data-parallax="40" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Visit Us or <span className="text-gradient">Say Hello</span>
            </>
          }
          sub="Drop by for a campus tour, call us, or send an enquiry — we usually reply on WhatsApp within minutes."
        />

        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-[380px_1fr] lg:gap-10">
          {/* info column */}
          <div className="flex flex-col gap-3.5" data-reveal-group data-stagger="0.08">
            {INFO.map((item) => {
              const body = (
                <div className="card flex items-center gap-4 p-4.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md">
                  <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.tint}`}>
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{item.label}</p>
                    <p className="mt-0.5 truncate text-[13.5px] font-semibold text-slate-800 sm:whitespace-normal">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {body}
                </a>
              ) : (
                <div key={item.label}>{body}</div>
              );
            })}

            {/* map */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title="TechSpire Academy location on map"
                src={`https://www.google.com/maps?q=${encodeURIComponent("MG Road, Pune, Maharashtra")}&output=embed`}
                className="h-52 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* form column */}
          <div className="card relative overflow-hidden p-6 sm:p-9" data-reveal="left">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500" />
            <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Send an Admission Enquiry</h3>
            <p className="mt-2 text-sm text-slate-600">
              Fill this in and we will open WhatsApp with your message ready to send — no account or sign-up needed.
            </p>

            <form onSubmit={submit} className="mt-7 grid gap-4 sm:grid-cols-2" data-reveal-group data-stagger="0.05">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-bold text-slate-600">Full Name *</label>
                <input id="name" required value={form.name} onChange={set("name")} placeholder="e.g. Aarav Sharma" className={inputCls} />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs font-bold text-slate-600">Phone Number *</label>
                <input id="phone" required type="tel" minLength={8} value={form.phone} onChange={set("phone")} placeholder="e.g. 98765 43210" className={inputCls} />
              </div>
              <div>
                <label htmlFor="course" className="mb-1.5 block text-xs font-bold text-slate-600">Course Interested In</label>
                <select id="course" value={form.course} onChange={set("course")} className={inputCls}>
                  <option value="">Not sure yet — guide me</option>
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.title}>{c.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="batch" className="mb-1.5 block text-xs font-bold text-slate-600">Preferred Batch</label>
                <select id="batch" value={form.batch} onChange={set("batch")} className={inputCls}>
                  <option value="">Flexible</option>
                  {BATCHES.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-xs font-bold text-slate-600">Message</label>
                <textarea id="message" rows={4} value={form.message} onChange={set("message")} placeholder="Anything you would like to ask — fees, timings, demo class…" className={`${inputCls} resize-none`} />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-wa w-full px-6 py-4 text-base">
                  <Send className="h-4.5 w-4.5" />
                  Send Enquiry on WhatsApp
                </button>
                {sent && (
                  <p className="mt-3 rounded-xl bg-emerald-50 px-4 py-2.5 text-center text-[12.5px] font-semibold text-emerald-700">
                    Opening WhatsApp with your enquiry… If nothing happened, please call us at {PHONE_DISPLAY}.
                  </p>
                )}
                <p className="mt-3 text-center text-[11.5px] font-medium text-slate-400">
                  Your details are only used to respond to your enquiry. We never share them.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
