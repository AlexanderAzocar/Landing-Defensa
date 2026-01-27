/**
 * Tipos para el Asistente Virtual
 */

export interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

export interface AssistantState {
  messages: Message[];
  isTyping: boolean;
  isOpen: boolean;
}

export interface AssistantCommand {
  id: string;
  keywords: string[];
  response: string;
  action?: {
    type: "navigate" | "external" | "info";
    target?: string;
  };
  category: "navegacion" | "informacion" | "ayuda";
}

export interface QuickAction {
  id: string;
  label: string;
  command: string;
  icon?: string;
}
