export default function Header() {
  return (
    <header className="header">
      <div className="hero-info">
        <h1 className="hero-title">이건희</h1>
        <h2 className="hero-title-en">LEE GEON HEE</h2>
        <p className="hero-role">Master's in Information Systems, Kwangwoon University, 2019</p>
        <p className="hero-contact">📞 +82 01 5093 1985</p>
        <div className="hero-links">
          <a
            href="https://www.linkedin.com/in/geonhee-lee-092725186/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            <span>LinkedIn 프로필</span>
          </a>
          <a
            href="https://github.com/rjsgml5698?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-github"
          >
            <span>GitHub 프로필</span>
          </a>
        </div>
      </div>
    </header>
  )
}
