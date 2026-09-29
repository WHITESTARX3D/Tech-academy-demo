import { useState } from "react";
import { ArrowRight, Clock, MessageCircle } from "lucide-react";
import { gsap } from "../lib/animate";
import { COURSES, waLink, type Course } from "../data/content";
import SectionHeading from "./SectionHeading";
import CourseDetails from "./CourseDetails";

export default function Courses() {
  const [selected, setSelected] = useState<Course | null>(null);

  const onEnter = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, { y: -8, duration: 0.4, ease: "power3.out" });
    gsap.to(e.currentTarget.querySelector("[data-course-icon]"), { rotate: -8, scale: 1.08, duration: 0.4, ease: "power3.out" });
  };
  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, { y: 0, duration: 0.5, ease: "power3.out" });
    gsap.to(e.currentTarget.querySelector("[data-course-icon]"), { rotate: 0, scale: 1, duration: 0.5, ease: "power3.out" });
  };

  return (
    <section id="courses" className="section-pad relative scroll-mt-24">
      <div className="blob right-[-12rem] top-40 h-96 w-96 bg-violet-200/40" data-parallax="50" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Courses"
          title={
            <>
              Learn Skills That <span className="text-gradient">Matter.</span>
            </>
          }
          sub="Career-focused courses designed by industry mentors — from your very first click on a computer to building real software."
        />

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3" data-reveal-group data-stagger="0.1">
          {COURSES.map((course) => (
            <article
              key={course.id}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              onClick={() => setSelected(course)}
              className="card group flex cursor-pointer flex-col p-6 transition-shadow duration-300 hover:shadow-[0_24px_50px_-16px_rgba(67,86,234,0.18)] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span
                  data-course-icon
                  className={`inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${course.gradient} text-white shadow-lg`}
                >
                  <course.icon className="h-6 w-6" strokeWidth={2.1} />
                </span>
                <span className={`chip border ${course.levelClass}`}>{course.level}</span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-slate-900">
                {course.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{course.desc}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {course.skills.slice(0, 3).map((s) => (
                  <span key={s} className="chip text-[11px]">
                    {s}
                  </span>
                ))}
                {course.skills.length > 3 && (
                  <span className={`chip border-transparent text-[11px] ${course.soft} ${course.iconColor}`}>
                    +{course.skills.length - 3} more
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                {course.duration}
              </div>

              <div className="mt-6 flex items-center gap-2.5 border-t border-slate-100 pt-5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(course);
                  }}
                  className="btn-outline flex-1 px-4 py-2.5 text-sm"
                >
                  View Course
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
                <a
                  href={waLink(`Hello, I am interested in the ${course.title} course at TechSpire Academy. Please share the details and fees.`)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Enquire about ${course.title} on WhatsApp`}
                  className="btn-wa px-4 py-2.5 text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire
                </a>
              </div>
            </article>
          ))}
        </div>

        <p data-reveal="fade" className="mx-auto mt-10 max-w-xl text-center text-sm text-slate-500">
          Not sure which course fits you?{" "}
          <a
            href={waLink("Hello, I need guidance to choose the right computer course for me.")}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-brand-800"
          >
            Get free counselling on WhatsApp
          </a>
        </p>
      </div>

      <CourseDetails course={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
