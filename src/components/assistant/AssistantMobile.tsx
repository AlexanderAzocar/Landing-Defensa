import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Message } from "@/types/assistant";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import QuickActionChips from "./QuickActionChips";
import AssistantInput from "./AssistantInput";

interface AssistantMobileProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  isTyping: boolean;
  onSend: (message: string) => void;
}

/**
 * Versión móvil del asistente (bottom sheet - 70vh)
 */
export default function AssistantMobile({
  isOpen,
  onClose,
  messages,
  isTyping,
  onSend,
}: AssistantMobileProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al final cuando hay nuevos mensajes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Bloquear scroll del body cuando está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-40 animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Bottom Sheet */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-br from-slate-900 to-slate-950 rounded-t-3xl shadow-2xl animate-in slide-in-from-bottom duration-300 flex flex-col"
        style={{ height: "70vh", maxHeight: "70vh" }}
        role="dialog"
        aria-modal="true"
        aria-label="Asistente Virtual"
      >
        {/* Handle de arrastre (decorativo) */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 bg-slate-600 rounded-full" />
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-cyan-700 px-4 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-white font-bold text-base flex items-center gap-2">
              <div className="relative" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse absolute" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 relative" />
              </div>
              Centro de Comando
            </h2>
            <p className="text-cyan-100 text-xs">Asistente de Defensa Integral</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full"
            aria-label="Cerrar asistente"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Área de mensajes */}
        <ScrollArea className="flex-1 min-h-0" ref={scrollRef}>
          <div className="p-4 space-y-3">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {isTyping && <TypingIndicator />}
          </div>
        </ScrollArea>

        {/* Área de entrada */}
        <div className="p-4 pt-3 border-t border-blue-600/30 bg-slate-900/90 backdrop-blur-sm space-y-3 safe-area-inset-bottom">
          <QuickActionChips onAction={onSend} />
          <AssistantInput onSend={onSend} disabled={isTyping} />
        </div>
      </div>
    </>
  );
}
