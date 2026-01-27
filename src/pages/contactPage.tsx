import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const contactInfo = [
  {
    icon: Phone,
    titulo: "Teléfonos",
    detalles: ["+58 212-555-1234", "+58 212-555-5678"],
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Mail,
    titulo: "Correo Electrónico",
    detalles: ["contacto@unefa-miranda.edu.ve"],
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: MapPin,
    titulo: "Dirección",
    detalles: ["Carretera Panamericana, Km 23", "Los Teques, Estado Miranda"],
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Globe,
    titulo: "Sitio Web",
    detalles: ["www.unefa.edu.ve"],
    color: "bg-emerald-100 text-emerald-600",
  },
];

const horarios = [
  { dia: "Lunes a Viernes", horario: "7:00 AM - 7:00 PM", abierto: true },
  { dia: "Sábados", horario: "8:00 AM - 12:00 PM", abierto: true },
  { dia: "Domingos y Feriados", horario: "Cerrado", abierto: false },
];

const departamentos = [
  { nombre: "Control de Estudios", telefono: "Ext. 101", email: "control@unefa-miranda.edu.ve" },
  { nombre: "Coordinación Académica", telefono: "Ext. 102", email: "academica@unefa-miranda.edu.ve" },
  { nombre: "Defensa Integral", telefono: "Ext. 103", email: "defensa@unefa-miranda.edu.ve" },
  { nombre: "Soporte Técnico", telefono: "Ext. 104", email: "soporte@unefa-miranda.edu.ve" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setEnviando(false);
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    alert("Mensaje enviado correctamente");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20 mb-6">
            <MessageSquare className="h-3 w-3 mr-2" />
            Estamos para ayudarte
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Contáctanos
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Si tienes preguntas sobre la cátedra de Defensa Integral o necesitas
            información adicional, no dudes en comunicarte con nosotros
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow text-center">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{info.titulo}</h3>
                  {info.detalles.map((detalle, i) => (
                    <p key={i} className="text-sm text-slate-600">{detalle}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Info */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Send className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Envíanos un Mensaje</CardTitle>
                    <p className="text-slate-500 text-sm mt-1">Te responderemos a la brevedad</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Nombre Completo</label>
                      <Input
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Correo Electrónico</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Asunto</label>
                    <Input
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      placeholder="¿En qué podemos ayudarte?"
                      required
                      className="bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Mensaje</label>
                    <Textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Escribe tu mensaje aquí..."
                      rows={5}
                      required
                      className="bg-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={enviando}
                  >
                    {enviando ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Hours and Departments */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-cyan-100 rounded-xl">
                      <Clock className="h-6 w-6 text-cyan-600" />
                    </div>
                    <CardTitle className="text-xl">Horario de Atención</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {horarios.map((h, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="font-medium text-slate-700">{h.dia}</span>
                        <Badge className={h.abierto ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}>
                          {h.horario}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-amber-100 rounded-xl">
                      <Building className="h-6 w-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl">Departamentos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {departamentos.map((dep, index) => (
                      <div key={index} className="p-3 bg-slate-50 rounded-lg">
                        <p className="font-semibold text-slate-900">{dep.nombre}</p>
                        <div className="flex flex-wrap gap-x-4 text-sm text-slate-500 mt-1">
                          <span>{dep.telefono}</span>
                          <span>{dep.email}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-100 rounded-xl">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Ubicación</CardTitle>
                  <p className="text-slate-500 text-sm mt-1">
                    Carretera Panamericana, Km 23, Los Teques, Estado Miranda
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-[21/9] bg-slate-100 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1234567890123!2d-67.0406!3d10.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIwJzQ0LjIiTiA2N8KwMDInMjYuMiJX!5e0!3m2!1ses!2sve!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación UNEFA Miranda"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
