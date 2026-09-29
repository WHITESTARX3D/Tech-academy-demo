import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowUpRight, GraduationCap, MessageCircle, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import Modal from "./Modal";
import SectionHeading from "./SectionHeading";
import { PROJECTS, waLink, type Project } from "../data/content";
import { reducedMotion } from "../lib/animate";

/* ------------------------------------------------------------------ mock visuals */
function BrowserDots() {
  return (
    <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-rose-300" />
      <span className="h-2 w-2 rounded-full bg-amber-300" />
      <span className="h-2 w-2 rounded-full bg-emerald-300" />
      <span className="mx-auto h-3.5 w-28 rounded-md bg-slate-100" />
      <span className="h-2 w-2 rounded-full bg-slate-200" />
    </div>
  );
}

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  const h = compact ? "h-full" : "h-full";
  return (
    <div className={`${h} w-full overflow-hidden rounded-xl bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5`}>
      {project.type === "website" && (
        <div>
          <BrowserDots />
          <div className="space-y-2.5 p-3">
            <div className="flex items-center justify-between">
              <div className={`h-2.5 w-14 rounded-full ${project.accent} opacity-80`} />
              <div className="flex gap-1.5">
                {[1, 2, 3].map((i) => (
                  <span key={i} className="h-1.5 w-6 rounded-full bg-slate-200" />
                ))}
              </div>
            </div>
            <div className={`rounded-lg bg-gradient-to-r ${project.gradient} p-3`}>
              <div className="h-2.5 w-3/4 rounded-full bg-white/85" />
              <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/60" />
              <div className="mt-2.5 flex gap-1.5">
                <span className="h-4 w-12 rounded-full bg-white/90" />
                <span className="h-4 w-12 rounded-full bg-white/30" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-1 rounded-md border border-slate-100 p-1.5">
                  <div className={`h-5 rounded ${project.accent} opacity-25`} />
                  <div className="h-1.5 w-full rounded-full bg-slate-200" />
                  <div className="h-1.5 w-2/3 rounded-full bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {project.type === "code" && (
        <div className="flex h-full flex-col bg-slate-900">
          <div className="flex items-center gap-1.5 border-b border-slate-800 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-rose-400/80" />
            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            <span className="ml-2 h-3 w-16 rounded bg-slate-800" />
          </div>
          <div className="flex-1 space-y-2 p-3 font-mono">
            {[
              ["w-1/3", "bg-violet-400/70"],
              ["w-2/3", "bg-cyan-400/60"],
              ["w-1/2", "bg-slate-600"],
              ["w-3/4", "bg-emerald-400/60"],
              ["w-2/5", "bg-slate-600"],
              ["w-3/5", "bg-amber-400/60"],
              ["w-1/4", "bg-violet-400/70"],
            ].map(([w, c], i) => (
              <div key={i} className="flex items-center gap-2" style={{ paddingLeft: i % 3 === 1 ? 14 : i % 3 === 2 ? 28 : 0 }}>
                <span className="h-1.5 w-3 rounded bg-slate-700" />
                <span className={`h-2 rounded-full ${w} ${c}`} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-slate-800 px-3 py-1.5">
            <span className="h-1.5 w-14 rounded-full bg-emerald-400/50" />
            <span className="h-1.5 w-8 rounded-full bg-slate-700" />
          </div>
        </div>
      )}

      {project.type === "design" && (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-3">
          <div className="h-full w-24 rounded-[1.1rem] bg-slate-900 p-1 shadow-lg">
            <div className="flex h-full flex-col overflow-hidden rounded-[0.85rem] bg-white">
              <div className="mx-auto mt-1 h-1.5 w-8 rounded-full bg-slate-900" />
              <div className={`mx-2 mt-2 h-8 rounded-lg bg-gradient-to-r ${project.gradient}`} />
              <div className="mx-2 mt-2 flex gap-1">
                {[1, 2, 3].map((i) => (
                  <span key={i} className={`h-3.5 w-1/3 rounded-full ${i === 1 ? project.accent : "bg-slate-200"}`} />
                ))}
              </div>
              {[1, 2].map((i) => (
                <div key={i} className="mx-2 mt-1.5 flex items-center gap-1.5 rounded-md border border-slate-100 p-1">
                  <span className={`h-4 w-4 rounded ${project.accent} opacity-30`} />
                  <div className="flex-1 space-y-1">
                    <div className="h-1 w-full rounded-full bg-slate-200" />
                    <div className="h-1 w-2/3 rounded-full bg-slate-100" />
                  </div>
                </div>
              ))}
              <div className={`mx-2 mb-1.5 mt-auto h-4 rounded-full ${project.accent} opacity-80`} />
            </div>
          </div>
        </div>
      )}

      {project.type === "data" && (
        <div>
          <BrowserDots />
          <div className="space-y-2.5 p-3">
            <div className="flex gap-1.5">
              {[0.9, 0.75, 0.6].map((o, i) => (
                <div key={i} className="flex-1 rounded-md border border-slate-100 p-1.5">
                  <div className={`h-1.5 w-2/3 rounded-full bg-slate-200`} />
                  <div className={`mt-1 h-2 w-1/2 rounded-full ${project.accent}`} style={{ opacity: o }} />
                </div>
              ))}
            </div>
            <div className="flex h-16 items-end gap-1.5 rounded-lg border border-slate-100 p-2">
              {[40, 65, 45, 80, 55, 95, 70, 100].map((hh, i) => (
                <span key={i} className={`w-full rounded-t-sm ${project.accent}`} style={{ height: `${hh}%`, opacity: 0.35 + (i % 3) * 0.25 }} />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="h-1.5 w-16 rounded-full bg-slate-200" />
              <div className={`h-5 w-12 rounded-full ${project.accent} opacity-25`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ main section */
export default function StudentProjects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad relative scroll-mt-24 overflow-hidden bg-white">
      <div className="blob left-[-12rem] top-40 h-96 w-96 bg-violet-200/50" data-parallax="45" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Student Work"
          title={
            <>
              Real Projects. <span className="text-gradient">Real Skills.</span>
            </>
          }
          sub="Every course ends with something you can actually show. Here is a glimpse of what our students have built recently."
        />

        <div className="mt-12 sm:mt-16" data-reveal="up">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.05}
            pagination={{ clickable: true }}
            autoplay={reducedMotion() ? false : { delay: 3800, pauseOnMouseEnter: true, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2.1, spaceBetween: 20 },
              1024: { slidesPerView: 3.05, spaceBetween: 22 },
              1280: { slidesPerView: 3.4, spaceBetween: 24 },
            }}
            className="!overflow-visible"
          >
            {PROJECTS.map((p) => (
              <SwiperSlide key={p.title}>
                <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-18px_rgba(67,86,234,0.22)]">
                  {/* visual */}
                  <div className={`relative bg-gradient-to-br ${p.gradient} p-3 pb-0 pt-4`}>
                    <div className="dots-bg absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1.5px, transparent 1.5px)" }} />
                    <div className="relative h-40 transition-transform duration-500 group-hover:-translate-y-1 sm:h-44">
                      <ProjectVisual project={p} />
                    </div>
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="chip w-fit text-[10.5px]">{p.course}</span>
                    <h3 className="mt-3 font-display text-[16.5px] font-bold leading-snug tracking-tight text-slate-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-slate-600">{p.desc}</p>

                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-[12px]">
                      <span className="flex items-center gap-2 font-semibold text-slate-700">
                        <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${p.gradient} text-[10px] font-bold text-white`}>
                          {p.student.split(" ").map((n) => n[0]).join("")}
                        </span>
                        {p.student}
                      </span>
                      <button
                        onClick={() => setSelected(p)}
                        className="inline-flex items-center gap-1 font-bold text-brand-700 transition-colors hover:text-brand-800"
                      >
                        View
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* detail modal */}
      <Modal open={selected !== null} onClose={() => setSelected(null)} maxWidth="max-w-2xl">
        {selected && (
          <div className="pb-8">
            <div className={`relative rounded-t-[1.75rem] bg-gradient-to-br ${selected.gradient} p-4 pt-10 sm:p-6 sm:pt-10`}>
              <div className="h-52 sm:h-64">
                <ProjectVisual project={selected} compact />
              </div>
            </div>
            <div className="px-6 pt-6 sm:px-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip">{selected.course}</span>
                {selected.tags.map((t) => (
                  <span key={t} className="chip text-[11px]">{t}</span>
                ))}
              </div>
              <h3 className="mt-4 pr-6 font-display text-2xl font-bold tracking-tight text-slate-900">{selected.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{selected.desc}</p>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${selected.gradient} text-sm font-bold text-white`}>
                  {selected.student.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-800">{selected.student}</p>
                  <p className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <GraduationCap className="h-3.5 w-3.5" /> {selected.role} · {selected.course}
                  </p>
                </div>
                <Quote className="ml-auto h-5 w-5 text-slate-300" />
              </div>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={waLink(`Hello, I saw the "${selected.title}" student project and I am interested in the ${selected.course} course at TechSpire Academy.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-wa flex-1 px-5 py-3 text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire About This Course
                </a>
                <a href="#courses" className="btn-outline flex-1 px-5 py-3 text-sm">
                  Explore Similar Courses
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
