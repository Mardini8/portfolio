import { useState } from 'react'
import { motion } from 'framer-motion'
import SplitText from './components/SplitText'
import BlurText from './components/BlurText'
import AnimatedList from './components/AnimatedList'
import Magnet from './components/Magnet'
import CVModal from './components/CVModal'
import cvPdf from './assets/Christian_Mardini_Resume.pdf'

const projects = [
  {
    title: 'Healthcare Journal System',
    type: 'Microservices',
    body: 'A full-stack journal system where doctors diagnose patients, exchange messages, and upload medical images. Patients access their records and respond securely. Built with a microservice architecture for scalability and security.',
    tags: ['Spring Boot', 'Quarkus', 'Node.js', 'React', 'Kubernetes', 'Apache Kafka', 'MySQL', 'Keycloak'],
  },
  {
    title: 'Inventory & Invoicing Platform',
    type: 'Full-Stack Web',
    body: 'A web application for a food wholesale company to manage warehouse inventory, track stock levels, and create invoices. Full CRUD operations with a clean, user-friendly UI.',
    tags: ['Java', 'React', 'Docker', 'Keycloak', 'MariaDB'],
  },
  {
    title: 'Real-Time Auction',
    type: 'ASP.NET',
    body: 'A lightweight auction platform where users list items, place bids, and track auctions in real time. Built around clean architecture and a responsive UI to practice modern .NET development patterns.',
    tags: ['C#', 'ASP.NET', 'React', 'MySQL'],
  },
  {
    title: 'Mobile App Collection',
    type: 'Android / Flutter',
    body: 'Several native and cross-platform mobile apps: Movie-Matcher, an N-Back memory game, a Weather app, and a Bluetooth utility. Covers Android SDK, Firebase integration, and Flutter.',
    tags: ['Kotlin', 'Android SDK', 'Flutter', 'Dart', 'Firebase'],
  },
]

const timeline = [
  { year: '2026 – Now', title: "Bachelor's Thesis, Pure Consulting Group AB", org: 'Researching AI-driven document adaptation in consultancy workflows: how prompting and preprocessing affect output quality and efficiency.' },
  { year: '2023 – Now', title: 'BSc Engineering, Computer Science', org: 'KTH Royal Institute of Technology · 180 ECTS' },
  { year: '2024', title: 'Warehouse Associate / Logistics Coordinator', org: 'Simplex Logistik Sverige AB · Södertälje' },
  { year: '2020 – 2023', title: 'BSc Logistics and Economics', org: 'Södertörn University · 180 ECTS' },
  { year: '2019 – 2020', title: 'Goods Receiver / Forklift Operator', org: 'Bergendahls Food AB · Botkyrka' },
  { year: '2018 – 2019', title: 'Construction Logistics Coordinator', org: 'Uniccon AB · Huddinge' },
]

const skills = [
  { cat: 'Languages', items: ['Java', 'C#', 'Python', 'C', 'JavaScript', 'SQL', 'Kotlin', 'Dart', 'MATLAB', 'HTML', 'CSS'] },
  { cat: 'Web & Mobile', items: ['ASP.NET Core', 'Spring Boot', 'Quarkus', 'Node.js', 'React', 'REST APIs', 'Razor Pages', 'Keycloak', 'Firebase', 'Flutter', 'Android SDK'] },
  { cat: 'DevOps', items: ['Docker', 'Kubernetes', 'Git', 'Apache Kafka', 'Postman'] },
  { cat: 'Spoken', items: ['Swedish, Native', 'English, Fluent'] },
]

export default function App() {
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <>
      <nav>
        <div className="nav-inner">
          <div className="logo">Christian Mardini</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button className="nav-cv-btn" onClick={() => setCvOpen(true)}>
                View CV
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="wrap">

        {/* HERO */}
        <section className="hero">
          <h1>
            <SplitText text="Computer Science student" />
            <br />
            <em>
              <SplitText text="building thoughtful software." delay={0.3} />
            </em>
          </h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            I am Christian, a BSc Engineering student at KTH Royal Institute of Technology in Stockholm.
            I work across the stack, from microservice backends to native Android, and I am currently
            writing my bachelor&apos;s thesis on AI-driven document workflows.
          </motion.p>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <span><span className="dot" /> Open to opportunities</span>
            <span>📍 Stockholm, Sweden</span>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <Magnet>
              <button className="btn-primary" onClick={() => setCvOpen(true)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                View my CV
              </button>
            </Magnet>
            <Magnet>
              <a href="#projects" className="btn-secondary">See projects</a>
            </Magnet>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <BlurText className="sec-title">About</BlurText>
          <BlurText delay={0.1}>
            <p className="about-text">
              I am in my final stretch of a BSc in Computer Science at KTH, with a previous background in
              Logistics and Economics from Södertörn University. My academic projects have given me a
              solid foundation in programming, web development, databases, and software architecture.
            </p>
          </BlurText>
          <BlurText delay={0.2}>
            <p className="about-text">
              I have shipped full-stack web apps with ASP.NET, Spring Boot, Quarkus, Node.js, and React,
              and mobile applications with Flutter and Kotlin. I enjoy working across the stack and
              especially like the moments where architecture decisions make a real difference.
            </p>
          </BlurText>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <BlurText className="sec-title">Selected Projects</BlurText>
          <AnimatedList className="projects" stagger={0.12}>
            {projects.map((p) => (
              <article key={p.title} className="proj">
                <div className="proj-head">
                  <h3>{p.title}</h3>
                  <span className="proj-type">{p.type}</span>
                </div>
                <p>{p.body}</p>
                <div className="tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </article>
            ))}
          </AnimatedList>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <BlurText className="sec-title">Experience &amp; Education</BlurText>
          <AnimatedList className="timeline" stagger={0.08}>
            {timeline.map((t, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-content">
                  <h3>{t.title}</h3>
                  <div className="org">{t.org}</div>
                </div>
              </div>
            ))}
          </AnimatedList>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <BlurText className="sec-title">Skills</BlurText>
          <div className="skill-grid">
            {skills.map((group, idx) => (
              <BlurText key={group.cat} delay={idx * 0.08} className="skill-row-wrap">
                <div className="skill-cat">{group.cat}</div>
                <div className={`skill-row skill-tint-${idx}`}>
                  <div className="tags">
                    {group.items.map((s) => <span key={s} className="tag">{s}</span>)}
                  </div>
                </div>
              </BlurText>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <BlurText className="sec-title">Contact</BlurText>
          <BlurText delay={0.1}>
            <div className="contact-card">
              <h3>Let&apos;s <em>get in touch.</em></h3>
              <p>Looking for a thesis collaboration, internship, or junior dev role. Happy to chat about any of it.</p>
              <div className="contact-links">
                <Magnet>
                  <a href="mailto:christian.mardini8@gmail.com" className="primary">✉ Email me</a>
                </Magnet>
                <Magnet>
                  <button className="contact-link-btn" onClick={() => setCvOpen(true)}>📄 View CV</button>
                </Magnet>
                <Magnet>
                  <a href="https://github.com/Mardini8" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Magnet>
                <Magnet>
                  <a href="https://linkedin.com/in/christianmardini" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Magnet>
                <Magnet>
                  <a href="tel:+46767045162">+46 76 704 51 62</a>
                </Magnet>
              </div>
            </div>
          </BlurText>
        </section>

      </main>

      <footer>
        © 2026 Christian Mardini · Stockholm
      </footer>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} pdfUrl={cvPdf} />
    </>
  )
}
