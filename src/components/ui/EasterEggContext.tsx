"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface EasterEggContextType {
  showEasterEgg: boolean;
  triggerEasterEgg: () => void;
}

const EasterEggContext = createContext<EasterEggContextType>({
  showEasterEgg: false,
  triggerEasterEgg: () => {},
});

export function EasterEggProvider({ children }: { children: ReactNode }) {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const triggerEasterEgg = useCallback(() => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 15000);
  }, []);

  return (
    <EasterEggContext.Provider value={{ showEasterEgg, triggerEasterEgg }}>
      {children}
    </EasterEggContext.Provider>
  );
}

export function useEasterEgg() {
  return useContext(EasterEggContext);
}
