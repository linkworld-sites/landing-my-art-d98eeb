"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function ArtistStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <section className="bg-shadow py-24 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Portrait — bleeds off left edge on md+ */}
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] md:-ml-16 overflow-hidden"
          >
            <Image
              src="/images/process.png"
              alt="Die Künstlerin bei der Arbeit"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-shadow/30 hidden md:block" />
          </motion.div>

          {/* Text — off-center, pushed right */}
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:pt-16 max-w-lg"
          >
            <p className="text-crimson text-xs tracking-[0.3em] uppercase mb-8">
              Die Künstlerin
            </p>

            <h2 className="font-display text-3xl md:text-4xl italic text-canvas mb-8 leading-snug">
              „Ich male nicht auf Jeans. Ich male Jeans."
            </h2>

            <div className="space-y-5 text-canvas/70 text-base leading-relaxed font-body">
              <p>
                Jedes Stück beginnt mit einem Gespräch. Was trägst du gerne?
                Welche Farben lässt du in dein Leben? Was soll das Stück
                erzählen — über dich, für dich?
              </p>
              <p>
                Ich male seit Jahren auf Stoff — nicht weil es trendig ist,
                sondern weil Denim eine Ehrlichkeit hat, die Leinwand nicht
                kennt. Es atmet, verändert sich, wird mit dir älter.
              </p>
              <p>
                Jedes Stück trägt die Stunden, die ich darin gelassen habe.
                Das sieht man. Das spürt man. Das ist der Punkt.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-canvas/15">
              <p className="font-display text-xl italic text-canvas/50">
                Berlin, Atelier Nord
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
