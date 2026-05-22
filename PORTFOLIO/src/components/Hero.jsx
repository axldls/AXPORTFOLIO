import reactLogo from '../assets/react.svg'

export default function Hero() {
  return (
    <section className="hero section animate-on-scroll" id="about">
      <div className="hero-copy">
        <span className="section-label">Hola, soy Axel</span>
        <h2>Desarrollo experiencias digitales con React y diseño pensado para el usuario.</h2>
        <p>En este portfolio muestro mis dos proyectos reales: <strong>AXMOVIES</strong>, un buscador de películas con OMDb, y <strong>AXMUSIC</strong>, una tienda musical con carrito y Firebase.</p>
        <div className="hero-actions">
          <a href="#projects" className="button primary">Ver proyectos</a>
          <a href="#contact" className="button secondary">Contactame</a>
        </div>
      </div>

      <div className="hero-card">
        <div className="hero-card-border">
          <div className="hero-card-content">
            <img src={reactLogo} alt="React logo" className="react-atom" />
          </div>
        </div>
      </div>
    </section>
  )
}
