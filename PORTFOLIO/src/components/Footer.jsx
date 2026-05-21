export default function Footer() {
  return (
    <footer className="footer section animate-on-scroll" id="contact">
      <div className="footer-copy">
        <p className="section-label">Contacto</p>
        <h2>¿Listo para crear algo memorable?</h2>
        <p>Escríbeme y trabajemos juntos en una presencia digital sólida, elegante y centrada en resultados.</p>
      </div>
      <div className="footer-actions">
        <a
          href="https://wa.me/5421125681802?text=Hola%20Axel%2C%20quiero%20consultar%20sobre%20tus%20proyectos."
          target="_blank"
          rel="noreferrer"
          className="button whatsapp"
        >
          <span className="button-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" stroke="black" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.672-1.618-.921-2.214-.242-.579-.487-.5-.672-.51l-.574-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12.004 2.003A9.997 9.997 0 0 0 2.01 12c0 1.76.464 3.395 1.274 4.822L2 22l5.29-1.382A9.983 9.983 0 0 0 12.004 22 9.997 9.997 0 0 0 22 12.002c0-5.523-4.477-10-9.996-10zm0 18.113c-1.67 0-3.244-.438-4.61-1.198l-.33-.187-3.141.822.838-3.06-.216-.348A8.047 8.047 0 0 1 3.96 12 8.042 8.042 0 0 1 11.99 3.99c4.442 0 8.065 3.624 8.065 8.013 0 4.426-3.624 8.112-8.05 8.112z"/>
            </svg>
          </span>
          Escribime
        </a>
        <a
          href="https://www.linkedin.com/in/axel-andres-de-los-santos-bb4961406/"
          target="_blank"
          rel="noreferrer"
          className="button linkedin"
        >
          <span className="button-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.604 0 4.27 2.373 4.27 5.458v6.282zM5.337 7.433a2.064 2.064 0 1 1 0-4.129 2.064 2.064 0 0 1 0 4.129zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.732v20.535C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.267V1.732C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </span>
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
