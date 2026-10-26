import { motion } from 'framer-motion';

import { styles } from '../styles';
import { academicProfile, project, team } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const institution =
  academicProfile.find((item) => item.label === 'Institución')?.value ?? '';

const teamNames = team.map((member) => member.name);
const teamList = `${teamNames.slice(0, -1).join(', ')} y ${teamNames.at(-1)}`;

const projectFacts = [
  { label: 'Materia', value: project.subject },
  { label: 'Docente', value: project.teacher },
  { label: 'Enfoque', value: project.approach },
  { label: 'Sede', value: project.location },
];

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>El equipo y el proyecto</p>
        <h2 className={styles.sectionHeadText}>Sobre nosotros</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', 'tween', 0.1, 1)}
        className="mt-6 max-w-3xl text-[19px] font-medium leading-[34px] text-white sm:text-[21px]"
      >
        Un sismo no solo derriba estructuras: corta caminos, interrumpe comunicaciones y
        convierte cada minuto en una decisión crítica. El sismo que afectó recientemente a La
        Guaira lo dejó claro. En una emergencia, la diferencia entre reaccionar y anticiparse
        puede salvar vidas.
      </motion.p>

      <motion.p
        variants={fadeIn('', 'tween', 0.2, 1)}
        className="mt-5 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        Somos {teamList}, estudiantes de primer semestre de Informática en {institution}. Nos
        une una pregunta sencilla: ¿cómo ensayar la respuesta ante un terremoto sin poner en
        riesgo a quienes responden?
      </motion.p>

      <motion.p
        variants={fadeIn('', 'tween', 0.3, 1)}
        className="mt-5 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        De esa pregunta nace nuestro proyecto: {project.title}. El sistema se desarrolla en
        lenguaje C y modela rutas, distancias, autonomía de vuelo, carga útil e inventario de
        suministros. Su
        propósito es simular la logística de entrega antes de que ocurra la emergencia, para
        decidir con datos y no bajo presión.
      </motion.p>

      <motion.p
        variants={fadeIn('', 'tween', 0.4, 1)}
        className="mt-5 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        La idea fundamental es simple: no se puede improvisar lo que no se ha ensayado. Simular
        permite comparar decisiones, detectar cuellos de botella y preparar una respuesta más
        rápida y segura para las comunidades del estado Lara. Este portafolio reúne el proceso,
        las competencias y las evidencias de ese aprendizaje: sigue leyendo y verás cómo cada
        materia aportó una pieza.
      </motion.p>

      <motion.div
        variants={fadeIn('up', 'spring', 0.2, 0.75)}
        className="mt-16 grid w-full gap-4 lg:grid-cols-3"
      >
        <div className="rounded-2xl border border-white/5 bg-tertiary p-6 shadow-card lg:col-span-2">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-secondary">
            El equipo
          </p>
          <p className="mt-2 text-[20px] font-semibold text-white">
            Cinco miradas, un mismo objetivo
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {team.map((member, index) => (
              <li
                key={member.name}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-black-100/40 px-4 py-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#915eff]/20 text-[13px] font-semibold text-[#c9b8ff]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[16px] font-medium text-white">{member.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/5 bg-tertiary p-6 shadow-card">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-secondary">
            Ficha del proyecto
          </p>
          <p className="mt-2 text-[20px] font-semibold text-white">{project.shortTitle}</p>

          <dl className="mt-6 space-y-4">
            {projectFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-secondary">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-[16px] font-medium text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, 'introduccion');
