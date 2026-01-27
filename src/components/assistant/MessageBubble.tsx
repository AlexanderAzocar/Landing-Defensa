import type { Message } from "@/types/assistant";

interface MessageBubbleProps {
  message: Message;
}

/**
 * Componente para mostrar un mensaje individual en el chat
 */
export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === "user";

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-VE", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`flex animate-in slide-in-from-bottom-2 duration-300 ${
        isUser ? "justify-end" : "justify-start"
      }`}
      role="article"
      aria-label={`Mensaje de ${isUser ? "usuario" : "asistente"}`}
    >
      <div
        className={`px-4 py-3 rounded-2xl max-w-[85%] shadow-lg backdrop-blur-sm transition-all hover:scale-[1.01] ${
          isUser
            ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-sm"
            : "bg-white/95 text-slate-800 border border-slate-200/50 rounded-bl-sm"
        }`}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
        <time
          className={`text-[10px] mt-1 block ${
            isUser ? "text-blue-200" : "text-slate-400"
          }`}
          dateTime={message.timestamp.toISOString()}
        >
          {formatTime(message.timestamp)}
        </time>
      </div>
    </div>
  );
}
