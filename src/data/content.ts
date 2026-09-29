import {
  Monitor,
  Globe,
  Braces,
  PenTool,
  BrainCircuit,
  Layers,
  BadgeCheck,
  BookOpenCheck,
  Laptop,
  ClipboardCheck,
  ShieldCheck,
  Compass,
  FolderKanban,
  Users,
  MessagesSquare,
  ClipboardList,
  Award,
  Clock,
  PhoneIncoming,
  ListChecks,
  BookOpen,
  FlaskConical,
  TrendingUp,
  FolderCheck,
  UserCheck,
  HeartHandshake,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- global ------------------------------------------------ */
export const CENTRE_NAME = "TechSpire Academy";
export const WHATSAPP_NUMBER = "919876543210";
export const PHONE_DISPLAY = "+91 98765 43210";
export const PHONE_TEL = "+919876543210";
export const EMAIL = "hello@techspire.academy";
export const ADDRESS = "2nd Floor, Sunrise Business Park, M.G. Road, Pune, Maharashtra 411001";
export const HOURS = "Mon – Sat · 8:00 AM – 8:00 PM   |   Sun · 10:00 AM – 2:00 PM";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WA_MESSAGE =
  "Hello, I would like to know more about your computer and technology courses and admission process.";

export const NAV_LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Courses", href: "#courses", id: "courses" },
  { label: "Why Us", href: "#why-us", id: "why-us" },
  { label: "Results", href: "#results", id: "results" },
  { label: "Faculty", href: "#faculty", id: "faculty" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Contact", href: "#contact", id: "contact" },
];

/* ---------------------------------- courses ------------------------------------------------ */
export interface Course {
  id: string;
  title: string;
  icon: LucideIcon;
  level: string;
  levelClass: string;
  duration: string;
  gradient: string; // tailwind gradient classes
  soft: string; // tinted bg for icon tile
  iconColor: string;
  desc: string;
  skills: string[];
  overview: string;
  learn: string[];
  projects: string[];
  schedule: string;
  certification: string;
  eligibility: string;
  careers: string[];
}

export const COURSES: Course[] = [
  {
    id: "fundamentals",
    title: "Computer Fundamentals",
    icon: Monitor,
    level: "Beginner",
    levelClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    duration: "3 Months",
    gradient: "from-sky-500 to-blue-600",
    soft: "bg-sky-50",
    iconColor: "text-sky-600",
    desc: "Master everyday computing — from MS Office and typing to internet skills and digital safety. Perfect for absolute beginners.",
    skills: ["MS Office", "Internet & Digital Skills", "Typing", "Basic Computer Knowledge"],
    overview:
      "A complete foundation course that takes you from switching on a computer to confidently handling office work, online forms, digital payments and everyday digital tasks.",
    learn: [
      "Windows, files & folder management",
      "MS Word — documents, resumes & printing",
      "MS Excel — formulas, tables & reports",
      "MS PowerPoint — professional presentations",
      "Internet, email & online safety",
      "Digital payments & filling online forms",
      "Fast typing — English & Hindi",
    ],
    projects: ["Personal resume in Word", "Monthly budget tracker in Excel", "Business presentation deck"],
    schedule: "Mon – Fri · 1 hr/day · Morning, Afternoon & Evening batches",
    certification: "TechSpire Certificate in Computer Fundamentals after final practical assessment.",
    eligibility: "Open to everyone — school students, homemakers, job seekers. No prior knowledge needed.",
    careers: ["Office Assistant", "Data Entry Operator", "Front Desk Executive", "Computer Operator"],
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Globe,
    level: "Intermediate",
    levelClass: "bg-amber-50 text-amber-700 border-amber-200",
    duration: "6 Months",
    gradient: "from-blue-600 to-indigo-600",
    soft: "bg-blue-50",
    iconColor: "text-blue-600",
    desc: "Build real, responsive websites from scratch — HTML, CSS, JavaScript and React with live project deployment.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
    overview:
      "Our most popular career track. Learn how modern websites are designed, built and deployed — and finish with a portfolio of real projects you can show to employers.",
    learn: [
      "HTML5 structure & semantic markup",
      "CSS3 layouts — Flexbox, Grid & animations",
      "Responsive, mobile-first design",
      "JavaScript ES6+ & DOM projects",
      "React.js — components, hooks & routing",
      "Git, GitHub & live deployment",
    ],
    projects: ["Personal portfolio website", "Business landing page", "React dashboard app", "Deployed capstone project"],
    schedule: "Mon – Sat · 1.5 hrs/day · Project lab on Saturdays",
    certification: "TechSpire Web Developer Certificate + verified project portfolio.",
    eligibility: "Class 10 and above. Basic computer knowledge is helpful — we cover the rest from zero.",
    careers: ["Front-End Developer", "Web Designer", "Freelance Developer", "Junior React Developer"],
  },
  {
    id: "programming",
    title: "Programming (C, C++, Python, Java)",
    icon: Braces,
    level: "Beginner – Advanced",
    levelClass: "bg-violet-50 text-violet-700 border-violet-200",
    duration: "8 Months",
    gradient: "from-violet-600 to-purple-600",
    soft: "bg-violet-50",
    iconColor: "text-violet-600",
    desc: "Strong logic-building from C to Java — the exact foundation school, college and placement interviews demand.",
    skills: ["C", "C++", "Python", "Java"],
    overview:
      "A deep, structured programming track covering four industry languages with a heavy focus on logic building, problem solving and object-oriented thinking.",
    learn: [
      "C — logic, loops, arrays & pointers",
      "C++ — OOP & STL fundamentals",
      "Python — scripting, files & mini-automation",
      "Java — OOP, collections & core syntax",
      "Data structures & algorithms basics",
      "Debugging & clean coding habits",
    ],
    projects: ["Banking system in C++", "Attendance manager in Python", "Console games", "Java quiz application"],
    schedule: "Mon – Fri · 1.5 hrs/day · Doubt lab every Sunday",
    certification: "TechSpire Programming Certificate (per language) after practical exams.",
    eligibility: "Class 9 and above. Ideal for school CS/IP students, BCA/B.Tech students and beginners.",
    careers: ["Software Developer (fresher)", "Junior Programmer", "BCA / Engineering subject support", "Tech internship readiness"],
  },
  {
    id: "design",
    title: "Graphic & UI Design",
    icon: PenTool,
    level: "Intermediate",
    levelClass: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    duration: "5 Months",
    gradient: "from-fuchsia-500 to-violet-600",
    soft: "bg-fuchsia-50",
    iconColor: "text-fuchsia-600",
    desc: "Turn creativity into a skill — Photoshop, Figma and UI/UX fundamentals with a portfolio that gets noticed.",
    skills: ["Photoshop", "Figma", "UI/UX", "Design Fundamentals"],
    overview:
      "Learn how professional digital products and brands are designed. From photo editing to complete app interfaces — with design theory made simple and practical.",
    learn: [
      "Design principles — layout, color & typography",
      "Photoshop — editing, posters & social media kits",
      "Figma — wireframes to polished UI",
      "UI/UX process — research, flows & prototyping",
      "Brand identity basics",
      "Building a design portfolio",
    ],
    projects: ["Social media design kit", "Food delivery app UI (5 screens)", "Brand identity for a local business", "Website redesign case study"],
    schedule: "Mon – Sat · 1.5 hrs/day · Design critique sessions weekly",
    certification: "TechSpire Design Certificate + reviewed portfolio pieces.",
    eligibility: "Class 10 and above. No drawing skills required — just interest in design.",
    careers: ["UI Designer", "Graphic Designer", "Social Media Designer", "Design Freelancer"],
  },
  {
    id: "ai-tech",
    title: "AI & Modern Technology",
    icon: BrainCircuit,
    level: "Beginner",
    levelClass: "bg-cyan-50 text-cyan-700 border-cyan-200",
    duration: "3 Months",
    gradient: "from-cyan-500 to-sky-600",
    soft: "bg-cyan-50",
    iconColor: "text-cyan-600",
    desc: "Understand and use AI confidently — modern AI tools, automation basics and responsible, practical usage.",
    skills: ["AI Fundamentals", "AI Tools", "Automation Basics", "Responsible AI Usage"],
    overview:
      "A future-ready course that demystifies AI. Students learn to use modern AI tools for study, work and business — productively, ethically and safely.",
    learn: [
      "What AI really is — in plain language",
      "Using AI assistants for study & work",
      "AI tools for writing, images & presentations",
      "Prompt writing that gets results",
      "Automation basics for daily tasks",
      "Responsible AI — privacy, ethics & verification",
    ],
    projects: ["AI-assisted study planner", "Automated daily workflow", "AI mini-research presentation"],
    schedule: "3 days/week · 1.5 hrs/day · Weekend explorer sessions",
    certification: "TechSpire Certificate in AI & Modern Technology.",
    eligibility: "Open to all — students, teachers, professionals and business owners.",
    careers: ["AI-assisted office roles", "Productivity specialist", "Foundation for advanced AI courses", "Smarter freelancing"],
  },
  {
    id: "advanced",
    title: "Advanced Computer Courses",
    icon: Layers,
    level: "Customizable",
    levelClass: "bg-indigo-50 text-indigo-700 border-indigo-200",
    duration: "Custom Duration",
    gradient: "from-indigo-600 to-blue-700",
    soft: "bg-indigo-50",
    iconColor: "text-indigo-600",
    desc: "A fully customizable advanced track — Tally, Advanced Excel, diploma modules or a custom mix built with our counsellor.",
    skills: ["Tally & Accounting", "Advanced Excel", "DCA / PGDCA Modules", "Custom Combinations"],
    overview:
      "Every learner's goal is different. In this track, our counsellor helps you design a personalized course — combining accounting tools, advanced office tools, exam preparation or diploma-level modules.",
    learn: [
      "Tally with GST for accounting careers",
      "Advanced Excel — dashboards & data tools",
      "Office automation & MIS reporting",
      "DCA / PGDCA-style diploma modules",
      "Government exam computer syllabus",
      "Fully custom topic combinations",
    ],
    projects: ["GST accounting set in Tally", "Sales dashboard in Excel", "Custom capstone project"],
    schedule: "Flexible — weekday & weekend batches designed around you",
    certification: "Customized TechSpire certification based on the selected modules.",
    eligibility: "Based on selected track — counsellor will guide you to the right combination.",
    careers: ["Accounts Assistant", "MIS Executive", "Computer Operator", "Govt. exam readiness"],
  },
];

/* ---------------------------------- trust ------------------------------------------------ */
export const TRUST_ITEMS: { icon: LucideIcon; title: string; desc: string; tint: string; iconColor: string }[] = [
  {
    icon: BadgeCheck,
    title: "Experienced Faculty",
    desc: "Every mentor has 7–15 years of teaching and real industry experience. No compromises on teaching quality.",
    tint: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: BookOpenCheck,
    title: "Structured Curriculum",
    desc: "A clear, milestone-based syllabus for every course — parents always know exactly what their child is learning.",
    tint: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Laptop,
    title: "Practical Learning",
    desc: "One student, one computer. Every concept is practiced hands-on the same day it is taught.",
    tint: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Progress Tracking",
    desc: "Monthly assessments and parent updates so you can see real, measurable improvement.",
    tint: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Safe Learning Environment",
    desc: "Disciplined, supervised batches with small class sizes — focused, respectful and distraction-free.",
    tint: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Compass,
    title: "Career Guidance",
    desc: "Honest counselling on courses, careers and next steps — before admission and after certification.",
    tint: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

/* ---------------------------------- why us ------------------------------------------------ */
export const WHY_US: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: FolderKanban, title: "Practical Project-Based Learning", desc: "Students build real projects in every course — not just theory notes." },
  { icon: UserCheck, title: "Experienced Instructors", desc: "Learn directly from mentors who have worked in the industry." },
  { icon: Users, title: "Small Batch Sizes", desc: "Maximum 15 students per batch so no one is left behind." },
  { icon: MessagesSquare, title: "Doubt Clearing Sessions", desc: "Dedicated daily doubt hours plus a weekend doubt lab." },
  { icon: ClipboardList, title: "Regular Assessments", desc: "Weekly tests and monthly practical exams keep progress honest." },
  { icon: Compass, title: "Career Guidance", desc: "Roadmaps for jobs, freelancing and higher studies." },
  { icon: Award, title: "Certificate After Completion", desc: "A recognized certificate with a verified project portfolio." },
  { icon: Clock, title: "Flexible Batch Timing", desc: "Morning, evening and weekend batches for every schedule." },
];

export const WHY_STATS = [
  { value: 15, suffix: "", label: "Max students per batch" },
  { value: 100, suffix: "%", label: "Practical, hands-on classes" },
  { value: 30, suffix: "+", label: "Live projects every year" },
  { value: 7, suffix: "", label: "Days-a-week mentor support" },
];

/* ---------------------------------- journey ------------------------------------------------ */
export const JOURNEY: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: PhoneIncoming, title: "Enquiry", desc: "Message us on WhatsApp or walk in — ask anything about courses, fees and batches." },
  { icon: MessagesSquare, title: "Counselling", desc: "A free 1-on-1 session to understand your goals, background and schedule." },
  { icon: ListChecks, title: "Course Selection", desc: "We recommend the right course and batch — with a free demo class before you decide." },
  { icon: BookOpen, title: "Learning", desc: "Concept-by-concept classroom learning with daily hands-on practice." },
  { icon: FlaskConical, title: "Projects & Assessments", desc: "Weekly tests and real projects that build confidence and a portfolio." },
  { icon: Award, title: "Certification", desc: "Practical final exam and a certificate with your project work." },
  { icon: TrendingUp, title: "Career Guidance", desc: "Next-step guidance — jobs, advanced courses or freelancing." },
];

