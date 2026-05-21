const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

export default function Header() {
  return (
    <header className="topbar animate-on-scroll">
      <div>
        <p className="eyebrow">Portfolio Profesional</p>
        <h1>Axel De los santos</h1>
        <p className="subtitle">Frontend Developer | Modern UI & UX</p>
      </div>

      <div className="social-links">
        {navLinks.map(link => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
