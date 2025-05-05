"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", href: "https://react.dev/" },
  {
    name: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  { name: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  { name: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { name: "GSAP", href: "https://gsap.com/" },
  { name: "Framer-Motion", href: "https://motion.dev" },
  { name: "Next.JS", href: "https://nextjs.org/" },
  { name: "Astro.JS", href: "https://astro.build/" },
  { name: "Git/GitHub", href: "https://github.com/VedantCodes30" },
  { name: "UI/UX" },
  { name: "Figma", href: "https://figma.com/" },
];

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current.children,
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
            trigger: skillsRef.current,
            start: "top 80%", // when top of element is 80% from top of viewport
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="skills"
      className="scroll-m-20 py-10 mx-auto mb-28 backdrop-blur-md bg-white/5   rounded-lg shadow-lg  max-w-3xl w-full  "
    >
      <h1 className="text-2xl font-bold mb-4 text-center">
        These are the skills I possess
      </h1>
      <ul
        ref={skillsRef}
        className="grid grid-cols-2 gap-4 text-center max-w-md mx-auto  "
      >
        {skills.map((skill, index) => (
          <li
            key={index}
            className=" text-xl skills-list text-white  rounded shadow hover:animate-pulse  cursor-pointer"
          >
            <a
              target="_blank"
              href={skill.href}
              className="w-full h-full block p-2 py-3"
            >
              {skill.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
