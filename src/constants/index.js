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
      '[Qué significa: descomponer un problema en pasos ordenados que una máquina pueda ejecutar. Qué demuestra: que un problema se resuelve con un procedimiento explícito y verificable]',
    subject: 'Lógica de Programación',
  },
  {
    id: 'competencia-2',
    name: 'Programación estructurada',
    description:
      '[Qué significa: escribir un programa con decisiones, repeticiones y funciones bien separadas. Qué demuestra: que llevas una solución hasta un programa legible que funciona]',
    subject: 'Introducción a la Programación',
  },
  {
    id: 'competencia-3',
    name: 'Comunicación escrita',
    description:
      '[Qué significa: presentar una idea por escrito con estructura, precisión y ortografía. Qué demuestra: que un texto tuyo se entiende a la primera y sirve como evidencia de lo que sabes]',
    subject: 'Lenguaje',
  },
  {
    id: 'competencia-4',
    name: 'Lectura crítica y argumentación',
    description:
      '[Qué significa: leer una fuente, identificar su postura y sostener la propia con argumentos. Qué demuestra: que distingues entre lo que un texto afirma y lo que tú concluyes]',
    subject: 'Política',
  },
  {
    id: 'competencia-5',
    name: 'Investigación aplicada',
    description:
      '[Qué significa: formular una pregunta, buscar fuentes y citar lo que usas. Qué demuestra: que tu trabajo dice de dónde viene cada dato y otra persona puede revisarlo]',
    subject: 'Técnica de Investigación',
  },
  {
    id: 'competencia-6',
    name: 'Razonamiento cuantitativo',
    description:
      '[Qué significa: trabajar con números, operaciones y relaciones entre cantidades. Qué demuestra: que puedes leer datos, calcular con ellos y justificar la conclusión]',
    subject: 'Matemática',
  },
  {
    id: 'competencia-7',
    name: 'Lectura de textos técnicos en inglés',
    description:
      '[Qué significa: entender documentación y textos de la especialidad en el idioma original. Qué demuestra: que puedes consultar fuentes directas para resolver un problema por tu cuenta]',
    subject: 'Inglés',
  },
];

const subjects = [
  {
    id: 'lenguaje',
    name: 'Lenguaje y Comunicación',
    hours: '[NN]',
    teacher: '[Nombre del docente]',
    topics: ['[Tema 1]', '[Tema 2]', '[Tema 3]'],
    learned:
      '[Qué aprendiste en esta materia: tipos de texto, cómo se construye un argumento y cómo se revisa un texto propio]',
    evidence:
      '[Qué trabajo concreto entregaste como evidencia: nombre del trabajo y en qué consistía]',
  },
  {
    id: 'matematica',
    name: 'Matemática',
    hours: '[NN]',
    teacher: '[Nombre del docente]',
    topics: ['[Tema 1]', '[Tema 2]', '[Tema 3]'],
    learned:
      '[Qué aprendiste en esta materia: operaciones con números reales, álgebra y cómo se aplica el razonamiento matemático a un problema]',
    evidence:
      '[Qué trabajo concreto entregaste como evidencia: nombre del trabajo y en qué consistía]',
  },
  {
    id: 'logica-de-programacion',
    name: 'Lógica Computacional',
    hours: '[NN]',
    teacher: '[Nombre del docente]',
    topics: ['[Tema 1]', '[Tema 2]', '[Tema 3]'],
    learned:
      '[Qué aprendiste en esta materia: proposiciones, tablas de verdad y el paso de un problema a un algoritmo por etapas]',
    evidence:
      '[Qué trabajo concreto entregaste como evidencia: nombre del trabajo y en qué consistía]',
  },
  {
    id: 'introduccion-a-la-programacion',
    name: 'Introducción a la Informática',
    hours: '[NN]',
    teacher: '[Nombre del docente]',
    topics: ['[Tema 1]', '[Tema 2]', '[Tema 3]'],
    learned:
      '[Qué aprendiste en esta materia: variables, condiciones, ciclos y funciones en un lenguaje de programación]',
    evidence:
      '[Qué trabajo concreto entregaste como evidencia: nombre del programa o ejercicio y qué resolvía]',
  },
  {
    id: 'tecnica-de-investigacion',
    name: 'Técnicas de Investigación Documental',
    hours: '[NN]',
    teacher: '[Nombre del docente]',
    topics: ['[Tema 1]', '[Tema 2]', '[Tema 3]'],
    learned:
      '[Qué aprendiste en esta materia: cómo se plantea una pregunta, cómo se buscan fuentes y cómo se citan]',
    evidence:
      '[Qué trabajo concreto entregaste como evidencia: nombre de la investigación y su alcance]',
  },
  {
    id: 'ingles',
    name: 'Inglés',
    hours: '[NN]',
    teacher: '[Nombre del docente]',
    topics: ['[Tema 1]', '[Tema 2]', '[Tema 3]'],
    learned:
      '[Qué aprendiste en esta materia: lectura de textos técnicos y vocabulario de la especialidad]',
    evidence:
      '[Qué trabajo concreto entregaste como evidencia: nombre del ejercicio o de la lectura]',
  },
  {
    id: 'politica',
    name: 'Realidad Social y Politica de Venezuela',
    hours: '[NN]',
    teacher: '[Nombre del docente]',
    topics: ['[Tema 1]', '[Tema 2]', '[Tema 3]'],
    learned:
      '[Qué aprendiste en esta materia: conceptos políticos básicos y cómo se analiza un hecho desde distintas posturas]',
    evidence:
      '[Qué trabajo concreto entregaste como evidencia: nombre del análisis y qué caso estudió]',
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
