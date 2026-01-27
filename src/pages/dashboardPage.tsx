import {
  TrendingUp,
  BookOpen,
  Clock,
  Award,
  Calendar,
  CheckCircle,
  AlertCircle,
  FileText,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

// Datos de ejemplo
const statsData = {
  promedio: 16.8,
  materiasAprobadas: 24,
  materiasTotales: 40,
  creditosAcumulados: 96,
  creditosTotales: 160,
};

const calificaciones = [
  { materia: "Defensa Integral I", nota: 18, estado: "Aprobada", periodo: "2024-I" },
  { materia: "Programación II", nota: 17, estado: "Aprobada", periodo: "2024-I" },
  { materia: "Base de Datos", nota: 16, estado: "Aprobada", periodo: "2024-I" },
  { materia: "Redes I", nota: 15, estado: "Aprobada", periodo: "2024-I" },
  { materia: "Matemáticas III", nota: 14, estado: "Aprobada", periodo: "2024-I" },
];

const actividadesRecientes = [
  {
    tipo: "evaluacion",
    titulo: "Examen de Doctrina Militar",
    fecha: "Hace 2 días",
    estado: "completado",
  },
  {
    tipo: "tarea",
    titulo: "Ensayo sobre Ámbitos de Acción",
    fecha: "Hace 3 días",
    estado: "completado",
  },
  {
    tipo: "asistencia",
    titulo: "Clase de Defensa Integral",
    fecha: "Hace 5 días",
    estado: "completado",
  },
  {
    tipo: "anuncio",
    titulo: "Nuevo material disponible",
    fecha: "Hace 1 semana",
    estado: "pendiente",
  },
];

const proximasActividades = [
  {
    titulo: "Parada Militar",
    fecha: "15 Feb 2025",
    tipo: "evento",
  },
  {
    titulo: "Examen Final - Defensa Integral",
    fecha: "28 Feb 2025",
    tipo: "evaluacion",
  },
  {
    titulo: "Entrega de Proyecto",
    fecha: "05 Mar 2025",
    tipo: "tarea",
  },
];

export default function DashboardPage() {
  const progresoCarrera = Math.round(
    (statsData.materiasAprobadas / statsData.materiasTotales) * 100
  );
  const progresoCreditos = Math.round(
    (statsData.creditosAcumulados / statsData.creditosTotales) * 100
  );

  return (
    <div className="space-y-8 pb-16 max-w-7xl mx-auto px-4">
      {/* Header */}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Panel de Control Académico
        </h1>
        <p className="text-muted-foreground">
          Resumen de tu progreso y actividades en la cátedra
        </p>
      </section>

      {/* Tarjetas de Estadísticas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-olive-50 to-olive-100/50 border-olive-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-olive-700">
              Promedio General
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-olive" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-olive">{statsData.promedio}</div>
            <p className="text-xs text-olive-600 mt-1">+0.3 desde el período anterior</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-unefa-blue-50 to-unefa-blue-100/50 border-unefa-blue-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-unefa-blue-700">
              Materias Aprobadas
            </CardTitle>
            <BookOpen className="h-4 w-4 text-unefa-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-unefa-blue">
              {statsData.materiasAprobadas}/{statsData.materiasTotales}
            </div>
            <p className="text-xs text-unefa-blue-600 mt-1">{progresoCarrera}% completado</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gold-50 to-gold-100/50 border-gold-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gold-700">
              Créditos Acumulados
            </CardTitle>
            <Award className="h-4 w-4 text-gold-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gold-700">
              {statsData.creditosAcumulados}
            </div>
            <p className="text-xs text-gold-600 mt-1">
              de {statsData.creditosTotales} requeridos
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-patriot-red-50 to-patriot-red-100/50 border-patriot-red-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-patriot-red-700">
              Semestre Actual
            </CardTitle>
            <Clock className="h-4 w-4 text-patriot-red" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-patriot-red">6to</div>
            <p className="text-xs text-patriot-red-600 mt-1">Período 2024-I</p>
          </CardContent>
        </Card>
      </div>

      {/* Progreso de Carrera */}
      <Card>
        <CardHeader>
          <CardTitle>Progreso de la Carrera</CardTitle>
          <CardDescription>
            Tu avance general en el plan de estudios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Materias Aprobadas</span>
              <span className="font-medium">{progresoCarrera}%</span>
            </div>
            <Progress value={progresoCarrera} className="h-3" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Créditos Acumulados</span>
              <span className="font-medium">{progresoCreditos}%</span>
            </div>
            <Progress value={progresoCreditos} className="h-3" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Tabla de Calificaciones */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-olive" />
              Calificaciones Recientes
            </CardTitle>
            <CardDescription>Notas del período actual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {calificaciones.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{item.materia}</p>
                    <p className="text-xs text-muted-foreground">{item.periodo}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-lg font-bold ${
                        item.nota >= 15 ? "text-olive" : "text-patriot-red"
                      }`}
                    >
                      {item.nota}
                    </span>
                    <Badge variant={item.nota >= 15 ? "success" : "destructive"}>
                      {item.estado}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Timeline de Actividad */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-unefa-blue" />
              Actividad Reciente
            </CardTitle>
            <CardDescription>Historial de acciones en la plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {actividadesRecientes.map((actividad, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`p-2 rounded-full ${
                        actividad.estado === "completado"
                          ? "bg-olive-100 text-olive"
                          : "bg-gold-100 text-gold-600"
                      }`}
                    >
                      {actividad.estado === "completado" ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <AlertCircle className="h-4 w-4" />
                      )}
                    </div>
                    {index < actividadesRecientes.length - 1 && (
                      <div className="w-px h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="font-medium text-sm">{actividad.titulo}</p>
                    <p className="text-xs text-muted-foreground">{actividad.fecha}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Próximas Actividades */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-patriot-red" />
            Próximas Actividades
          </CardTitle>
          <CardDescription>Eventos y evaluaciones programadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {proximasActividades.map((actividad, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">{actividad.titulo}</p>
                    <p className="text-sm text-muted-foreground">{actividad.fecha}</p>
                  </div>
                  <Badge
                    variant={
                      actividad.tipo === "evento"
                        ? "info"
                        : actividad.tipo === "evaluacion"
                        ? "warning"
                        : "secondary"
                    }
                  >
                    {actividad.tipo === "evento"
                      ? "Evento"
                      : actividad.tipo === "evaluacion"
                      ? "Examen"
                      : "Tarea"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
