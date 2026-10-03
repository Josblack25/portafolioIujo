import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { subjects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const PANEL_COLLAPSED = { height: 0, opacity: 0 };
const PANEL_EXPANDED = { height: 'auto', opacity: 1 };

const PANEL_TRANSITION = { duration: 0.34, ease: 'easeInOut' };
const CHEVRON_TRANSITION = { duration: 0.3, ease: 'easeInOut' };

const panelAnimation = (shouldReduceMotion) =>
  shouldReduceMotion
    ? {
        initial: PANEL_EXPANDED,
        animate: PANEL_EXPANDED,
        exit: PANEL_EXPANDED,
        transition: { duration: 0 },
      }
    : {
        initial: PANEL_COLLAPSED,
        animate: PANEL_EXPANDED,
        exit: PANEL_COLLAPSED,
        transition: PANEL_TRANSITION,
      };

const FieldLabel = ({ children }) => (
  <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-secondary">
    {children}
  </p>
);

const Chevron = ({ isOpen, shouldReduceMotion }) => (
  <motion.span
    aria-hidden="true"
    className="shrink-0 text-secondary"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={shouldReduceMotion ? { duration: 0 } : CHEVRON_TRANSITION}
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </motion.span>
);

const Subjects = () => {
  const [openId, setOpenId] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const headerRefs = useRef([]);

  const toggleSubject = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const focusHeader = (index) => {
    const total = subjects.length;
    const next = ((index % total) + total) % total;
    headerRefs.current[next]?.focus();
  };

  const handleHeaderKeyDown = (event, index) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusHeader(index + 1);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusHeader(index - 1);
    }
  };

  const panelProps = panelAnimation(shouldReduceMotion);

  return (
    <>
      <motion.p
        variants={fadeIn('', 'tween', 0, 0.6)}
        className="text-[13px] font-medium uppercase tracking-[0.2em] text-secondary"
      >
        <span className="blue-text-gradient text-[15px] font-semibold tabular-nums">
          {subjects.length}
        </span>{' '}
        materias · Primer semestre
      </motion.p>

      <motion.div variants={textVariant(0.1)}>
        <p className={`${styles.sectionSubText} mt-2`}>Plan de estudio</p>
        <h2 className={styles.sectionHeadText}>Materias</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', 'tween', 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        Aquí están las asignaturas del semestre. Abre cada materia para ver su
        docente, el temario que se vio, qué aprendiste en ella y qué entregaste
        como evidencia.
      </motion.p>

      <motion.div
        variants={fadeIn('', 'tween', 0.2, 1)}
        className="mt-12 border-t border-white/10"
      >
        {subjects.map((subject, index) => {
          const headerId = `subject-${subject.id}`;
          const panelId = `panel-${subject.id}`;
          const isOpen = openId === subject.id;

          return (
            <div key={subject.id} className="border-b border-white/10">
              <h3 className="m-0">
                <button
                  type="button"
                  id={headerId}
                  ref={(node) => {
                    headerRefs.current[index] = node;
                  }}
                  aria-expanded={isOpen ? 'true' : 'false'}
                  aria-controls={panelId}
                  onClick={() => toggleSubject(subject.id)}
                  onKeyDown={(event) => handleHeaderKeyDown(event, index)}
                  className="flex w-full cursor-pointer items-center gap-4 border-0 bg-transparent p-0 py-5 text-left transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#915eff]"
                >
                  <span
                    aria-hidden="true"
                    className="xs:inline-flex hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tertiary text-[13px] font-semibold tabular-nums text-secondary ring-1 ring-white/10"
                  >
                    {index + 1}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[18px] font-bold text-white sm:text-[20px]">
                      {subject.name}
                    </span>
                    <span className="mt-1 block text-[13px] uppercase tracking-[0.2em] text-secondary">
                      Horas: {subject.hours}
                    </span>
                  </span>

                  <Chevron isOpen={isOpen} shouldReduceMotion={shouldReduceMotion} />
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={subject.id}
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className="overflow-hidden"
                    {...panelProps}
                  >
                    <div className="max-w-3xl space-y-6 pb-10 pt-2 sm:pb-12">
                      <div>
                        <FieldLabel>Docente</FieldLabel>
                        <p className="mt-1 text-[16px] text-white-100">
                          {subject.teacher}
                        </p>
                      </div>

                      <div>
                        <FieldLabel>Temario</FieldLabel>
                        <ul className="mt-3 list-disc space-y-2 pl-5">
                          {subject.topics.map((topic, topicIndex) => (
                            <li
                              key={`${subject.id}-topic-${topicIndex}`}
                              className="text-[15px] text-white-100"
                            >
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <FieldLabel>Qué aprendí</FieldLabel>
                        <p className="mt-2 text-[15px] leading-[26px] text-secondary">
                          {subject.learned}
                        </p>
                      </div>

                      <div>
                        <FieldLabel>Evidencia</FieldLabel>
                        <p className="mt-2 text-[15px] leading-[26px] text-secondary">
                          {subject.evidence}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Subjects, 'materias');
