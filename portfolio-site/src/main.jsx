import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownToLine,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Send,
  Sparkles,
  Star,
  Sun,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";

const PROFILE = {
  name: "Mangesh Lolage",
  email: "lolagemangesh2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/mangesh-lolage/",
  github: "https://github.com/lolagemangesh2003-hub",
  whatsapp: "https://wa.me/917822893165",
  resume: "/resume.pdf",
};

const fresherProjects = [
  {
    title: "Job Application Tracker",
    type: "MERN Project",
    description:
      "A focused dashboard for tracking applications, interview stages, follow-ups and job-search progress.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Application pipeline",
      "Status tracking",
      "Dashboard analytics",
    ],
    github: "https://github.com/lolagemangesh2003-hub/Freelance-Dome-Portfolio",
    demo: "https://job-application-tracker-flax-psi.vercel.app/",
  },
  {
    title: "Resort Website Demo",
    type: "Concept Project",
    description:
      "A conversion-focused resort experience with rooms, amenities, gallery, enquiry CTA and responsive layouts.",
    tags: ["React", "CSS", "JavaScript"],
    features: ["Responsive UI", "Booking CTA", "Modern gallery"],
    github: "https://github.com/lolagemangesh2003-hub",
    demo: "https://amorae-resort-client-demo-v2.vercel.app/",
  }
];

const services = [
  {
    icon: Layers3,
    title: "Business Websites",
    text: "Professional websites designed around your business goals, audience and conversion path.",
  },
  {
    icon: Sparkles,
    title: "Restaurant & Resort Websites",
    text: "Visual, mobile-first experiences for hospitality businesses, menus, rooms, galleries and enquiries.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    text: "MERN-powered applications for workflows, dashboards, portals and internal business tools.",
  },
  {
    icon: Zap,
    title: "Landing Pages & Redesigns",
    text: "Sharper layouts, clearer calls-to-action and responsive interfaces for existing or new brands.",
  },
];

const freelancerWork = [
  {
    title: "Resort Website Experience",
    label: "Concept Demo",
    problem:
      "The business needs a premium online presence that makes rooms and amenities easy to explore.",
    solution:
      "A polished responsive resort site with strong visual hierarchy, gallery sections and enquiry-focused CTAs.",
    tags: ["React", "CSS", "Responsive UI"],
  },
  {
    title: "Business Landing Page",
    label: "Concept Demo",
    problem:
      "Visitors need to understand the offer quickly and know exactly how to get in touch.",
    solution:
      "A conversion-oriented landing page with service blocks, trust signals and a direct contact journey.",
    tags: ["HTML", "CSS", "JavaScript"],
  }
];

function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("portfolio-mode") || "fresher",
  );
  const [dark, setDark] = useState(
    () => localStorage.getItem("portfolio-theme") !== "light",
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("portfolio-mode", mode);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [mode]);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  const isFresher = mode === "fresher";

  const navItems = useMemo(
    () =>
      isFresher
        ? [
            ["home", "Home"],
            ["about", "About"],
            ["projects", "Projects"],
            ["skills", "Skills"],
            ["experience", "Experience"],
            ["contact", "Contact"],
          ]
        : [
            ["home", "Home"],
            ["about", "About"],
            ["projects", "Work"],
            ["process", "Process"],
            ["services", "Services"],
            ["contact", "Contact"],
          ],
    [isFresher],
  );

  const go = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`app ${isFresher ? "mode-fresher" : "mode-freelancer"}`}>
      <Header
        mode={mode}
        setMode={setMode}
        dark={dark}
        setDark={setDark}
        navItems={navItems}
        go={go}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main>
        {isFresher ? <FresherPage go={go} /> : <FreelancerPage go={go} />}
      </main>

      <Footer mode={mode} />
    </div>
  );
}

