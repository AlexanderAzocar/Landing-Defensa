import { Button } from "@/components/ui/button";
import { quickActions } from "@/data/assistantCommands";

interface QuickActionChipsProps {
  onAction: (command: string) => void;
}

/**
 * Chips de acciones rápidas con scroll horizontal
 */
export default function QuickActionChips({ onAction }: QuickActionChipsProps) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
      role="group"
      aria-label="Acciones rápidas"
    >
      {quickActions.map((action) => (
        <Button
          key={action.id}
          variant="outline"
          size="sm"
          onClick={() => onAction(action.command)}
          className="shrink-0 bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-blue-500 text-xs rounded-full px-4 transition-all"
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}
