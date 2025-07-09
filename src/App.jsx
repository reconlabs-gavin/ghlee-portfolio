import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import PointCloudBackground from './components/PointCloudBackground'
import './App.css'

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-brand">LEE GEON HEE 이 건 희</div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </nav>

      {/* Sections */}
      <section id="home" className="section hero-section">
        <PointCloudBackground />
        <Header />
      </section>
      
      <div className="section-divider hero-divider"></div>
      
      <section id="about" className="section">
        <About />
      </section>
      
      <div className="section-divider"></div>
      
      <section id="skills" className="section">
        <Skills />
      </section>
      
      <div className="section-divider"></div>
      
      <section id="experience" className="section">
        <Experience />
      </section>
      
      <div className="section-divider"></div>
      
      <section id="projects" className="section">
        <Projects />
      </section>
      
      <div className="section-divider"></div>
      
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  )
}

export default App
