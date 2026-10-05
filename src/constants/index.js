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
      'Los Procesos de la comunicación, metodos de investigacion y como se aplican, como elavorar diagramas de flujo, mapas conceptuales y organizadores graficos, como se elabora un ensayo y como se organiza un texto argumentativo',
  },
  {
    id: 'matematica',
    name: 'Matemática',
    teacher: 'Ana Abraham',
    topics: ['Operaciones con expresiones algebraicas', 'Ecuaciones Lineales y cuadráticas', 'Funciones exponenciales y logarítmicas'],
    learned:
      'Las operaciones matematicas que son las bases para calculo, el razonamiento matemático y la resolución de problemas',

  },
  {
    id: 'logica-de-programacion',
    name: 'Lógica Computacional',
    teacher: 'Alfredo Blasco',
    topics: ['Proposiciones', 'Implicación Lógica.', 'Cuantificadores.'],
    learned:
      'Proposiciones, tablas de verdad y el paso de como resolver un problema logico por etapas',

  },
  {
    id: 'introduccion-a-la-programacion',
    name: 'Introducción a la Informática',
    teacher: 'Hernel Yamil',
    topics: ['Conceptos básicos de la materia informática', 'Estructuras selectiva en código lenguaje C', 'Conocer Recursividad En lenguaje C'],
    learned:
      'Desarrollo de pensamiento logico, variables, condiciones, ciclos y funciones en un lenguaje de programación C',

  },
  {
    id: 'tecnica-de-investigacion',
    name: 'Técnicas de Investigación Documental',
    teacher: 'Luisana Chirinos',
    topics: ['Titulo -Objetivos', 'MOMENTO 1', 'MOMENTO 3'],
    learned:
      'Cómo se elavora una tesis, cómo se buscan fuentes confiables y cómo se citan correctamente para que el trabajo sea verificable.',

  },
  {
    id: 'ingles',
    name: 'Inglés',
    teacher: 'Pedro Alvarado',
    topics: ['Las Partes del Habla ', 'Tipos de verbos', 'El presente y el pasado perfecto'],
    learned:
      'Vocabulario en ingles, tiempos verbales y como se aplican en la vida cotidiana, lectura de textos técnicos en ingles',
  },
  {
    id: 'politica',
    name: 'Realidad Social y Politica de Venezuela',
    teacher: 'Wilfredo Páez',
    topics: ['Glosario de términos ilustrado.', 'Elaboración de gráficos', 'Organizacion y participación en Simposio'],
    learned:
      'La Historia de Venezuela como se convirtio en pais petrolero, la realidad social y política del país y cómo se relaciona con la economía y la cultura. Además, cómo se puede analizar un problema desde distintas perspectivas y proponer soluciones para su desarrollo.',

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
      phase: 'Investigación y Selección del Modelo de Dron',
      period: 'Semana 1',
      task: 'Investigación de especificaciones técnicas (autonomía, capacidad de carga, velocidad) de modelos de drones comerciales e industriales adaptados para emergencias sísmicas.',
      status: 'completed',
    },
    {
      id: 'fase-2',
      phase: 'Arquitectura, Requerimientos y Estructuras de Datos',
      period: 'Semana 2',
      task: 'Diseño de la arquitectura del software en C, definición de requerimientos funcionales, mapas de rutas y modelado de las estructuras de datos (structs) para simular la telemetría y el inventario de suministros.',
      status: 'incompleted',
    },
    {
      id: 'fase-3',
      phase: 'División de Módulos y Asignación de Roles',
      period: 'Semana 3',
      task: 'Desglose del sistema en módulos independientes (interfaz de consola, cálculo de rutas/distancias, física de vuelo y gestión de suministros) distribuidos entre los 5 integrantes del equipo.',
      status: 'incompleted',
    },
    {
      id: 'fase-4',
      phase: 'Integración del Código Fuente',
      period: 'Semana 4',
      task: 'Unificación y acoplamiento de los diferentes archivos y funciones desarrolladas por cada participante en un único programa ejecutable en C.',
      status: 'incompleted',
    },
    {
      id: 'fase-5',
      phase: 'Pruebas, Depuración y Optimización',
      period: 'Semana 5',
      task: 'Ejecución de casos de prueba para validar la lógica de navegación, corrección de errores de memoria (punteros), validación de entradas de usuario y depuración general del software.',
      status: 'incompleted',
    },
    {
      id: 'fase-6',
      phase: 'Evaluación y Defensa Académica',
      period: 'Semana 6',
      task: 'Demostración en vivo de la simulación virtual, presentación de la documentación técnica del proyecto y defensa oral ante el jurado evaluador.',
      status: 'incompleted',
    }
  ],
  repositories: [
    {
      name: '[Nombre del repositorio]',
      url: null,
      language: '[Lenguaje]',
      description: '[Qué contiene]',
    },
    // {
    //   name: '[Nombre del repositorio]',
    //   url: null,
    //   language: '[Lenguaje]',
    //   description: '[Qué contiene]',
    // },
    // {
    //   name: '[Nombre del repositorio]',
    //   url: null,
    //   language: '[Lenguaje]',
    //   description: '[Qué contiene]',
    // },
  ],
};

