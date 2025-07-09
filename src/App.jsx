import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import PointCloudBackground from './components/PointCloudBackground'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // 스크롤된 상태 감지
      setIsScrolled(currentScrollY > 50)
      
      // 모바일에서 스크롤 방향에 따라 네비게이션 표시/숨김
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // 아래로 스크롤 - 네비게이션 숨김
          setShowNav(false)
          setIsMenuOpen(false) // 메뉴도 닫기
        } else {
          // 위로 스크롤 - 네비게이션 표시
          setShowNav(true)
        }
      } else {
        setShowNav(true) // 데스크톱에서는 항상 표시
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false) // 메뉴 선택 후 모바일 메뉴 닫기
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''} ${showNav ? 'visible' : 'hidden'}`}>
        <div className="nav-brand">LEE GEON HEE</div>
        
        {/* 데스크톱 네비게이션 */}
        <div className="nav-links desktop-nav">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>

        {/* 모바일 햄버거 메뉴 버튼 */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* 모바일 드롭다운 메뉴 */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
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
