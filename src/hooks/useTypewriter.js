import { useEffect, useState } from 'react';

const LETTER_MS = 42;
const SPACE_MS = 16;
const START_DELAY_MS = 850;

const useTypewriter = (text, enabled) => {
  const done = !enabled;
  const [count, setCount] = useState(() => (enabled ? 0 : text.length));

  useEffect(() => {
    if (!enabled) {
      setCount(text.length);
      return undefined;
    }

    let timer;
    let index = 0;

    const tick = () => {
      index += 1;
      setCount(index);

      if (index >= text.length) return;

      timer = setTimeout(tick, text[index] === ' ' ? SPACE_MS : LETTER_MS);
    };

    timer = setTimeout(tick, START_DELAY_MS);

    return () => clearTimeout(timer);
  }, [text, enabled]);

  return { typed: text.slice(0, count), done: done || count >= text.length };
};

export default useTypewriter;