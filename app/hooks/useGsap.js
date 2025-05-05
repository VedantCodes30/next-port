// hooks/useGsapFadeIn.js
import { useEffect } from "react";
import { gsap } from "gsap";

export function useGsapFadeIn(ref, options = {}) {
  const { delay = 0, duration = 1, y = 50 } = options;

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        delay,
        duration,
        ease: "power2.out",
      }
    );
  }, [ref, delay, duration, y]);
}
