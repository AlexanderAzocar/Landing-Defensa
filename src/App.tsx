import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "@/components/template/MainLayout";

// Páginas existentes
import Home from "@/pages/home";
import DoctrinaPage from "@/pages/doctrinaPage";
import AmbitosPage from "@/pages/ambitosPage";
import UnionPage from "@/pages/unionPage";

// Páginas NUEVAS (Asegúrate de crearlas primero)
import CalendarPage from "@/pages/calendarPage";
import ResourcesPage from "@/pages/resourcesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* El MainLayout envuelve todas estas rutas */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="doctrina" element={<DoctrinaPage />} />
          <Route path="ambitos" element={<AmbitosPage />} />
          <Route path="union" element={<UnionPage />} />

          {/* NUEVAS RUTAS AÑADIDAS */}
          <Route path="calendario" element={<CalendarPage />} />
          <Route path="recursos" element={<ResourcesPage />} />

          {/* Página 404 opcional */}
          <Route
            path="*"
            element={
              <div className="p-10 text-center">
                404 - Ruta no encontrada, cadete.
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
