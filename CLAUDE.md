# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/claude-code) when working with code in this repository.

## Project Overview

Educational web platform for UNEFA (Universidad Nacional Experimental de la Fuerza Armada) Miranda campus. The site teaches "Defensa Integral de la Nación" - a course on Venezuelan national defense, military doctrine, and civic-military union.

## Tech Stack

- **Framework:** React 19 + TypeScript 5.9
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI primitives with Shadcn/UI patterns
- **Routing:** React Router DOM 7
- **Icons:** Lucide React

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # TypeScript check + production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (Shadcn/UI style)
│   └── assistant/    # Virtual Assistant chatbot
├── pages/            # Route page components
├── lib/              # Utilities (cn() for class merging)
├── App.tsx           # Router configuration
└── main.tsx          # Entry point
```

## Key Conventions

- **Path alias:** Use `@/*` for imports from `src/` (e.g., `import { Button } from "@/components/ui/button"`)
- **Language:** All UI and comments are in Spanish
- **Component pattern:** Compound components with Radix primitives wrapped in Tailwind styling
- **Styling:** Utility-first Tailwind with gradient backgrounds and backdrop blur effects

## Pages/Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | home.tsx | Landing page |
| `/doctrina` | doctrinaPage.tsx | Military doctrine content |
| `/ambitos` | ambitosPage.tsx | Strategic action domains |
| `/union` | unionPage.tsx | Civic-military union |
| `/calendario` | calendarPage.tsx | Event schedule |
| `/recursos` | resourcesPage.tsx | Downloads and resources |

## UI Components

Located in `src/components/ui/`. Follow Shadcn/UI patterns - Radix primitives with Tailwind CSS and class-variance-authority for variants. MainLayout provides the persistent header, footer, and navigation wrapper.
