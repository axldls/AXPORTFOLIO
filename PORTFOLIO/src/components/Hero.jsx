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
        <div className="hero-ai">
          <span className="ai-badge">
            <span className="copilot-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 2.2a7.8 7.8 0 0 1 6.94 11.78 1 1 0 0 1-1.6-1.18 5.8 5.8 0 1 0-7.47-7.47 1 1 0 0 1-1.18-1.6A7.787 7.787 0 0 1 12 4.2zm1.6 9.9a3.5 3.5 0 1 1-3.5-3.5 1 1 0 0 1 0 2 1.5 1.5 0 1 0 1.5 1.5 1 1 0 0 1 2 0z"/>
              </svg>
            </span>
            <strong>IA + Copilot</strong> Potencio mis proyectos con sugerencias inteligentes, optimización de código y soluciones creativas.
          </span>
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
