import { motion, useReducedMotion } from "framer-motion"

import { styles } from '../styles'
import { navLinks, project, academicProfile, team } from '../constants'

const { shortTitle, location } = project

const carrera = academicProfile.find((item) => item.label === 'Carrera')?.value ?? ''
const secciones = navLinks.filter((item) => item.id !== 'portada')

const etiqueta = 'text-secondary text-[14px] uppercase tracking-wider'

const enlaceBase =
  'text-white font-medium underline decoration-[#915eff]/40 underline-offset-[6px] transition-colors hover:text-[#dfd9ff] hover:decoration-[#915eff] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#915eff]'

const enlace = `${enlaceBase} text-[16px] sm:text-[18px]`

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="portada"
      className="relative w-full min-h-screen bg-[url(/herobg.png)] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(145,94,255,0.22),transparent_50%)]"
        aria-hidden="true"
      />

      <div
        className={`${styles.paddingX} relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center pt-28 pb-28 sm:pt-32`}
      >
        <div className="flex flex-row items-start gap-5">

          <div className="flex flex-col justify-center items-center mt-5" aria-hidden="true">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="flex flex-1 flex-col gap-10 lg:flex-row lg:items-start lg:justify-between min-w-0">

            <div className="min-w-0 flex-1">

              <p className={`${etiqueta} text-[#c9c4e8]`}>
                {shortTitle} · {location}
              </p>

              <h1 className="mt-5 max-w-5xl font-black tracking-[-0.03em] text-white text-[clamp(2.5rem,7vw,5.4rem)] leading-[0.95]">
                Cuando la tierra tiembla,{' '}
                <span className="green-text-gradient">el cielo responde.</span>
              </h1>

              <p className={`${styles.heroSubText} mt-6 max-w-3xl`}>
                Envío de suministros de emergencia ante eventos sísmicos en el estado Lara, Venezuela.
              </p>

              <p className="mt-4 max-w-3xl text-[17px] leading-[30px] text-white-100">
                Somos {team.length} estudiantes de Informática. Construimos un simulador en C para
                ensayar rutas, autonomía, carga y suministros antes de que ocurra un sismo.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 max-w-3xl border-t border-white/10 pt-6">
                {academicProfile.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-secondary text-[13px] uppercase tracking-wider">{item.label}</span>
                    <span className="text-white text-[16px] sm:text-[17px] font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#introduccion"
                  className="rounded-md bg-[#915eff] px-6 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#7d4ae0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#915eff]"
                >
                  Conoce el proyecto
                </a>
                <span className="text-[15px] text-secondary">
                  Equipo de {team.length} estudiantes · {carrera}
                </span>
              </div>

            </div>

            <nav className="hidden lg:block w-[212px] shrink-0 pt-2" aria-label="Secciones del portafolio">
              <p className={etiqueta}>Recorre el portafolio</p>
              <ul className="mt-4 flex flex-col gap-y-3 border-l border-[#915eff]/30 pl-5">
                {secciones.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className={enlace}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#introduccion" aria-label="Ir a la sección Sobre nosotros">
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
