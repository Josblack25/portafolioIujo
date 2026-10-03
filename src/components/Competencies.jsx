import { motion } from 'framer-motion';

import { styles } from '../styles';
import { competencies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const CompetencyCard = ({ index, name, description, subject }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
      className="w-full"
    >
      <div className="rounded-2xl border border-white/5 bg-tertiary p-6 shadow-card h-full flex flex-col">
        <h3 className="text-[20px] font-bold text-white">{name}</h3>
        <p className="mt-2 text-[15px] leading-[26px] text-white-100">
          {description}
        </p>
        <p className="mt-auto pt-4 text-[13px] font-medium uppercase tracking-[0.2em] text-secondary">
          {subject}
        </p>
      </div>
    </motion.div>
  );
};

const Competencies = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Competencias</p>
        <h2 className={styles.sectionHeadText}>Competencias a desarrollar</h2>
      </motion.div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {competencies.map((competency, index) => (
          <CompetencyCard
            key={competency.id || competency.name}
            index={index}
            {...competency}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Competencies, 'competencias');