/* ---------------------------------- faculty ------------------------------------------------ */
export interface FacultyMember {
  name: string;
  role: string;
  experience: string;
  tags: string[];
  bio: string;
  img: string;
  tint: string;
}

export const FACULTY: FacultyMember[] = [
  {
    name: "Rajesh Verma",
    role: "Director · Senior Programming Mentor",
    experience: "12+ Years",
    tags: ["C / C++", "Python", "Java", "DSA"],
    bio: "Former software engineer turned educator. Rajesh Sir has trained 2,000+ students and is known for making logic simple, structured and fun.",
    img: "/images/faculty-1.jpg",
    tint: "from-blue-600 to-indigo-600",
  },
  {
    name: "Priya Sharma",
    role: "Web Development Lead",
    experience: "8+ Years",
    tags: ["HTML / CSS", "JavaScript", "React", "Git"],
    bio: "A full-stack developer who has shipped real products for startups. Priya Ma'am runs our project labs and teaches students to build like professionals.",
    img: "/images/faculty-2.jpg",
    tint: "from-violet-600 to-purple-600",
  },
  {
    name: "Amit Patel",
    role: "Design & UI/UX Mentor",
    experience: "7+ Years",
    tags: ["Figma", "Photoshop", "UI/UX", "Branding"],
    bio: "Brand and product designer with agency experience. Amit Sir helps students turn creativity into a professional, portfolio-ready skill.",
    img: "/images/faculty-3.jpg",
    tint: "from-fuchsia-500 to-violet-600",
  },
  {
    name: "Sneha Kulkarni",
    role: "Fundamentals & AI Tools Mentor",
    experience: "9+ Years",
    tags: ["MS Office", "Typing", "Digital Skills", "AI Tools"],
    bio: "The most patient teacher you will ever meet. Sneha Ma'am specializes in beginners — from first-time computer users to working professionals.",
    img: "/images/faculty-4.jpg",
    tint: "from-cyan-500 to-sky-600",
  },
];

