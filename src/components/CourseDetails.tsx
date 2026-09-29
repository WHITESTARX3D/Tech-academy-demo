import {
  Award,
  BookOpenCheck,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock,
  FolderKanban,
  GraduationCap,
  MessageCircle,
  Phone,
  UserCheck,
} from "lucide-react";
import Modal from "./Modal";
import { PHONE_DISPLAY, PHONE_TEL, waLink, type Course } from "../data/content";

interface CourseDetailsProps {
  course: Course | null;
  onClose: () => void;
}

export default function CourseDetails({ course, onClose }: CourseDetailsProps) {
  return (
    <Modal open={course !== null} onClose={onClose} maxWidth="max-w-3xl">
      {course && (
        <div className="pb-8">
          {/* header */}
          <div className={`relative overflow-hidden rounded-t-[1.75rem] bg-gradient-to-br ${course.gradient} px-6 pb-8 pt-10 sm:px-10 sm:pt-12`}>
            <div className="dots-bg absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)" }} />
            <div className="relative">
              <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur`}>
                <course.icon className="h-7 w-7" strokeWidth={2} />
              </span>
              <h3 className="mt-4 pr-8 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {course.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="chip border-white/25 bg-white/10 text-white backdrop-blur">
                  <GraduationCap className="h-3.5 w-3.5" /> {course.level}
                </span>
                <span className="chip border-white/25 bg-white/10 text-white backdrop-blur">
                  <Clock className="h-3.5 w-3.5" /> {course.duration}
                </span>
                <span className="chip border-white/25 bg-white/10 text-white backdrop-blur">
                  <Award className="h-3.5 w-3.5" /> Certificate Included
                </span>
              </div>
            </div>
          </div>

          {/* body */}
          <div className="px-6 pt-7 sm:px-10">
            {/* overview */}
            <div>
              <h4 className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
                <BookOpenCheck className="h-4.5 w-4.5 text-brand-600" /> Course Overview
              </h4>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{course.overview}</p>
            </div>

            {/* learn */}
            <div className="mt-8">
              <h4 className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600" /> What You Will Learn
              </h4>
              <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {course.learn.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* info grid */}
            <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {[
                { icon: Clock, tint: "bg-blue-50 text-blue-600", title: "Duration", text: course.duration },
                { icon: CalendarDays, tint: "bg-violet-50 text-violet-600", title: "Class Schedule", text: course.schedule },
                { icon: Award, tint: "bg-amber-50 text-amber-600", title: "Certification", text: course.certification },
                { icon: UserCheck, tint: "bg-cyan-50 text-cyan-600", title: "Eligibility", text: course.eligibility },
              ].map((info) => (
                <div key={info.title} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${info.tint}`}>
                      <info.icon className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-bold text-slate-800">{info.title}</p>
                  </div>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600">{info.text}</p>
                </div>
              ))}
            </div>

            {/* projects + careers */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
                  <FolderKanban className="h-4.5 w-4.5 text-violet-600" /> Practical Projects
                </h4>
                <ul className="mt-3 space-y-2">
                  {course.projects.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-3.5 py-2.5 text-[13px] font-medium text-slate-700 shadow-sm">
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${course.gradient}`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
                  <Briefcase className="h-4.5 w-4.5 text-sky-600" /> Career Opportunities
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {course.careers.map((c) => (
                    <span key={c} className={`chip border-transparent font-semibold ${course.soft} ${course.iconColor}`}>
                      {c}
                    </span>
                  ))}
                </div>
                <p className="mt-4 rounded-xl bg-slate-50 px-3.5 py-3 text-[12.5px] leading-relaxed text-slate-500">
                  Free career counselling session included with every course — plus interview and resume guidance.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/60 p-5 sm:flex-row sm:items-center">
              <p className="flex-1 text-sm font-semibold text-slate-700">
                Interested in <span className="text-brand-700">{course.title}</span>? Seats are limited to 15 per batch.
              </p>
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={waLink(`Hello, I am interested in the ${course.title} course at TechSpire Academy. Please share the syllabus, fees and batch timings.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-wa px-5 py-2.5 text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire on WhatsApp
                </a>
                <a href={`tel:${PHONE_TEL}`} className="btn-outline px-5 py-2.5 text-sm">
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
