"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Julia M.",
    location: "Berlin",
    caption:
      "Meine Jacke ist einzigartig — ich werde auf der Straße angesprochen. Jedes Mal.",
    src: "/images/hero.png",
    rotate: -2,
  },
  {
    name: "Theo K.",
    location: "Hamburg",
    caption:
      "Nicht produziert. Wirklich gemalt. Man sieht es, man fühlt es. Kein Vergleich.",
    src: "/images/material.png",
    rotate: 1.5,
  },
  {
    name: "Sara L.",
    location: "München",
    caption:
      "Jede Stunde, die drin steckt, ist zu spüren. Das ist kein Kleidungsstück — das ist Kunst.",
    src: "/images/detail.png",
    rotate: -1,
  },
];

function PolaroidCard({
  t,
  index,
}: {
  t: (typeof testimonials)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={
        reduced
          ? { opacity: 1 }
          : { opacity: 0, y: 50, rotate: 0 }
      }
      animate={
        isInView
          ? { opacity: 1, y: 0, rotate: reduced ? 0 : t.rotate }
          : {}
      }
      whileHover={reduced ? {} : { rotate: 0, scale: 1.03, zIndex: 10 }}
      transition={{
        delay: index * 0.18,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-warm p-4 pb-12 shadow-xl flex flex-col relative"
      style={{ transformOrigin: "center center" }}
    >
      {/* Photo */}
      <div className="relative aspect-square overflow-hidden mb-4 bg-canvas">
        <Image
          src={t.src}
          alt={`Getragen von ${t.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80vw, 33vw"
        />
      </div>

      {/* Caption — handwritten feel via italic display font */}
      <p className="font-display italic text-shadow text-sm leading-snug">
        &ldquo;{t.caption}&rdquo;
      </p>

      {/* Name + location */}
      <p className="absolute bottom-4 left-4 right-4 text-xs text-shadow/50 font-body tracking-wide">
        {t.name} · {t.location}
      </p>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-denim py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-crimson text-xs tracking-[0.3em] uppercase mb-3">
            Getragen. Gesehen.
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic text-canvas">
            Geliebt.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <PolaroidCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
