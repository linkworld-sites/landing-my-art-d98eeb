"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const pieces = [
  {
    src: "/images/hero.png",
    name: "Storm Rising",
    status: "VERKAUFT",
    tall: false,
  },
  {
    src: "/images/material.png",
    name: "Indigo Waves",
    status: "VERFÜGBAR",
    tall: true,
  },
  {
    src: "/images/detail.png",
    name: "Raw Energy",
    status: "AUF ANFRAGE",
    tall: false,
  },
  {
    src: "/images/process.png",
    name: "Night Studio",
    status: "VERFÜGBAR",
    tall: true,
  },
  {
    src: "/images/detail.png",
    name: "Denim Soul",
    status: "AUF ANFRAGE",
    tall: false,
  },
  {
    src: "/images/hero.png",
    name: "Bold Statement",
    status: "VERKAUFT",
    tall: true,
  },
];

const statusColor: Record<string, string> = {
  VERKAUFT: "bg-shadow text-canvas/60",
  "VERFÜGBAR": "bg-crimson text-warm",
  "AUF ANFRAGE": "bg-denim text-canvas border border-canvas/20",
};

function GalleryCard({
  piece,
  index,
}: {
  piece: (typeof pieces)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: (index % 3) * 0.12,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="break-inside-avoid mb-4 relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative w-full overflow-hidden ${
          piece.tall ? "aspect-[3/4]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={piece.src}
          alt={piece.name}
          fill
          className={`object-cover transition-transform duration-700 ease-out ${hovered ? "scale-[1.04]" : "scale-100"}`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Hover overlay — slides up from bottom, triggered by parent hover state */}
        <AnimatePresence>
          {!reduced && (
            <motion.div
              initial={{ y: "101%" }}
              animate={hovered ? { y: "0%" } : { y: "101%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 bg-shadow/85 flex flex-col justify-end p-5"
            >
              <p className="font-display text-lg italic text-canvas">{piece.name}</p>
              <span
                className={`mt-2 self-start px-2 py-0.5 text-xs tracking-widest uppercase ${
                  statusColor[piece.status]
                }`}
              >
                {piece.status}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Always-visible status badge for reduced motion */}
        {reduced && (
          <div className="absolute bottom-3 left-3">
            <span className={`px-2 py-0.5 text-xs tracking-widest uppercase ${statusColor[piece.status]}`}>
              {piece.status}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="bg-denim py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-display text-4xl md:text-5xl italic text-canvas">
            Ausgewählte Werke
          </h2>
          <p className="text-canvas/50 text-sm tracking-widest uppercase hidden md:block">
            Handbemaltes Denim
          </p>
        </div>

        {/* Masonry grid via CSS columns */}
        <div className="columns-1 md:columns-3 gap-4">
          {pieces.map((piece, i) => (
            <GalleryCard key={i} piece={piece} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="ghost-btn inline-block"
          >
            <span>Mein Stück anfragen →</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
