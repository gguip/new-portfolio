"use client";

import { ReactNode } from "react";
import { useEasterEgg } from "./EasterEggContext";

export function SectionContent({ children }: { children: ReactNode }) {
  const { showEasterEgg } = useEasterEgg();

  return (
    <div
      className={`transition-opacity duration-700 ${
        showEasterEgg ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {children}
    </div>
  );
}
