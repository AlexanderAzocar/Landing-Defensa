import { MapPin, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Tipado para eventos
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
];

export default function CalendarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-4">
        <div className="space-y-2 animate-in fade-in slide-in-from-left duration-700">
          <h2 className="text-4xl font-black text-slate-900">
            Cronograma 1-2026
          </h2>
          <p className="text-slate-600 text-lg">
            Planificación de actividades del semestre en curso.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-800 px-6 py-3.5 rounded-xl border border-blue-200/50 text-sm shadow-md animate-in fade-in slide-in-from-right duration-700">
          <AlertCircle className="h-5 w-5" />
          <span className="font-semibold">Próxima: 28 Enero</span>
        </div>
      </div>

      <div className="space-y-6">
        {events.map((evt, idx) => (
          <Card
            key={evt.id}
            className={`transition-all hover:shadow-strong duration-500 border-l-[6px] animate-in slide-in-from-bottom-4 ${
              evt.urgent
                ? "border-l-blue-500 bg-blue-50/30"
                : "border-l-cyan-600 bg-cyan-50/20"
            }`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <CardContent className="p-8 flex flex-col sm:flex-row gap-8 items-start sm:items-center hover:scale-[1.01] transition-transform duration-300">
              {/* FECHA */}
              <div className="flex flex-col items-center justify-center min-w-[90px] text-center bg-white rounded-xl p-4 shadow-md">
                <span className="text-3xl font-black text-slate-800">
                  {evt.date.split(" ")[0]}
                </span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {evt.date.split(" ")[1]}
                </span>
                <span className="text-xs text-slate-400 mt-1.5 font-medium">
                  {evt.day}
                </span>
              </div>

              {/* DETALLES */}
              <div className="flex-1 space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-bold text-xl text-slate-900 leading-tight">
                    {evt.title}
                  </h3>
                  <Badge
                    variant={
                      evt.type === "Evaluación" ? "destructive" : "secondary"
                    }
                    className="text-xs font-semibold px-3 py-1"
                  >
                    {evt.type}
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2 font-medium">
                    <div className="p-1.5 bg-cyan-100 rounded-md">
                      <Clock className="h-4 w-4 text-cyan-700" />
                    </div>
                    {evt.time}
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <div className="p-1.5 bg-blue-100 rounded-md">
                      <MapPin className="h-4 w-4 text-blue-700" />
                    </div>
                    {evt.location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
