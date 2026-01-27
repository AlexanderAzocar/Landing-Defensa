import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Target,
  Users,
  Calendar,
  FileText,
  BookOpen,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Scale,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: "Doctrina Militar",
      description: "Fundamentos históricos y filosóficos del pensamiento bolivariano y la defensa integral.",
      link: "/doctrina",
      color: "blue",
    },
    {
      icon: Target,
      title: "Ámbitos de Acción",
      description: "Los 7 ámbitos estratégicos: económico, social, político, cultural, geográfico, ambiental y militar.",
      link: "/ambitos",
      color: "cyan",
    },
    {
      icon: Users,
      title: "Unión Cívico-Militar",
      description: "El principio de corresponsabilidad y el rol de la ciudadanía en la defensa nacional.",
      link: "/union",
      color: "emerald",
    },
  ];

  const stats = [
    { value: "50+", label: "Años formando profesionales" },
    { value: "7", label: "Ámbitos de acción estratégica" },
    { value: "326", label: "Artículo CRBV - Corresponsabilidad" },
  ];

  const highlights = [
    "Fundamentos del pensamiento bolivariano",
    "Marco legal constitucional (CRBV)",
    "Guerra Popular Prolongada",
    "Milicia Bolivariana y FANB",
    "Seguridad y desarrollo integral",
    "Corresponsabilidad ciudadana",
  ];

  return (
    <div className="space-y-0">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 py-24 sm:py-32 isolate">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-blue-600/10 blur-[150px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Badge
              variant="outline"
              className="text-blue-300 border-blue-500/30 bg-blue-950/50 px-4 py-1.5 text-xs uppercase tracking-widest backdrop-blur-sm"
            >
              <Sparkles className="h-3 w-3 mr-2" />
              Cátedra Defensa Integral de la Nación
            </Badge>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
              Formación en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                Defensa Integral
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Plataforma educativa de UNEFA Miranda para la formación de ciudadanos
              corresponsables con la seguridad, defensa y desarrollo integral de la Nación.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 font-bold h-14 px-8 text-base shadow-xl hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <Link to="/doctrina">
                  Comenzar aprendizaje <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-slate-500/50 hover:bg-white/10 hover:border-white/50 h-14 px-8 text-base backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <Link to="/recursos">Ver recursos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">
              Contenido Educativo
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Tres pilares fundamentales
            </h2>
            <p className="text-slate-600 text-lg">
              Explora los componentes esenciales de la Defensa Integral de la Nación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Link to={feature.link} key={i} className="group">
                <Card className="h-full bg-white border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 overflow-hidden">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                      ${feature.color === "blue" ? "bg-blue-100 group-hover:bg-blue-600" : ""}
                      ${feature.color === "cyan" ? "bg-cyan-100 group-hover:bg-cyan-600" : ""}
                      ${feature.color === "emerald" ? "bg-emerald-100 group-hover:bg-emerald-600" : ""}
                    `}>
                      <feature.icon className={`h-7 w-7 transition-all duration-500
                        ${feature.color === "blue" ? "text-blue-600 group-hover:text-white" : ""}
                        ${feature.color === "cyan" ? "text-cyan-600 group-hover:text-white" : ""}
                        ${feature.color === "emerald" ? "text-emerald-600 group-hover:text-white" : ""}
                      `} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                      Explorar <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS SECTION ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-4">
                Plan de Estudios
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
                Todo lo que necesitas para dominar la materia
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Contenido estructurado siguiendo el programa oficial de la cátedra,
                con recursos descargables y material de apoyo actualizado.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 shadow-xl">
                <GraduationCap className="h-10 w-10 mb-4 opacity-90" />
                <h3 className="font-bold text-lg mb-2">Formación Académica</h3>
                <p className="text-blue-100 text-sm">Material alineado con el pensum universitario</p>
              </Card>
              <Card className="bg-gradient-to-br from-slate-100 to-white p-6 mt-8 shadow-lg border-slate-200">
                <Scale className="h-10 w-10 mb-4 text-slate-700" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Marco Legal</h3>
                <p className="text-slate-600 text-sm">Base constitucional y leyes orgánicas</p>
              </Card>
              <Card className="bg-gradient-to-br from-slate-100 to-white p-6 shadow-lg border-slate-200">
                <BookOpen className="h-10 w-10 mb-4 text-slate-700" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Biblioteca</h3>
                <p className="text-slate-600 text-sm">Documentos y material descargable</p>
              </Card>
              <Card className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-6 mt-8 shadow-xl">
                <Calendar className="h-10 w-10 mb-4 opacity-90" />
                <h3 className="font-bold text-lg mb-2">Calendario</h3>
                <p className="text-cyan-100 text-sm">Fechas de evaluaciones y actividades</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK ACCESS ================= */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Acceso rápido</h2>
            <p className="text-slate-600">Herramientas y recursos para tu formación</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/calendario" className="group">
              <Card className="bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Calendar className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-700 transition-colors">
                      Calendario Académico
                    </h3>
                    <p className="text-slate-600 mt-1">Revisa el cronograma de evaluaciones y actividades</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/recursos" className="group">
              <Card className="bg-white border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                    <FileText className="h-8 w-8 text-cyan-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-slate-900 group-hover:text-cyan-700 transition-colors">
                      Biblioteca de Recursos
                    </h3>
                    <p className="text-slate-600 mt-1">Descarga leyes, reglamentos y manuales</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/glosario" className="group">
              <Card className="bg-white border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                    <BookOpen className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-slate-900 group-hover:text-emerald-700 transition-colors">
                      Glosario de Términos
                    </h3>
                    <p className="text-slate-600 mt-1">Definiciones y conceptos clave de la materia</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/acerca" className="group">
              <Card className="bg-white border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                    <Shield className="h-8 w-8 text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-slate-900 group-hover:text-slate-700 transition-colors">
                      Acerca de UNEFA
                    </h3>
                    <p className="text-slate-600 mt-1">Conoce nuestra institución y su historia</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            ¿Tienes preguntas?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo está disponible para ayudarte con cualquier duda sobre la cátedra o el contenido.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-slate-100 font-bold h-14 px-10 text-base shadow-xl hover:shadow-2xl transition-all duration-300"
            asChild
          >
            <Link to="/contacto">
              Contáctanos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
