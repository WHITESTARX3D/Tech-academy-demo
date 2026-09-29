import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS, type Testimonial } from "../data/content";
import { reducedMotion } from "../lib/animate";

const LABEL_STYLES: Record<Testimonial["label"], string> = {
  Parent: "bg-rose-50 text-rose-700 border-rose-200",
  "School Student": "bg-blue-50 text-blue-700 border-blue-200",
  "College Student": "bg-violet-50 text-violet-700 border-violet-200",
  "Working Professional": "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative scroll-mt-24 overflow-hidden">
      <div className="blob right-[-10rem] bottom-10 h-96 w-96 bg-cyan-200/40" data-parallax="45" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by Students, <span className="text-gradient">Trusted by Parents</span>
            </>
          }
          sub="Honest words from our classrooms — from school students to working professionals, and the parents who trust us."
        />

        <div className="mt-12 sm:mt-16" data-reveal="up">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.02}
            pagination={{ clickable: true }}
            autoplay={reducedMotion() ? false : { delay: 4200, pauseOnMouseEnter: true, disableOnInteraction: false }}
            breakpoints={{
              700: { slidesPerView: 1.7, spaceBetween: 20 },
              1024: { slidesPerView: 2.5, spaceBetween: 22 },
              1280: { slidesPerView: 3.05, spaceBetween: 24 },
            }}
            className="!overflow-visible"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <figure className="card relative flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-18px_rgba(67,86,234,0.2)] sm:p-7">
                  <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-100" strokeWidth={1.6} />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < t.rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.tint} font-display text-sm font-bold text-white shadow-md`}>
                      {t.initials}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-slate-900">{t.name}</p>
                      <p className="mt-0.5 truncate text-[11.5px] font-medium text-slate-500">{t.course}</p>
                    </div>
                    <span className={`chip ml-auto hidden border text-[10px] sm:inline-flex ${LABEL_STYLES[t.label]}`}>
                      {t.label}
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
