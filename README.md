# Portafolio escolar de Informática

Portafolio académico de una sola página para un estudiante de primer semestre de
Informática. Recorre seis secciones: quién eres, qué competencias quieres
desarrollar, qué materias cursas, qué evidencias entregas, qué escribes y qué
fuentes citas.

Todo el contenido de la página sale de un único archivo de datos
(`src/constants/index.js`). Está pensado para editarlo: quien clone el proyecto
sustituye los marcadores `[ ... ]` por su información real y no toca ningún
componente. Tal como está, el proyecto se ve con marcadores de ejemplo:
sustitúyelos antes de publicarlo.

## Secciones

| # | Sección         | Ancla           | Componente        |
| - | --------------- | --------------- | ----------------- |
| 1 | Portada         | `#portada`      | `Hero.jsx`        |
| 2 | Introducción    | `#introduccion` | `About.jsx`       |
| 3 | Competencias    | `#competencias` | `Competencies.jsx`|
| 4 | Materias        | `#materias`     | `Subjects.jsx`    |
| 5 | Evidencias      | `#evidencias`   | `Evidence.jsx`    |
| 6 | Publicaciones   | `#publicaciones`| `Publications.jsx`|

- **Portada**: nombre, carrera, una frase breve y los datos clave del semestre.
- **Introducción**: texto en primera persona y la ficha de datos académicos.
- **Competencias**: entre 6 y 8 competencias a desarrollar, cada una con la
  materia de la que viene.
- **Materias**: acordeón con las 7 asignaturas del semestre.
- **Evidencias**: tres subsecciones, fotos, cronograma del proyecto y repositorios
  de código.
- **Publicaciones**: dos textos propios escritos a modo de artículos, con fecha y
  materia, y al final el bloque de referencias y bibliografía.

## Materias del semestre

Las siete son fijas y no se añaden ni se quitan:

1. Lenguaje
2. Matemática
3. Lógica de Programación
4. Introducción a la Programación
5. Técnica de Investigación
6. Inglés
7. Política

## Stack

- **React 19** con **Vite 6** como bundler y servidor de desarrollo.
- **Tailwind CSS 4** mediante el plugin `@tailwindcss/vite` (sin
  `tailwind.config.js`; los tokens viven en el bloque `@theme` de `src/index.css`).
- **Framer Motion** para las animaciones de entrada al hacer scroll.
- **ESLint 9** en configuración plana para `lint`.

No hay Three.js, ni rutas, ni formularios, ni variables de entorno.

## Requisitos

- **Node.js** `^18.0.0 || ^20.0.0 || >=22.0.0` (los mínimos que pide Vite 6).
- **npm** 10 o superior.

## Puesta en marcha

```bash
npm install
npm run dev
```

El servidor de desarrollo queda en `http://localhost:5173` y recarga el navegador
al guardar.

## Scripts

| Script            | Qué hace                                                     |
| ----------------- | ------------------------------------------------------------ |
| `npm run dev`     | Servidor de desarrollo con recarga en caliente.              |
| `npm run build`   | Compila la versión de producción en `dist/`.                 |
| `npm run lint`    | Ejecuta ESLint sobre todo el proyecto.                       |
| `npm run preview` | Sirve localmente `dist/` para comprobar el resultado final.  |

## Estructura de carpetas

```
portafolio/
├── public/
│   ├── evidencias/          Fotos de tus trabajos (se versionan)
│   ├── favicon.svg
│   └── herobg.png           Fondo de la portada
├── src/
│   ├── assets/              Imágenes e iconos que se importan desde el código
│   ├── components/
│   │   ├── ui/              Placeholder: estado vacío de fotos y repositorios
│   │   ├── App.jsx          Composición de la página
│   │   ├── Navbar.jsx       Navegación fija y menú móvil
│   │   ├── Hero.jsx         Portada
│   │   ├── About.jsx        Introducción y datos académicos
│   │   ├── Competencies.jsx Competencias a desarrollar
│   │   ├── Subjects.jsx     Materias, en acordeón
│   │   ├── Evidence.jsx     Fotos, cronograma y repositorios
│   │   └── Publications.jsx Publicaciones y referencias
│   ├── constants/           Todo el contenido editable de la página
│   ├── hoc/                 SectionWrapper: animación de entrada común
│   ├── utils/motion.js      Variantes de animación reutilizables
│   ├── index.css            Tokens de Tailwind, tipografía y estilos globales
│   ├── main.jsx             Punto de entrada
│   └── styles.js            Clases de Tailwind agrupadas por patrón
├── eslint.config.js
├── index.html
└── vite.config.js
```