/* ---------------------------------- projects ------------------------------------------------ */
export interface Project {
  title: string;
  student: string;
  role: string;
  course: string;
  desc: string;
  type: "website" | "code" | "design" | "data";
  gradient: string;
  accent: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "GreenKart — Grocery Store Website",
    student: "Ananya Deshmukh",
    role: "Class 12 Student",
    course: "Web Development",
    desc: "A fully responsive online grocery store with product filters, cart and checkout flow — deployed live.",
    type: "website",
    gradient: "from-emerald-400 to-teal-500",
    accent: "bg-emerald-500",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Face Recognition Attendance System",
    student: "Rohit Jadhav",
    role: "BCA 2nd Year",
    course: "Programming (Python)",
    desc: "Python + OpenCV based attendance system that marks students present automatically from camera feed.",
    type: "code",
    gradient: "from-blue-500 to-indigo-600",
    accent: "bg-blue-500",
    tags: ["Python", "OpenCV", "CSV Reports"],
  },
  {
    title: "FoodieGo — Food Delivery App UI",
    student: "Sara Khan",
    role: "College Student",
    course: "Graphic & UI Design",
    desc: "Complete 12-screen food delivery app design with design system, prototyping and micro-interactions.",
    type: "design",
    gradient: "from-rose-400 to-pink-500",
    accent: "bg-rose-500",
    tags: ["Figma", "UI/UX", "Prototyping"],
  },
  {
    title: "QuizMaster — Interactive Quiz App",
    student: "Aditya Kulkarni",
    role: "Class 11 Student",
    course: "Web Development",
    desc: "A timed quiz app with score tracking, categories and a leaderboard — built in vanilla JavaScript.",
    type: "website",
    gradient: "from-violet-500 to-purple-600",
    accent: "bg-violet-500",
    tags: ["JavaScript", "DOM", "LocalStorage"],
  },
  {
    title: "BankPro — Banking Management System",
    student: "Farhan Sheikh",
    role: "B.Sc. CS Student",
    course: "Programming (C++)",
    desc: "Console banking system with accounts, transactions, interest calculation and secure file storage.",
    type: "code",
    gradient: "from-cyan-400 to-sky-500",
    accent: "bg-cyan-500",
    tags: ["C++", "OOP", "File Handling"],
  },
  {
    title: "SalesScope — Sales Data Analyzer",
    student: "Meera Nair",
    role: "Working Professional",
    course: "Programming (Python)",
    desc: "Analyzes 10,000+ rows of sales data and generates clean visual reports for business decisions.",
    type: "data",
    gradient: "from-amber-400 to-orange-500",
    accent: "bg-amber-500",
    tags: ["Python", "Pandas", "Charts"],
  },
  {
    title: "EduSpark — Coaching Website Redesign",
    student: "Tanvi Joshi",
    role: "Class 12 Student",
    course: "Graphic & UI Design",
    desc: "Complete website redesign case study — research, wireframes, high-fidelity UI and style guide.",
    type: "design",
    gradient: "from-indigo-400 to-blue-600",
    accent: "bg-indigo-500",
    tags: ["UI/UX", "Figma", "Case Study"],
  },
  {
    title: "StudyBuddy — AI Study Planner",
    student: "Kunal Patil",
    role: "College Student",
    course: "AI & Modern Technology",
    desc: "An AI-assisted planner that creates personalized study timetables and revision schedules from a syllabus.",
    type: "data",
    gradient: "from-sky-400 to-cyan-500",
    accent: "bg-sky-500",
    tags: ["AI Tools", "Automation", "Prompting"],
  },
];

