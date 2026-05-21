import SectionHeader from './SectionHeader.jsx'

const projects = [
  {
    label: 'Buscador',
    title: 'AXMOVIES',
    description: 'Aplicación de búsqueda de películas con React, Hooks y Context API, consumiendo la API de OMDb. Incluye resultados dinámicos, manejo de estados de carga y errores, más detalle de cada película.',
    demo: 'https://axldls.github.io/AXPELIS/',
    repo: 'https://github.com/axldls/AXPELIS',
  },
  {
    label: 'E-Commerce',
    title: 'AXMUSIC',
    description: 'Tienda de instrumentos musicales con React, Context API y Firebase. Cuenta con catálogo dinámico, filtros, autenticación, carrito y gestión de stock en tiempo real.',
    demo: 'https://axldls.github.io/axmusicfinal/',
    repo: 'https://github.com/axldls/axmusicfinal',
  },
]

export default function Projects() {
  return (
    <section className="section animate-on-scroll projects" id="projects">
      <SectionHeader label="Proyectos" title="Mis trabajos destacados" />
      <div className="project-grid">
        {projects.map(project => (
          <article key={project.title} className="project-card">
            <div className="project-chip">{project.label}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noreferrer">Ver demo</a>
              <a href={project.repo} target="_blank" rel="noreferrer">Repositorio</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
