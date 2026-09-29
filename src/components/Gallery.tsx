import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, Images } from "lucide-react";
import Modal from "./Modal";
import SectionHeading from "./SectionHeading";
import { GALLERY, GALLERY_CATEGORIES, type GalleryItem } from "../data/content";

export default function Gallery() {
  const [category, setCategory] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (category === "All" ? GALLERY : GALLERY.filter((g) => g.category === category)),
    [category]
  );

  const openItem: GalleryItem | null = lightbox !== null ? items[lightbox] : null;

  return (
    <section id="gallery" className="section-pad relative scroll-mt-24 bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Campus Gallery"
          title={
            <>
              Inside <span className="text-gradient">TechSpire</span>
            </>
          }
          sub="Classrooms, labs, workshops and celebrations — a transparent look at the environment your child learns in."
        />

        {/* filters */}
        <div data-reveal="up" className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center">
          {GALLERY_CATEGORIES.map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  setLightbox(null);
                }}
                className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-bold transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-brand-600/25"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* masonry */}
        <div data-reveal="fade" className="mt-8 columns-2 gap-3.5 sm:columns-3 sm:gap-4 lg:columns-4">
          {items.map((item, i) => (
            <figure
              key={item.src + i}
              className="group relative mb-3.5 break-inside-avoid cursor-zoom-in overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-900/5 transition-shadow duration-300 hover:shadow-xl sm:mb-4"
              onClick={() => setLightbox(i)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className={`w-full ${item.ratio} object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute left-3 top-3 rounded-full bg-slate-950/55 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                {item.category}
              </span>
              <span className="absolute left-1/2 top-1/2 inline-flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-full bg-white/90 text-slate-800 opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Expand className="h-5 w-5" />
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-3.5 text-[12px] font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* lightbox */}
      <Modal open={openItem !== null} onClose={() => setLightbox(null)} maxWidth="max-w-4xl">
        {openItem && (
          <div>
            <div className="relative flex items-center justify-center rounded-t-[1.75rem] bg-slate-950 pt-6">
              <img
                src={openItem.src}
                alt={openItem.alt}
                className="max-h-[68vh] w-full object-contain"
              />
              <button
                aria-label="Previous image"
                onClick={() => setLightbox((l) => (l === null ? l : (l - 1 + items.length) % items.length))}
                className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next image"
                onClick={() => setLightbox((l) => (l === null ? l : (l + 1) % items.length))}
                className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center gap-3 px-6 py-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                <Images className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-900">{openItem.caption}</p>
                <p className="text-xs font-medium text-slate-500">{openItem.category}</p>
              </div>
              <span className="ml-auto text-xs font-bold text-slate-400">
                {(lightbox ?? 0) + 1} / {items.length}
              </span>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
