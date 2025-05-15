"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  const headingRef = useRef(null);
  const subRef = useRef(null);

  //H1 Animation useEffect
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        yoyo: true,
        ease: "power2.out",
      }
    );
  }, []);

  //H2 Animation useEffect
  useEffect(() => {
    gsap.fromTo(
      subRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        delay: 0.5,
        y: 0,
        duration: 1,
        yoyo: false,
        yoyoEase: true,
        ease: "power2.out",
      }
    );
  }, []);
  return (
    <div
      id="home"
      className="h-screen   flex flex-col items-center justify-center"
    >
      <h1 className="p-2 font-bold text-4xl" ref={headingRef}>
        Hello!, I'm Vedant
      </h1>
      <h2 className="font-medium mt-2 text-zinc-300" ref={subRef}>
        welcome to my portfolio website
      </h2>
    </div>
  );
}
