import SectionHeader from './SectionHeader.jsx'

const blogPosts = [
  {
    title: 'AXMOVIES',
    description: 'Integración con la API de OMDb, renderizado dinámico y gestión de estados de carga. Práctica de diferencias entre props y API keys como imdbID, Title y Poster.',
  },
  {
    title: 'AXMUSIC',
    description: 'E-commerce con Firebase Auth, carrito de compras y stock en tiempo real. Un proyecto completo para integrar frontend y backend en React.',
  },
  {
    title: 'Aprendizaje clave',
    description: 'Hooks personalizados como useFetch, Context API para estado global y uso de IntersectionObserver para animaciones suaves.',
  },
]

export default function Blog() {
  return (
    <section className="section animate-on-scroll blog" id="blog">
      <SectionHeader label="Aprendizaje" title="Lo que practiqué" />
      <div className="card-grid">
        {blogPosts.map(post => (
          <article key={post.title} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
