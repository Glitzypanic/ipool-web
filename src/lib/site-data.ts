export const whatsappNumber = "56944357744";
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hola iPool, quiero cotizar un servicio para mi piscina.",
)}`;

export const navItems = [
  { label: "Quienes somos", href: "#quienes-somos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const stats = [
  { value: 7, suffix: "+", label: "Años de experiencia" },
  { value: 200, suffix: "+", label: "Proyectos realizados" },
  { value: 4, suffix: "+", label: "Regiones donde hemos trabajado" },
];

export const services = [
  {
    title: "Revestimiento en Fibra de Vidrio",
    image: "/images/revestimiento-fibra.webp",
    description:
      "Transformamos tu piscina en el oasis que mereces con un revestimiento que queda impermeabilizado con FRP plástico reforzado.",
    points: [
      "Evita pintar tu piscina todos los años.",
      "Elimina fugas y filtraciones.",
      "Resistente a químicos y rayos UV.",
      "Dura hasta 15 años con mayor durabilidad.",
      "Flexible ante sismos y movimientos de tierra.",
    ],
  },
  {
    title: "Limpieza y Mantencion de Piscinas",
    image: "/images/mantencion-piscina.webp",
    description:
      "Mantenemos tu piscina impecable y cristalina todo el año con un servicio técnico integral.",
    points: [
      "Diagnóstico de nivel de cloración y PH del agua.",
      "Aspirado del fondo y escobillado de muros.",
      "Limpieza de superficie, canastillos, skimmer y bomba.",
      "Programacion de timer y retro lavado.",
      "Aplicación y control de químicos incluido.",
    ],
  },
];

export const revestimientoBenefits = [
  {
    id: "impermeable",
    title: "Impermeabilización real",
    eyebrow: "FRP reforzado",
    summary: "Sella el vaso de la piscina y reduce el riesgo de filtraciones activas.",
    detail:
      "El revestimiento en fibra de vidrio crea una membrana continua, firme y flexible. Es ideal para piscinas con filtraciones, superficies gastadas o terminaciones que ya no resisten la temporada completa.",
    specs: ["Membrana continua", "Alta adherencia", "Menos pérdida de agua"],
  },
  {
    id: "durabilidad",
    title: "Mayor durabilidad",
    eyebrow: "Hasta 15 años",
    summary: "Una terminación pensada para sol, químicos y uso frecuente.",
    detail:
      "A diferencia de la pintura tradicional, la fibra de vidrio tolera mejor la exposición UV, los productos químicos y el movimiento natural del terreno.",
    specs: ["Resistencia UV", "Compatible con químicos", "Menor desgaste visual"],
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
      "La fibra de vidrio tiene una respuesta más flexible que terminaciones rígidas, lo que ayuda a evitar fisuras superficiales ante cambios térmicos o movimientos menores.",
    specs: ["Material flexible", "Menos fisuras", "Buena estabilidad"],
  },
];

export const projects = [
  {
    id: "vitacura",
    title: "Piscina familiar en Vitacura",
    location: "Vitacura, Region Metropolitana",
    service: "Revestimiento en fibra de vidrio y puesta en marcha",
    image: "/images/revestimiento-fibra.webp",
    before:
      "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1200",
    after:
      "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Recuperacion de superficie deteriorada, impermeabilizacion y terminacion azul brillante para uso familiar de temporada completa.",
  },
  {
    id: "barnechea",
    title: "Revestimiento 2.0 en Lo Barnechea",
    location: "Lo Barnechea, Region Metropolitana",
    service: "Fibra de vidrio, filtraciones y mantencion preventiva",
    image: "/images/ipool-hero.webp",
    before:
      "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1200",
    after:
      "https://images.pexels.com/photos/261414/pexels-photo-261414.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Proyecto orientado a eliminar filtraciones y mejorar la resistencia del vaso ante cambios de temperatura y movimiento.",
  },
  {
    id: "valparaiso",
    title: "Piscina curva en Valparaiso",
    location: "Valparaiso, Region de Valparaiso",
    service: "Reparacion de muros, revestimiento y balance quimico",
    image: "/images/mantencion-piscina.webp",
    before:
      "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1200",
    after:
      "https://images.pexels.com/photos/261103/pexels-photo-261103.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Trabajo de recuperacion estetica y funcional para piscina residencial con bordes curvos y alta exposicion solar.",
  },
  {
    id: "mantencion",
    title: "Plan de mantencion anual",
    location: "Zona centro de Chile",
    service: "Limpieza, quimicos, timer y sistema de filtrado",
    image: "/images/ipool-hero.webp",
    before:
      "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1200",
    after:
      "https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Servicio recurrente para mantener el agua cristalina, controlar quimicos y evitar fallas en bomba y filtrado.",
  },
  {
    id: "filtraciones",
    title: "Control de filtraciones",
    location: "Santiago, Region Metropolitana",
    service: "Diagnostico, sellado y revestimiento preventivo",
    image: "/images/revestimiento-fibra.webp",
    before:
      "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1200",
    after:
      "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Intervencion enfocada en detectar perdidas de agua y reforzar zonas criticas antes de la temporada de mayor uso.",
  },
  {
    id: "temporada",
    title: "Puesta a punto de temporada",
    location: "Zona centro de Chile",
    service: "Limpieza profunda, balance quimico y revision de filtrado",
    image: "/images/mantencion-piscina.webp",
    before:
      "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1200",
    after:
      "https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Servicio previo al verano para recuperar claridad del agua, revisar equipos y dejar la piscina lista para uso diario.",
  },
];
