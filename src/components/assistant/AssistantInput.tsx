import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AssistantInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

/**
 * Campo de entrada del asistente con botón de envío
 */
export default function AssistantInput({ onSend, disabled }: AssistantInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim() || disabled) return;
    onSend(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex gap-3">
      <Input
        placeholder="Escribe una orden táctica..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className="flex-1 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-blue-500 focus-visible:border-blue-500 h-12 rounded-xl font-medium"
        aria-label="Mensaje para el asistente"
      />
      <Button
        onClick={handleSubmit}
        disabled={disabled || !input.trim()}
        size="icon"
        className="bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 h-12 w-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Enviar mensaje"
      >
        <Send className="h-5 w-5" />
      </Button>
    </div>
  );
}
