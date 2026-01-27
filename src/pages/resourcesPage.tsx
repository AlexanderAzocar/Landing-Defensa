import { FileText, Download, Book, HelpCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  category: "Legal" | "Manual" | "Guía";
}

const resources: Resource[] = [
  {
    title: "Constitución de la República Bolivariana de Venezuela",
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
    title: "Concepto Estratégico Militar de la Nación",
    type: "PDF",
    size: "3.2 MB",
    category: "Manual",
  },
  {
    title: "Ley Orgánica de Seguridad de la Nación",
    type: "PDF",
    size: "1.2 MB",
    category: "Legal",
  },
  {
    title: "Guía de Estudio - Defensa Integral",
    type: "PDF",
    size: "4.5 MB",
    category: "Guía",
  },
];

const faqs = [
  {
    question: "¿Cuál es el uniforme reglamentario?",
    answer: "Para clases teóricas: Uniforme diario (Blue Jeans, chemise blanca UNEFA, zapatos negros). Para orden cerrado: Mono deportivo de la universidad o uniforme patriota según instrucción del docente.",
  },
  {
    question: "¿Cómo se evalúa la materia?",
    answer: "La evaluación es continua: 40% práctica (asistencia a paradas, orden cerrado), 30% teórica (exámenes escritos) y 30% trabajos de investigación y defensa.",
  },
  {
    question: "¿Qué hago si falto a una práctica?",
    answer: "Debe presentar justificativo médico o laboral sellado ante la coordinación de la carrera en un lapso no mayor a 48 horas después de la actividad.",
  },
  {
    question: "¿Dónde puedo consultar mis notas?",
    answer: "Las notas parciales se publican en el sistema SACE de la universidad. Las notas definitivas se entregan al final del semestre en la coordinación de la carrera.",
  },
];

const categoryColors = {
  Legal: "bg-blue-100 text-blue-700",
  Manual: "bg-emerald-100 text-emerald-700",
  Guía: "bg-amber-100 text-amber-700",
};

export default function ResourcesPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 mb-6">
            <Book className="h-3 w-3 mr-2" />
            Material de Apoyo
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Biblioteca de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Recursos
            </span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Documentación oficial, manuales y guías para tu formación académica
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Downloads Card */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b border-slate-100 pb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <FileText className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Material de Estudio</CardTitle>
                    <p className="text-slate-500 text-sm mt-1">Documentos descargables</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                {resources.map((res, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="p-2.5 bg-white rounded-lg shadow-sm">
                        <FileText className="h-5 w-5 text-slate-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 text-sm truncate">
                          {res.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={`${categoryColors[res.category]} text-xs`}>
                            {res.category}
                          </Badge>
                          <span className="text-xs text-slate-500">{res.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-500 hover:text-blue-700 hover:bg-blue-50"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ Card */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b border-slate-100 pb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-cyan-100 rounded-xl">
                    <HelpCircle className="h-6 w-6 text-cyan-700" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Preguntas Frecuentes</CardTitle>
                    <p className="text-slate-500 text-sm mt-1">Dudas comunes resueltas</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border-b border-slate-100 last:border-0"
                    >
                      <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-700 transition-colors py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            ¿Necesitas más información?
          </h3>
          <p className="text-slate-600 mb-6">
            Si tienes alguna duda adicional, no dudes en contactarnos
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href="/contacto">
              Ir a Contacto <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
