import { ShieldCheck, Users2, Building2, Gavel } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function UnionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-16">
      {/* ENCABEZADO */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Users2 className="h-4 w-4" /> Eje Fundamental
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1]">
            Unión
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mt-2">
              Cívico-Militar
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            La fusión estratégica de las fuerzas populares y la Fuerza Armada
            Nacional Bolivariana (FANB) para garantizar la{" "}
            <span className="font-bold text-blue-700">
              independencia y soberanía
            </span>{" "}
            de la Nación.
          </p>

          <Alert className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300 shadow-md">
            <ShieldCheck className="h-5 w-5 text-blue-700" />
            <AlertTitle className="text-blue-900 font-bold ml-2 text-base">
              Principio de Corresponsabilidad
            </AlertTitle>
            <AlertDescription className="text-blue-800 ml-2 text-sm mt-2 leading-relaxed">
              “El Estado y la sociedad son corresponsables en la defensa y
              desarrollo integral de la Nación.”{" "}
              <span className="font-semibold">(CRBV Art. 326)</span>
            </AlertDescription>
          </Alert>
        </div>

        {/* COMPONENTE VISUAL / CITA */}
        <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl overflow-hidden flex items-center justify-center shadow-strong animate-in zoom-in duration-700 group">
          {/* Patrón de fondo mejorado */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/40 via-cyan-500/20 to-transparent group-hover:opacity-30 transition-opacity duration-500"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative z-10 text-center p-10 max-w-lg">
            <div className="mb-6">
              <div className="inline-block p-4 bg-blue-600/10 backdrop-blur-sm rounded-2xl">
                <ShieldCheck className="h-12 w-12 text-cyan-400" />
              </div>
            </div>
            <blockquote className="text-3xl md:text-4xl font-serif italic text-white mb-8 leading-tight">
              “El pueblo es al ejército, lo que el agua es al pez.”
            </blockquote>
            <cite className="text-cyan-400 font-bold not-italic uppercase tracking-[0.2em] text-sm">
              — Mao Zedong
            </cite>
            <p className="text-slate-400 text-xs mt-3 font-medium">
              (Referente doctrinario de la Guerra Popular)
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* ESTRUCTURA ORGANIZATIVA (ODDI) */}
      <div className="space-y-10">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            Sistema Defensivo Territorial
          </h3>
          <p className="text-slate-600 text-lg">
            ¿Cómo se organiza esta unión en la práctica?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* TARJETA 1 */}
          <Card className="relative overflow-hidden hover:shadow-strong transition-all duration-500 border-t-[6px] border-t-blue-600 bg-white/80 backdrop-blur-sm hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 group-hover:from-blue-500/5 group-hover:to-blue-500/10 transition-all duration-500"></div>
            <CardContent className="pt-8 text-center space-y-6 relative z-10">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="h-8 w-8 text-blue-700" />
              </div>
              <h4 className="font-black text-xl text-slate-900">
                FANB + Milicia
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                El componente armado profesional junto al{" "}
                <strong className="text-blue-700">
                  Componente Especial (Milicia Bolivariana)
                </strong>
                , que agrupa al pueblo en armas.
              </p>
            </CardContent>
          </Card>

          {/* TARJETA 2 */}
          <Card className="relative overflow-hidden hover:shadow-strong transition-all duration-500 border-t-[6px] border-t-cyan-600 bg-white/80 backdrop-blur-sm hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/5 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>
            <CardContent className="pt-8 text-center space-y-6 relative z-10">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <Gavel className="h-8 w-8 text-cyan-700" />
              </div>
              <h4 className="font-black text-xl text-slate-900">ODDI</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-cyan-700">
                  Órganos de Dirección de Defensa Integral.
                </strong>{" "}
                Estructuras de mando que integran al gobierno y las fuerzas
                vivas a nivel Nacional, Regional (Estadal), Municipal y Comunal.
              </p>
            </CardContent>
          </Card>

          {/* TARJETA 3 */}
          <Card className="relative overflow-hidden hover:shadow-strong transition-all duration-500 border-t-[6px] border-t-slate-600 bg-white/80 backdrop-blur-sm hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/0 to-slate-500/5 group-hover:from-slate-500/5 group-hover:to-slate-500/10 transition-all duration-500"></div>
            <CardContent className="pt-8 text-center space-y-6 relative z-10">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-8 w-8 text-slate-700" />
              </div>
              <h4 className="font-black text-xl text-slate-900">
                Pueblo Organizado
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Consejos Comunales, Comunas, CLAP y organizaciones sociales que
                participan en la defensa no armada (alimentación, salud,
                inteligencia social).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
