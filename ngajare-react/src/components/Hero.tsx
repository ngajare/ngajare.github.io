import { useEffect, useState } from 'react';
import DecryptedText from '../blocks/TextAnimations/DecryptedText/DecryptedText';
import { contact } from '../data/resume';

const ROTATING = [
  'AI agents for Apple silicon',
  'LLM-tuned TPU kernels',
  'RISC-V CPUs on FPGAs',
  'bot detection at Amazon scale',
];

const TERMINAL: { cmd: string; out: string[] }[] = [
  { cmd: 'whoami', out: ['neel — EECS @ UC Berkeley, class of Dec 2026'] },
  {
    cmd: 'cat research.txt',
    out: ['LLM-guided kernel search on TPU v6', '→ 1.4–3× faster than expert-tuned schedules'],
  },
  {
    cmd: 'git log --oneline experience',
    out: ['a7f3e21 ML Intern @ Apple', '4c9b0d8 SWE Intern @ Amazon', '1e5a6f2 AI Researcher @ BAIR + Sky Lab'],
  },
  { cmd: 'ls trophies/', out: ['apple_fpga_contest_1st.txt  nvidia_merit_scholar.txt'] },
];

// Flattened transcript: commands get "typed", output lines appear instantly.
const LINES = TERMINAL.flatMap(({ cmd, out }) => [
  { text: cmd, prompt: true },
  ...out.map(text => ({ text, prompt: false })),
]);

function Typewriter() {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (line >= LINES.length) return;
    const current = LINES[line];
    if (!current.prompt || chars >= current.text.length) {
      const t = setTimeout(() => { setLine(l => l + 1); setChars(0); }, current.prompt ? 350 : 220);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setChars(c => c + 1), 38 + Math.random() * 50);
    return () => clearTimeout(t);
  }, [line, chars]);

  const done = line >= LINES.length;
  // Completed lines, plus the command currently being typed.
  const visible = LINES.slice(0, line).map(l => ({ ...l, typing: false }));
  if (!done && LINES[line].prompt) visible.push({ ...LINES[line], text: LINES[line].text.slice(0, chars), typing: true });
  if (done) visible.push({ text: '', prompt: true, typing: true });

  return (
    <div className="terminal" aria-label="About Neel, terminal style">
      <div className="terminal-bar">
        <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
        <span className="terminal-title">neel@berkeley: ~</span>
      </div>
      <pre className="terminal-body">
        {visible.map((l, i) => (
          <div key={i} className={l.prompt ? 'term-cmd' : 'term-out'}>
            {l.prompt && <span className="term-prompt">❯ </span>}
            {l.text}
            {l.typing && <span className="caret" />}
          </div>
        ))}
      </pre>
    </div>
  );
}

function Rotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(n => (n + 1) % ROTATING.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="rotate-pill" aria-live="polite">
      <span key={i} className="rotate-word">{ROTATING[i]}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="page-top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="pulse" /> EECS @ UC Berkeley · AI × Hardware</div>
          <h1 className="hero-name">
            <DecryptedText
              text="NEEL GAJARE"
              animateOn="view"
              sequential
              revealDirection="start"
              speed={45}
              characters="01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&"
              className="hero-name-revealed"
              encryptedClassName="hero-name-encrypted"
            />
          </h1>
          <div className="hero-rotate">
            <span>I build</span>
            <Rotator />
          </div>
          <p className="hero-sub">
            Researcher at Berkeley’s Sky Computing Lab & BAIR, previously ML at Apple and SWE at Amazon.
            I like making models faster and the chips that run them smarter.
          </p>
          <div className="hero-ctas">
            <a className="btn-glow" href={contact.resume} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-file-alt" /> Resume
            </a>
            <a className="btn-ghost" href={`mailto:${contact.email}`}><i className="fas fa-envelope" /> Email</a>
            <a className="icon-btn" href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="icon-btn" href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
        <Typewriter />
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about"><span /></a>
    </header>
  );
}
