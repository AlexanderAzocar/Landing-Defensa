import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/useMediaQuery";
import type { Message } from "@/types/assistant";
import {
  findMatchingCommand,
  welcomeMessage,
  defaultResponse,
} from "@/data/assistantCommands";
import AssistantDesktop from "./AssistantDesktop";
import AssistantMobile from "./AssistantMobile";

/**
 * Asistente Virtual Responsivo
 * Muestra panel lateral en desktop (>768px) y bottom sheet en móvil
 */
export default function VirtualAssistant() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: welcomeMessage.text,
      sender: welcomeMessage.sender,
      timestamp: new Date(),
    },
  ]);

  /**
   * Procesa el mensaje del usuario y genera respuesta del bot
   */
  const handleSend = useCallback(
    (text: string) => {
      if (!text.trim() || isTyping) return;

      // Agregar mensaje del usuario
      const userMessage: Message = {
        id: Date.now(),
        text: text.trim(),
        sender: "user",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);

      // Mostrar indicador de escritura
      setIsTyping(true);

      // Simular delay de respuesta (500ms)
      setTimeout(() => {
        const command = findMatchingCommand(text);
        let responseText = defaultResponse;
        let targetPath: string | undefined;

        if (command) {
          responseText = command.response;
          if (command.action?.type === "navigate" && command.action.target) {
            targetPath = command.action.target;
          }
        }

        // Agregar respuesta del bot
        const botMessage: Message = {
          id: Date.now() + 1,
          text: responseText,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);

        // Navegar si hay ruta destino
        if (targetPath) {
          setTimeout(() => {
            navigate(targetPath);
          }, 300);
        }
      }, 500);
    },
    [isTyping, navigate]
  );

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón flotante para abrir el asistente */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 md:h-16 md:w-16 rounded-full shadow-[0_10px_40px_rgba(37,99,235,0.4)] bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 z-40 animate-in zoom-in duration-300 hover:scale-110 transition-all group hover:shadow-[0_15px_50px_rgba(37,99,235,0.5)]"
        aria-label="Abrir asistente virtual"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <MessageSquare className="h-6 w-6 md:h-7 md:w-7 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 md:h-4 md:w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 md:h-4 md:w-4 bg-cyan-500" />
        </span>
      </Button>

      {/* Renderizar versión móvil o desktop según el tamaño de pantalla */}
      {isMobile ? (
        <AssistantMobile
          isOpen={isOpen}
          onClose={handleClose}
          messages={messages}
          isTyping={isTyping}
          onSend={handleSend}
        />
      ) : (
        <AssistantDesktop
          isOpen={isOpen}
          onOpenChange={handleOpenChange}
          messages={messages}
          isTyping={isTyping}
          onSend={handleSend}
        />
      )}
    </>
  );
}
