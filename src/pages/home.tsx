import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Target,
  Users,
  Calendar,
  FileText,
} from "lucide-react";

// Componentes de Shadcn UI
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16 max-w-7xl mx-auto px-4">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 py-20 px-8 sm:py-32 lg:px-16 text-center shadow-strong isolate group hover:shadow-[0_20px_60px_rgba(30,64,175,0.3)] transition-all duration-500">
        {/* Fondo con Gradiente Mejorado */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800/30 via-slate-900/60 to-black opacity-90"></div>

        {/* Patrón de Grid Sutil */}
        <div className="absolute inset-0 -z-10 opacity-[0.12] bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Efecto de Luz Superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-600/15 blur-[120px] rounded-full -z-10"></div>

        <div className="relative z-10 mx-auto max-w-5xl space-y-10 animate-in fade-in zoom-in duration-700">
          <Badge
            variant="outline"
            className="text-blue-300 border-blue-700/50 bg-blue-950/60 px-5 py-2 text-xs uppercase tracking-[0.2em] backdrop-blur-md font-semibold shadow-lg"
          >
            🎖️ Cátedra Defensa Integral de la Nación
          </Badge>

          <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl drop-shadow-2xl leading-[1.1]">
            UNEFA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 animate-pulse">
              Sede Miranda
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl text-slate-200/90 leading-relaxed font-light">
            Plataforma de instrucción táctica y estratégica para la formación de
            ciudadanos corresponsables con la{" "}
            <span className="text-cyan-300 font-semibold">
              seguridad, defensa y desarrollo integral
            </span>{" "}
            de la Patria.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 pt-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold h-16 px-10 text-base shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/doctrina">
                Iniciar Instrucción <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-slate-600/50 hover:bg-white/10 hover:text-cyan-300 hover:border-cyan-500/50 h-16 px-10 text-base backdrop-blur-md font-semibold transition-all duration-300"
              asChild
            >
              <Link to="/ambitos">Explorar Ámbitos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= MÓDULOS PRINCIPALES ================= */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Tarjeta 1 */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200/50 shadow-soft hover:shadow-strong hover:-translate-y-2 transition-all duration-500 cursor-pointer group overflow-hidden relative">
          {/* Borde animado sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700/0 via-slate-700/5 to-slate-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <CardHeader className="space-y-5 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200/50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-slate-700 group-hover:to-slate-800 transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:scale-110">
              <Shield className="h-8 w-8 text-slate-700 group-hover:text-white transition-all duration-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
              Doctrina Militar
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <p className="text-slate-600 text-base leading-relaxed">
              Fundamentos históricos y filosóficos: El Pensamiento Bolivariano y
              la Guerra Popular Prolongada.
            </p>
          </CardContent>
        </Card>

        {/* Tarjeta 2 */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200/50 shadow-soft hover:shadow-strong hover:-translate-y-2 transition-all duration-500 cursor-pointer group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <CardHeader className="space-y-5 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:scale-110">
              <Target className="h-8 w-8 text-blue-600 group-hover:text-white transition-all duration-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
              Ámbitos de Acción
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <p className="text-slate-600 text-base leading-relaxed">
              Los 7 ámbitos estratégicos de la seguridad: Económico, Social,
              Político, Cultural, Geográfico, etc.
            </p>
          </CardContent>
        </Card>

        {/* Tarjeta 3 */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200/50 shadow-soft hover:shadow-strong hover:-translate-y-2 transition-all duration-500 cursor-pointer group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <CardHeader className="space-y-5 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-50 to-cyan-100/50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyan-600 group-hover:to-cyan-700 transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:scale-110">
              <Users className="h-8 w-8 text-cyan-600 group-hover:text-white transition-all duration-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">
              Unión Cívico-Militar
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <p className="text-slate-600 text-base leading-relaxed">
              El principio de corresponsabilidad (Art. 326 CRBV) y el rol de la
              Milicia Bolivariana en la defensa.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      {/* ================= ACCESOS RÁPIDOS (UTILITIES) ================= */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Acceso a Calendario */}
        <div className="rounded-2xl border border-slate-200/50 bg-gradient-to-br from-white to-slate-50/50 p-8 flex items-center justify-between hover:border-blue-400/60 hover:shadow-strong transition-all duration-300 group backdrop-blur-sm">
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-3 group-hover:text-blue-700 transition-colors">
              <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                <Calendar className="h-5 w-5 text-blue-700 group-hover:text-white transition-colors" />
              </div>
              Próximas Actividades
            </h3>
            <p className="text-sm text-slate-600 pl-[52px]">
              Revisa el cronograma de paradas y exámenes.
            </p>
          </div>
          <Button
            variant="secondary"
            className="bg-slate-100 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
            asChild
          >
            <Link to="/calendario">Ver Agenda</Link>
          </Button>
        </div>

        {/* Acceso a Recursos */}
        <div className="rounded-2xl border border-slate-200/50 bg-gradient-to-br from-white to-slate-50/50 p-8 flex items-center justify-between hover:border-cyan-400/60 hover:shadow-strong transition-all duration-300 group backdrop-blur-sm">
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-3 group-hover:text-cyan-700 transition-colors">
              <div className="p-2 bg-cyan-100 rounded-lg group-hover:bg-cyan-600 transition-colors">
                <FileText className="h-5 w-5 text-cyan-700 group-hover:text-white transition-colors" />
              </div>
              Biblioteca Táctica
            </h3>
            <p className="text-sm text-slate-600 pl-[52px]">
              Descarga leyes, reglamentos y manuales.
            </p>
          </div>
          <Button
            variant="secondary"
            className="bg-slate-100 hover:bg-cyan-600 hover:text-white transition-all duration-300 font-semibold"
            asChild
          >
            <Link to="/recursos">Descargas</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
