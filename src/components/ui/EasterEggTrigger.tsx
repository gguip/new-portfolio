"use client";

import { useRef, useEffect, ReactNode } from "react";
import { VantaBirds } from "./VantaBirds";
import { useEasterEgg } from "./EasterEggContext";

interface EasterEggTriggerProps {
  children: ReactNode;
}

export function EasterEggTrigger({ children }: EasterEggTriggerProps) {
  const clickCountRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout>(undefined);
  const { showEasterEgg, isFadingOut, triggerEasterEgg } = useEasterEgg();

  const handleClick = () => {
    clearTimeout(timerRef.current);
    clickCountRef.current += 1;

    if (clickCountRef.current >= 3) {
      clickCountRef.current = 0;
      triggerEasterEgg();
    } else {
      timerRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 1000);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <>
      <div
        onClick={handleClick}
        className="inline-block cursor-pointer select-none"
      >
        {children}
      </div>
      <VantaBirds isActive={showEasterEgg} isFadingOut={isFadingOut} />
    </>
  );
}
