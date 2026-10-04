import { motion, useReducedMotion } from "framer-motion"

import { styles } from '../styles'
import { navLinks, profile, academicProfile } from '../constants'
import useTypewriter from '../hooks/useTypewriter'

const { fullName, tagline } = profile

const INVITACION = 'Lo que hay aquí es lo que aprendí este semestre.'
const INVITAR = 'Recorre el portafolio'

const carrera = academicProfile.find((item) => item.label === 'Carrera')?.value ?? ''
const secciones = navLinks.filter((item) => item.id !== 'portada')

const etiqueta = 'text-secondary text-[14px] uppercase tracking-wider'

const enlaceBase =
  'text-white font-medium underline decoration-[#915eff]/40 underline-offset-[6px] transition-colors hover:text-[#dfd9ff] hover:decoration-[#915eff] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#915eff]'

const enlace = `${enlaceBase} text-[16px] sm:text-[18px]`

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()
  const { typed } = useTypewriter(INVITACION, !shouldReduceMotion)

  return (
    <section
      id="portada"
      className="relative w-full h-screen min-h-[640px] mx-auto bg-[url(/herobg.png)] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />

      <div className={`${styles.paddingX} absolute inset-0 top-[72px] [@media(max-height:700px)]:top-[40px] sm:top-[104px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5" aria-hidden="true">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1 min-w-0">
          <p className={etiqueta}>Hola, soy</p>

          <h1 className={`${styles.heroHeadText} text-white`}>
            {fullName}
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-[#dfd9ff]`}>
            {carrera}
          </p>

          <p className="mt-4 max-w-3xl text-[17px] leading-[30px] text-white-100">
            {tagline}
          </p>

          <p className="mt-2 max-w-3xl text-[17px] leading-[30px] text-white-100">
            <span className="sr-only">{INVITACION}</span>
            <span aria-hidden="true">
              {typed}
              <motion.span
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [1, 1, 0.15, 0.15] }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 1.1, times: [0, 0.5, 0.5, 1], repeat: Infinity, repeatType: 'loop' }
                }
                className="inline-block h-[15px] w-[7px] ml-[3px] translate-y-[2px] bg-[#915eff]"
              />
            </span>
          </p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 max-w-3xl">
            {academicProfile.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-secondary text-[14px] uppercase tracking-wider">{item.label}</span>
                <span className="text-white text-[16px] sm:text-[18px] font-medium">{item.value}</span>
              </div>
            ))}
          </div>

          <nav
            className="lg:hidden [@media(max-height:700px)]:hidden mt-6 sm:mt-7"
            aria-label="Secciones del portafolio"
          >
            <p className={`${etiqueta} hidden sm:block`}>{INVITAR}</p>
            <ul className="mt-3 sm:mt-4 flex flex-wrap gap-x-5 sm:gap-x-6 gap-y-1 sm:gap-y-2">
              {secciones.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`${enlaceBase} text-[15px] sm:text-[16px]`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <nav className="hidden lg:block w-[212px] shrink-0" aria-label="Secciones del portafolio">
          <p className={etiqueta}>{INVITAR}</p>
          <ul className="mt-4 flex flex-col gap-y-3 border-l border-[#915eff]/30 pl-5">
            {secciones.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={enlace}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#introduccion" aria-label="Ir a la sección Sobre mí">
        <div aria-hidden="true" className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
          <motion.div
            animate={shouldReduceMotion ? { y: 0 } : { y: [0, 24, 0] }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 1.5, repeat: Infinity, repeatType: 'loop' }
            }
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;