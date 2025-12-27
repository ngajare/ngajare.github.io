import './index.css';
import BackgroundCanvas from './BackgroundCanvas';
import ProfileCard from './ProfileCard';
import confetti from 'canvas-confetti';

function App() {
  return (
    <>
      <BackgroundCanvas />
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a href="resume.pdf" className="resume-icon" target="_blank" rel="noopener noreferrer">
          <img className="top-resume" src="folder-open-f.svg" width="50px" height="50px" style={{ filter: 'brightness(0) invert(1)' }} alt="Resume" />
        </a>
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none" role="button">Neel Gajare</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2 button"
              role="button"
              src="profilepic.jpg"
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
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
          </ul>
        </div>
      </nav>
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ProfileCard
          name="Neel Gajare"
          title="Software Engineer"
          handle="ngajare"
          status="Online"
          contactText="Contact Me"
          avatarUrl="../profilepic2.png"
          grainUrl='../grain.png'
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log('Contact clicked')}
        />
      </div>
      <div className="container-fluid p-0">
        {/* About Me Section */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h2 className="mb-5">About Me</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <span className="about-img"><img src="about1.jpg" alt="About Image 1" /></span>
                <span className="about-img"><img src="about2.jpg" alt="About Image 2" /></span>
                <span className="about-img"><img src="about3.jpg" alt="About Image 3" /></span>
                <span className="about-img"><img src="about4.jpg" alt="About Image 4" /></span>
                <span className="about-img"><img src="about5.jpg" alt="About Image 5" /></span>
                <span className="about-img"><img src="about6.jpg" alt="About Image 6" /></span>
              </div>
            </div>
          </div>
        </section>
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Berkeley AI Research Intern</h3>
                <span>
                  <a href="https://bair.berkeley.edu/" target="_blank" rel="noopener noreferrer">
                    <div className="subheading mb-3" style={{ color: '#17a2b8' }}>
                      Berkeley Artificial Intelligence Research Lab <i className="fa fa-link"></i>
                    </div>
                  </a>
                </span>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">December 2023 - Present</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Stanford Research Intern</h3>
                <a href="https://pangea.stanford.edu/research/CDFM/paul/" className="mb-3" target="_blank" rel="noopener noreferrer" style={{ color: '#17a2b8' }}>
                  <div className="subheading mb-3">Crustal Deformation Lab, Stanford School of Sustainability <i className="fa fa-link"></i></div>
                </a>
                <p>
                  Interning in Stanford’s Crustal Deformation Lab under Dr. Paul Segall. Researched complex magma chamber geometries using Matlab and AI. 1st Author of <a href="https://agu.confex.com/agu/fm22/meetingapp.cgi/Paper/1069186" style={{ color: '#17a2b8' }}>abstract</a> <i className="fa fa-link" style={{ color: '#17a2b8', fontSize: '80%' }}></i> published in AGU proceedings, 
                  <a href="https://agu2022fallmeeting-agu.ipostersessions.com/default.aspx?s=09-E0-A3-22-69-19-B2-32-BA-E1-8A-22-20-10-77-6E" style={{ color: '#17a2b8' }}>presented</a> <i className="fa fa-link" style={{ color: '#17a2b8', fontSize: '80%' }}></i> in AGU Fall Meeting. Preliminary research alludes to discrepancy b/w simpler geodetically-derived geometries and conceptual models of collapsing magma chambers.
                </p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">May 2022 - Present</span></div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <a href="https://eecs.berkeley.edu/" target="_blank" rel="noopener noreferrer"><h3 className="mb-0" style={{ color: '#17a2b8' }}>University of California, Berkeley</h3></a>
                <div className="subheading mb-3">Bachelor of Science</div>
                <div>Electrical Engineering &amp; Computer Science</div>
                <p></p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">Graduation: May 2026</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <a href="https://mitty.com" target="_blank" rel="noopener noreferrer"><h3 className="mb-0" style={{ color: '#17a2b8' }}>Archbishop Mitty High School</h3></a>
                <div className="subheading mb-3"></div>
                <p>GPA: 3.99/4.0 unweighted, 4.63 weighted</p>
                <p>Activities: Chess Club President, Computer Science Club, FRC Robotics, Science Bowl, Business Club</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">August 2019 - May 2023</span></div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Awards</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <a href="https://patch.com/california/cupertino/3-cupertino-students-receives-2023-natl-merit-scholarships" target="_blank" rel="noopener noreferrer">
                  <h3 className="mb-0" style={{ color: '#17a2b8' }}>NVIDIA National Merit Scholarship <i className="fa fa-link" style={{ fontSize: '80%' }}></i></h3>
                </a>
                <p>Received scholarship from NVIDIA and signed letter from CEO Jensen Huang for performance on PSAT.</p>
              </div>
            </div>
            <h2 style={{ color: 'green' }}>still in progress</h2>
          </div>
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="projects">
          <div className="resume-section-content">
            <h2 className="mb-5">Projects</h2>
            <p>Projects section coming soon...</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
