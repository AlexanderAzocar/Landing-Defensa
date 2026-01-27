import { Link } from "react-router-dom";
import { ScrollText, ShieldAlert, History, ArrowRight, BookOpen, Quote } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DoctrinaPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/20 mb-6">
            <BookOpen className="h-3 w-3 mr-2" />
            Módulo Principal
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Doctrina Bolivariana
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Bases filosóficas e históricas del Pensamiento Militar Venezolano
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Tabs defaultValue="fundamentos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-10 h-14 bg-slate-100 p-1">
              <TabsTrigger
                value="fundamentos"
                className="text-base font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Fundamentos Ideológicos
              </TabsTrigger>
              <TabsTrigger
                value="legislacion"
                className="text-base font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Base Legal
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: Fundamentos */}
            <TabsContent value="fundamentos" className="space-y-8 focus-visible:outline-none">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <History className="h-5 w-5 text-emerald-700" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">
                      Raíces Históricas
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-emerald-500 hover:bg-slate-100 transition-colors">
                    <h4 className="font-bold text-lg text-slate-900 mb-2">Simón Bolívar</h4>
                    <p className="text-slate-600 leading-relaxed">
                      "Sigo la gloriosa carrera de las armas solo para lograr el honor que ellas dan:
                      libertar a mi patria y merecer las bendiciones de los pueblos". La visión
                      antiimperialista y la necesidad de un ejército para defender la soberanía,
                      no para conquistar.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-amber-500 hover:bg-slate-100 transition-colors">
                    <h4 className="font-bold text-lg text-slate-900 mb-2">Francisco de Miranda</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Precursor del concepto de <strong className="text-amber-700">"Ciudadano Soldado"</strong>.
                      Miranda planteaba que la defensa de la libertad no es exclusiva de una casta militar,
                      sino deber de todo ciudadano capaz.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
                  <div className="flex items-center gap-3 text-white">
                    <ShieldAlert className="h-6 w-6" />
                    <div>
                      <CardTitle className="text-xl font-bold text-white">
                        Guerra Popular Prolongada
                      </CardTitle>
                      <CardDescription className="text-red-100 mt-1">
                        Concepción Estratégica Defensiva Nacional
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Es la estrategia adoptada por Venezuela ante una hipotética agresión de
                    una potencia militar superior. Se fundamenta en:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Desgaste sistemático del enemigo",
                      "Uso del terreno y dispersión de fuerzas",
                      "Participación activa de toda la población",
                      "Transición a guerra de resistencia",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-700 text-xs font-bold">{i + 1}</span>
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Legislación */}
            <TabsContent value="legislacion" className="space-y-8 focus-visible:outline-none">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <ScrollText className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900">
                        Constitución (CRBV)
                      </CardTitle>
                      <CardDescription>Artículos clave para la defensa integral</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                    <Badge className="bg-blue-600 text-white hover:bg-blue-600 mb-3">
                      Artículo 322
                    </Badge>
                    <div className="flex gap-3">
                      <Quote className="h-6 w-6 text-blue-300 flex-shrink-0" />
                      <p className="italic text-slate-700 leading-relaxed">
                        "La seguridad de la Nación es competencia esencial y responsabilidad del Estado,
                        fundamentada en el desarrollo integral de ésta y su defensa es responsabilidad
                        de los venezolanos..."
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl border border-emerald-100">
                    <Badge className="bg-emerald-600 text-white hover:bg-emerald-600 mb-3">
                      Artículo 326
                    </Badge>
                    <p className="text-slate-700 leading-relaxed">
                      Establece el principio de <strong className="text-emerald-700">Corresponsabilidad</strong>:
                      La seguridad no es solo un tema militar, sino que involucra a la sociedad civil
                      en los ámbitos económico, social, político, cultural, geográfico, ambiental y militar.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Continúa tu aprendizaje
          </h3>
          <p className="text-slate-600 mb-8">
            Explora los ámbitos de acción estratégica de la Defensa Integral
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/ambitos">
              Ver Ámbitos de Acción <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
