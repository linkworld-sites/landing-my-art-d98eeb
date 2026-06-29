"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { track } from "@/lib/funnel";

const headline = "Deine Jeans.\nMeine Kunst.\nEin Unikat.";

function AnimatedChar({ char, delay }: { char: string; delay: number }) {
  const reduced = useReducedMotion();
  if (reduced) return <span>{char}</span>;
  return (
    <motion.span
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 2.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      {char === " " ? " " : char === "\n" ? "" : char}
    </motion.span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "15%"]);

  const lines = headline.split("\n");

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/images/hero.png"
          alt="Handbemalte Denim-Jacke, Kunstwerk im Entstehen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-denim/65" />
        {/* Vignette bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-denim to-transparent" />
      </motion.div>

      {/* Content — top-left positioned */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 md:px-16 py-32 max-w-7xl">
        <div className="mt-24">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.7, duration: 0.6 }}
            className="text-crimson text-xs tracking-[0.3em] uppercase font-body mb-6"
          >
            Atelier · Handarbeit · Berlin
          </motion.p>

          {/* Hand-lettered style headline */}
          <h1 className="font-display text-5xl md:text-7xl xl:text-8xl italic leading-none text-canvas max-w-2xl">
            {lines.map((line, li) => (
              <span key={li} className="block">
                {line.split("").map((char, ci) => {
                  const globalIndex = lines.slice(0, li).join("").length + ci;
                  return (
                    <AnimatedChar
                      key={`${li}-${ci}`}
                      char={char}
                      delay={globalIndex * 0.04}
                    />
                  );
                })}
              </span>
            ))}
          </h1>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            transition={{ delay: 4.2, duration: 0.8 }}
            className="mt-6 font-body text-sm md:text-base text-canvas/70 max-w-xs leading-relaxed"
          >
            Kein Algorithmus. Kein Print-on-Demand.
            <br />
            Nur Farbe, Stoff und Handarbeit.
          </motion.p>
        </div>

        {/* Bottom-right ghost CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="self-end"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => track("intent")}
            className="ghost-btn inline-block"
          >
            <span>Auftragsarbeit anfragen →</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-canvas/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-canvas/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
