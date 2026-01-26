import { ScrollText, ShieldAlert, History } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DoctrinaPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Doctrina Bolivariana
        </h2>
        <p className="text-muted-foreground">
          Bases filosóficas e históricas del Pensamiento Militar Venezolano.
        </p>
      </div>

      <Separator className="my-4" />

      <Tabs defaultValue="fundamentos" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
          <TabsTrigger value="fundamentos" className="text-md">
            Fundamentos Ideológicos
          </TabsTrigger>
          <TabsTrigger value="legislacion" className="text-md">
            Base Legal
          </TabsTrigger>
        </TabsList>

        {/* PESTAÑA 1: FUNDAMENTOS */}
        <TabsContent
          value="fundamentos"
          className="space-y-6 focus-visible:outline-none"
        >
          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <History className="h-5 w-5 text-green-700" /> Raíces Históricas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative pl-4 border-l-2 border-slate-200 hover:border-green-400 transition-colors">
                <h4 className="font-bold text-lg text-slate-800">
                  Simón Bolívar
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  "Sigo la gloriosa carrera de las armas solo para lograr el
                  honor que ellas dan: libertar a mi patria y merecer las
                  bendiciones de los pueblos". La visión antiimperialista y la
                  necesidad de un ejército para defender la soberanía, no para
                  conquistar.
                </p>
              </div>

              <div className="relative pl-4 border-l-2 border-slate-200 hover:border-yellow-400 transition-colors">
                <h4 className="font-bold text-lg text-slate-800">
                  Francisco de Miranda
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Precursor del concepto de <strong>"Ciudadano Soldado"</strong>
                  . Miranda planteaba que la defensa de la libertad no es
                  exclusiva de una casta militar, sino deber de todo ciudadano
                  capaz.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-red-700" /> Guerra Popular
                Prolongada
              </CardTitle>
              <CardDescription>
                Concepción Estratégica Defensiva Nacional
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                Es la estrategia adoptada por Venezuela ante una hipotética
                agresión de una potencia militar superior. Se basa en:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-slate-600">
                <li>Desgaste sistemático del enemigo.</li>
                <li>Uso del terreno y dispersión de fuerzas.</li>
                <li>
                  Participación activa de toda la población (no solo FANB).
                </li>
                <li>Cambio de guerra convencional a guerra de resistencia.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PESTAÑA 2: LEGISLACIÓN */}
        <TabsContent value="legislacion" className="focus-visible:outline-none">
          <Card className="bg-slate-50 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ScrollText className="h-5 w-5 text-blue-600" /> Constitución
                (CRBV)
              </CardTitle>
              <CardDescription>
                Artículos clave para la defensa integral
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
                <span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold mb-2">
                  Artículo 322
                </span>
                <p className="italic text-slate-600 text-sm">
                  "La seguridad de la Nación es competencia esencial y
                  responsabilidad del Estado, fundamentada en el desarrollo
                  integral de ésta y su defensa es responsabilidad de los
                  venezolanos..."
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
                <span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold mb-2">
                  Artículo 326
                </span>
                <p className="text-sm text-slate-600">
                  Establece el principio de <strong>Corresponsabilidad</strong>:
                  La seguridad no es solo un tema militar, sino que involucra a
                  la sociedad civil en los ámbitos económico, social, político,
                  cultural, geográfico, ambiental y militar.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