function Header({
  mode,
  setMode,
  dark,
  setDark,
  navItems,
  go,
  mobileOpen,
  setMobileOpen,
}) {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <button
          className="brand"
          onClick={() => go("home")}
          aria-label="Go to home"
        >
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            <strong>Mangesh Lolage</strong>
            <small>
              {mode === "fresher"
                ? "Developer | Learner | Dreamer"
                : "Web Developer | Freelancer"}
            </small>
          </span>
        </button>

        <div
          className="mode-switcher"
          role="tablist"
          aria-label="Portfolio mode"
        >
          <button
            className={mode === "fresher" ? "active" : ""}
            onClick={() => setMode("fresher")}
            role="tab"
            aria-selected={mode === "fresher"}
          >
            <GraduationCap size={16} /> Fresher
          </button>
          <button
            className={mode === "freelancer" ? "active freelancer" : ""}
            onClick={() => setMode("freelancer")}
            role="tab"
            aria-selected={mode === "freelancer"}
          >
            <BriefcaseBusiness size={16} /> Freelancer
          </button>
        </div>

        <nav className={`desktop-nav ${mobileOpen ? "open" : ""}`}>
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <button onClick={() => setDark((v) => !v)} aria-label="Toggle theme">
            {dark ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="menu-button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open navigation"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ go, freelancer = false }) {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <Sparkles size={14} />{" "}
            {freelancer
              ? "Freelance Web Developer"
              : "Aspiring Software Developer"}
          </span>
          <h1>
            {freelancer ? (
              <>
                I turn ideas into <span>functional digital experiences.</span>
              </>
            ) : (
              <>
                Building my future, <span>one project at a time.</span>
              </>
            )}
          </h1>
          <p>
            {freelancer
              ? "I build responsive websites and web applications designed around your business needs, with a focus on usability, performance and maintainability."
              : "I'm a passionate developer, constantly learning and building useful web applications. I love turning ideas into real-world solutions using modern technologies."}
          </p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => go("projects")}>
              {freelancer ? "View My Work" : "Explore My Projects"}{" "}
              <ArrowRight size={17} />
            </button>
            <button className="secondary-btn" onClick={() => go("contact")}>
              {freelancer ? "Let's Discuss Your Project" : "Download Resume"}{" "}
              {freelancer ? (
                <MessageCircle size={17} />
              ) : (
                <ArrowDownToLine size={17} />
              )}
            </button>
          </div>
          <Socials />
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-a"></div>
          <div className="orbit orbit-b"></div>
          <div className="profile-ring">
            <img src="/profile.jpg" alt="Mangesh Lolage" />
          </div>
          <span className="orbit-dot dot-one"></span>
          <span className="orbit-dot dot-two"></span>
          <CodeCard freelancer={freelancer} />
        </div>
      </div>

      <div className="stat-strip">
        {(freelancer
          ? [
              ["Web Development", "Responsive & Modern Websites"],
              ["Web Applications", "Scalable & Performance Focused"],
              ["UI/UX Integration", "Clean & User Friendly"],
              ["Ongoing Support", "Maintenance & Updates"],
            ]
          : [
              ["College Projects", "1+"],
              ["Technologies", "10+"],
              ["Learning Journey", "Ongoing"],
              ["Years of Experience", "0.6+"],
            ]
        ).map(([title, value], i) => (
          <div className="stat" key={title}>
            <span className="stat-icon">
              {[Code2, Layers3, GraduationCap, Star][i]
                ? React.createElement(
                    [Code2, Layers3, GraduationCap, Star][i],
                    { size: 19 },
                  )
                : null}
            </span>
            <div>
              <strong>{title}</strong>
              <small>{value}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CodeCard({ freelancer }) {
  return freelancer ? (
    <div className="floating-card tech-card">
      <div className="card-title">
        <span></span> Tech Stack
      </div>

      <div className="tech-grid">
        {[
          { name: "React", icon: "⚛" },
          { name: "Node.js", icon: "JS" },
          { name: "Express", icon: "EX" },
          { name: "MongoDB", icon: "DB" },
          { name: "JavaScript", icon: "JS" },
          { name: "HTML", icon: "</>" },
          { name: "CSS", icon: "#" },
          { name: "Git", icon: "◆" },
        ].map((tech) => (
          <div className="tech-item" key={tech.name}>
            <div className="tech-icon">{tech.icon}</div>

            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="floating-card code-card">
      <div className="window-dots">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <pre>{`const developer = {
  name: "Mangesh Lolage",
  role: "Fresher",
  skills: ["React", "Node.js",
    "MongoDB", "JavaScript"],
  goal: "Build a better tomorrow"
};

// Always learning... 🚀`}</pre>
    </div>
  );
}

function Socials() {
  return (
    <div className="socials">
      <a href={PROFILE.github} target="_blank" rel="noreferrer">
        <Github size={19} />
      </a>
      <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
        <Linkedin size={19} />
      </a>
      <a href={`mailto:${PROFILE.email}`}>
        <Mail size={19} />
      </a>
      <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer">
        <MessageCircle size={19} />
      </a>
    </div>
  );
}

function FresherPage({ go }) {
  return (
    <>
      <Hero go={go} />

      <section className="section content-section" id="about">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who enjoys learning by building."
        />
        <div className="two-col">
          <div className="glass-card about-card">
            <span className="mini-label">My background</span>
            <h3>MERN Stack Developer in the making.</h3>
            <p>
              I enjoy turning ideas into practical interfaces and full-stack
              applications. My current focus is strengthening JavaScript, React,
              Node.js, Express and MongoDB through real projects.
            </p>
            <div className="check-list">
              {[
                "Hands-on project building",
                "Responsive UI development",
                "REST API fundamentals",
                "Continuous learning",
              ].map((x) => (
                <span key={x}>
                  <Check size={15} /> {x}
                </span>
              ))}
            </div>
          </div>
          <div className="journey-card">
            <Journey />
          </div>
        </div>
      </section>

      <SkillsSection />

      <section className="section content-section" id="projects">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Projects that show how I learn and build."
        />
        <ProjectGrid projects={fresherProjects} />
      </section>

      <section className="section content-section" id="experience">
        <SectionHeading
          eyebrow="Experience & Learning"
          title="Progress over perfection."
          text="A timeline that gives recruiters context around internships, learning milestones and achievements."
        />
        <div className="timeline">
          <TimelineItem
            year="Current"
            title="Bqarlson Technologies Pvt. Ltd."
            text="Working as a Software Developer Intern on practical web development tasks, improving full-stack fundamentals and collaborating on implementation details."
          />
          <TimelineItem
            year="2025-2026"
            title="AccioJob"
            text="Full-stack MERN Development Trainee."
          />
          <TimelineItem
            year="2021-2025"
            title="Pravara Rural Engineering College Loni."
            text="Completed Bachelor's from Electronics and Computer Engineering."
          />
        </div>
      </section>

      <ContactSection fresher go={go} />
    </>
  );
}

function FreelancerPage({ go }) {
  return (
    <>
      <Hero go={go} freelancer />

      <section className="section content-section" id="services">
        <SectionHeading
          eyebrow="Services"
          title="Web solutions built around business needs."
          text="Clear deliverables, responsive experiences and practical technology choices—not unnecessary complexity."
        />
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <div className="service-icon">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <button onClick={() => go("contact")}>
                Discuss this <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section content-section" id="projects">
        <SectionHeading
          eyebrow="Selected Work / Case Studies"
          title="Concepts that demonstrate what I can deliver."
          text="These are clearly labelled concept/practice projects. Add real client work only when you have permission and genuine client experience."
        />
        <div className="case-grid">
          {freelancerWork.map((item, i) => (
            <article className="case-card" key={item.title}>
              <div className={`case-visual visual-${i + 1}`}>
                <span>{item.label}</span>
                <div className="mock-window">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="case-body">
                <h3>{item.title}</h3>
                <div className="case-block">
                  <b>Need</b>
                  <p>{item.problem}</p>
                </div>
                <div className="case-block">
                  <b>Solution</b>
                  <p>{item.solution}</p>
                </div>
                <div className="tag-row">
                  {item.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <button className="text-btn" onClick={() => go("contact")}>
                  Ask about a similar project <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section content-section" id="process">
        <SectionHeading
          eyebrow="My Working Process"
          title="A straightforward path from idea to launch."
          text="The process keeps requirements, feedback and scope visible from the beginning."
        />
        <div className="process-grid">
          {[
            [
              "01",
              "Understand",
              "Requirements, audience, goals and must-have features.",
            ],
            [
              "02",
              "Plan",
              "Structure the pages, content hierarchy and technical approach.",
            ],
            [
              "03",
              "Design & Develop",
              "Build the responsive interface and functionality.",
            ],
            [
              "04",
              "Test & Refine",
              "Check responsiveness, usability and gather feedback.",
            ],
            [
              "05",
              "Deploy & Handover",
              "Launch the project and explain how to manage it.",
            ],
          ].map(([num, title, text]) => (
            <div className="process-step" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section content-section" id="about">
        <SectionHeading
          eyebrow="Why Work With Me?"
          title="A developer mindset with a business-first approach."
        />
        <div className="trust-grid">
          {[
            "Responsive designs",
            "User-friendly interfaces",
            "Clear communication",
            "Custom solutions",
            "Focus on business needs",
            "Modern, maintainable code",
          ].map((t) => (
            <div className="trust-item" key={t}>
              <Check size={17} /> {t}
            </div>
          ))}
        </div>
      </section>

      <ContactSection freelancer go={go} />
    </>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function SkillsSection() {
  const skills = [
    ["Frontend", ["HTML", "CSS", "JavaScript", "React"]],
    ["Backend", ["Node.js", "Express.js"]],
    ["Database", ["MongoDB"]],
    ["Tools", ["Git", "GitHub", "Postman"]],
  ];
  return (
    <section className="section content-section" id="skills">
      <SectionHeading
        eyebrow="Technical Skills"
        title="The stack I’m building with."
      />
      <div className="skills-grid">
        {skills.map(([title, items]) => (
          <div className="skill-card" key={title}>
            <span className="mini-label">{title}</span>
            <div className="skill-pills">
              {items.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <div className="journey">
      {[
        ["01", "Learn", "Strengthen the MERN fundamentals"],
        ["02", "Build", "Turn concepts into practical projects"],
        ["03", "Improve", "Refine UI, APIs and code quality"],
      ].map(([n, title, text]) => (
        <div className="journey-row" key={n}>
          <span>{n}</span>
          <div>
            <b>{title}</b>
            <small>{text}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((p) => (
        <article className="project-card" key={p.title}>
          <div className="project-top">
            <span>{p.type}</span>
            <Code2 size={20} />
          </div>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <ul>
            {p.features.map((f) => (
              <li key={f}>
                <Check size={14} /> {f}
              </li>
            ))}
          </ul>
          <div className="tag-row">
            {p.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="card-actions">
            <a href="{p.github}" target="_blank" rel="noreferrer">
              GitHub <Github size={15} />
            </a>
            <a href={p.demo}>
              Live Demo <ExternalLink size={15} />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function TimelineItem({ year, title, text }) {
  return (
    <article className="timeline-item">
      <span>{year}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

function ContactSection({ freelancer = false, go }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-shell">
        <div>
          <span className="eyebrow">
            <MessageCircle size={14} />{" "}
            {freelancer ? "Start a conversation" : "Let's connect"}
          </span>
          <h2>
            {freelancer
              ? "Have a project in mind?"
              : "Let’s build something useful."}
          </h2>
          <p>
            {freelancer
              ? "Tell me what you need, what success looks like, and your timeline. I’ll help you shape the right next step."
              : "If you’re hiring a junior developer, have an internship opportunity, or want to discuss a project, I’d love to hear from you."}
          </p>
          <div className="contact-actions">
            <a className="primary-btn" href={`mailto:${PROFILE.email}`}>
              Email Me <Mail size={17} />
            </a>
            {freelancer && (
              <a
                className="secondary-btn"
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp <MessageCircle size={17} />
              </a>
            )}
            {!freelancer && (
              <a className="secondary-btn" href={PROFILE.resume}>
                Download Resume <ArrowDownToLine size={17} />
              </a>
            )}
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "Thanks! Form Submitted!",
            );
          }}
        >
          <div className="form-row">
            <input placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
          </div>
          {freelancer && (
            <div className="form-row">
              <input placeholder="Business name" />
              <select defaultValue="">
                <option value="" disabled>
                  Website type
                </option>
                <option>Business Website</option>
                <option>Restaurant / Resort</option>
                <option>Portfolio</option>
                <option>Landing Page</option>
                <option>Custom Web App</option>
              </select>
            </div>
          )}
          <textarea
            rows="5"
            placeholder={
              freelancer
                ? "Tell me about your project, features, budget and timeline..."
                : "Message"
            }
            required
          />
          <button className="primary-btn" type="submit">
            Send Enquiry <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer({ mode }) {
  return (
    <footer className="footer">
      <div>
        <strong>Mangesh Lolage</strong>
        <span>
          {mode === "fresher"
            ? "MERN Stack Developer"
            : "Freelance Web Developer"}
        </span>
      </div>
      <small>
        © {new Date().getFullYear()} Mangesh Lolage
      </small>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
