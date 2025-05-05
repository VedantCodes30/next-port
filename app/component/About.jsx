"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%", // when top of element is 80% from top of viewport
          },
        }
      );
    }
  }, []);
  // const titleRef = useRef(null);
  // const textRef = useRef(null);

  // useGsapFadeIn(titleRef, { delay: 0.1 });
  // useGsapFadeIn(textRef, { delay: 0.3 });
  return (
    <section
      ref={aboutRef}
      id="about"
      className="z-10 flex justify-center items-center py-20 rounded-lg "
    >
      <div
        ref={aboutRef}
        className="p-4 max-w-3xl w-full bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-xl  space-y-6"
      >
        <h2 className="text-4xl font-bold">✨ About Me</h2>
        <p>
          Hi! I'm <strong>Vedant</strong>, a passionate front-end developer
          focused on building clean, fast, and accessible web experiences.
        </p>
        <p>
          I enjoy turning complex problems into simple, beautiful, and intuitive
          designs. My journey in web development began with curiosity and a love
          for creating things that live on the internet. Since then, I’ve
          explored various frameworks and technologies like{" "}
          <strong>Next.js</strong>, <strong>Astro</strong>,{" "}
          <strong>React</strong>, and <strong>Tailwind CSS</strong> — always
          looking for ways to learn and grow.
        </p>
        <p>
          Currently, I'm diving deeper into modern JavaScript, UI/UX best
          practices, and performance optimization. I believe in writing
          semantic, maintainable code and continuously improving user
          experience.
        </p>
        <p>
          When I’m not coding, I’m likely sketching out ideas, learning about
          design systems, or experimenting with new tools in the dev world.
        </p>

        <div>
          <h3 className="text-2xl font-semibold mt-6 mb-2">🛠️ Skills</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>JavaScript (ES6+), TypeScript</li>
            <li>React, Next.js, Astro, Svelte</li>
            <li>Tailwind CSS, NativeWind, CSS Animations</li>
            <li>Git, Vercel, Netlify</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mt-6 mb-2">🎯 Goals</h3>
          <p>
            I'm working toward becoming a UI/UX generalist with strong frontend
            engineering skills, capable of crafting pixel-perfect interfaces
            that work beautifully across devices.
          </p>
        </div>
      </div>
    </section>
  );
}
