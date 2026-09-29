import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { gsap, reducedMotion } from "../lib/animate";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

export default function Modal({ open, onClose, children, maxWidth = "max-w-3xl" }: ModalProps) {
  const [mounted, setMounted] = useState(open);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    if (reducedMotion()) {
      setMounted(false);
      onClose();
      return;
    }
    gsap.to(backdropRef.current, { autoAlpha: 0, duration: 0.25 });
    gsap.to(panelRef.current, {
      y: 32,
      autoAlpha: 0,
      scale: 0.98,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setMounted(false);
        onClose();
      },
    });
  }, [onClose]);

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (!reducedMotion()) {
      gsap.fromTo(backdropRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 });
      gsap.fromTo(
        panelRef.current,
        { y: 56, scale: 0.97, autoAlpha: 0 },
        { y: 0, scale: 1, autoAlpha: 1, duration: 0.55, ease: "power3.out" }
      );
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mounted, handleClose]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true">
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
      />
      <div
        ref={panelRef}
        className={`relative w-full ${maxWidth} max-h-[92vh] sm:max-h-[88vh] overflow-y-auto overscroll-contain rounded-t-[1.75rem] sm:rounded-[1.75rem] bg-white shadow-2xl`}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="sticky top-4 float-right mr-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-500 shadow-sm backdrop-blur transition-colors hover:bg-slate-100 hover:text-slate-900"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
