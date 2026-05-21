import SectionHeader from './SectionHeader.jsx'

const skills = [
  {
    icon: '⚛️',
    title: 'React.js',
    description: 'Hooks, Context API y componentes modulares con foco en reutilización.',
  },
  {
    icon: '⚡',
    title: 'Vite',
    description: 'Desarrollo rápido, hot reload y optimización de bundling.',
  },
  {
    icon: '🔥',
    title: 'Firebase',
    description: 'Auth, Firestore y hosting para apps con datos en tiempo real.',
  },
  {
    icon: '🌐',
    title: 'HTML5 + CSS3',
    description: 'Diseño responsive con Flexbox, Grid y prácticas modernas.',
  },
  {
    icon: '🧠',
    title: 'JavaScript',
    description: 'ES6+, asincronía y lógica limpia orientada a resultados.',
  },
  {
    icon: '📡',
    title: 'APIs externas',
    description: 'Integración de servicios como OMDb y consumo REST eficiente.',
  },
  {
    icon: '🐙',
    title: 'Git / GitHub',
    description: 'Versionado, deploy y flujo colaborativo para proyectos reales.',
  },
]

export default function Skills() {
  return (
    <section className="section animate-on-scroll skills" id="skills">
      <SectionHeader label="Skills" title="Herramientas y tecnologías" />
      <div className="skill-grid">
        {skills.map(skill => (
          <article key={skill.title} className="skill-card animate-on-scroll">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
