import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

import { styles } from "../styles";
import { navLinks, profile } from "../constants";
import { logo, menu, close } from "../assets";

const { firstName, fullName, role } = profile;

const MENU_ID = 'menu-movil';
const TOGGLE_ID = 'boton-menu';
const FOCUSABLE = 'a[href], button:not([disabled])';

const linkClasses = (isActive, size) =>
  [
    'font-display font-medium cursor-pointer transition-colors hover:text-white',
    size,
    isActive ? 'text-white' : 'text-secondary',
  ].join(' ');

const Navbar = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const ids = navLinks.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length === 0) return;

        const nextId = visible[0].target.id;
        setActiveId((current) => (current === nextId ? current : nextId));
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    let observed = '';

    const sync = () => {
      const found = ids.filter((id) => document.getElementById(id));
      const key = found.join('|');
      if (key === observed) return;
      observed = key;
      observer.disconnect();
      found.forEach((id) => observer.observe(document.getElementById(id)));
    };

    sync();

    const mutations = new MutationObserver(sync);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 640px)');
    const handleDesktop = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    desktop.addEventListener('change', handleDesktop);
    return () => desktop.removeEventListener('change', handleDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const gap = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = 'hidden';
    if (gap > 0) body.style.paddingRight = `${gap}px`;

    const firstLink = mobileRef.current?.querySelector('a');
    if (firstLink) firstLink.focus();
    else toggleRef.current?.focus();

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutside = (event) => {
      if (!mobileRef.current?.contains(event.target)) setMenuOpen(false);
    };

    document.addEventListener('pointerdown', handleOutside);
    return () => document.removeEventListener('pointerdown', handleOutside);
  }, [menuOpen]);

  const closeMenu = (restoreFocus) => {
    setMenuOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  };

  const handleMenuKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu(true);
      return;
    }

    if (event.key !== 'Tab') return;

    const items = mobileRef.current?.querySelectorAll(FOCUSABLE);
    if (!items || items.length === 0) return;

    const focusables = Array.from(items);
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }
  };

  const navShell = [
    styles.paddingX,
    'w-full flex items-center py-5 fixed top-0 z-20',
    shouldReduceMotion ? '' : 'transition-colors duration-300',
    scrolled ? 'bg-primary/80 backdrop-blur-md shadow-card' : 'bg-transparent',
  ].join(' ');

  const panelClasses = [
    'absolute p-6 top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl',
    'bg-primary border border-white/10 shadow-card',
    menuOpen ? 'flex' : 'hidden',
  ].join(' ');

  return (
    <nav className={navShell} aria-label="Navegación principal">

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        <a
          href="#portada"
          className='flex items-center gap-2'
          aria-label={`Ir al inicio: ${fullName}`}
        >

          <img
            src={logo}
            alt=""
            aria-hidden="true"
            width="36"
            height="36"
            decoding="async"
            className='w-9 h-9 object-contain'
          />

          <p className='text-white text-[18px] font-bold flex'>
            {firstName}
            <span className='hidden sm:inline'> | {role}</span>
          </p>

        </a>

        <ul className='list-none hidden sm:flex flex-row gap-10' aria-label="Secciones del portafolio">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'true' : undefined}
                className={linkClasses(activeId === item.id, 'text-[18px]')}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div
          ref={mobileRef}
          className='sm:hidden flex flex-1 justify-end items-center'
          onKeyDown={handleMenuKeyDown}
        >

          <button
            ref={toggleRef}
            type="button"
            id={TOGGLE_ID}
            aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            className='bg-transparent border-0 p-0 cursor-pointer'
            onClick={() => setMenuOpen((open) => !open)}
          >
            <img
              src={menuOpen ? close : menu}
              alt=""
              aria-hidden="true"
              width="28"
              height="28"
              decoding="async"
              className='w-[28px] h-[28px] object-contain'
            />
          </button>

          <div id={MENU_ID} className={panelClasses}>
            <ul
              className='list-none flex justify-end items-start flex-1 flex-col gap-4'
              aria-label="Secciones del portafolio en el menú móvil"
            >
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={activeId === item.id ? 'true' : undefined}
                    onClick={() => closeMenu(false)}
                    className={linkClasses(activeId === item.id, 'text-[16px]')}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </div>

      </div>

    </nav>
  )
};

export default Navbar;
