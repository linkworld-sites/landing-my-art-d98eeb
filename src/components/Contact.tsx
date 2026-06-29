"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { track } from "@/lib/funnel";

const EMAIL = "hallo@myart.studio";
const INSTAGRAM = "@myart.denim";
const SUBJECT = "Auftragsarbeit — Mein Unikat";
const BODY = `Hallo,%0A%0AIch möchte gerne ein individuelles Denim-Stück in Auftrag geben.%0A%0AMeine Idee / Vorstellung:%0A%0A[Bitte hier beschreiben]%0A%0AVielen Dank!`;

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <section id="contact" className="bg-canvas py-24 px-6 md:px-16">
      <div
        ref={ref}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.p
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-crimson text-xs tracking-[0.3em] uppercase mb-6"
        >
          Schreib mir
        </motion.p>

        <motion.h2
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-6xl italic text-shadow mb-4 leading-tight"
        >
          Wir machen daraus etwas,
          <br />
          das niemand sonst hat.
        </motion.h2>

        <motion.p
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-shadow/60 text-base font-body max-w-xl mx-auto mb-12"
        >
          Kein Formular. Kein Preisschild. Nur eine Mail — und ein Gespräch,
          das zu deinem Stück führt.
        </motion.p>

        {/* Large mailto link with painted underline */}
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-10"
        >
          <motion.a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${BODY}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              track("intent");
              track("convert");
            }}
            className="font-display text-2xl md:text-4xl italic text-shadow hover:text-crimson transition-colors duration-300 painted-link inline-block"
          >
            {EMAIL}
          </motion.a>
        </motion.div>

        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center justify-center gap-4 text-shadow/50"
        >
          <div className="h-px w-12 bg-shadow/30" />
          <a
            href="https://instagram.com/myart.denim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-widest uppercase font-body hover:text-shadow transition-colors"
          >
            {INSTAGRAM}
          </a>
          <div className="h-px w-12 bg-shadow/30" />
        </motion.div>
      </div>
    </section>
  );
}
