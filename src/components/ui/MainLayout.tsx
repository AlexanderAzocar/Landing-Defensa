import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Menu,
  Shield,
  User,
  LogOut,
  Settings,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import VirtualAssistant from "@/components/assistant/VirtualAssistant";

// Interfaz para items de menú
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full ring-2 ring-slate-200 hover:ring-green-500 transition-all duration-300"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="Cadete" />
                    <AvatarFallback className="bg-gradient-to-br from-green-500 to-green-700 text-white font-bold text-sm">
                      CD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2" align="end" forceMount>
                <DropdownMenuLabel className="font-normal pb-3">
                  <div className="flex flex-col space-y-2">
                    <p className="text-base font-bold leading-none text-slate-900">
                      Cadete Ingeniería
                    </p>
                    <p className="text-xs leading-none text-slate-500">
                      u2024.sistemas@unefa.edu.ve
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer py-2.5">
                  <User className="mr-3 h-4 w-4" /> Perfil
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer py-2.5">
                  <Settings className="mr-3 h-4 w-4" /> Configuración
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 focus:text-red-600 cursor-pointer py-2.5 font-semibold">
                  <LogOut className="mr-3 h-4 w-4" /> Salir
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
        <div className="w-full py-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-slate-200/50 bg-gradient-to-br from-slate-50 to-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Shield className="h-4 w-4 text-blue-700" />
            </div>
            <p className="text-sm text-slate-600">
              © 2026 Cátedra de Defensa Integral -{" "}
              <span className="font-bold text-blue-700">UNEFA Miranda</span>
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Formando ciudadanos comprometidos con la Patria
          </p>
        </div>
      </footer>

      {/* Aquí insertamos el asistente globalmente */}
      <VirtualAssistant />
    </div>
  );
}
