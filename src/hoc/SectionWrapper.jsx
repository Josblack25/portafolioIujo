import { motion } from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => {
  function WrappedSection() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer(0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 'some', margin: '0px 0px -80px 0px' }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Component />
      </motion.section>
    )
  }

  WrappedSection.displayName = `SectionWrapper(${idName})`

  return WrappedSection
}

export default SectionWrapper
