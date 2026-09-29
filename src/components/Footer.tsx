import { GraduationCap, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ADDRESS, CENTRE_NAME, COURSES, DEFAULT_WA_MESSAGE, EMAIL, HOURS, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, waLink } from "../data/content";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v2.5" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-400">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500" />
      <div className="absolute -top-32 left-1/3 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[100px]" />

      <div className="container-x relative py-14 sm:py-16" data-reveal="fade">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.9fr_1.2fr]">
          {/* brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-brand-600/30">
                <GraduationCap className="h-5.5 w-5.5" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-lg font-bold tracking-tight text-white">TechSpire</span>
                <span className="mt-0.5 block text-[10px] font-bold tracking-[0.28em] text-sky-400">ACADEMY</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              A premium computer & technology coaching centre helping school students, college
              students and working professionals build real, career-ready skills — one practical
              project at a time.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={`${CENTRE_NAME} on ${s.label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-brand-600/20 hover:text-white"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">Quick Links</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={l.href} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                    <span className="h-1 w-1 rounded-full bg-brand-500" />
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <span className="h-1 w-1 rounded-full bg-brand-500" />
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* courses */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">Courses</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {COURSES.map((c) => (
                <li key={c.id}>
                  <a href="#courses" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                    <span className="h-1 w-1 rounded-full bg-violet-500" />
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">Contact</h4>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-sky-400" />
                <span className="leading-relaxed">{ADDRESS}</span>
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4.5 w-4.5 shrink-0 text-sky-400" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Mail className="h-4.5 w-4.5 shrink-0 text-sky-400" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[13px]">
                <MessageCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-400" />
                <span className="leading-relaxed">{HOURS}</span>
              </li>
            </ul>
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="btn-wa mt-6 px-5 py-3 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-[13px] sm:flex-row">
          <p>© {new Date().getFullYear()} {CENTRE_NAME}. All rights reserved.</p>
          <p className="text-[12px] font-semibold tracking-wide text-slate-500">Practical · Professional · Trusted</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
