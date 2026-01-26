import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Definimos la estructura de un mensaje
interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
}

export default function VirtualAssistant() {
  // Estado tipado explícitamente
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Saludos! Soy el Asistente de Defensa Integral. ¿En qué puedo guiarte hoy?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;

    // 1. Mensaje del usuario
    const userMsg: Message = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    const currentInput = input.toLowerCase();
    setInput(""); // Limpiamos input inmediatamente

    // 2. Lógica del "Cerebro" (Simulada)
    setTimeout(() => {
      let botResponse =
        "No estoy seguro de esa orden, cadete. Intenta con 'historia' o 'ámbitos'.";
      let targetPath = "";

      if (
        currentInput.includes("historia") ||
        currentInput.includes("doctrina")
      ) {
        botResponse =
          "Entendido. Navegando a la sección de Doctrina y Reseña Histórica...";
        targetPath = "/doctrina";
      } else if (
        currentInput.includes("ambito") ||
        currentInput.includes("economico")
      ) {
        botResponse = "Afirmativo. Desplegando los Ámbitos de Acción.";
        targetPath = "/ambitos";
      } else if (
        currentInput.includes("union") ||
        currentInput.includes("civico")
      ) {
        botResponse = "Copiado. Vamos a la Unión Cívico-Militar.";
        targetPath = "/union";
      }

      const botMsg: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMsg]);

      if (targetPath) {
        navigate(targetPath);
      }
    }, 800);
  };

  // Manejo de evento de teclado
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-[0_10px_40px_rgba(37,99,235,0.4)] bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 z-50 animate-in zoom-in duration-300 hover:scale-110 transition-all group hover:shadow-[0_15px_50px_rgba(37,99,235,0.5)]">
          <MessageSquare className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
          </span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[90vw] sm:w-[480px] flex flex-col pt-0 p-0 bg-gradient-to-br from-slate-900 to-slate-950 border-l-4 border-blue-600"
      >
        {/* Header con gradiente */}
        <div className="bg-gradient-to-r from-blue-700 to-cyan-700 p-6 border-b border-blue-600/30 shadow-lg">
          <SheetHeader>
            <SheetTitle className="text-white font-black uppercase flex items-center gap-3 text-lg">
              <div className="relative">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse absolute"></span>
                <span className="w-3 h-3 rounded-full bg-cyan-400 relative"></span>
              </div>
              Centro de Comando Operacional
            </SheetTitle>
            <p className="text-cyan-100 text-xs mt-2">
              Asistente Virtual de Defensa Integral
            </p>
          </SheetHeader>
        </div>

        <ScrollArea className="flex-1 pr-6 mt-6 h-full rounded-none p-6 bg-slate-900/50">
          <div className="space-y-5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex animate-in slide-in-from-bottom-2 duration-300 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-5 py-3.5 rounded-2xl max-w-[85%] text-sm shadow-lg backdrop-blur-sm transition-all hover:scale-[1.02] ${
                    msg.sender === "user"
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-sm"
                      : "bg-white/95 text-slate-800 border border-slate-200/50 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex gap-3 p-6 pt-4 border-t border-blue-600/30 bg-slate-900/80 backdrop-blur-sm">
          <Input
            placeholder="Escribe una orden táctica..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-blue-500 focus-visible:border-blue-500 h-12 rounded-xl font-medium"
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 h-12 w-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
