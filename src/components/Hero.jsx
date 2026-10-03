import { motion, useReducedMotion } from "framer-motion"

import { styles } from '../styles'
import { profile, academicProfile } from '../constants'

const { fullName, role, tagline } = profile

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="portada"
      className="relative w-full h-screen mx-auto bg-[url(/herobg.png)] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5" aria-hidden="true">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {fullName}
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-[#dfd9ff]`}>
            {role}
          </p>
          <p className="mt-4 max-w-3xl text-[17px] leading-[30px] text-white-100">
            {tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 max-w-3xl">
            {academicProfile.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-secondary text-[14px] uppercase tracking-wider">{item.label}</span>
                <span className="text-white text-[16px] sm:text-[18px] font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
  )
}

export default Hero;
