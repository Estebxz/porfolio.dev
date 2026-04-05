import type { Platform } from "@type/types";

export const CONFIG: Record<string, Platform> = {
  GitHub: {
    tooltip: "Explora mis proyectos y contribuciones",
    color: "hover:border-x-purple-800",
  },
  Linkedin: {
    tooltip: "Visitar mi perfil de Linkedin",
    color: "hover:border-x-cyan-900",
  },
  CV: {
    tooltip: "Todo lo que necesitas saber en menos de 2 páginas",
    color: "hover:border-x-white",
    icon: "arrow-up-right",
  },
};

export const PLATFORMS = ["GitHub", "Linkedin", "CV"] as const;