const publications = [
  {
    id: 'publicacion-1',
    title:
      'Del papel al código: Cómo el análisis con el Método Cornell impulsó mi simulador de drones',
    body: `Introducción¿Es posible optimizar el desarrollo de software antes de escribir la primera línea de código? 
      Durante la etapa inicial de nuestro simulador virtual de drones, me enfrenté al reto de asimilar una investigación 
      exhaustiva sobre sistemas de vigilancia aérea para desastres naturales. Para abordar el texto "Sistema de simulador de dron de 
      vigilancia en áreas verdes dirigido al cuerpo de bomberos del estado Aragua", decidí aplicar el Método Cornell como técnica de lectura activa. 
      Este análisis previo no solo organizó las ideas clave sobre respuesta sismológica y prevención de incendios, sino que se convirtió en la brújula 
      fundamental para definir la arquitectura de nuestro programa en Lenguaje C y evitar errores de lógica en la fase de implementación.\n\n 

      El Método Cornell como herramienta de ingenieríaAplicar este método me permitió estructurar la información en tres niveles operativos para el 
      proyecto:Ideas clave (Columna izquierda): Identificación de las circunstancias de despliegue en contingencias, requerimientos del simulador, 
      diferencias entre la vigilancia humana y la automatizada, y sus aplicaciones directas en sismología.Notas de análisis 
      (Columna derecha): Evaluación del impacto operacional: alta precisión en tareas remotas, reducción sustancial del tiempo de respuesta, 
      disminución de costos logísticos y garantía de seguridad para los equipos de rescate.Síntesis y aplicación (Resumen): Consolidación conceptual 
      para guiar el diseño del software.\n\n

     Vigilancia tradicional vs. Simulación con dronesA diferencia del monitoreo presencial —limitado 
      por el terreno y de alto riesgo humano—, un sistema virtual parametriza variables críticas. El estudio demostró que el uso de sensores y cámaras
      térmicas permite cubrir áreas de difícil acceso. En nuestro simulador, esto se tradujo en algoritmos que evalúan rutas seguras antes de desplegar un rescate real.\n\n
      De la teoría a la arquitectura del softwareLa lectura crítica reveló que el valor principal del dron reside en la reducción del tiempo de respuesta 
      y la eficiencia logística. Al trasponer estos hallazgos a nuestro sistema en C, diseñamos estructuras de datos (structs) orientadas a gestionar suministros médicos 
      y medir la autonomía de vuelo en zonas de desastre, optimizando la toma de decisiones en situaciones de alerta sísmica o riesgo de derrumbe.\n\n
    
      La investigación académica y la programación no son procesos aislados; la lectura estructurada mediante el Método Cornell demostró ser un pilar fundamental para fundamentar nuestro 
      proyecto de simulación. Comprender a fondo la logística de rescate, la prevención de incendios y la evaluación de zonas de riesgo nos permitió construir un código 
      más robusto, eficiente y alineado con necesidades reales de emergencia. Te invito a explorar la sección de proyectos de este portafolio para conocer a detalle la 
      arquitectura en C y el funcionamiento técnico de este simulador.\n\n`,
  },
  // {
  //   id: 'publicacion-2',
  //   title:
  //     '[Análisis de la materia de Política: un caso para entenderlo desde dos posturas]',
  //   date: '[AAAA-MM-DD]',
  //   subject: 'Política',
  //   excerpt:
  //     '[Resumen de 1-2 líneas para la tarjeta: qué caso analizaste y qué comparaste]',
  //   body: '[Párrafo 1: contexto del caso y por qué lo elegiste].\n\n[Párrafo 2: postura A y los argumentos que la sostienen].\n\n[Párrafo 3: postura B y los argumentos que la sostienen].\n\n[Párrafo 4: qué concluyes y qué queda abierto].',
  // },
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
