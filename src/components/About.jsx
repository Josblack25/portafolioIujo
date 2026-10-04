import { motion } from 'framer-motion';

import { styles } from '../styles';
import { academicProfile, profile } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const institution =
  academicProfile.find((item) => item.label === 'Institución')?.value ?? '';

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
        Soy {profile.firstName}, estudiante de primer semestre de Informática en {institution}.
        Mi elección profesional nace del interés constante por la computación y el aprendizaje
        autodidacta. La informática no solo representa una de las áreas con mayor proyección y 
        demanda laboral, sino también el espacio donde puedo convertir la lógica en herramientas 
        útiles. En esta primera fase universitaria, mi meta es consolidar los fundamentos de la 
        lógica computacional, desarrollo de mis habilidades blandas y de comunicación, la creacion
        de un proyecto y como presentarlo mediante una tesis de grado.
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
