import { FileText, Download, Book, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface Resource {
  title: string;
  type: string;
  size: string;
  category: "Legal" | "Manual";
}

const resources: Resource[] = [
  {
    title: "Constitución (CRBV)",
    type: "PDF",
    size: "2.4 MB",
    category: "Legal",
  },
  {
    title: "Ley Orgánica de la FANB",
    type: "PDF",
    size: "1.8 MB",
    category: "Legal",
  },
  {
    title: "Manual de Orden Cerrado",
    type: "PDF",
    size: "5.1 MB",
    category: "Manual",
  },
  {
    title: "Concepto Estratégico Militar",
    type: "PDF",
    size: "3.2 MB",
    category: "Manual",
  },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-10 max-w-6xl mx-auto px-4">
      <div className="text-center space-y-4 animate-in fade-in slide-in-from-top duration-700">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">
          Biblioteca{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            Táctica
          </span>
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Documentación fundamental para la formación del cadete.
        </p>
      </div>

      {/* SECCIÓN DE DESCARGAS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-t-4 border-t-blue-600 shadow-soft hover:shadow-strong transition-all duration-500 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-4">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Book className="h-6 w-6 text-blue-700" />
              </div>
              Material de Estudio
            </CardTitle>
            <CardDescription className="text-base">
              Leyes, reglamentos y guías oficiales.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {resources.map((res, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border border-slate-200/50 rounded-xl hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/30 transition-all duration-300 group hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-blue-100 transition-colors">
                    <FileText className="h-6 w-6 text-slate-600 group-hover:text-blue-700 transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">
                      {res.title}
                    </p>
                    <div className="flex gap-2 text-xs text-slate-500 mt-1.5 items-center">
                      <Badge
                        variant="outline"
                        className="text-[10px] font-semibold"
                      >
                        {res.category}
                      </Badge>
                      <span className="font-medium">{res.size}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* SECCIÓN DE PREGUNTAS FRECUENTES (FAQs) */}
        <Card className="border-t-4 border-t-cyan-600 shadow-soft hover:shadow-strong transition-all duration-500 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-4">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-3 bg-cyan-100 rounded-xl">
                <HelpCircle className="h-6 w-6 text-cyan-700" />
              </div>
              Dudas Comunes
            </CardTitle>
            <CardDescription className="text-base">
              Información sobre uniforme y evaluación.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-blue-700 transition-colors">
                  ¿Cuál es el uniforme reglamentario?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-3">
                  Para clases teóricas: Uniforme diario (Blue Jeans, chemise
                  blanca UNEFA, zapatos negros). Para orden cerrado: Mono
                  deportivo de la universidad o uniforme patriota según
                  instrucción.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-slate-200"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-blue-700 transition-colors">
                  ¿Cómo se evalúa la materia?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-3">
                  La evaluación es continua: 40% práctica (asistencia a paradas,
                  orden cerrado), 30% teórica (exámenes escritos) y 30% trabajos
                  de investigación y defensa.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold hover:text-blue-700 transition-colors">
                  ¿Qué hago si falto a una práctica?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-3">
                  Debe presentar justificativo médico o laboral sellado ante la
                  coordinación de la carrera en un lapso no mayor a 48 horas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
