import { Link } from "react-router-dom";
import {
  Coins,
  Users,
  Landmark,
  Palette,
  Globe2,
  Leaf,
  Swords,
  ArrowRight,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AmbitoItem {
  title: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  hoverBorder: string;
  desc: string;
}

const ambitos: AmbitoItem[] = [
  {
    title: "Económico",
    icon: Coins,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverBorder: "hover:border-blue-400",
    desc: "Garantizar la producción y distribución de bienes estratégicos para asegurar la independencia nacional frente a bloqueos.",
  },
  {
    title: "Social",
    icon: Users,
    bgColor: "bg-cyan-100",
    iconColor: "text-cyan-600",
    hoverBorder: "hover:border-cyan-400",
    desc: "Justicia social, sistema de salud público, educación gratuita y la protección de los derechos humanos fundamentales.",
  },
  {
    title: "Político",
    icon: Landmark,
    bgColor: "bg-slate-100",
    iconColor: "text-slate-600",
    hoverBorder: "hover:border-slate-400",
    desc: "Preservación de la estabilidad institucional, el respeto a la soberanía y el ejercicio de la democracia participativa.",
  },
  {
    title: "Cultural",
    icon: Palette,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    hoverBorder: "hover:border-purple-400",
    desc: "Defensa de la identidad nacional, valores históricos, idioma y patrimonio inmaterial frente a la transculturización.",
  },
  {
    title: "Geográfico",
    icon: Globe2,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600",
    hoverBorder: "hover:border-emerald-400",
    desc: "Integridad territorial, control de fronteras, fachada atlántica y la soberanía sobre el Esequibo.",
  },
  {
    title: "Ambiental",
    icon: Leaf,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    hoverBorder: "hover:border-green-400",
    desc: "Preservación de la biodiversidad, cuencas hidrográficas y recursos naturales como activos estratégicos de la nación.",
  },
  {
    title: "Militar",
    icon: Swords,
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
    hoverBorder: "hover:border-red-400",
    desc: "Preparación, organización y equipamiento de la FANB junto a la Milicia Bolivariana para la defensa armada.",
  },
];

export default function AmbitosPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 mb-6">
            <Target className="h-3 w-3 mr-2" />
            Estrategia Nacional
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Ámbitos de la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Defensa Integral
            </span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            La seguridad de la Nación es un concepto multidimensional que abarca
            siete esferas estratégicas interconectadas
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600">7</div>
              <div className="text-sm text-slate-600">Ámbitos estratégicos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-cyan-600">326</div>
              <div className="text-sm text-slate-600">Artículo CRBV</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-emerald-600">100%</div>
              <div className="text-sm text-slate-600">Interconectados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ámbitos Grid */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ambitos.map((item, index) => (
              <Card
                key={index}
                className={`bg-white border-2 border-transparent ${item.hoverBorder} shadow-sm hover:shadow-lg transition-all duration-300 group`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${item.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Principio de Corresponsabilidad
            </h3>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
              Según el Artículo 326 de la CRBV, la seguridad y defensa de la Nación
              es responsabilidad compartida entre el Estado y todos los ciudadanos,
              abarcando estos siete ámbitos fundamentales.
            </p>
            <Button asChild variant="secondary" className="bg-white text-blue-700 hover:bg-slate-100">
              <Link to="/union">
                Explorar Unión Cívico-Militar <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
