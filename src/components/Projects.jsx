import projects from '../data/projects'

// Import all project images
import pmcsImg from '../assets/pmcs.png'
import biosightImg from '../assets/biosight.png'
import roboMrImg from '../assets/robo-mr.png'
import jad02kImg from '../assets/jad-02k.png'
import jdp01kImg from '../assets/jdp-01k.png'

// Create image mapping
const imageMap = {
  1: pmcsImg,
  2: biosightImg,
  3: roboMrImg,
  4: jad02kImg,
  5: jdp01kImg
}

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img 
                src={imageMap[project.id]}
                alt={project.title} 
                style={{
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #ddd'
                }}
              />
              <div className="project-period">{project.period}</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.slice(0, 3).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
