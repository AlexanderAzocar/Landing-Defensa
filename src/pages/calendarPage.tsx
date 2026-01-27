import { MapPin, Clock, Calendar, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Evento {
  id: number;
  date: string;
  day: string;
  title: string;
  location: string;
  time: string;
  type: "Evaluación" | "Práctica" | "Ceremonia";
  urgent?: boolean;
}

const events: Evento[] = [
  {
    id: 1,
    date: "28 ENE",
    day: "Martes",
    title: "Práctica de Orden Cerrado",
    location: "Patio de Honor - Sede Miranda",
    time: "07:00 AM",
    type: "Práctica",
    urgent: true,
  },
  {
    id: 2,
    date: "05 FEB",
    day: "Miércoles",
    title: "Examen Teórico: Pensamiento Bolivariano",
    location: "Aula 204 - Piso 2",
    time: "09:30 AM",
    type: "Evaluación",
  },
  {
    id: 3,
    date: "12 FEB",
    day: "Miércoles",
    title: "Día de la Juventud - Parada Cívica",
    location: "Plaza Bolívar de Los Teques",
    time: "08:00 AM",
    type: "Ceremonia",
  },
  {
    id: 4,
    date: "24 FEB",
    day: "Lunes",
    title: "Entrega de Trabajo: Doctrina Bolivariana",
    location: "Plataforma Virtual",
    time: "11:59 PM",
    type: "Evaluación",
  },
];

const typeColors = {
  Evaluación: "bg-red-100 text-red-700 border-red-200",
  Práctica: "bg-blue-100 text-blue-700 border-blue-200",
  Ceremonia: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

export default function CalendarPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 mb-6">
            <Calendar className="h-3 w-3 mr-2" />
            Semestre 1-2026
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Calendario Académico
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Planificación de actividades, evaluaciones y ceremonias del semestre
          </p>
        </div>
      </section>

      {/* Alert Bar */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-3 text-white">
            <AlertCircle className="h-5 w-5" />
            <span className="font-semibold">Próxima actividad: 28 de Enero - Práctica de Orden Cerrado</span>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {events.map((evt) => (
              <Card
                key={evt.id}
                className={`border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
                  evt.urgent ? "ring-2 ring-blue-500 ring-offset-2" : ""
                }`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    {/* Date Column */}
                    <div className="bg-slate-900 text-white p-6 sm:w-32 flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-black">{evt.date.split(" ")[0]}</span>
                      <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                        {evt.date.split(" ")[1]}
                      </span>
                      <span className="text-xs text-slate-400 mt-1">{evt.day}</span>
                    </div>

                    {/* Details Column */}
                    <div className="flex-1 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-bold text-lg text-slate-900">{evt.title}</h3>
                          {evt.urgent && (
                            <Badge className="bg-blue-600 text-white text-xs">Próximo</Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-slate-400" />
                            {evt.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-slate-400" />
                            {evt.location}
                          </div>
                        </div>
                      </div>
                      <Badge className={`${typeColors[evt.type]} border font-semibold`}>
                        {evt.type}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">Tipos de actividades</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm text-slate-600">Evaluación</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm text-slate-600">Práctica</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-sm text-slate-600">Ceremonia</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
