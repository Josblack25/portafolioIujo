import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { evidence } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { github } from '../assets';
import Placeholder from './ui/Placeholder';

const PHOTO_HINT =
  'Coloca la imagen en la carpeta public/evidencias/ y escribe su ruta en src: /evidencias/nombre.jpg';

const REPOSITORY_HINT =
  'Cuando el repositorio esté publicado, pega su dirección en url: https://github.com/usuario/repositorio';

const PHOTO_WIDTH = 640;
const PHOTO_HEIGHT = 480;

const MARKER_BASE =
  'absolute left-0 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-tertiary text-[13px] font-semibold tabular-nums ring-4';

const TIMELINE_STATUS = {
  completed: {
    marker: 'text-secondary ring-primary',
    badge: 'border-white/10 text-secondary',
    label: 'Completada',
  },
  current: {
    marker: 'text-[#915eff] ring-[#915eff]/30',
    badge: 'border-[#915eff]/50 text-[#915eff]',
    label: 'En curso',
  },
  pending: {
    marker: 'text-secondary/50 ring-primary',
    badge: 'border-white/5 text-secondary/60',
    label: 'Pendiente',
  },
};

const URL_PATTERN = /^https?:\/\/\S+$/i;

const hasValue = (value) =>
  typeof value === 'string' && value.trim() !== '' && !value.trim().startsWith('[');

const hasLink = (url) => typeof url === 'string' && URL_PATTERN.test(url.trim());

const STATUS_MARKS = {
  completed: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M20 6 9 17l-5-5" />
    </>
  ),
  current: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4l2.5 2.5" />
    </>
  ),
  pending: <path d="M6 12h12" />,
};

const StatusMark = ({ status }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[14px] w-[14px] shrink-0"
  >
    {STATUS_MARKS[status] || STATUS_MARKS.pending}
  </svg>
);

const SectionHeading = ({ id, title, description }) => (
  <motion.div variants={fadeIn('', 'tween', 0.2, 1)}>
    <h3
      id={id}
      className="font-bold text-white text-[24px] sm:text-[30px]"
    >
      {title}
    </h3>
    <p className="mt-3 max-w-3xl text-[16px] leading-[28px] text-secondary">
      {description}
    </p>
  </motion.div>
);

const Evidence = () => {
  const { photos, schedule, repositories } = evidence;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Evidencias</p>
        <h2 className={styles.sectionHeadText}>Evidencias de mi trabajo</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', 'tween', 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        Todo lo que hay en esta sección es material mío del semestre: las fotos
        de las actividades, el cronograma del proyecto y el código que escribí.
      </motion.p>

      <section aria-labelledby="evidencias-fotos" className="mt-16">
        <SectionHeading
          id="evidencias-fotos"
          title="Fotos"
          description="Imágenes de las actividades del semestre. Cada una lleva debajo su pie de foto, que explica qué se ve en la imagen."
        />

        <div className="mt-8 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <motion.figure
              key={`foto-${index}`}
              variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
              className="flex h-full flex-col"
            >
              {hasValue(photo.src) ? (
                <img
                  src={photo.src.trim()}
                  alt=""
                  width={PHOTO_WIDTH}
                  height={PHOTO_HEIGHT}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-2xl border border-white/5 object-cover"
                />
              ) : (
                <div className="flex flex-1 items-center justify-center">
                  <Placeholder
                    icon="photo"
                    label="[Falta esta foto]"
                    hint={PHOTO_HINT}
                  />
                </div>
              )}

              <figcaption className="mt-3 text-[14px] leading-[22px] text-secondary">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section aria-labelledby="evidencias-cronograma" className="mt-20">
        <SectionHeading
          id="evidencias-cronograma"
          title="Cronograma"
          description="Fases del proyecto ordenadas por semanas. Cada fase indica qué se hizo en ella y si está completada, en curso o pendiente."
        />

        <ol
          role="list"
          className="mt-8 space-y-8 border-l border-white/10 sm:space-y-10"
        >
          {schedule.map((item, index) => {
            const status =
              TIMELINE_STATUS[item.status] || TIMELINE_STATUS.pending;

            return (
              <motion.li
                key={item.id}
                variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                className="relative pl-8 sm:pl-16"
              >
                <span
                  aria-hidden="true"
                  className={`${MARKER_BASE} ${status.marker}`}
                >
                  {index + 1}
                </span>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-secondary">
                    {item.period}
                  </p>

                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[13px] font-medium ${status.badge}`}
                  >
                    <StatusMark status={item.status} />
                    {status.label}
                  </span>
                </div>

                <h4 className="mt-2 text-[20px] font-bold text-white">
                  {item.phase}
                </h4>

                <p className="mt-2 max-w-3xl text-[15px] leading-[26px] text-secondary">
                  {item.task}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="evidencias-codigo" className="mt-20">
        <SectionHeading
          id="evidencias-codigo"
          title="Código"
          description="Los programas y ejercicios que escribí, guardados en repositorios. De cada uno se ve el lenguaje en el que está escrito y qué contiene."
        />

        <ul
          role="list"
          className="mt-8 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {repositories.map((repository, index) => (
            <motion.li
              key={`repositorio-${repository.name}`}
              variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
              className="flex min-w-0"
            >
              <article className="flex w-full flex-col rounded-2xl border border-white/5 bg-tertiary p-6 shadow-card">
                <h4 className="text-[18px] font-bold text-white">
                  {repository.name}
                </h4>

                <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.2em] text-secondary">
                  {repository.language}
                </p>

                <p className="mt-3 text-[15px] leading-[26px] text-white-100">
                  {repository.description}
                </p>

                <div className="mt-auto flex items-center pt-6">
                  {hasLink(repository.url) ? (
                    <a
                      href={repository.url.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[14px] font-medium text-white transition-colors hover:border-[#915eff] hover:text-[#915eff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#915eff]"
                    >
                      <img
                        src={github}
                        alt=""
                        aria-hidden="true"
                        width={20}
                        height={20}
                        decoding="async"
                        className="h-5 w-5"
                      />
                      Ver el repositorio
                    </a>
                  ) : (
                    <Placeholder
                      icon="code"
                      label="[Falta el enlace del repositorio]"
                      hint={REPOSITORY_HINT}
                    />
                  )}
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SectionWrapper(Evidence, 'evidencias');