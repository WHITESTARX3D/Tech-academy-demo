import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { gsap, reducedMotion } from "../lib/animate";
import { DEFAULT_WA_MESSAGE, waLink } from "../data/content";

export default function WhatsAppButton() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    if (reducedMotion() || !ref.current) return;
    gsap.fromTo(
      ref.current,
      { scale: 0, rotate: -30, autoAlpha: 0 },
      { scale: 1, rotate: 0, autoAlpha: 1, duration: 0.7, delay: 1.4, ease: "back.out(1.8)" }
    );
    const t = window.setTimeout(() => setShowLabel(false), 9000);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <a
      ref={ref}
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-[75] flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span
        className={`glass hidden rounded-full border-emerald-200/70 px-4 py-2 text-[13px] font-bold text-emerald-700 shadow-lg transition-all duration-500 sm:block ${
          showLabel ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        }`}
      >
        Chat with us
      </span>
      <span className="wa-ring relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-xl shadow-emerald-600/30 transition-transform duration-300 group-hover:scale-110">
        <MessageCircle className="h-6.5 w-6.5" strokeWidth={2.1} />
        <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
      </span>
    </a>
  );
}
