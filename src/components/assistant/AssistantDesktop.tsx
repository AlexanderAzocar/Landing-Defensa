import { useEffect, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Message } from "@/types/assistant";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import QuickActionChips from "./QuickActionChips";
import AssistantInput from "./AssistantInput";

interface AssistantDesktopProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  messages: Message[];
  isTyping: boolean;
  onSend: (message: string) => void;
}

/**
 * Versión desktop del asistente (panel lateral derecho - 480px)
 */
export default function AssistantDesktop({
  isOpen,
  onOpenChange,
  messages,
  isTyping,
  onSend,
}: AssistantDesktopProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al final cuando hay nuevos mensajes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[480px] flex flex-col pt-0 p-0 bg-gradient-to-br from-slate-900 to-slate-950 border-l-4 border-blue-600"
        aria-describedby="assistant-description"
      >
        {/* Header con gradiente */}
        <div className="bg-gradient-to-r from-blue-700 to-cyan-700 p-6 border-b border-blue-600/30 shadow-lg">
          <SheetHeader>
            <SheetTitle className="text-white font-black uppercase flex items-center gap-3 text-lg">
              <div className="relative" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse absolute" />
                <span className="w-3 h-3 rounded-full bg-cyan-400 relative" />
              </div>
              Centro de Comando Operacional
            </SheetTitle>
            <p id="assistant-description" className="text-cyan-100 text-xs mt-2">
              Asistente Virtual de Defensa Integral
            </p>
          </SheetHeader>
        </div>

        {/* Área de mensajes */}
        <ScrollArea className="flex-1 h-full" ref={scrollRef}>
          <div className="p-6 space-y-4">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {isTyping && <TypingIndicator />}
          </div>
        </ScrollArea>

        {/* Área de entrada */}
        <div className="p-6 pt-4 border-t border-blue-600/30 bg-slate-900/80 backdrop-blur-sm space-y-3">
          <QuickActionChips onAction={onSend} />
          <AssistantInput onSend={onSend} disabled={isTyping} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
