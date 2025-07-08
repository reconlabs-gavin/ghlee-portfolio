import skills from '../data/skills'

export default function Skills() {
  return (
    <div className="skills">
      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
      </ul>
    </div>
  )
}
