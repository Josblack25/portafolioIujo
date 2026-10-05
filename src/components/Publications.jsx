import { motion } from 'framer-motion';

import { styles } from '../styles';
import { publications, references } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Placeholder from './ui/Placeholder';

const formatDate = (dateString) => {
  if (!dateString || dateString.startsWith('[')) {
    return dateString;
  }
  const date = new Date(dateString + 'T12:00:00');
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('es-ES', options);
};

const renderBody = (body) => {
  if (!body) return null;
  const paragraphs = body.split('\n\n');
  return paragraphs.map((p, index) => {
    const trimmed = p.trim();
    if (!trimmed) return null;
    return (
      <p key={index} className="mt-4 text-secondary text-[16px] leading-[30px]">
        {trimmed}
      </p>
    );
  });
};

const Publications = () => {
  const hasEnoughPosts = publications && publications.length >= 0;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Publicaciones</p>
        <h2 className={styles.sectionHeadText}>Mis publicaciones</h2>
      </motion.div>

      {!hasEnoughPosts ? (
        <motion.div
          variants={fadeIn('', 'tween', 0.1, 1)}
          className="mt-8"
        >
          <Placeholder
            icon="document"
            label="[Falta contenido de publicaciones]"
            hint="[Añade al menos 1 publicaciones en constants/publications]"
          />
        </motion.div>
      ) : (
        <>
          <div className="mt-12 space-y-12">
            {publications.slice(0, 2).map((pub) => (
              <motion.article
                key={pub.id}
                variants={fadeIn('up', 'tween', 0.1, 1)}
                className="max-w-prose mx-auto"
              >
                <header>
                  <h3 className="text-white font-black text-[24px] sm:text-[30px]">
                    {pub.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-secondary">
                  </div>
                </header>
                <div className="mt-6">{renderBody(pub.body)}</div>
              </motion.article>
            ))}
          </div>

          {/* {references && references.length > 0 && (
            <>
              <div className="my-12 h-px bg-white/10 max-w-prose mx-auto" />
              <motion.div
                variants={fadeIn('', 'tween', 0.2, 1)}
                className="max-w-prose mx-auto"
              >
                <h3 className={styles.sectionSubText}>Referencias</h3>
                <ul className="mt-6 list-disc list-inside space-y-3">
                  {references.map((ref, index) => (
                    <li key={index} className="text-secondary text-[16px] leading-[28px]">
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:underline"
                        >
                          {ref.label}
                        </a>
                      ) : (
                        <span className="text-white">{ref.label}</span>
                      )}
                      {ref.note && (
                        <span className="ml-1">— {ref.note}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )} */}
        </>
      )}
    </>
  );
};

export default SectionWrapper(Publications, 'publicaciones');
