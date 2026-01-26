import {
  Coins,
  Users,
  Landmark,
  Palette,
  Globe2,
  Leaf,
  Swords,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Interfaz para los datos de cada ámbito
interface AmbitoItem {
  title: string;
  icon: LucideIcon;
  color: string;
  desc: string;
}

const ambitos: AmbitoItem[] = [
  {
    title: "Económico",
    icon: Coins,
    color: "text-blue-700 bg-blue-100",
    desc: "Garantizar la producción y distribución de bienes estratégicos para asegurar la independencia nacional frente a bloqueos.",
  },
  {
    title: "Social",
    icon: Users,
    color: "text-cyan-700 bg-cyan-100",
    desc: "Justicia social, sistema de salud público, educación gratuita y la protección de los derechos humanos fundamentales.",
  },
  {
    title: "Político",
    icon: Landmark,
    color: "text-slate-700 bg-slate-100",
    desc: "Preservación de la estabilidad institucional, el respeto a la soberanía y el ejercicio de la democracia participativa.",
  },
  {
    title: "Cultural",
    icon: Palette,
    color: "text-blue-600 bg-blue-100",
    desc: "Defensa de la identidad nacional, valores históricos, idioma y patrimonio inmaterial frente a la transculturización.",
  },
  {
    title: "Geográfico",
    icon: Globe2,
    color: "text-cyan-600 bg-cyan-100",
    desc: "Integridad territorial, control de fronteras, fachada atlántica y la soberanía sobre el Esequibo.",
  },
  {
    title: "Ambiental",
    icon: Leaf,
    color: "text-slate-600 bg-slate-100",
    desc: "Preservación de la biodiversidad, cuencas hidrográficas y recursos naturales como activos estratégicos de la nación.",
  },
  {
    title: "Militar",
    icon: Swords,
    color: "text-blue-800 bg-blue-200",
    desc: "Preparación, organización y equipamiento de la FANB junto a la Milicia Bolivariana para la defensa armada.",
  },
];

export default function AmbitosPage() {
  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4">
      <div className="text-center space-y-6 mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="inline-block">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Ámbitos de la
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mt-1">
              Defensa Integral
            </span>
          </h2>
        </div>
        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          La seguridad de la Nación es un concepto{" "}
          <span className="font-bold text-blue-700">multidimensional</span> que
          abarca siete esferas estratégicas interconectadas.
        </p>
        <div className="flex justify-center gap-2 mt-6">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-600"
              style={{ opacity: 1 - i * 0.1 }}
            ></div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {ambitos.map((item, index) => (
          <Card
            key={index}
            className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-slate-200/50 shadow-soft hover:shadow-strong transition-all duration-500 border-t-4 border-t-transparent hover:border-t-blue-600 group hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Efecto de gradiente animado en hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-transparent group-hover:to-blue-500/5 transition-all duration-700"></div>

            <CardHeader className="flex flex-row items-center gap-5 pb-4 relative z-10">
              <div
                className={`p-4 rounded-2xl transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:scale-110 ${item.color}`}
              >
                <item.icon className="h-7 w-7" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-slate-600 leading-relaxed text-base">
                {item.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
