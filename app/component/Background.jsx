"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BackgroundBlobs() {
  const blob1 = useRef(null);
  const blob2 = useRef(null);
  const blob3 = useRef(null);

  useEffect(() => {
    const animateBlob = (el, delay) => {
      if (!el) return;
      gsap.to(el, {
        x: "+=30",
        y: "+=20",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 6,
        delay,
      });
    };

    animateBlob(blob1.current, 0);
    animateBlob(blob2.current, 2);
    animateBlob(blob3.current, 4);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden  blur-3xl">
      <div
        ref={blob1}
        className="absolute top-[-10%] left-[10%] w-[250px] h-[250px] bg-pink-500 rounded-full 
        opacity-40  will-change-transform"
      />
      <div
        ref={blob2}
        className="absolute top-[30%] left-[40%] w-[250px] h-[250px] bg-blue-500 rounded-full 
        opacity-40  will-change-transform"
      />
      <div
        ref={blob3}
        className="absolute top-[60%] left-[20%] w-[250px] h-[250px] bg-purple-500 rounded-full 
        opacity-40 will-change-transform"
      />
    </div>
  );
}