/* ---------------------------------- stats ------------------------------------------------ */
export const STATS: { icon: LucideIcon; value: number; suffix: string; label: string }[] = [
  { icon: Users, value: 500, suffix: "+", label: "Students Trained" },
  { icon: FolderCheck, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: UserCheck, value: 10, suffix: "+", label: "Expert Mentors" },
  { icon: HeartHandshake, value: 95, suffix: "%+", label: "Student Satisfaction" },
  { icon: CalendarCheck, value: 5, suffix: "+", label: "Years of Teaching" },
];

/* ---------------------------------- testimonials ------------------------------------------------ */
export interface Testimonial {
  name: string;
  label: "Parent" | "School Student" | "College Student" | "Working Professional";
  course: string;
  text: string;
  rating: number;
  initials: string;
  tint: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rakesh Agarwal",
    label: "Parent",
    course: "Father of a Web Development student",
    text: "I visited many institutes before choosing TechSpire for my son. What convinced me was the structure — weekly updates, practical exams and a very disciplined environment. In 5 months my son built his own website. Worth every rupee.",
    rating: 5,
    initials: "RA",
    tint: "from-blue-500 to-indigo-500",
  },
  {
    name: "Ananya Deshmukh",
    label: "School Student",
    course: "Web Development",
    text: "I joined after Class 10 with zero coding knowledge. Ma'am started from the absolute basics and by month four I had made my first real website. The project labs on Saturdays are the best part — we actually build things.",
    rating: 5,
    initials: "AD",
    tint: "from-violet-500 to-purple-500",
  },
  {
    name: "Rohit Jadhav",
    label: "College Student",
    course: "Programming (Python & C++)",
    text: "College teaches theory, TechSpire taught me how to actually write code. Doubt sessions before exams saved my semester, and my Python project became the highlight of my resume. Highly recommended for BCA students.",
    rating: 5,
    initials: "RJ",
    tint: "from-cyan-500 to-sky-500",
  },
  {
    name: "Neha Kulkarni",
    label: "Working Professional",
    course: "Computer Fundamentals + Advanced Excel",
    text: "I work in HR and always hesitated with Excel. The evening batch timing worked perfectly with my job. Within 6 weeks I was making dashboards that earlier took me days. Very professional and respectful environment.",
    rating: 5,
    initials: "NK",
    tint: "from-emerald-500 to-teal-500",
  },
  {
    name: "Sunita Sharma",
    label: "Parent",
    course: "Mother of a Class 9 student",
    text: "As a parent, I appreciate that they track attendance and send monthly progress reports. The teachers are patient, batches are small, and my daughter now genuinely enjoys computers instead of fearing them.",
    rating: 5,
    initials: "SS",
    tint: "from-rose-500 to-pink-500",
  },
  {
    name: "Kunal Patil",
    label: "College Student",
    course: "AI & Modern Technology",
    text: "The AI course opened my eyes — not just ChatGPT tricks, but real workflows, automation and how to use AI responsibly for studies. Our final project was reviewed like a professional presentation. Excellent mentors.",
    rating: 4,
    initials: "KP",
    tint: "from-amber-500 to-orange-500",
  },
];

