"use client";

import { useRef } from "react";
// import { useGsapFadeIn } from "../hooks/useGsap";

export default function Contact() {
  const titleRef = useRef(null);
  // const textRef = useRef(null);

  // useGsapFadeIn(titleRef);
  // useGsapFadeIn(textRef, { delay: 0.3 });

  return (
    <section
      ref={titleRef}
      id="contact"
      className="flex items-center justify-center px-4 py-4 mb-10 h-screen"
    >
      <div className="bg-white/10 rounded-lg  p-4 max-w-3xl w-full  space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          I don't give my number easily 😅
        </h1>

        <p className="text-center">
          But hey, I’m still super easy to reach! If you want to discuss a
          project, ask a question, or just say hi — feel free to drop a message
          below.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-sm text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-sm text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-sm text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
              placeholder="Form Doesn't Work just looks good 😉"
            />
          </div>

          <button
            type="submit"
            className="w-full  py-2 rounded-md bg-white/20 hover:bg-white/30 text-white font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
