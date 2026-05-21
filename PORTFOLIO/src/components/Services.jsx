import SectionHeader from './SectionHeader.jsx'

const services = [
  {
    title: 'Diseño UI/UX',
    description: 'Conceptos visuales claros, prototipos interactivos y flujos que generan confianza desde el primer contacto.',
  },
  {
    title: 'Branding digital',
    description: 'Identidad de marca coherente, realzada con tipografía y paletas que comunican sofisticación y profesionalismo.',
  },
  {
    title: 'Web responsive',
    description: 'Experiencias rápidas, accesibles y adaptadas a cada pantalla, con un enfoque moderno y minimalista.',
  },
]

export default function Services() {
  return (
    <section className="section animate-on-scroll services" id="services">
      <SectionHeader label="Servicios" title="Lo que ofrezco" />
      <div className="card-grid">
        {services.map(service => (
          <article key={service.title} className="feature-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