/* ---------------------------------- faqs ------------------------------------------------ */
export const FAQS: { q: string; a: string }[] = [
  {
    q: "Which courses are available?",
    a: "We offer Computer Fundamentals, Web Development (HTML, CSS, JavaScript, React), Programming (C, C++, Python, Java), Graphic & UI Design (Photoshop, Figma, UI/UX), AI & Modern Technology, and fully customizable Advanced Computer Courses (Tally, Advanced Excel, diploma modules and more).",
  },
  {
    q: "What is the course duration?",
    a: "Most courses run between 3 and 8 months depending on depth — Fundamentals is 3 months, Web Development is 6 months, the full Programming track is 8 months. Custom tracks get a personalized schedule from our counsellor.",
  },
  {
    q: "Are beginners allowed?",
    a: "Absolutely — most of our students start from zero. Every course begins with foundations, and our mentors are trained to teach first-time learners patiently. No prior computer knowledge is required for beginner courses.",
  },
  {
    q: "Do you provide certificates?",
    a: "Yes. Every student receives a TechSpire certificate after completing the course and passing a practical final assessment. Certificates list the skills and projects completed, which helps in interviews.",
  },
  {
    q: "Are practical projects included?",
    a: "Yes — every course includes real, hands-on projects. Students build websites, applications, designs and automation workflows that they keep as a portfolio. We believe skills are proven by doing, not just notes.",
  },
  {
    q: "What are the class timings?",
    a: "We run morning, afternoon and evening batches from Monday to Saturday, plus weekend batches for school students and working professionals. Our counsellor will help you find a slot that fits your routine.",
  },
  {
    q: "Do you provide career guidance?",
    a: "Yes, career counselling is built into every course at no extra cost. We guide students on job opportunities, freelancing, internships and higher studies based on their course and interests.",
  },
  {
    q: "How can I enquire about admission?",
    a: "Simply tap the WhatsApp button on this page or call us at +91 98765 43210. Our counsellor will answer your questions, suggest the right course and book a free demo class for you.",
  },
  {
    q: "Is there a demo class?",
    a: "Yes — we offer a free, no-obligation demo class for every course. Attend a real session, meet the mentor, see the lab and then decide. No advance payment is required to book a demo.",
  },
  {
    q: "What are the fees?",
    a: "Fees depend on the course and duration, and easy installment options are available. We keep pricing transparent and student-friendly — message us on WhatsApp and we'll share the complete fee structure immediately.",
  },
];

