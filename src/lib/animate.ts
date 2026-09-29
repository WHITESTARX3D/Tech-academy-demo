import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const FROM_VARS: Record<string, gsap.TweenVars> = {
  up: { y: 48 },
  down: { y: -40 },
  left: { x: 56 },
  right: { x: -56 },
  fade: {},
  scale: { scale: 0.9, y: 24 },
  clip: { clipPath: "inset(12% 8% 12% 8% round 28px)", scale: 1.06, y: 0 },
};

function formatCount(el: HTMLElement, v: number) {
  const suffix = el.dataset.suffix || "";
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  return `${v.toFixed(decimals)}${suffix}`;
}

/**
 * Global scroll-to-reveal system.
 *  - [data-reveal="up|down|left|right|scale|fade|clip"] on single elements
 *  - [data-reveal-group] staggers its direct children
 *  - [data-count] animates a number when visible
 *  - [data-parallax] subtle scrub parallax for decorative elements
 */
export function initReveals(): () => void {
  const ctx = gsap.context(() => {
    const revealEls = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    const groups = gsap.utils.toArray<HTMLElement>("[data-reveal-group]");
    const counters = gsap.utils.toArray<HTMLElement>("[data-count]");

    if (reducedMotion()) {
      gsap.set(revealEls, { clearProps: "all", autoAlpha: 1 });
      groups.forEach((g) => gsap.set(g.children, { clearProps: "all", autoAlpha: 1 }));
      counters.forEach((el) => {
        el.textContent = formatCount(el, parseFloat(el.dataset.count || "0"));
      });
      return;
    }

    revealEls.forEach((el) => {
      const type = el.dataset.reveal || "up";
      const toVars: gsap.TweenVars = {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: parseFloat(el.dataset.duration || "0.9"),
        delay: parseFloat(el.dataset.delay || "0"),
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      };
      if (type === "clip") toVars.clipPath = "inset(0% 0% 0% 0% round 28px)";
      gsap.fromTo(el, { autoAlpha: 0, ...(FROM_VARS[type] || FROM_VARS.up) }, toVars);
    });

    groups.forEach((group) => {
      const kids = Array.from(group.children) as HTMLElement[];
      if (!kids.length) return;
      gsap.fromTo(
        kids,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: parseFloat(group.dataset.stagger || "0.09"),
          scrollTrigger: { trigger: group, start: "top 86%", once: true },
        }
      );
    });

    counters.forEach((el) => {
      const end = parseFloat(el.dataset.count || "0");
      const obj = { v: 0 };
      gsap.to(obj, {
        v: end,
        duration: parseFloat(el.dataset.duration || "2"),
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
        onUpdate: () => {
          el.textContent = formatCount(el, obj.v);
        },
        onComplete: () => {
          el.textContent = formatCount(el, end);
        },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const amt = parseFloat(el.dataset.parallax || "50");
      gsap.fromTo(
        el,
        { y: amt },
        {
          y: -amt,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section") || el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    });
  });

  return () => ctx.revert();
}
