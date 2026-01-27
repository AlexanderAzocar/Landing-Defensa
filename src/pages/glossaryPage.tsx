import { useState, useMemo } from "react";
import { BookOpen, Search, Filter } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface TerminoGlosario {
  termino: string;
  definicion: string;
  categoria: string;
}

const glosario: TerminoGlosario[] = [
  {
    termino: "Ámbito de Acción Estratégica",
    definicion: "Espacio conceptual donde se desarrollan las actividades del Estado para garantizar la seguridad y defensa de la Nación. Incluye los ámbitos económico, social, político, cultural, geográfico, ambiental y militar.",
    categoria: "Estrategia",
  },
  {
    termino: "CRBV",
    definicion: "Constitución de la República Bolivariana de Venezuela. Carta magna vigente desde 1999 que establece los principios fundamentales del Estado venezolano.",
    categoria: "Legal",
  },
  {
    termino: "Corresponsabilidad",
    definicion: "Principio constitucional (Art. 326 CRBV) que establece la obligación compartida entre el Estado y la sociedad civil en la seguridad y defensa de la Nación.",
    categoria: "Principios",
  },
  {
    termino: "Defensa Integral",
    definicion: "Conjunto de sistemas, métodos, medidas y acciones de defensa, cualesquiera sean su naturaleza e intensidad, que en forma activa formule, coordine y ejecute el Estado con la participación de las instituciones públicas y privadas.",
    categoria: "Conceptos",
  },
  {
    termino: "Doctrina Militar Bolivariana",
    definicion: "Conjunto de principios, valores y normas que orientan el pensamiento y la acción de la Fuerza Armada Nacional Bolivariana, fundamentados en el ideario del Libertador Simón Bolívar.",
    categoria: "Militar",
  },
  {
    termino: "FANB",
    definicion: "Fuerza Armada Nacional Bolivariana. Institución armada de la Nación integrada por el Ejército, la Armada, la Aviación y la Guardia Nacional Bolivariana.",
    categoria: "Militar",
  },
  {
    termino: "Guerra Popular Prolongada",
    definicion: "Concepto estratégico de defensa que contempla la participación de todo el pueblo en la defensa de la Nación ante una agresión externa, mediante una resistencia activa y prolongada.",
    categoria: "Estrategia",
  },
  {
    termino: "Milicia Bolivariana",
    definicion: "Cuerpo especial organizado por el Estado, integrado por hombres y mujeres que se desempeñan como reservistas, para complementar a la FANB en la defensa integral de la Nación.",
    categoria: "Militar",
  },
  {
    termino: "Orden Interno",
    definicion: "Estado de funcionamiento normal de las instituciones del país, donde prevalece el acatamiento de las leyes y se garantiza el libre ejercicio de los derechos ciudadanos.",
    categoria: "Conceptos",
  },
  {
    termino: "Pensamiento Bolivariano",
    definicion: "Conjunto de ideas, principios y valores expresados por el Libertador Simón Bolívar, que constituyen el fundamento ideológico de la República Bolivariana de Venezuela.",
    categoria: "Principios",
  },
  {
    termino: "Seguridad de la Nación",
    definicion: "Condición, estado o situación que garantiza el goce y ejercicio de los derechos y garantías en los ámbitos económico, social, político, cultural, geográfico, ambiental y militar.",
    categoria: "Conceptos",
  },
  {
    termino: "Soberanía Nacional",
    definicion: "Cualidad del poder del Estado que implica la supremacía en el orden interno y la independencia en el orden externo. Reside intransferiblemente en el pueblo.",
    categoria: "Principios",
  },
  {
    termino: "Teatro de Operaciones",
    definicion: "Espacio geográfico donde se desarrollan las operaciones militares. Puede ser terrestre, marítimo, aéreo o una combinación de estos.",
    categoria: "Militar",
  },
  {
    termino: "UNEFA",
    definicion: "Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional Bolivariana. Institución de educación universitaria adscrita al Ministerio del Poder Popular para la Defensa.",
    categoria: "Instituciones",
  },
  {
    termino: "Unión Cívico-Militar",
    definicion: "Principio que establece la integración y cooperación entre la sociedad civil y las fuerzas armadas para la defensa y desarrollo integral de la Nación.",
    categoria: "Principios",
  },
];

