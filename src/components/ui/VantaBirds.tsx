"use client";

import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

interface VantaBirdsProps {
  isActive: boolean;
}

export function VantaBirds({ isActive }: VantaBirdsProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && isActive) {
      if (typeof window !== "undefined") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).THREE = THREE;
      }

      // We need to dynamically import the vanta script *after* THREE is on window
      const loadVanta = async () => {
        try {
          // @ts-expect-error Types for vanta.birds.min are not available
          const vantaModule = await import("vanta/dist/vanta.birds.min");
          const WAVES = vantaModule.default || vantaModule;
          
          setVantaEffect(
            WAVES({
              el: vantaRef.current,
              THREE: THREE, // Pass THREE explicitly as well
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              backgroundColor: 0x052c2e,
              color1: 0x54dea1,
              color2: 0x54dea1,
              colorMode: "variance",
              birdSize: 1.5,
              wingSpan: 30.0,
              speedLimit: 5.0,
              separation: 20.0,
              alignment: 20.0,
              cohesion: 20.0,
              quantity: 5.0,
            })
          );
        } catch (error) {
          console.error("Failed to load Vanta.js", error);
        }
      };

      loadVanta();
    }
    
    if (vantaEffect && !isActive) {
        vantaEffect.destroy();
        setVantaEffect(0);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isActive, vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className={`fixed inset-0 z-[-1] transition-opacity duration-1000 ${
        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    />
  );
}
