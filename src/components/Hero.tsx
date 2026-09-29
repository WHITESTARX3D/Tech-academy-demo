import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Atom,
  Award,
  BadgeCheck,
  Braces,
  Cloud,
  Cpu,
  HeartHandshake,
  Laptop,
  MessageCircle,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { gsap, reducedMotion } from "../lib/animate";
import { waLink, DEFAULT_WA_MESSAGE } from "../data/content";

const CODE_LINES = [
  { text: "# Welcome to TechSpire Academy", cls: "text-slate-500" },
  { text: 'import { your_future } from "techspire"', cls: "text-violet-300" },
  { text: 'skills = ["Python", "React", "Design", "AI"]', cls: "text-cyan-300" },
  { text: "career = mentor.guide(you, projects=True)", cls: "text-emerald-300" },
  { text: 'print("Hello, Future!")   # let us build', cls: "text-amber-300" },
];

const TRUST = [
  { icon: Users, value: "500+", label: "Students Trained", tint: "bg-blue-50 text-blue-600" },
  { icon: UserCheck, value: "10+", label: "Expert Mentors", tint: "bg-violet-50 text-violet-600" },
  { icon: HeartHandshake, value: "95%+", label: "Student Satisfaction", tint: "bg-rose-50 text-rose-600" },
  { icon: Laptop, value: "100%", label: "Practical Learning", tint: "bg-cyan-50 text-cyan-600" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [current, setCurrent] = useState("");

  /* entrance timeline */
  useEffect(() => {
    if (reducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo('[data-hero="eyebrow"]', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6 })
        .fromTo('[data-hero="line"] > span', { yPercent: 115 }, { yPercent: 0, duration: 0.95, stagger: 0.1 }, "-=0.3")
        .fromTo('[data-hero="sub"]', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.55")
        .fromTo('[data-hero="cta"] > *', { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.55 }, "-=0.45")
        .fromTo('[data-hero="trust"] > *', { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.07, duration: 0.5 }, "-=0.4")
        .fromTo('[data-hero="visual"]', { y: 48, autoAlpha: 0, scale: 0.96 }, { y: 0, autoAlpha: 1, scale: 1, duration: 1 }, "-=0.9")
        .fromTo('[data-hero="float"]', { y: 28, autoAlpha: 0, scale: 0.92 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.11, duration: 0.65 }, "-=0.65");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  /* typing effect */
  useEffect(() => {
    if (reducedMotion()) {
      setTypedLines(CODE_LINES.map((l) => l.text));
      return;
    }
    let line = 0;
    let char = 0;
    let hold = 0;
    const id = window.setInterval(() => {
      if (hold > 0) {
        hold -= 1;
        if (hold === 0) {
          setTypedLines([]);
          setCurrent("");
          line = 0;
          char = 0;
        }
        return;
      }
      const full = CODE_LINES[line].text;
      char += 1;
      if (char <= full.length) {
        setCurrent(full.slice(0, char));
      }
      if (char >= full.length) {
        setTypedLines((prev) => [...prev.slice(-4), full]);
        setCurrent("");
        line += 1;
        char = 0;
        if (line >= CODE_LINES.length) hold = 46; // pause, then restart
      }
    }, 34);
    return () => window.clearInterval(id);
  }, []);

  /* mouse parallax on visual cluster */
  useEffect(() => {
    const container = visualRef.current;
    if (!container || reducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;

    const layers = gsap.utils.toArray<HTMLElement>("[data-depth]", container);
    const setters = layers.map((el) => ({
      x: gsap.quickTo(el, "x", { duration: 0.7, ease: "power3" }),
      y: gsap.quickTo(el, "y", { duration: 0.7, ease: "power3" }),
      dx: parseFloat(el.dataset.depth || "1") * 22,
      dy: parseFloat(el.dataset.depth || "1") * 16,
    }));
    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      const rx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const ry = (e.clientY - (r.top + r.height / 2)) / r.height;
      setters.forEach((s) => {
        s.x(rx * s.dx);
        s.y(ry * s.dy);
      });
    };
    const onLeave = () =>
      setters.forEach((s) => {
        s.x(0);
        s.y(0);
      });
    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);
    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative overflow-hidden pb-14 pt-[7.5rem] sm:pb-20 sm:pt-36 lg:pt-40">
      {/* background decor */}
      <div className="grid-bg absolute inset-x-0 top-0 h-[42rem]" />
      <div className="blob left-[-8rem] top-24 h-96 w-96 bg-blue-300/30" data-parallax="40" />
      <div className="blob right-[-10rem] top-64 h-[28rem] w-[28rem] bg-violet-300/25" data-parallax="60" />
      <div className="blob bottom-0 left-1/3 h-72 w-72 bg-cyan-200/40" data-parallax="30" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* ============ copy column ============ */}
        <div className="max-w-2xl">
          <span
            data-hero="eyebrow"
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5 text-violet-500" />
            Admissions Open · New Batches Starting Soon
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.35rem]">
            <span data-hero="line" className="block overflow-hidden pb-1">
              <span className="block">Build Your</span>
            </span>
            <span data-hero="line" className="block overflow-hidden pb-2">
              <span className="block">
                <span className="text-gradient">Future</span> With
              </span>
            </span>
            <span data-hero="line" className="block overflow-hidden pb-2.5">
              <span className="relative block w-fit">
                Technology
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none" aria-hidden>
                  <path d="M2 9C60 3 180 2 298 7" stroke="url(#u)" strokeWidth="4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="u" x1="0" x2="300" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2563eb" />
                      <stop offset="0.5" stopColor="#7c3aed" />
                      <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </span>
          </h1>

          <p data-hero="sub" className="subtext mt-6 max-w-xl">
            Learn Computer Science, Programming and Digital Skills from experienced mentors through
            practical, career-focused training — in small batches, on real systems, with real projects.
          </p>

          <div data-hero="cta" className="mt-8 flex flex-wrap items-center gap-3.5">
            <a href="#courses" className="btn-primary group px-7 py-3.5 text-base">
              Explore Courses
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noreferrer" className="btn-wa px-7 py-3.5 text-base">
              <MessageCircle className="h-4.5 w-4.5" />
              Enquire on WhatsApp
            </a>
          </div>

          {/* trust strip */}
          <div data-hero="trust" className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-slate-200">
            {TRUST.map((t) => (
              <div key={t.label} className="flex items-center gap-2.5 sm:justify-center">
                <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${t.tint}`}>
                  <t.icon className="h-4.5 w-4.5" />
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-base font-bold text-slate-900">{t.value}</span>
                  <span className="block text-[11px] font-medium text-slate-500">{t.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ============ visual cluster ============ */}
        <div data-hero="visual" className="relative">
          <div ref={visualRef} className="relative mx-auto h-[430px] w-full max-w-[540px] sm:h-[520px]">
            {/* orbit ring + glow */}
            <div className="ring-orbit absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slow sm:h-[32rem] sm:w-[32rem]" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-400/25 via-violet-400/20 to-cyan-300/25 blur-2xl" />
            <div className="dots-bg absolute right-2 top-6 h-28 w-28 opacity-70" />
            <div className="dots-bg absolute bottom-10 left-0 h-24 w-24 opacity-60" />

            {/* code editor card */}
            <div data-depth="0.55" className="absolute left-1/2 top-1/2 w-[82%] max-w-[400px] -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-2xl bg-slate-900 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.45)] ring-1 ring-slate-800">
                <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 rounded-md bg-slate-800 px-2.5 py-1 font-mono text-[11px] text-slate-300">future.py</span>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    LIVE CLASS
                  </span>
                </div>
                <div className="min-h-[10.5rem] px-5 py-4 font-mono text-[12.5px] leading-7 sm:text-[13px]">
                  {typedLines.map((line, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="w-4 select-none text-right text-slate-600">{i + 1}</span>
                      <span className={CODE_LINES.find((l) => l.text === line)?.cls || "text-slate-300"}>{line}</span>
                    </div>
                  ))}
                  <div className="flex gap-3">
                    <span className="w-4 select-none text-right text-slate-600">{typedLines.length + 1}</span>
                    <span className={CODE_LINES.find((l) => l.text.startsWith(current.slice(0, 8)))?.cls || "text-slate-300"}>
                      {current}
                      <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[3px] animate-blink bg-cyan-300" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-800 px-4 py-2.5 font-mono text-[10.5px] text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    running your_future …
                  </span>
                  <span>Python 3 · UTF-8</span>
                </div>
              </div>
            </div>

            {/* floating: python progress card */}
            <div data-hero="float" data-depth="1.35" className="absolute -left-1 top-4 hidden sm:block lg:-left-8">
              <div className="glass animate-float-slow w-48 rounded-2xl p-3.5 shadow-xl shadow-slate-900/5">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                    <Braces className="h-4.5 w-4.5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-xs font-bold text-slate-800">Python Basics</p>
                    <p className="text-[10px] font-medium text-slate-500">Module 4 of 6</p>
                  </div>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
                </div>
                <p className="mt-1.5 text-right text-[10px] font-bold text-blue-600">72% complete</p>
              </div>
            </div>

            {/* floating: react batch card */}
            <div data-hero="float" data-depth="1.1" className="absolute -right-1 top-2 hidden sm:block lg:-right-6">
              <div className="glass animate-float-slower w-44 rounded-2xl p-3.5 shadow-xl shadow-slate-900/5">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white">
                    <Atom className="h-4.5 w-4.5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-xs font-bold text-slate-800">React Bootcamp</p>
                    <p className="text-[10px] font-medium text-slate-500">New batch · Few seats</p>
                  </div>
                </div>
                <div className="mt-2.5 flex -space-x-2">
                  {["AD", "RJ", "SK", "+"].map((a, i) => (
                    <span
                      key={i}
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-white text-[8px] font-bold text-white ${
                        ["bg-blue-500", "bg-violet-500", "bg-cyan-500", "bg-slate-400"][i]
                      }`}
                    >
                      {a}
                    </span>
                  ))}
                  <span className="ml-3 self-center text-[10px] font-semibold text-slate-500">15 joined</span>
                </div>
              </div>
            </div>

            {/* floating: students stat card */}
            <div data-hero="float" data-depth="1.5" className="absolute -left-2 bottom-6 lg:-left-10">
              <div className="glass w-44 animate-float-slower rounded-2xl p-3.5 shadow-xl shadow-slate-900/5 sm:w-48">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                    <TrendingUp className="h-4.5 w-4.5" />
                  </span>
                  <div className="leading-tight">
                    <p className="font-display text-sm font-bold text-slate-900">500+ Students</p>
                    <p className="text-[10px] font-medium text-slate-500">trained since 2021</p>
                  </div>
                </div>
                <div className="mt-2.5 flex items-end gap-1">
                  {[35, 55, 40, 70, 62, 85, 100].map((h, i) => (
                    <span key={i} className="w-full rounded-sm bg-gradient-to-t from-emerald-500/70 to-teal-400/70" style={{ height: `${h * 0.36}px` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* floating: certificate card */}
            <div data-hero="float" data-depth="1.2" className="absolute -right-1 bottom-14 z-10 lg:-right-4">
              <div className="glass animate-float-slow w-48 rounded-2xl p-3.5 shadow-xl shadow-slate-900/5">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                    <Award className="h-4.5 w-4.5" />
                  </span>
                  <div className="leading-tight">
                    <p className="flex items-center gap-1 text-xs font-bold text-slate-800">
                      Certificate Earned <BadgeCheck className="h-3.5 w-3.5 text-blue-500" />
                    </p>
                    <p className="text-[10px] font-medium text-slate-500">Web Development · Grade A</p>
                  </div>
                </div>
              </div>
            </div>

            {/* floating mini icons */}
            <div data-hero="float" data-depth="1.9" className="absolute left-[16%] top-[4%] hidden md:block">
              <span className="glass inline-flex h-11 w-11 animate-float-slow items-center justify-center rounded-2xl text-violet-600 shadow-lg shadow-slate-900/5">
                <Cpu className="h-5 w-5" />
              </span>
            </div>
            <div data-hero="float" data-depth="2.1" className="absolute bottom-[34%] right-[6%] hidden md:block">
              <span className="glass inline-flex h-11 w-11 animate-float-slower items-center justify-center rounded-2xl text-sky-500 shadow-lg shadow-slate-900/5">
                <Cloud className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
