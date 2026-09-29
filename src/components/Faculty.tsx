import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BadgeCheck, Sparkles } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "./SectionHeading";
import { FACULTY } from "../data/content";

export default function Faculty() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <section id="faculty" className="section-pad relative scroll-mt-24 overflow-hidden">
      <div className="blob right-[-10rem] top-24 h-96 w-96 bg-blue-200/40" data-parallax="40" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Mentors"
          title={
            <>
              Learn From People Who Have <span className="text-gradient">Done It.</span>
            </>
          }
          sub="Qualified, experienced and — most importantly — patient. Meet the mentors who will guide you every step of the way."
        />

        <div className="mt-12 sm:mt-16" data-reveal="up">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.08}
            centeredSlides={false}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2.15, spaceBetween: 20 },
              1024: { slidesPerView: 3.05, spaceBetween: 22 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="!overflow-visible pb-2"
          >
            {FACULTY.map((f) => {
              const open = openCard === f.name;
              return (
                <SwiperSlide key={f.name}>
                  <article className="card group overflow-hidden">
                    <div
                      className="relative h-64 cursor-pointer overflow-hidden sm:h-72"
                      onClick={() => setOpenCard(open ? null : f.name)}
                    >
                      <img
                        src={f.img}
                        alt={`${f.name}, ${f.role} at TechSpire Academy`}
                        loading="lazy"
                        className={`h-full w-full object-cover object-top transition-transform duration-700 ${open ? "scale-105" : "group-hover:scale-105"}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />

                      {/* experience badge */}
                      <span className="glass absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-sm">
                        <BadgeCheck className="h-3.5 w-3.5 text-emerald-500" />
                        {f.experience}
                      </span>

                      {/* hover / tap reveal */}
                      <div
                        className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t ${f.tint} p-5 transition-all duration-500 ${
                          open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                        }`}
                      >
                        <p className="text-[12.5px] font-medium leading-relaxed text-white/95">{f.bio}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {f.tags.map((t) => (
                            <span key={t} className="rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="flex items-center gap-1.5 font-display text-[17px] font-bold tracking-tight text-slate-900">
                        {f.name}
                        <BadgeCheck className="h-4 w-4 shrink-0 text-blue-500" />
                      </h3>
                      <p className="mt-1 text-[13px] font-semibold text-brand-700">{f.role}</p>
                      <p className="mt-2 flex items-center gap-1.5 text-[11.5px] font-medium text-slate-500">
                        <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                        {f.tags.slice(0, 3).join(" · ")}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
