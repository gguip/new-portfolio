"use client";

import { useState, useEffect, ReactNode } from "react";
import { VantaBirds } from "./VantaBirds";

interface EasterEggTriggerProps {
  children: ReactNode;
}

export function EasterEggTrigger({ children }: EasterEggTriggerProps) {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    if (clickCount > 0 && clickCount < 3) {
      const timer = setTimeout(() => setClickCount(0), 1000); // Reset after 1s of inactivity
      return () => clearTimeout(timer);
    }

    if (clickCount >= 3) {
      // Use a timeout to avoid synchronous state updates during render phase
      // though typically this is fine if triggered by an event, React might complain
      // if it cascades too quickly from the dependency.
      const timer = setTimeout(() => {
        setShowEasterEgg(true);
        setClickCount(0); // Reset immediately

        // Hide after 15 seconds
        setTimeout(() => {
          setShowEasterEgg(false);
        }, 15000);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [clickCount]);

  const handleClick = () => {
    // Prevent default if it's wrapping a link (though Sidebar wraps a Link inside the H1)
    // Actually, in Sidebar, the Link is inside the H1. The H1 is where we want to attach this.
    // If it's a link, clicking it might navigate. Let's not preventDefault here so the link still works,
    // but the easter egg counting also works.
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
