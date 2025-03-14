"use client";
import Card from "./components/Card";
import { useEffect, useRef } from "react";
import { initializeAnimations } from "@/app/utils/animations";

export default function Home() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const artists = [
    { title: "Neon waves", color: "#BCEFFF" },
    { title: "Velvet drift", color: "#C9FE6E" },
    { title: "Echo flame", color: "#FAFF9E" },
    { title: "Phantom beat", color: "#FC4C3B" },
    { title: "Crystal Tide", color: "#F1F1F1" },
    { title: "Riot in Silence", color: "#8CEDFF" },
    { title: "Jet flame", color: "#FAFF9E" },
  ];

  useEffect(() => {
    const cleanup = initializeAnimations(
      containerRef.current,
      cardsContainerRef.current
    );

    return () => {
      if (cleanup) cleanup();
    };
  }, [cardsContainerRef]);

  return (
    <div className="mwg_effect001 overflow-hidden relative" ref={containerRef}>
      <p className="scroll fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Scroll
      </p>
      <div className="container flex flex-col justify-center h-screen w-full text-[1vw]">
        <div className="header absolute w-full flex items-center text-[clamp(12px,0.9vw,100px)] font-ibmPlexMono uppercase p-6 top-0 left-0">
          <p className="flex-1">
            <a href="https://madewithgsap.com/effects/tutorial001">
              © MADEWITHGSAP
            </a>
          </p>
          <p className="flex-1 text-center">
            <a href="https://madewithgsap.com/effects/tutorial001">
              © MADEWITHGSAP
            </a>
          </p>
          <p className="flex-1 text-right">
            <a href="https://madewithgsap.com/effects/tutorial001">
              © MADEWITHGSAP
            </a>
          </p>
        </div>
        <div
          className="cards flex w-max whitespace-nowrap gap-[1vw] will-change-transform py-0 px-[120vw]"
          ref={cardsContainerRef}
        >
          {artists.map((artist, idx) => (
            <Card key={idx} idx={idx + 1} {...artist} />
          ))}
        </div>
      </div>
    </div>
  );
}
