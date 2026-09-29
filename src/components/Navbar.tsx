import { useEffect, useRef, useState } from "react";
import { GraduationCap, Menu, MessageCircle, Phone, X } from "lucide-react";
import { gsap, reducedMotion, ScrollTrigger } from "../lib/animate";
import { NAV_LINKS, waLink, DEFAULT_WA_MESSAGE, PHONE_DISPLAY, CENTRE_NAME } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  /* scrolled state + progress bar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let cleanup: (() => void) | undefined;
    if (!reducedMotion() && progressRef.current) {
      const tween = gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: 0, end: "max", scrub: 0.3 },
      });
      cleanup = () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      cleanup?.();
      ScrollTrigger.refresh();
    };
  }, []);

  /* scroll spy */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-38% 0px -58% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* mobile menu animation + scroll lock */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!reducedMotion() && menuRef.current) {
      gsap.fromTo(menuRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
      gsap.fromTo(
        menuRef.current.querySelectorAll("[data-menu-item]"),
        { y: 26, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.06, ease: "power3.out", delay: 0.08 }
      );
    }
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent">
        <div
          ref={progressRef}
          className="h-full origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500"
        />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
          scrolled ? "glass shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)]" : "bg-transparent"
        }`}
      >
        {/* announcement strip */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 via-brand-600 to-violet-600 text-white">
            <p className="container-x flex h-9 items-center justify-center gap-2 text-[11px] font-semibold tracking-wide sm:text-xs">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
              Admissions open for new batches — Book a free demo class today
              <a href={waLink("Hello, I would like to book a free demo class.")} target="_blank" rel="noreferrer" className="hidden underline underline-offset-2 hover:opacity-90 sm:inline">
                Enquire now
              </a>
            </p>
          </div>
        </div>

        <nav className="container-x flex items-center justify-between py-3.5 lg:py-4">
          {/* logo */}
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-brand-600/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <GraduationCap className="h-5.5 w-5.5" strokeWidth={2.2} />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[17px] font-bold tracking-tight text-slate-900">
                TechSpire
              </span>
              <span className="mt-0.5 block text-[10px] font-bold tracking-[0.28em] text-brand-600">
                ACADEMY
              </span>
            </span>
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`group relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors xl:px-4 ${
                    active === link.id ? "text-brand-700" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-300 ${
                      active === link.id ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-70"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${"+919876543210"}`}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 md:inline-flex"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <Phone className="h-4.5 w-4.5" />
            </a>
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="btn-wa hidden px-5 py-2.5 text-sm md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire on WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur transition-colors hover:border-brand-300 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile menu */}
      {open && (
        <div ref={menuRef} className="fixed inset-0 z-[80] lg:hidden">
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" onClick={closeMenu} />
          <div className="absolute inset-x-3 top-3 bottom-auto max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-[1.75rem] border border-white/60 bg-white/95 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between px-5 pt-4">
              <span className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="font-display text-base font-bold text-slate-900">{CENTRE_NAME}</span>
              </span>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="px-5 pb-2 pt-4">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <li key={link.id} data-menu-item>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className={`group flex items-center justify-between border-b border-slate-100 py-3.5 font-display text-[1.35rem] font-semibold tracking-tight transition-colors ${
                        active === link.id ? "text-brand-700" : "text-slate-800"
                      }`}
                    >
                      {link.label}
                      <span className="text-xs font-bold tracking-widest text-slate-300 group-hover:text-brand-400">
                        0{i + 1}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-3 px-5 pb-6 pt-3" data-menu-item>
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="btn-wa w-full px-5 py-3.5 text-sm"
                onClick={closeMenu}
              >
                <MessageCircle className="h-4.5 w-4.5" />
                Enquire on WhatsApp
              </a>
              <a href={`tel:+919876543210`} className="btn-outline w-full px-5 py-3.5 text-sm" onClick={closeMenu}>
                <Phone className="h-4.5 w-4.5" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
