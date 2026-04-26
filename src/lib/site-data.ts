export const whatsappNumber = "56944357744";
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hola iPool, quiero cotizar un servicio para mi piscina.",
)}`;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ipool.cl";
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false";

export const businessInfo = {
  name: "iPool Servicios de Piscinas",
  shortName: "iPool",
  phone: "+56 9 4435 7744",
  email: "contacto@ipool.cl",
  image: `${siteUrl}/images/ipool-hero.webp`,
  logo: `${siteUrl}/images/ipool-logo-blue.png`,
  areaServed: [
    "Santiago",
    "Región Metropolitana",
    "Rancagua",
    "Región de O'Higgins",
    "Valparaíso",
    "Región de Valparaíso",
    "Zona centro de Chile",
  ],
  description:
    "Servicio a domicilio de revestimiento en fibra de vidrio, limpieza y mantención de piscinas para casas, parcelas y espacios residenciales en Chile.",
};

export const socialLinks = [
  { label: "Facebook", value: "IPOOL Piscinas", href: "https://www.facebook.com/search/top?q=IPOOL%20Piscinas" },
  { label: "Instagram", value: "@ipool.cl", href: "https://www.instagram.com/ipool.cl" },
  { label: "TikTok", value: "@ipool.cl", href: "https://www.tiktok.com/@ipool.cl" },
];

export const navItems = [
  { label: "Quienes somos", href: "#quienes-somos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

export const stats = [
  { value: 7, suffix: "+", label: "Años de experiencia" },
  { value: 200, suffix: "+", label: "Proyectos realizados" },
  { value: 4, suffix: "+", label: "Presentes en más de 4 regiones para revestimiento en fibra de vidrio" },
];

export const services = [
  {
    title: "Revestimiento en Fibra de Vidrio",
    image: "/images/pools/piscina4.jpg",
    description:
      "Transformamos tu piscina con revestimiento en fibra de vidrio a domicilio en Santiago, Rancagua y Valparaíso.",
    points: [
      "Evita pintar tu piscina todos los años.",
      "Elimina fugas y filtraciones.",
      "Resistente a químicos y rayos UV.",
      "Dura hasta 15 años con mayor durabilidad.",
      "Flexible ante sismos y movimientos de tierra.",
    ],
  },
  {
    title: "Limpieza y Mantención de Piscinas",
    image: "/images/mantencion-piscina.webp",
    description:
      "Mantenemos tu piscina impecable y cristalina todo el año con un servicio técnico integral a domicilio en Santiago.",
    points: [
      "Diagnóstico de nivel de cloración y PH del agua.",
      "Aspirado del fondo y escobillado de muros.",
      "Limpieza de superficie, canastillos, skimmer y bomba.",
      "Programación de timer y retro lavado.",
      "Aplicación y control de químicos incluido.",
    ],
  },
  {
    title: "Pintado a base de resina",
    image: "/images/pools/piscina5.jpg",
    description:
      "Aplicamos pintura a base de resina para renovar piscinas que necesitan una terminación firme, uniforme y de mejor resistencia.",
    points: [
      "Preparación y limpieza de la superficie.",
      "Aplicación de resina para mayor adherencia.",
      "Terminación uniforme y renovada.",
      "Ideal para recuperar el color de la piscina.",
    ],
  },
  {
    title: "Servicios adicionales",
    image: "/images/ipool-hero.webp",
    description:
      "Resolvemos trabajos complementarios para mejorar la seguridad, iluminación y terminación general de tu piscina.",
    points: [
      "Instalación de mosaicos.",
      "Cambio de focos de piscina.",
      "Cambio de cuarzo para filtros.",
      "Apoyo técnico para dejar todo funcionando.",
    ],
  },
];

export const seoHighlights = [
  "Revestimiento en fibra de vidrio en Santiago, Rancagua y Valparaíso.",
  "Mantención de piscinas a domicilio en Santiago y Región Metropolitana.",
  "Limpieza, aspirado, escobillado, control de pH y cloración.",
  "Pintado a base de resina y servicios adicionales para piscinas.",
];

export const faqs = [
  {
    question: "¿Cuánto dura el revestimiento en fibra de vidrio para piscinas?",
    answer:
      "Un revestimiento en fibra de vidrio bien aplicado puede durar hasta 15 años con una mantención adecuada. La duración depende del estado de la piscina, exposición solar, químicos y frecuencia de uso.",
  },
  {
    question: "¿Sirve la fibra de vidrio para reparar filtraciones de piscina?",
    answer:
      "Sí. El revestimiento en fibra de vidrio crea una membrana continua e impermeable que ayuda a sellar el vaso de la piscina y reducir pérdidas de agua por fisuras o superficies deterioradas.",
  },
  {
    question: "¿Qué incluye la limpieza y mantención de piscinas?",
    answer:
      "El servicio considera diagnóstico del agua, control de pH y cloro, aspirado de fondo, escobillado de muros, limpieza de superficie, skimmer, canastillos, bomba, retrolavado y programación de timer cuando corresponde.",
  },
  {
    question: "¿Atienden piscinas en Santiago y la zona centro de Chile?",
    answer:
      "Sí. iPool realiza mantenciones de piscinas prácticamente en todo Santiago. Para revestimientos en fibra de vidrio, atiende proyectos en Santiago, Rancagua y Valparaíso según disponibilidad y alcance del trabajo.",
  },
  {
    question: "¿Es mejor revestir con fibra de vidrio o pintar la piscina?",
    answer:
      "La fibra de vidrio suele ser una solución más durable que pintar todos los años, porque impermeabiliza, mejora la resistencia ante químicos y rayos UV, y deja una superficie lisa más fácil de mantener.",
  },
];

export const revestimientoBenefits = [
  {
    id: "impermeable",
    title: "FRP Plástico Reforzado",
    eyebrow: "Impermeabilización Total",
    summary:
      "La fibra de vidrio junto con la resina se filtran en cualquier tipo de grietas que pueda tener tu piscina y sella por completo estos desperfectos. Generando una capa que evitará futuras filtraciones y pérdida de agua.",
    detail:
      "El sistema FRP crea una superficie continua sobre el vaso de la piscina, sin juntas abiertas ni zonas débiles expuestas al agua. Antes de aplicar la terminación se prepara la base, se refuerzan los puntos críticos y se construye una barrera resistente para proteger la estructura durante el uso diario.",
    specs: ["Acabado impermeable", "Sellado completo de grietas", "Menor pérdida de agua"],
  },
  {
    id: "durabilidad",
    title: "Durabilidad Extrema",
    eyebrow: "Hasta 15 años",
    summary:
      "Una terminación pensada para altas temperaturas, químicos y uso frecuente sin perder firmeza ni presencia visual.",
    detail:
      "Este revestimiento soporta mejor la exposición al sol, el contacto permanente con productos químicos y el uso diario. Su acabado ayuda a mantener una superficie más estable, resistente y fácil de cuidar durante la temporada.",
    specs: ["Resistente a químicos", "Resistente a sismos y temblores", "Olvídate de pintar todos los años"],
  },
  {
    id: "mantencion",
    title: "Mantención más simple",
    eyebrow: "Superficie lisa",
    summary: "La terminación lisa facilita limpieza, aspirado y control del agua.",
    detail:
      "Al quedar una superficie más uniforme, se reducen zonas donde se acumulan algas, suciedad o manchas difíciles de remover durante la mantención.",
    specs: ["Menos porosidad", "Limpieza rápida", "Agua más estable"],
  },
  {
    id: "terminacion",
    title: "Terminación brillante",
    eyebrow: "Color piscina",
    summary: "Aporta ese look azul limpio y luminoso que se asocia a piscina nueva.",
    detail:
      "El acabado refuerza la sensación de agua cristalina, mejora la percepción visual del patio y deja una superficie más agradable al uso diario.",
    specs: ["Azul luminoso", "Look renovado", "Mejor presencia exterior"],
  },
  {
    id: "flexibilidad",
    title: "Flexible ante movimientos",
    eyebrow: "Mejor respuesta",
    summary: "Funciona muy bien en superficies expuestas a cambios y micro movimientos.",
    detail:
      "La fibra de vidrio trabajada con resina isoftálica genera que se forme un material flexible muy útil en un país que es sísmico y que está expuesto a constantes movimientos de la tierra, lo que ayuda a evitar fisuras superficiales y filtraciones con pérdida de agua.",
    specs: ["Material flexible", "Menos fisuras", "Buena estabilidad"],
  },
];

export const projects = [
  {
    id: "vitacura",
    title: "Renovación con diseño propio en Vitacura",
    location: "Vitacura, Región Metropolitana",
    service: "Revestimiento en fibra de vidrio y terminación personalizada",
    image: "/images/projects/vitacura2.jpeg",
    before: "/images/projects/vitacura1.jpeg",
    after: "/images/projects/vitacura2.jpeg",
    summary:
      "Renovación completa de una piscina residencial con diseño propio, reforzando la superficie y dejando una terminación limpia, firme y lista para disfrutar.",
  },
  {
    id: "quilpue",
    title: "Piscina con nuevos aires en Quilpué",
    location: "Quilpué, Región de Valparaíso",
    service: "Renovación de terminación y revestimiento en fibra de vidrio",
    image: "/images/projects/quilpue2.jpeg",
    before: "/images/projects/quilpue.jpeg",
    after: "/images/projects/quilpue2.jpeg",
    summary:
      "Intervención en una piscina residencial para darle una nueva lectura visual, recuperar su superficie y mejorar su durabilidad frente al uso diario.",
  },
  {
    id: "barnechea",
    title: "Piscina familiar renovada en Lo Barnechea",
    location: "Lo Barnechea, Región Metropolitana",
    service: "Revestimiento en fibra de vidrio y recuperación de superficie",
    image: "/images/projects/barnechea2.jpg",
    before: "/images/projects/barnechea.jpg",
    after: "/images/projects/barnechea2.jpg",
    summary:
      "Recuperación de una piscina familiar pensada para volver a usarse con tranquilidad, mejorando impermeabilización, resistencia y presencia visual.",
  },
  {
    id: "santiago-centro",
    title: "Nueva vida para una comunidad de edificio en Santiago Centro",
    location: "Santiago Centro, Región Metropolitana",
    service: "Revestimiento en fibra de vidrio para piscina comunitaria",
    image: "/images/projects/santiago2.jpg",
    before: "/images/projects/santiago.jpg",
    after: "/images/projects/santiago2.jpg",
    summary:
      "Renovación de piscina comunitaria en edificio para devolverle funcionalidad, una mejor terminación y un aspecto más atractivo para los residentes.",
  },
];
