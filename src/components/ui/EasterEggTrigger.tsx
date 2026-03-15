"use client";

import { useState, useEffect, ReactNode } from "react";
import { VantaBirds } from "./VantaBirds";
import { useEasterEgg } from "./EasterEggContext";

interface EasterEggTriggerProps {
  children: ReactNode;
}

export function EasterEggTrigger({ children }: EasterEggTriggerProps) {
  const [clickCount, setClickCount] = useState(0);
  const { showEasterEgg, triggerEasterEgg } = useEasterEgg();

  useEffect(() => {
    if (clickCount > 0 && clickCount < 3) {
      const timer = setTimeout(() => setClickCount(0), 1000);
      return () => clearTimeout(timer);
    }

    if (clickCount >= 3) {
      triggerEasterEgg();
      setClickCount(0);
    }
  }, [clickCount, triggerEasterEgg]);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <>
      <div onClick={handleClick} className="inline-block cursor-pointer select-none">
        {children}
      </div>
      <VantaBirds isActive={showEasterEgg} />
    </>
  );
}
