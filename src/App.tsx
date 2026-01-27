import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "@/components/ui/MainLayout";

// Páginas principales
import Home from "@/pages/home";
import DoctrinaPage from "@/pages/doctrinaPage";
import AmbitosPage from "@/pages/ambitosPage";
import UnionPage from "@/pages/unionPage";

// Páginas de utilidad
import CalendarPage from "@/pages/calendarPage";
import ResourcesPage from "@/pages/resourcesPage";

// Páginas informacionales
import AboutPage from "@/pages/aboutPage";
import ContactPage from "@/pages/contactPage";
import GlossaryPage from "@/pages/glossaryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* Contenido educativo */}
          <Route path="doctrina" element={<DoctrinaPage />} />
          <Route path="ambitos" element={<AmbitosPage />} />
          <Route path="union" element={<UnionPage />} />

          {/* Utilidades */}
          <Route path="calendario" element={<CalendarPage />} />
          <Route path="recursos" element={<ResourcesPage />} />

          {/* Información institucional */}
          <Route path="acerca" element={<AboutPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="glosario" element={<GlossaryPage />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-6xl font-black text-slate-300">404</h1>
                <p className="text-xl text-slate-600 mt-4">Página no encontrada</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