const categorias = ["Todas", "Conceptos", "Estrategia", "Instituciones", "Legal", "Militar", "Principios"];

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const categoryColors: Record<string, string> = {
  Conceptos: "bg-emerald-100 text-emerald-700",
  Estrategia: "bg-blue-100 text-blue-700",
  Instituciones: "bg-amber-100 text-amber-700",
  Legal: "bg-red-100 text-red-700",
  Militar: "bg-slate-200 text-slate-700",
  Principios: "bg-purple-100 text-purple-700",
};

export default function GlossaryPage() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");
  const [letraActiva, setLetraActiva] = useState<string | null>(null);

  const terminosFiltrados = useMemo(() => {
    return glosario
      .filter((item) => {
        const coincideBusqueda =
          item.termino.toLowerCase().includes(busqueda.toLowerCase()) ||
          item.definicion.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria = categoriaActiva === "Todas" || item.categoria === categoriaActiva;
        const coincideLetra = !letraActiva || item.termino.toUpperCase().startsWith(letraActiva);
        return coincideBusqueda && coincideCategoria && coincideLetra;
      })
      .sort((a, b) => a.termino.localeCompare(b.termino, "es"));
  }, [busqueda, categoriaActiva, letraActiva]);

  const letrasDisponibles = useMemo(() => {
    return new Set(glosario.map((item) => item.termino[0].toUpperCase()));
  }, []);

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoriaActiva("Todas");
    setLetraActiva(null);
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/20 mb-6">
            <BookOpen className="h-3 w-3 mr-2" />
            Referencia Rápida
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Glosario de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Términos
            </span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Definiciones clave de la cátedra Defensa Integral de la Nación
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-4 space-y-4">
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              placeholder="Buscar término o definición..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="pl-12 h-12 text-base bg-slate-50 border-slate-200"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <Filter className="h-4 w-4 text-slate-400 mt-2 mr-1" />
            {categorias.map((cat) => (
              <Button
                key={cat}
                variant={categoriaActiva === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setCategoriaActiva(cat)}
                className={categoriaActiva === cat ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Alphabet Navigation */}
          <div className="flex flex-wrap justify-center gap-1 pt-4 border-t border-slate-100">
            <Button
              variant={letraActiva === null ? "default" : "ghost"}
              size="sm"
              onClick={() => setLetraActiva(null)}
              className={`text-xs px-3 ${letraActiva === null ? "bg-blue-600" : ""}`}
            >
              Todas
            </Button>
            {alfabeto.map((letra) => (
              <Button
                key={letra}
                variant={letraActiva === letra ? "default" : "ghost"}
                size="sm"
                onClick={() => setLetraActiva(letra)}
                disabled={!letrasDisponibles.has(letra)}
                className={`text-xs px-2 min-w-[32px] ${letraActiva === letra ? "bg-blue-600" : ""}`}
              >
                {letra}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Counter */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-600">
              {terminosFiltrados.length} término(s) encontrado(s)
            </p>
            {(busqueda || categoriaActiva !== "Todas" || letraActiva) && (
              <Button variant="ghost" size="sm" onClick={limpiarFiltros} className="text-blue-600">
                Limpiar filtros
              </Button>
            )}
          </div>

          {/* Terms List */}
          {terminosFiltrados.length === 0 ? (
            <Card className="border-0 shadow-lg">
              <CardContent className="py-16 text-center">
                <BookOpen className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 mb-4">
                  No se encontraron términos con los filtros seleccionados
                </p>
                <Button variant="outline" onClick={limpiarFiltros}>
                  Ver todos los términos
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b border-slate-100">
                <CardTitle>Definiciones</CardTitle>
                <p className="text-slate-500 text-sm">Haz clic en un término para ver su definición</p>
              </CardHeader>
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {terminosFiltrados.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b border-slate-100 last:border-0"
                    >
                      <AccordionTrigger className="hover:no-underline px-6 py-4">
                        <div className="flex items-center gap-3 text-left">
                          <span className="font-semibold text-slate-900">{item.termino}</span>
                          <Badge className={`text-xs ${categoryColors[item.categoria] || "bg-slate-100"}`}>
                            {item.categoria}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-slate-600 leading-relaxed">{item.definicion}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          )}

          {/* Info Note */}
          <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Este glosario está basado en la Constitución de la República Bolivariana de Venezuela,
              la Ley Orgánica de Seguridad de la Nación y los documentos oficiales de la cátedra.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
