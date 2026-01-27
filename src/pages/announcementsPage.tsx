import { useState } from "react";
import {
  Bell,
  AlertTriangle,
  Info,
  Calendar,
  Megaphone,
  Filter,
  Search,
  Clock,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Tipos
interface Anuncio {
  id: number;
  titulo: string;
  contenido: string;
  fecha: string;
  categoria: "general" | "academico" | "evento" | "urgente";
  prioridad: "alta" | "media" | "baja";
  autor: string;
  leido: boolean;
}

// Datos de ejemplo
const anuncios: Anuncio[] = [
  {
    id: 1,
    titulo: "Suspensión de Clases - Día de la Juventud",
    contenido:
      "Se informa que el día 12 de febrero no habrá actividades académicas con motivo de la celebración del Día de la Juventud. Las actividades se reanudarán el día 13 de febrero.",
    fecha: "2025-02-10",
    categoria: "urgente",
    prioridad: "alta",
    autor: "Coordinación Académica",
    leido: false,
  },
  {
    id: 2,
    titulo: "Cronograma de Exámenes Finales",
    contenido:
      "Ya está disponible el cronograma de exámenes finales del período 2024-I. Consulte las fechas correspondientes a cada materia en la sección de recursos.",
    fecha: "2025-02-08",
    categoria: "academico",
    prioridad: "alta",
    autor: "Control de Estudios",
    leido: false,
  },
  {
    id: 3,
    titulo: "Parada Militar Conmemorativa",
    contenido:
      "Se convoca a todos los estudiantes de la cátedra Defensa Integral a participar en la parada militar conmemorativa del 15 de febrero. Uniforme: franela blanca y pantalón azul.",
    fecha: "2025-02-05",
    categoria: "evento",
    prioridad: "media",
    autor: "Cátedra Defensa Integral",
    leido: true,
  },
  {
    id: 4,
    titulo: "Nuevo Material de Estudio Disponible",
    contenido:
      "Se ha cargado nuevo material de estudio sobre los Ámbitos de Acción Estratégica en la sección de recursos. Se recomienda su revisión antes del próximo examen.",
    fecha: "2025-02-03",
    categoria: "academico",
    prioridad: "media",
    autor: "Prof. María González",
    leido: true,
  },
  {
    id: 5,
    titulo: "Actualización del Sistema de Notas",
    contenido:
      "El sistema de consulta de notas estará en mantenimiento el día domingo 9 de febrero de 6:00 AM a 12:00 PM. Disculpen las molestias.",
    fecha: "2025-02-01",
    categoria: "general",
    prioridad: "baja",
    autor: "Soporte Técnico",
    leido: true,
  },
  {
    id: 6,
    titulo: "Inscripción de Servicio Comunitario",
    contenido:
      "Se abre el período de inscripción para el servicio comunitario. Los interesados deben acudir a Control de Estudios con los documentos requeridos.",
    fecha: "2025-01-28",
    categoria: "general",
    prioridad: "media",
    autor: "Coordinación de Extensión",
    leido: true,
  },
];

const categorias = [
  { value: "todos", label: "Todos", icon: Bell },
  { value: "urgente", label: "Urgentes", icon: AlertTriangle },
  { value: "academico", label: "Académicos", icon: Info },
  { value: "evento", label: "Eventos", icon: Calendar },
  { value: "general", label: "Generales", icon: Megaphone },
];

export default function AnnouncementsPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  const [busqueda, setBusqueda] = useState("");

  const anunciosFiltrados = anuncios.filter((anuncio) => {
    const coincideCategoria =
      categoriaActiva === "todos" || anuncio.categoria === categoriaActiva;
    const coincideBusqueda =
      anuncio.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      anuncio.contenido.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  const getBadgeVariant = (prioridad: string) => {
    switch (prioridad) {
      case "alta":
        return "destructive";
      case "media":
        return "warning";
      default:
        return "secondary";
    }
  };

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case "urgente":
        return <AlertTriangle className="h-4 w-4" />;
      case "academico":
        return <Info className="h-4 w-4" />;
      case "evento":
        return <Calendar className="h-4 w-4" />;
      default:
        return <Megaphone className="h-4 w-4" />;
    }
  };

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "urgente":
        return "bg-patriot-red-100 text-patriot-red-700 border-patriot-red-200";
      case "academico":
        return "bg-unefa-blue-100 text-unefa-blue-700 border-unefa-blue-200";
      case "evento":
        return "bg-gold-100 text-gold-700 border-gold-200";
      default:
        return "bg-olive-100 text-olive-700 border-olive-200";
    }
  };

  const formatFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString("es-VE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto px-4">
      {/* Header */}
      <section className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-olive-100 rounded-xl">
            <Bell className="h-6 w-6 text-olive" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Anuncios</h1>
            <p className="text-muted-foreground">
              Mantente informado sobre las novedades de la cátedra
            </p>
          </div>
        </div>
      </section>

      {/* Barra de Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Búsqueda */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar anuncios..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filtro por categoría */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Tabs value={categoriaActiva} onValueChange={setCategoriaActiva}>
                <TabsList className="h-auto flex-wrap">
                  {categorias.map((cat) => (
                    <TabsTrigger
                      key={cat.value}
                      value={cat.value}
                      className="gap-1.5 text-xs sm:text-sm"
                    >
                      <cat.icon className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">{cat.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contador de resultados */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {anunciosFiltrados.length} anuncio(s) encontrado(s)
        </p>
        <Badge variant="outline" className="gap-1">
          <Bell className="h-3 w-3" />
          {anuncios.filter((a) => !a.leido).length} sin leer
        </Badge>
      </div>

      <Separator />

      {/* Lista de Anuncios */}
      <div className="space-y-4">
        {anunciosFiltrados.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="space-y-3">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">
                No se encontraron anuncios con los filtros seleccionados
              </p>
            </div>
          </Card>
        ) : (
          anunciosFiltrados.map((anuncio) => (
            <Card
              key={anuncio.id}
              className={`transition-all hover:shadow-md cursor-pointer group ${
                !anuncio.leido ? "border-l-4 border-l-olive bg-olive-50/30" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg border ${getCategoriaColor(
                        anuncio.categoria
                      )}`}
                    >
                      {getCategoriaIcon(anuncio.categoria)}
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-lg group-hover:text-olive transition-colors">
                        {anuncio.titulo}
                        {!anuncio.leido && (
                          <Badge variant="info" className="ml-2 text-xs">
                            Nuevo
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-xs">
                        <Clock className="h-3 w-3" />
                        {formatFecha(anuncio.fecha)} • {anuncio.autor}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={getBadgeVariant(anuncio.prioridad)}>
                      {anuncio.prioridad === "alta"
                        ? "Urgente"
                        : anuncio.prioridad === "media"
                        ? "Importante"
                        : "Normal"}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {anuncio.contenido}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-3 text-olive hover:text-olive-700 p-0 h-auto"
                >
                  Leer más <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
