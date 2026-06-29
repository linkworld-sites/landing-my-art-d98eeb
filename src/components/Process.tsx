"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";

const acts = [
  {
    num: "01",
    title: "Die leere Leinwand",
    caption:
      "Rohes Denim, noch unberührt. Jedes Stück beginnt mit dem Material selbst — Gewicht, Textur, Geschichte.",
    src: "/images/material.png",
    alt: "Rohes Denim-Material, unbehandelt",
  },
  {
    num: "02",
    title: "Die Hand am Werk",
    caption:
      "Stunden am Stück. Keine Vorlage, kein Drucker. Nur Pinsel, Farbe und Konzentration.",
    src: "/images/process.png",
    alt: "Künstler beim Bemalen einer Jeans-Jacke",
  },
  {
    num: "03",
    title: "Das fertige Unikat",
    caption:
      "Kein zweites Stück wie dieses. Getragen auf der Straße, in Studios, in Galerien.",
    src: "/images/hero.png",
    alt: "Fertige handbemalte Denim-Jacke",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduced ? "0%" : "-66.67%"]
  );

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative"
      style={{ height: reduced ? "auto" : "300vh" }}
    >
      {reduced ? (
        /* Reduced motion: static vertical layout */
        <div className="bg-shadow py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-crimson text-xs tracking-[0.3em] uppercase mb-4">
              Der Prozess
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-canvas mb-16">
              Drei Akte
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {acts.map((act) => (
                <div key={act.num} className="space-y-4">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={act.src} alt={act.alt} fill className="object-cover" sizes="33vw" />
                  </div>
                  <p className="text-crimson text-xs tracking-widest">{act.num}</p>
                  <h3 className="font-display text-2xl italic text-canvas">{act.title}</h3>
                  <p className="text-canvas/60 text-sm leading-relaxed">{act.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Full horizontal scroll */
        <div className="sticky top-0 h-screen overflow-hidden bg-shadow">
          <motion.div
            style={{ x }}
            className="flex h-full"
            aria-label="Prozess in drei Akten"
          >
            {acts.map((act, i) => (
              <div
                key={act.num}
                className="relative flex-shrink-0 w-screen h-full"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={act.src}
                    alt={act.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-shadow/70" />
                </div>

                {/* Panel content */}
                <div className="relative z-10 h-full flex flex-col justify-between px-12 md:px-24 py-20">
                  <div>
                    <p className="text-crimson text-xs tracking-[0.3em] uppercase mb-2">
                      {i === 0 ? "Der Prozess" : " "}
                    </p>
                    <h2 className="font-display text-5xl md:text-7xl italic text-canvas">
                      {i === 0 ? "Drei Akte" : " "}
                    </h2>
                  </div>

                  <div className="max-w-md">
                    <p className="font-display text-6xl md:text-8xl italic text-canvas/20 mb-4">
                      {act.num}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl italic text-canvas mb-4">
                      {act.title}
                    </h3>
                    <p className="text-canvas/65 text-base leading-relaxed font-body">
                      {act.caption}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="flex gap-2">
                    {acts.map((_, j) => (
                      <div
                        key={j}
                        className={`h-px flex-1 ${
                          j === i ? "bg-crimson" : "bg-canvas/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
