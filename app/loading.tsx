"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loading() {
  const wordRef = useRef<HTMLDivElement>(null);
  const piecesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    piecesRef.current.forEach((p, i) => {
      tl.to(
        p,
        {
          y: gsap.utils.random(-40, 40),
          x: gsap.utils.random(-40, 40),
          rotate: gsap.utils.random(-180, 180),
          duration: gsap.utils.random(1, 2),
          ease: "power2.inOut",
        },
        0
      );
    });
    const words = ["Loading", "Optimizing", "Launching"];
    let index = 0;

    gsap.to(
      {},
      {
        duration: 1.8,
        repeat: -1,
        onRepeat: () => {
          index = (index + 1) % words.length;
          if (wordRef.current) wordRef.current.innerText = words[index];
        },
      }
    );
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="flex gap-2 text-6xl font-bold z-10">
        {"Pokémonn".split("").map((letter, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => {
              piecesRef.current[i] = el;
            }}
            className="inline-block"
          >
            {letter}
          </div>
        ))}
      </div>
      <div
        ref={wordRef}
        className="text-xl tracking-widest opacity-70 mt-6 font-mono"
      >
        Loading
      </div>
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 animate-ping"></div>
    </div>
  );
}
