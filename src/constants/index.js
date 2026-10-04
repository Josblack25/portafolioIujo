const navLinks = [
  { id: 'portada', title: 'Portada' },
  { id: 'introduccion', title: 'Sobre mí' },
  { id: 'competencias', title: 'Competencias' },
  { id: 'materias', title: 'Materias' },
  { id: 'evidencias', title: 'Evidencias' },
  { id: 'publicaciones', title: 'Publicaciones' },
];

const profile = {
  firstName: 'Adonis',
  fullName: 'Adonis Daller',
  tagline: '[Una frase breve sobre ti: qué estudias y por qué]',
  institution: 'Instituto Universitario Jesus Obrero Extencion Barquisimeto '
};

const academicProfile = [
  { label: 'Carrera', value: 'Informática' },
  { label: 'Institución', value: profile.institution },
  { label: 'Semestre', value: 'Primer semestre' },
];

const competencies = [
  {
    id: 'competencia-1',
    name: 'Pensamiento algorítmico',
    description:
      "Descomponer un problema en pasos ordenados que una máquina pueda ejecutar. Demuestra que un problema se resuelve con un procedimiento explícito y verificable.",
    subject: 'Introducción a la Programación',
  },
  {
    id: 'competencia-2',
    name: 'Pensamiento computacional',
    description:
      'La logica no se trata de solo de programar, sino de pensar en términos de datos, procesos y resultados. Demuestra que puedes analizar un problema y diseñar una o varias solucines que una computadora pueda ejecutar.',
    subject: 'Lógica Computacional',
  },
  {
    id: 'competencia-3',
    name: 'Comunicación efectiva',
    description:
      'Presentar o comunicar una idea con una estructura, precisión y confianza demuestra que puedes organizar tus ideas y expresarlas de manera clara y convincente.',
    subject: 'Lenguaje y Comunicación',
  },
  {
    id: 'competencia-4',
    name: 'Desarrollo de un gran país',
    description:
      'Entender la realidad social y política de Venezuela y cómo se relaciona con la historia, la economía y la cultura demuestra que puedes analizar un problema desde distintas perspectivas y proponer soluciones para su desarrollo.',
    subject: 'Realidad Social y Política de Venezuela',
  },
  {
    id: 'competencia-5',
    name: 'Investigación aplicada',
    description:
      'Formular una pregunta, buscar fuentes y citar lo que usas hace que tu trabajo sea confiable y verificable. Demuestra que puedes investigar un tema y presentar tus hallazgos de manera clara y organizada.',
    subject: 'Técnica de Investigación Documental',
  },
  {
    id: 'competencia-6',
    name: 'Razonamiento cuantitativo',
    description:
      'Trabajar con números, operaciones y relaciones entre cantidades, demuestra: que puedes leer datos, calcular con ellos y justificar la conclusión',
    subject: 'Matemática',
  },
  {
    id: 'competencia-7',
    name: 'Lectura de textos técnicos en inglés',
    description:
      'Entender documentación y textos de la especialidad en el idioma original, ayuda a consultar fuentes directas, enteder el contexto y aprender de manera más eficiente. Demuestra que puedes leer y comprender textos técnicos en inglés.',
    subject: 'Inglés',
  },
];

const subjects = [
  {
    id: 'lenguaje',
    name: 'Lenguaje y Comunicación',
    teacher: 'Naiyelis Peroza',
    topics: ['La comunicación humana: arquitectura', 'La lectura', 'La escritura como proceso'],
    learned:
      '[Qué aprendiste en esta materia: tipos de texto, cómo se construye un argumento y cómo se revisa un texto propio]',
  },
  {
    id: 'matematica',
    name: 'Matemática',
    teacher: 'Ana Abraham',
    topics: ['Operaciones con expresiones algebraicas', 'Ecuaciones Lineales y cuadráticas', 'Funciones exponenciales y logarítmicas'],
    learned:
      '[Qué aprendiste en esta materia: operaciones con números reales, álgebra y cómo se aplica el razonamiento matemático a un problema]',

  },
  {
    id: 'logica-de-programacion',
    name: 'Lógica Computacional',
    teacher: '[Nombre del docente]',
    topics: ['[Tema 1]', '[Tema 2]', '[Tema 3]'],
    learned:
      '[Qué aprendiste en esta materia: proposiciones, tablas de verdad y el paso de un problema a un algoritmo por etapas]',

  },
  {
    id: 'introduccion-a-la-programacion',
    name: 'Introducción a la Informática',
    teacher: '[Nombre del docente]',
    topics: ['[Tema 1]', '[Tema 2]', '[Tema 3]'],
    learned:
      '[Qué aprendiste en esta materia: variables, condiciones, ciclos y funciones en un lenguaje de programación]',

  },
  {
    id: 'tecnica-de-investigacion',
    name: 'Técnicas de Investigación Documental',
    teacher: '[Nombre del docente]',
    topics: ['[Tema 1]', '[Tema 2]', '[Tema 3]'],
    learned:
      '[Qué aprendiste en esta materia: cómo se plantea una pregunta, cómo se buscan fuentes y cómo se citan]',

  },
  {
    id: 'ingles',
    name: 'Inglés',
    teacher: '[Nombre del docente]',
    topics: ['[Tema 1]', '[Tema 2]', '[Tema 3]'],
    learned:
      '[Qué aprendiste en esta materia: lectura de textos técnicos y vocabulario de la especialidad]',
  },
  {
    id: 'politica',
    name: 'Realidad Social y Politica de Venezuela',
    teacher: '[Nombre del docente]',
    topics: ['[Tema 1]', '[Tema 2]', '[Tema 3]'],
    learned:
      '[Qué aprendiste en esta materia: conceptos políticos básicos y cómo se analiza un hecho desde distintas posturas]',

  },
];

