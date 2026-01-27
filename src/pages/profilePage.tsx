import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  Settings,
  Shield,
  Edit,
  Camera,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

// Datos de ejemplo del estudiante
const studentData = {
  nombre: "Carlos Eduardo",
  apellido: "Rodríguez Pérez",
  cedula: "V-26.458.123",
  email: "carlos.rodriguez@unefa.edu.ve",
  telefono: "+58 412-555-1234",
  direccion: "Los Teques, Estado Miranda",
  carrera: "Ingeniería de Sistemas",
  semestre: "6to Semestre",
  seccion: "D6IN01",
  fechaIngreso: "Septiembre 2022",
  estado: "Activo",
  promedio: "16.8",
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto px-4">
      {/* Header del Perfil */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-olive-800 via-olive-700 to-olive-900 py-12 px-8 shadow-lg">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="relative group">
            <Avatar className="h-32 w-32 border-4 border-white/20 shadow-xl">
              <AvatarImage src="/placeholder-avatar.jpg" alt={studentData.nombre} />
              <AvatarFallback className="bg-olive-600 text-white text-3xl font-bold">
                {studentData.nombre[0]}{studentData.apellido[0]}
              </AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 p-2 bg-gold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="h-4 w-4 text-gold-900" />
            </button>
          </div>

          {/* Info Principal */}
          <div className="text-center md:text-left space-y-3">
            <h1 className="text-3xl font-bold text-white">
              {studentData.nombre} {studentData.apellido}
            </h1>
            <p className="text-olive-200 text-lg">{studentData.cedula}</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge className="bg-gold text-gold-900 font-semibold">
                {studentData.carrera}
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                {studentData.semestre}
              </Badge>
              <Badge variant="success">{studentData.estado}</Badge>
            </div>
          </div>

          {/* Botón Editar */}
          <Button
            variant="outline"
            className="md:ml-auto border-white/30 text-white hover:bg-white/10"
          >
            <Edit className="h-4 w-4 mr-2" />
            Editar Perfil
          </Button>
        </div>
      </section>

      {/* Tabs de Contenido */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-flex">
          <TabsTrigger value="personal" className="gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Datos Personales</span>
            <span className="sm:hidden">Personal</span>
          </TabsTrigger>
          <TabsTrigger value="academico" className="gap-2">
            <GraduationCap className="h-4 w-4" />
            <span className="hidden sm:inline">Datos Académicos</span>
            <span className="sm:hidden">Académico</span>
          </TabsTrigger>
          <TabsTrigger value="configuracion" className="gap-2">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Configuración</span>
            <span className="sm:hidden">Config</span>
          </TabsTrigger>
        </TabsList>

        {/* Tab: Datos Personales */}
        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-olive" />
                Información Personal
              </CardTitle>
              <CardDescription>
                Tus datos de identificación y contacto registrados en el sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Nombre Completo
                </label>
                <p className="text-foreground font-medium">
                  {studentData.nombre} {studentData.apellido}
                </p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Cédula de Identidad
                </label>
                <p className="text-foreground font-medium">{studentData.cedula}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Correo Electrónico
                </label>
                <p className="text-foreground">{studentData.email}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Teléfono
                </label>
                <p className="text-foreground">{studentData.telefono}</p>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Dirección
                </label>
                <p className="text-foreground">{studentData.direccion}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Datos Académicos */}
        <TabsContent value="academico" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-unefa-blue" />
                Información Académica
              </CardTitle>
              <CardDescription>
                Tu información de inscripción y progreso académico
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Carrera
                </label>
                <p className="text-foreground font-medium">{studentData.carrera}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Semestre Actual
                </label>
                <p className="text-foreground font-medium">{studentData.semestre}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Sección
                </label>
                <p className="text-foreground">{studentData.seccion}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Fecha de Ingreso
                </label>
                <p className="text-foreground">{studentData.fechaIngreso}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Promedio General
                </label>
                <p className="text-2xl font-bold text-olive">{studentData.promedio}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Estado
                </label>
                <Badge variant="success" className="text-sm">
                  {studentData.estado}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-patriot-red" />
                Defensa Integral de la Nación
              </CardTitle>
              <CardDescription>
                Estado de la cátedra obligatoria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Defensa Integral de la Nación I</p>
                  <p className="text-sm text-muted-foreground">Período 2024-I</p>
                </div>
                <Badge variant="info">En Curso</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Configuración */}
        <TabsContent value="configuracion" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-muted-foreground" />
                Configuración de Cuenta
              </CardTitle>
              <CardDescription>
                Gestiona las preferencias de tu cuenta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Cambiar Contraseña</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Contraseña Actual</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nueva Contraseña</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                </div>
                <Button variant="military">Actualizar Contraseña</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Preferencias de Notificaciones</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Recibir notificaciones por correo</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Alertas de nuevos anuncios</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Recordatorios de actividades</span>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