/* ---------------------------------- gallery ------------------------------------------------ */
export const GALLERY_CATEGORIES = [
  "All",
  "Classroom",
  "Students",
  "Workshops",
  "Projects",
  "Events",
  "Certification",
  "Computer Lab",
] as const;

export interface GalleryItem {
  src: string;
  alt: string;
  category: (typeof GALLERY_CATEGORIES)[number];
  caption: string;
  ratio: string;
}

export const GALLERY: GalleryItem[] = [
  {
    src: "https://images.pexels.com/photos/5530478/pexels-photo-5530478.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Students focused on computer screens in the main classroom",
    category: "Classroom",
    caption: "Main classroom — concept sessions in progress",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Mentor presenting to a small student group",
    category: "Workshops",
    caption: "Weekend web-design workshop",
    ratio: "aspect-[16/10]",
  },
  {
    src: "https://images.pexels.com/photos/5539293/pexels-photo-5539293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Group of students learning in the computer lab",
    category: "Computer Lab",
    caption: "Computer lab — one student, one system",
    ratio: "aspect-square",
  },
  {
    src: "https://images.pexels.com/photos/31772913/pexels-photo-31772913.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Students receiving certificates and medals",
    category: "Certification",
    caption: "Annual certification ceremony",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/5544357/pexels-photo-5544357.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Two students working together on a project",
    category: "Students",
    caption: "Peer learning during project lab",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.pexels.com/photos/29627312/pexels-photo-29627312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Technology tools workshop in session",
    category: "Workshops",
    caption: "AI tools workshop for students",
    ratio: "aspect-[16/10]",
  },
  {
    src: "https://images.pexels.com/photos/9158772/pexels-photo-9158772.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Student deeply focused on a computer task",
    category: "Students",
    caption: "Deep focus — daily practice hours",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Guest lecture event with students attending",
    category: "Events",
    caption: "Tech career awareness event",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.pexels.com/photos/5530515/pexels-photo-5530515.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Bright computer lab with students studying",
    category: "Computer Lab",
    caption: "Our bright, air-conditioned lab",
    ratio: "aspect-square",
  },
  {
    src: "https://images.pexels.com/photos/21766320/pexels-photo-21766320.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Students proudly holding diplomas",
    category: "Certification",
    caption: "Proud certificate holders",
    ratio: "aspect-[16/10]",
  },
  {
    src: "https://images.pexels.com/photos/5539285/pexels-photo-5539285.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Students collaborating on computers during project work",
    category: "Projects",
    caption: "Team project sprint — final module",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.pexels.com/photos/37673294/pexels-photo-37673294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Mentor teaching at the whiteboard",
    category: "Classroom",
    caption: "Whiteboard logic-building session",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/9829306/pexels-photo-9829306.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Graduate holding certificate proudly",
    category: "Certification",
    caption: "Certified and career-ready",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/18999277/pexels-photo-18999277.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Student presenting project on a large screen",
    category: "Projects",
    caption: "Final project presentation day",
    ratio: "aspect-[4/3]",
  },
];

/* ---------------------------------- batches ------------------------------------------------ */
export const BATCHES = ["Morning (8–11 AM)", "Afternoon (12–4 PM)", "Evening (5–8 PM)", "Weekend (Sat–Sun)"];