const evidence = {
  photos: [
    {
      src: null,
      caption: '[Descripción de la foto: qué muestra y en qué actividad se tomó]',
    },
    {
      src: null,
      caption: '[Descripción de la foto: qué muestra y en qué actividad se tomó]',
    },
    {
      src: null,
      caption: '[Descripción de la foto: qué muestra y en qué actividad se tomó]',
    },
    {
      src: null,
      caption: '[Descripción de la foto: qué muestra y en qué actividad se tomó]',
    },
    {
      src: null,
      caption: '[Descripción de la foto: qué muestra y en qué actividad se tomó]',
    },
  ],
  schedule: [
    {
      id: 'fase-1',
      phase: '[Nombre de la fase]',
      period: '[Semana 1 - 2]',
      task: '[Qué se hizo en esta fase]',
      status: 'completed',
    },
    {
      id: 'fase-2',
      phase: '[Nombre de la fase]',
      period: '[Semana 3 - 4]',
      task: '[Qué se hizo en esta fase]',
      status: 'completed',
    },
    {
      id: 'fase-3',
      phase: '[Nombre de la fase]',
      period: '[Semana 5 - 6]',
      task: '[Qué se hizo en esta fase]',
      status: 'current',
    },
    {
      id: 'fase-4',
      phase: '[Nombre de la fase]',
      period: '[Semana 7 - 8]',
      task: '[Qué se hizo en esta fase]',
      status: 'pending',
    },
    {
      id: 'fase-5',
      phase: '[Nombre de la fase]',
      period: '[Semana 9 - 10]',
      task: '[Qué se hizo en esta fase]',
      status: 'pending',
    },
  ],
  repositories: [
    {
      name: '[Nombre del repositorio]',
      url: null,
      language: '[Lenguaje]',
      description: '[Qué contiene]',
    },
    {
      name: '[Nombre del repositorio]',
      url: null,
      language: '[Lenguaje]',
      description: '[Qué contiene]',
    },
    {
      name: '[Nombre del repositorio]',
      url: null,
      language: '[Lenguaje]',
      description: '[Qué contiene]',
    },
  ],
};

const publications = [
  {
    id: 'publicacion-1',
    title:
      '[Ensayo de la materia de Lenguaje: cómo se organiza un texto argumentativo]',
    date: '[AAAA-MM-DD]',
    subject: 'Lenguaje',
    excerpt:
      '[Resumen de 1-2 líneas para la tarjeta: de qué trata el ensayo y qué conclusión llegas]',
    body: '[Párrafo 1: por qué elegiste ese tema y qué te pidió la materia].\n\n[Párrafo 2: tesis o postura que sostienes y con qué argumentos].\n\n[Párrafo 3: fuentes o lecturas que usaste y cómo las citas].\n\n[Párrafo 4: conclusión y qué aprendiste al escribirlo].',
  },
  {
    id: 'publicacion-2',
    title:
      '[Análisis de la materia de Política: un caso para entenderlo desde dos posturas]',
    date: '[AAAA-MM-DD]',
    subject: 'Política',
    excerpt:
      '[Resumen de 1-2 líneas para la tarjeta: qué caso analizaste y qué comparaste]',
    body: '[Párrafo 1: contexto del caso y por qué lo elegiste].\n\n[Párrafo 2: postura A y los argumentos que la sostienen].\n\n[Párrafo 3: postura B y los argumentos que la sostienen].\n\n[Párrafo 4: qué concluyes y qué queda abierto].',
  },
];

const references = [
  { label: '[Título de la fuente]', note: '[Qué tomaste de ella]' },
  { label: '[Título de la fuente]', note: '[Qué tomaste de ella]' },
  { label: '[Título de la fuente]', note: '[Qué tomaste de ella]' },
  { label: '[Título de la fuente]', note: '[Qué tomaste de ella]' },
  { label: '[Título de la fuente]', note: '[Qué tomaste de ella]' },
];

export {
  navLinks,
  profile,
  academicProfile,
  competencies,
  subjects,
  evidence,
  publications,
  references,
};
