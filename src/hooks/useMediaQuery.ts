import { useSyncExternalStore } from "react";

/**
 * Hook para detectar breakpoints responsive usando useSyncExternalStore
 * @param query - Media query string (e.g., "(min-width: 768px)")
 * @returns boolean indicando si el query coincide
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = (callback: () => void) => {
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
  };

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    return false;
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Hook para detectar si es dispositivo móvil (< 768px)
 */
export function useIsMobile(): boolean {
  return !useMediaQuery("(min-width: 768px)");
}

/**
 * Hook para detectar si es tablet o superior (>= 768px)
 */
export function useIsTablet(): boolean {
  return useMediaQuery("(min-width: 768px)");
}

/**
 * Hook para detectar si es desktop (>= 1024px)
 */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)");
}
