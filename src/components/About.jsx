import { motion } from 'framer-motion';

import { styles } from '../styles';
import { academicProfile } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Sobre mí</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', 'tween', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Soy [tu nombre], estudiante de primer semestre de Informática en [nombre
        de la institución]. [Describe brevemente por qué elegiste esta carrera y
        qué te motiva a formarte]. [Expón qué te gustaría aprender o qué aspecto
        del semestre te resulta más interesante].
      </motion.p>

      <motion.div
        variants={fadeIn('up', 'spring', 0.1, 0.75)}
        className="mt-20 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {academicProfile.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/5 bg-tertiary p-6 shadow-card"
          >
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-secondary">
              {item.label}
            </p>
            <p className="mt-2 text-[17px] font-semibold text-white">
              {item.value}
            </p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, 'introduccion');
