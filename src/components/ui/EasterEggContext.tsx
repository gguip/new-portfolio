"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface EasterEggContextType {
  showEasterEgg: boolean;
  isFadingOut: boolean;
  triggerEasterEgg: () => void;
}

const EasterEggContext = createContext<EasterEggContextType>({
  showEasterEgg: false,
  isFadingOut: false,
  triggerEasterEgg: () => {},
});

export function EasterEggProvider({ children }: { children: ReactNode }) {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const triggerEasterEgg = useCallback(() => {
    setShowEasterEgg(true);
    setTimeout(() => {
      setIsFadingOut(true);        // inicia fade dos pássaros
      setTimeout(() => {
        setShowEasterEgg(false);   // agora sim destrói o vanta
        setIsFadingOut(false);     // libera seções para fade-in
      }, 1000);                     // 1s = duração do CSS transition
    }, 15000);
  }, []);

  return (
    <EasterEggContext.Provider value={{ showEasterEgg, isFadingOut, triggerEasterEgg }}>
      {children}
    </EasterEggContext.Provider>
  );
}

export function useEasterEgg() {
  return useContext(EasterEggContext);
}
