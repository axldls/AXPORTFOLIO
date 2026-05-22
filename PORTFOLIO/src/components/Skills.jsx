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
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="copilot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6ce4ff" />
            <stop offset="100%" stopColor="#0a5fff" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10" fill="url(#copilot-gradient)" />
        <path d="M7.5 12C7.5 8.96 9.96 6.5 13 6.5s5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5-5.5-2.46-5.5-5.5Z" fill="#fff" opacity="0.18" />
        <path d="M8.4 12.2c.7-1.2 1.7-1.4 2.8-1.4 1.1 0 2.1.3 2.8 1.4.6.9.5 2.1-.3 2.6-.8.5-1.8.3-2.5-.3-.4-.3-.7-.7-.7-1.2 0-.5.3-1 .8-1.3.5-.3 1.1-.2 1.4.2" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'GitHub Copilot',
    description: 'Uso Copilot para acelerar el desarrollo, mejorar la estructura del código y mantener calidad.',
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
