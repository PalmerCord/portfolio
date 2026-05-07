"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP);

type AnimationProviderProps = {
  children: React.ReactNode;
};

export function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    gsap.defaults({ ease: "power2.out", duration: 0.8 });
  }, []);

  return <>{children}</>;
}
