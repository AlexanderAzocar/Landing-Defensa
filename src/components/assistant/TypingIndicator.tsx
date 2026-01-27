/**
 * Indicador de escritura animado (3 puntos)
 */
export default function TypingIndicator() {
  return (
    <div
      className="flex justify-start animate-in fade-in duration-200"
      role="status"
      aria-label="El asistente está escribiendo"
    >
      <div className="bg-white/95 border border-slate-200/50 rounded-2xl rounded-bl-sm px-4 py-3 shadow-lg">
        <div className="flex items-center gap-1">
          <span
            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}
