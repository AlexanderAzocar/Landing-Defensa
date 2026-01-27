import type { AssistantCommand, QuickAction } from "@/types/assistant";

/**
 * Comandos del asistente virtual
 * Sistema data-driven para respuestas del bot
 */
export const assistantCommands: AssistantCommand[] = [
  // Navegación principal
  {
    id: "nav-home",
    keywords: ["inicio", "home", "principal", "comenzar"],
    response: "Afirmativo. Regresando a la base principal...",
    action: { type: "navigate", target: "/" },
    category: "navegacion",
  },
  {
    id: "nav-doctrina",
    keywords: ["doctrina", "historia", "historico", "bolivariano", "pensamiento"],
    response: "Entendido. Navegando a la sección de Doctrina y Reseña Histórica...",
    action: { type: "navigate", target: "/doctrina" },
    category: "navegacion",
  },
  {
    id: "nav-ambitos",
    keywords: ["ambito", "ambitos", "economico", "social", "politico", "estrategico"],
    response: "Afirmativo. Desplegando los Ámbitos de Acción Estratégica...",
    action: { type: "navigate", target: "/ambitos" },
    category: "navegacion",
  },
  {
    id: "nav-union",
    keywords: ["union", "civico", "militar", "corresponsabilidad", "milicia"],
    response: "Copiado. Accediendo a Unión Cívico-Militar...",
    action: { type: "navigate", target: "/union" },
    category: "navegacion",
  },
  {
    id: "nav-calendario",
    keywords: ["calendario", "fechas", "eventos", "agenda", "actividades", "parada"],
    response: "Procesando. Mostrando el calendario de actividades...",
    action: { type: "navigate", target: "/calendario" },
    category: "navegacion",
  },
  {
    id: "nav-recursos",
    keywords: ["recursos", "descargas", "material", "documentos", "leyes", "biblioteca"],
    response: "Accediendo a la Biblioteca Táctica de recursos...",
    action: { type: "navigate", target: "/recursos" },
    category: "navegacion",
  },
  // Nuevas páginas
  {
    id: "nav-perfil",
    keywords: ["perfil", "cuenta", "datos", "personal", "mi perfil"],
    response: "Accediendo a tu perfil de usuario...",
    action: { type: "navigate", target: "/perfil" },
    category: "navegacion",
  },
  {
    id: "nav-dashboard",
    keywords: ["dashboard", "panel", "notas", "calificaciones", "promedio", "progreso"],
    response: "Mostrando tu panel de control académico...",
    action: { type: "navigate", target: "/dashboard" },
    category: "navegacion",
  },
  {
    id: "nav-anuncios",
    keywords: ["anuncios", "noticias", "avisos", "comunicados", "informacion"],
    response: "Cargando los últimos anuncios institucionales...",
    action: { type: "navigate", target: "/anuncios" },
    category: "navegacion",
  },
  {
    id: "nav-acerca",
    keywords: ["acerca", "sobre", "mision", "vision", "historia unefa", "institucion"],
    response: "Navegando a la información institucional de UNEFA...",
    action: { type: "navigate", target: "/acerca" },
    category: "navegacion",
  },
  {
    id: "nav-contacto",
    keywords: ["contacto", "telefono", "correo", "ubicacion", "direccion", "email"],
    response: "Mostrando información de contacto...",
    action: { type: "navigate", target: "/contacto" },
    category: "navegacion",
  },
  {
    id: "nav-glosario",
    keywords: ["glosario", "terminos", "definiciones", "vocabulario", "conceptos"],
    response: "Accediendo al glosario de términos militares...",
    action: { type: "navigate", target: "/glosario" },
    category: "navegacion",
  },
  // Información y ayuda
  {
    id: "info-defensa",
    keywords: ["que es defensa", "defensa integral", "seguridad nacion"],
    response:
      "La Defensa Integral de la Nación es el conjunto de sistemas, métodos, medidas y acciones de defensa que formula, coordina y ejecuta el Estado con la participación de las instituciones públicas y privadas, y las personas naturales y jurídicas.",
    category: "informacion",
  },
  {
    id: "info-crbv",
    keywords: ["constitucion", "crbv", "articulo 326", "ley"],
    response:
      "El Artículo 326 de la CRBV establece el principio de corresponsabilidad entre el Estado y la sociedad civil para garantizar la seguridad de la Nación.",
    category: "informacion",
  },
  {
    id: "help-commands",
    keywords: ["ayuda", "comandos", "opciones", "que puedo hacer", "help"],
    response:
      "Puedo ayudarte con: navegación (doctrina, ámbitos, unión, calendario, recursos), información académica (perfil, dashboard, anuncios), e información institucional (acerca de, contacto, glosario). ¿Qué necesitas?",
    category: "ayuda",
  },
  {
    id: "greeting",
    keywords: ["hola", "buenos dias", "buenas tardes", "saludos", "hey"],
    response:
      "¡Saludos, cadete! Estoy listo para asistirte. ¿En qué puedo ayudarte hoy?",
    category: "ayuda",
  },
  {
    id: "thanks",
    keywords: ["gracias", "thanks", "te agradezco"],
    response:
      "¡A la orden, cadete! Estoy aquí para servirte. ¿Necesitas algo más?",
    category: "ayuda",
  },
];

/**
 * Acciones rápidas mostradas como chips
 */
export const quickActions: QuickAction[] = [
  { id: "qa-doctrina", label: "Doctrina", command: "doctrina" },
  { id: "qa-ambitos", label: "Ámbitos", command: "ambitos" },
  { id: "qa-calendario", label: "Calendario", command: "calendario" },
  { id: "qa-recursos", label: "Recursos", command: "recursos" },
  { id: "qa-dashboard", label: "Mis Notas", command: "dashboard" },
  { id: "qa-ayuda", label: "Ayuda", command: "ayuda" },
];

/**
 * Mensaje de bienvenida del asistente
 */
export const welcomeMessage = {
  text: "¡Saludos, cadete! Soy el Asistente de Defensa Integral. ¿En qué puedo guiarte hoy?",
  sender: "bot" as const,
};

/**
 * Mensaje por defecto cuando no se reconoce el comando
 */
export const defaultResponse =
  "No reconozco esa orden, cadete. Intenta con comandos como 'doctrina', 'ámbitos', 'calendario' o escribe 'ayuda' para ver las opciones disponibles.";

/**
 * Busca un comando que coincida con la entrada del usuario
 */
export function findMatchingCommand(input: string): AssistantCommand | null {
  const normalizedInput = input.toLowerCase().trim();

  for (const command of assistantCommands) {
    for (const keyword of command.keywords) {
      if (normalizedInput.includes(keyword)) {
        return command;
      }
    }
  }

  return null;
}