El orden de la página es fijo y no depende del scroll. Todas las secciones se
importan de forma directa, sin carga diferida: el sitio es una sola página
pequeña y el menú navega por anclas, así que no hay chunks que valga la pena
separar.

## Contenido: `src/constants/index.js`

Es el único archivo que hay que editar para cambiar lo que se ve. Exporta ocho
elementos:

| Export             | Qué contiene                                                        |
| ------------------ | ------------------------------------------------------------------- |
| `navLinks`         | Los seis enlaces del menú, con su `id` de ancla. No hay que tocarlo.  |
| `profile`          | Nombre, nombre completo, carrera y la frase de la portada.            |
| `academicProfile`  | Los seis datos de la ficha académica: carrera, institución, semestre, período, docente y sede. |
| `competencies`     | De 6 a 8 tarjetas: `name`, `description` y `subject`.                |
| `subjects`         | Las 7 materias con `hours`, `teacher`, `topics`, `learned` y `evidence`. |
| `evidence`         | `photos`, `schedule` y `repositories`.                               |
| `publications`     | Los 2 artículos: `title`, `date`, `subject`, `excerpt` y `body`.     |
| `references`       | De 4 a 6 fuentes con `label` y `note`.                               |

Reglas al rellenarlo:

- Sustituye cada `[ ... ]` por el dato real. Un marcador sin sustituir se lee en
  voz alta en la página publicada.
- No añadas ni quites asignaturas: los `id` de `subjects` son
  `lenguaje`, `matematica`, `logica-de-programacion`,
  `introduccion-a-la-programacion`, `tecnica-de-investigacion`, `ingles` y
  `politica`, y el acordeón los usa para sus identificadores.
- El `subject` de cada competencia debe coincidir con el `name` de una materia.
- El `body` de una publicación separa los párrafos con una línea en blanco
  (`\n\n`): cada bloque se renderiza como un párrafo.
- Las fechas van como `AAAA-MM-DD`; la página las muestra en español.
- Nada de datos inventados: si no estás seguro de un dato, déjalo como marcador.

## Fotos y repositorios

Las fotos van en `public/evidencias/` y se referencian desde la raíz del sitio:

```js
{ src: '/evidencias/foto-1.jpg', caption: 'Descripción de la foto' }
```

Esa carpeta se versiona: no está en `.gitignore`, porque es material tuyo, no
material de la plantilla. Mientras una entrada tenga `src: null` o `url: null`, la
sección muestra un marcador visual que explica qué falta, así que puedes subir el
sitio sin dejar huecos.

## Despliegue

```bash
npm run build
npm run preview
```

`npm run build` genera el sitio estático en `dist/`. Despliégalo en cualquier
hosting estático (Netlify, Vercel, GitHub Pages, Cloudflare Pages) subiendo el
contenido de esa carpeta.

Dos detalles a tener en cuenta al desplegar:

- El sitio no usa router: todo es scroll con anclas, así que no hace falta
  configurar ninguna reescritura de rutas.
- El fondo de la portada y las fotos se piden desde la raíz del dominio
  (`/herobg.png`, `/evidencias/`). Si publicas el sitio en un subdirectorio,
  ajusta `base` en `vite.config.js` con esa misma ruta.

## Antes de publicar

- **Rellena los marcadores `[ ... ]` de `src/constants/index.js`.** Mientras
  queden, los visitantes los leen tal cual.
- **Sustituye el favicon** (`public/favicon.svg`) por tu propia marca.
- **Añade tus fotos** en `public/evidencias/` y sus rutas en `evidence.photos`.
- **Revisa `theme-color` y el título de `index.html`**, que también llevan
  marcadores.