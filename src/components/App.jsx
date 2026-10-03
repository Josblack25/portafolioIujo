import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Competencies from './Competencies'
import Subjects from './Subjects'
import Evidence from './Evidence'
import Publications from './Publications'

const App = () => {
  return (
    <>
      <a
        href="#contenido"
        className="absolute left-4 top-4 z-50 -translate-y-24 focus:translate-y-0 focus:rounded-md focus:bg-secondary focus:px-4 focus:py-2 focus:text-primary"
      >
        Saltar al contenido
      </a>

      <div className="relative z-0 bg-primary">
        <header>
          <Navbar />
        </header>

        <Hero />

        <main id="contenido">
          <About />
          <Competencies />
          <Subjects />
          <Evidence />
          <Publications />
        </main>
      </div>
    </>
  )
}

export default App