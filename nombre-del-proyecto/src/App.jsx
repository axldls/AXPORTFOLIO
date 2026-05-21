import { useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Blog from './components/Blog.jsx'
import Footer from './components/Footer.jsx'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll('.animate-on-scroll').forEach(section => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App
