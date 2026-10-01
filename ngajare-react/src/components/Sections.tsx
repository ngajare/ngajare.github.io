import { useEffect, useRef, type ReactNode } from 'react';
import SpotlightCard from '../blocks/Components/SpotlightCard/SpotlightCard';
import '../blocks/Components/SpotlightCard/SpotlightCard.css';
import { agu, awards, contact, education, experience, projects, skills } from '../data/resume';

// Fades children up as they scroll into view.
function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Section({ id, title, eyebrow, children }: { id: string; title: string; eyebrow: string; children: ReactNode }) {
  return (
    <section className="resume-section" id={id}>
      <div className="resume-section-content">
        <Reveal>
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="section-title">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

const Tags = ({ items }: { items: string[] }) => (
  <div className="tags">{items.map(t => <span key={t} className="tag">{t}</span>)}</div>
);

export function About() {
  return (
    <Section id="about" title="About Me" eyebrow="01 — hello">
      <Reveal className="about-grid">
        <div>
          <p className="lead-text">
            I’m an EECS student at <strong>UC Berkeley</strong> (graduating Dec 2026) working on ML systems.
          </p>
          <p>
            Right now I’m researching LLM-driven kernel optimization with Professor Alvin Cheung in the Sky Computing Lab.
            This past summer I was an ML intern at Apple working on physical design for Apple silicon, and before that I
            hunted agentic bots as a SWE intern at Amazon.
          </p>
          <p className="muted">P.S. The flying LeBrons are load-bearing. Try moving your mouse.</p>
        </div>
        <div className="about-links">
          <a href={`mailto:${contact.email}`}><i className="fas fa-envelope" /><span>{contact.email}</span></a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /><span>in/neel-gajare</span></a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /><span>@ngajare</span></a>
          <a href={contact.resume} target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf" /><span>Resume (PDF)</span></a>
        </div>
      </Reveal>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience" eyebrow="02 — where I’ve worked">
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.org} className="timeline-item" delay={i * 60}>
            <div className="timeline-dot"><i className={job.logo} /></div>
            <SpotlightCard className="card-x" spotlightColor="rgba(189, 93, 56, 0.18)">
              <div className="card-head">
                <div>
                  <h3 className="card-title">{job.role}</h3>
                  {job.orgUrl ? (
                    <a className="card-org" href={job.orgUrl} target="_blank" rel="noopener noreferrer">
                      {job.org} <i className="fas fa-arrow-right" />
                    </a>
                  ) : (
                    <div className="card-org">{job.org}</div>
                  )}
                </div>
                <div className="card-meta">
                  <span className="date-pill">{job.dates}</span>
                  <span className="loc"><i className="fas fa-map-marker-alt" /> {job.location}</span>
                </div>
              </div>
              <ul className="bullets">
                {job.bullets.map(b => <li key={b}>{b}</li>)}
                {job.org.startsWith('Crustal') && (
                  <li>
                    Read the <a href={agu.abstract} target="_blank" rel="noopener noreferrer">abstract</a> or see the{' '}
                    <a href={agu.poster} target="_blank" rel="noopener noreferrer">poster</a>.
                  </li>
                )}
              </ul>
              <Tags items={job.tags} />
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education" eyebrow="03 — go bears">
      <Reveal>
        <SpotlightCard className="card-x edu-card" spotlightColor="rgba(23, 162, 184, 0.18)">
          <div className="card-head">
            <div>
              <a href={education.url} target="_blank" rel="noopener noreferrer">
                <h3 className="card-title">{education.school}</h3>
              </a>
              <div className="card-org static">{education.degree}</div>
            </div>
            <div className="card-meta">
              <span className="date-pill">Graduating {education.grad}</span>
              <span className="loc"><i className="fas fa-map-marker-alt" /> {education.location}</span>
            </div>
          </div>
          <div className="gpa-ring" style={{ ['--pct' as string]: `${(Number(education.gpa) / 4) * 100}` }}>
            <div><strong>{education.gpa}</strong><span>GPA</span></div>
          </div>
          <h4 className="mini-heading">Relevant coursework</h4>
          <Tags items={education.coursework} />
          <h4 className="mini-heading">Societies</h4>
          <Tags items={education.societies} />
        </SpotlightCard>
      </Reveal>
    </Section>
  );
}

export function Awards() {
  return (
    <Section id="awards" title="Awards" eyebrow="04 — hardware (the shiny kind)">
      <div className="award-grid">
        {awards.map((a, i) => {
          const body = (
            <>
              <div className="award-icon"><i className={a.icon} /></div>
              <div className="award-title">{a.title}</div>
              <div className="award-date">{a.date}{a.url && <> · <span className="link-hint">read more</span></>}</div>
            </>
          );
          return (
            <Reveal key={a.title} delay={i * 90}>
              {a.url ? (
                <a className="award" href={a.url} target="_blank" rel="noopener noreferrer">{body}</a>
              ) : (
                <div className="award">{body}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="05 — things I’ve built">
      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <SpotlightCard className="card-x project-card" spotlightColor="rgba(23, 162, 184, 0.2)">
              <div className="project-top">
                <span className="project-highlight">{p.highlight}</span>
                <span className="date-pill">{p.dates}</span>
              </div>
              <h3 className="card-title">{p.name}</h3>
              <Tags items={p.stack} />
              <ul className="bullets">{p.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="06 — toolbox">
      <div className="skill-groups">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} className="skill-group" delay={i * 60}>
            <h4 className="mini-heading">{group}</h4>
            <Tags items={items} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
