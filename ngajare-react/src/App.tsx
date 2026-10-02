import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './site.css';
import BackgroundCanvas from './BackgroundCanvas';
import confetti from 'canvas-confetti';
import Hero from './components/Hero';
import { About, Awards, Education, Experience, Projects, Publications, Skills } from './components/Sections';
import { contact } from './data/resume';

const NAV = ['about', 'experience', 'education', 'awards', 'projects', 'publications', 'skills'];

function App() {
  return (
    <>
      <BackgroundCanvas />
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a href={contact.resume} className="resume-icon" target="_blank" rel="noopener noreferrer" title="Resume">
          <img className="top-resume" src="folder-open-f.svg" width="50px" height="50px" style={{ filter: 'brightness(0) invert(1)' }} alt="Resume" />
        </a>
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none" role="button">Neel Gajare</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2 button"
              role="button"
              src="profilepic2-crop.jpg"
              alt="Profile"
              onClick={(e) => {
                const rect = (e.target as HTMLImageElement).getBoundingClientRect();
                const x = (rect.left + rect.right) / 2 / window.innerWidth;
                const y = (rect.top + rect.bottom) / 2 / window.innerHeight;
                confetti({
                  particleCount: 100,
                  spread: 70,
                  origin: { x, y },
                  colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'],
                  startVelocity: 30,
                  gravity: 0.5,
                  scalar: 0.7,
                  zIndex: 9999
                });
              }}
            />
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {NAV.map(id => (
              <li className="nav-item" key={id}>
                <a className="nav-link js-scroll-trigger" href={`#${id}`}>{id}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className="site-main">
        <Hero />
        <div className="container-fluid p-0">
          <About />
          <Experience />
          <Education />
          <Awards />
          <Projects />
          <Publications />
          <Skills />
          <footer className="site-footer">
            © {new Date().getFullYear()} Neel Gajare
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
