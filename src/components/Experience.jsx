import experiences from '../data/experiences'

export default function Experience() {
  return (
    <div className="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, idx) => (
          <div key={idx} className="exp-item">
            <h3>{exp.position} @ {exp.company}</h3>
            <span>{exp.period}</span>
            <ul>
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
