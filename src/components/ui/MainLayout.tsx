import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Menu,
  Shield,
  ChevronRight,
  BookOpen,
  Mail,
  Info,
  ExternalLink,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import VirtualAssistant from "@/components/assistant/VirtualAssistant";

interface NavItem {
  label: string;
  path: string;
}

export default function MainLayout() {
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: "Inicio", path: "/" },
    { label: "Doctrina", path: "/doctrina" },
    { label: "Ámbitos", path: "/ambitos" },
    { label: "Unión Cívico-Militar", path: "/union" },
    { label: "Recursos", path: "/recursos" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 flex h-20 items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-2.5 rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="font-black text-xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  UNEFA
                </span>
                <span className="block text-xs text-slate-500 font-medium -mt-1">
                  Defensa Integral
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2 text-sm font-semibold">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant="ghost"
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    : "text-slate-600 hover:text-blue-700 hover:bg-slate-100"
                }`}
              >
                <Link to={item.path}>
                  {item.label}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              </Button>
            ))}
          </nav>

          {/* ACTIONS & MOBILE */}
          <div className="flex items-center gap-3">
            {/* CTA Button - Desktop */}
            <Button
              asChild
              className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link to="/contacto">
                Contacto <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* MOBILE MENU */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-slate-100 transition-colors"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center gap-3 text-lg">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Shield className="h-5 w-5 text-blue-700" />
                    </div>
                    Navegación
                  </SheetTitle>
                </SheetHeader>
                <Separator className="my-6" />
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.path}
                      asChild
                      variant="ghost"
                      className={`justify-start w-full h-12 text-base font-semibold transition-all duration-300 ${
                        location.pathname === item.path
                          ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                          : "hover:bg-slate-100"
                      }`}
                    >
                      <Link to={item.path}>
                        <ChevronRight className="mr-3 h-5 w-5" />
                        {item.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="w-full animate-in fade-in duration-500">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-slate-200/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Logo y descripción */}
            <div className="md:col-span-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="font-black text-xl text-white">UNEFA</span>
                  <span className="block text-xs text-slate-400">Defensa Integral</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Formando ciudadanos comprometidos con la seguridad, defensa y desarrollo integral de la Nación.
              </p>
            </div>

            {/* Contenido */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Contenido</h4>
              <nav className="flex flex-col space-y-3">
                <Link to="/doctrina" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Doctrina Militar
                </Link>
                <Link to="/ambitos" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Ámbitos de Acción
                </Link>
                <Link to="/union" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Unión Cívico-Militar
                </Link>
              </nav>
            </div>

            {/* Recursos */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Recursos</h4>
              <nav className="flex flex-col space-y-3">
                <Link to="/calendario" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Calendario
                </Link>
                <Link to="/recursos" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Biblioteca
                </Link>
                <Link to="/glosario" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <BookOpen className="h-3.5 w-3.5" /> Glosario
                </Link>
              </nav>
            </div>

            {/* Institución */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Institución</h4>
              <nav className="flex flex-col space-y-3">
                <Link to="/acerca" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Info className="h-3.5 w-3.5" /> Acerca de UNEFA
                </Link>
                <Link to="/contacto" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> Contacto
                </Link>
              </nav>
            </div>
          </div>

          <Separator className="bg-slate-700/50 mb-8" />

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">
              © 2026 Cátedra de Defensa Integral · <span className="text-blue-400 font-semibold">UNEFA Miranda</span>
            </p>
            <p className="text-xs text-slate-600">
              Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>

      {/* Aquí insertamos el asistente globalmente */}
      <VirtualAssistant />
    </div>
  );
}
