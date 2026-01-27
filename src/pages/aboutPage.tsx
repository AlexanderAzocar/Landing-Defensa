import {
  Target,
  Eye,
  History,
  MapPin,
  Building,
  Award,
  Shield,
  CheckCircle2,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const lineaTiempo = [
  {
    año: "1974",
    titulo: "Fundación del IUPFAN",
    descripcion: "Se crea el Instituto Universitario Politécnico de las Fuerzas Armadas Nacionales.",
  },
  {
    año: "1999",
    titulo: "Transformación a UNEFA",
    descripcion: "El IUPFAN se transforma en Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional.",
  },
  {
    año: "2003",
    titulo: "Apertura Sede Miranda",
    descripcion: "Se inaugura la sede de Los Teques, Estado Miranda.",
  },
  {
    año: "2008",
    titulo: "Cátedra Defensa Integral",
    descripcion: "Se establece la cátedra obligatoria de Defensa Integral de la Nación.",
  },
  {
    año: "2024",
    titulo: "Plataforma Digital",
    descripcion: "Lanzamiento de la plataforma educativa digital.",
  },
];

const valores = [
  { valor: "Disciplina", desc: "Orden y constancia" },
  { valor: "Honor", desc: "Integridad moral" },
  { valor: "Lealtad", desc: "Compromiso institucional" },
  { valor: "Patriotismo", desc: "Amor a la Patria" },
  { valor: "Responsabilidad", desc: "Cumplimiento del deber" },
  { valor: "Respeto", desc: "Dignidad humana" },
  { valor: "Solidaridad", desc: "Apoyo mutuo" },
  { valor: "Excelencia", desc: "Calidad académica" },
];

const instalaciones = [
  "Aulas climatizadas con equipos audiovisuales",
  "Laboratorios de computación",
  "Biblioteca especializada",
  "Auditorio para 300 personas",
  "Canchas deportivas",
  "Cafetería estudiantil",
  "Estacionamiento amplio",
];

export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/20 mb-6">
            <Shield className="h-3 w-3 mr-2" />
            Universidad Nacional Experimental
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            UNEFA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Sede Miranda
            </span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Formando profesionales integrales con valores éticos, patrióticos y comprometidos
            con el desarrollo de la Nación
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-600" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Misión</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Formar profesionales de pregrado y postgrado con elevados valores éticos,
                  morales y patrióticos, capaces de contribuir al desarrollo sostenible de
                  la Nación, mediante la docencia, investigación y extensión, en un marco
                  de corresponsabilidad entre la Fuerza Armada Nacional Bolivariana y la
                  sociedad venezolana.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-cyan-600 to-emerald-600" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-cyan-100 rounded-xl">
                    <Eye className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl">Visión</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Ser la institución de educación universitaria de referencia nacional e
                  internacional en la formación de profesionales integrales, distinguidos
                  por su excelencia académica, liderazgo, pensamiento estratégico y
                  compromiso con la seguridad, defensa y desarrollo integral de la República
                  Bolivariana de Venezuela.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="h-6 w-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-slate-900">Valores Institucionales</h2>
            </div>
            <p className="text-slate-600">Los principios que guían nuestra formación</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {valores.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <p className="font-bold text-slate-900">{item.valor}</p>
                <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <History className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Nuestra Historia</h2>
            </div>
            <p className="text-slate-600">Trayectoria institucional desde 1974</p>
          </div>

          <div className="space-y-6">
            {lineaTiempo.map((evento, index) => (
              <div
                key={index}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <Badge className="bg-blue-600 text-white hover:bg-blue-600 font-bold">
                    {evento.año}
                  </Badge>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full" />
                  {index < lineaTiempo.length - 1 && (
                    <div className="w-0.5 h-full bg-slate-200 mt-2" style={{ minHeight: "40px" }} />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="font-bold text-slate-900">{evento.titulo}</h3>
                  <p className="text-slate-600 text-sm mt-1">{evento.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">Ubicación</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Carretera Panamericana, Km 23, Los Teques, Estado Miranda, Venezuela
                </p>
                <div className="aspect-video rounded-lg bg-slate-100 flex items-center justify-center">
                  <p className="text-slate-400 text-sm">Mapa de ubicación</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    <Building className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">Instalaciones</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {instalaciones.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
