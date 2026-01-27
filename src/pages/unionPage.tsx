import { Link } from "react-router-dom";
import { ShieldCheck, Users2, Building2, Gavel, ArrowRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function UnionPage() {
  const components = [
    {
      icon: ShieldCheck,
      title: "FANB + Milicia",
      color: "blue",
      description: "El componente armado profesional junto al Componente Especial (Milicia Bolivariana), que agrupa al pueblo en armas.",
    },
    {
      icon: Gavel,
      title: "ODDI",
      color: "cyan",
      description: "Órganos de Dirección de Defensa Integral. Estructuras de mando que integran al gobierno y las fuerzas vivas a nivel Nacional, Regional, Municipal y Comunal.",
    },
    {
      icon: Building2,
      title: "Pueblo Organizado",
      color: "slate",
      description: "Consejos Comunales, Comunas, CLAP y organizaciones sociales que participan en la defensa no armada (alimentación, salud, inteligencia social).",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20">
                <Users2 className="h-3 w-3 mr-2" />
                Eje Fundamental
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                Unión{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Cívico-Militar
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                La fusión estratégica de las fuerzas populares y la Fuerza Armada
                Nacional Bolivariana (FANB) para garantizar la independencia y
                soberanía de la Nación.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Principio de Corresponsabilidad
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      "El Estado y la sociedad son corresponsables en la defensa y
                      desarrollo integral de la Nación."
                      <span className="text-cyan-400 font-semibold ml-1">(CRBV Art. 326)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 border border-slate-700">
              <Quote className="h-10 w-10 text-cyan-500/50 mb-4" />
              <blockquote className="text-2xl md:text-3xl font-serif italic text-white mb-6 leading-relaxed">
                "El pueblo es al ejército, lo que el agua es al pez."
              </blockquote>
              <div>
                <cite className="text-cyan-400 font-bold not-italic text-sm uppercase tracking-wider">
                  — Mao Zedong
                </cite>
                <p className="text-slate-500 text-xs mt-1">
                  Referente doctrinario de la Guerra Popular
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Sistema Defensivo Territorial
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              ¿Cómo se organiza esta unión en la práctica?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {components.map((item, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden`}
              >
                <div className={`h-2 ${
                  item.color === "blue" ? "bg-blue-600" :
                  item.color === "cyan" ? "bg-cyan-600" : "bg-slate-600"
                }`} />
                <CardContent className="p-8 text-center">
                  <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    item.color === "blue" ? "bg-blue-100" :
                    item.color === "cyan" ? "bg-cyan-100" : "bg-slate-100"
                  }`}>
                    <item.icon className={`h-8 w-8 ${
                      item.color === "blue" ? "text-blue-600" :
                      item.color === "cyan" ? "text-cyan-600" : "text-slate-600"
                    }`} />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Explora los recursos disponibles
          </h3>
          <p className="text-slate-600 mb-8">
            Descarga materiales de estudio y consulta el calendario de actividades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/recursos">
                Ver Recursos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/calendario">
                Calendario de Actividades
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
