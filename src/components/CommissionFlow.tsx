"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Dein Stück anfragen",
    desc: "Schreib mir, was du im Kopf hast — Farben, Gefühl, Referenz. Oder gar nichts. Wir finden es zusammen.",
  },
  {
    num: "02",
    title: "Konzept besprechen",
    desc: "Ein kurzes Gespräch. Ich verstehe dich, du verstehst mein Handwerk. Wir einigen uns auf ein Unikat, das nur dir gehört.",
  },
  {
    num: "03",
    title: "Unikat tragen",
    desc: "Ich male. Du wartest. Du trägst — und wirst auf der Straße angesprochen. So funktioniert Kunst.",
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-shadow border border-canvas/10 p-8 relative"
    >
      {/* Step number — large, crimson */}
      <span className="font-display text-7xl italic text-crimson leading-none block mb-6">
        {step.num}
      </span>

      <h3 className="font-display text-2xl italic text-canvas mb-3">
        {step.title}
      </h3>
      <p className="text-canvas/60 text-sm leading-relaxed">{step.desc}</p>

      {/* Connector line (not on last) */}
      {index < steps.length - 1 && (
        <div className="absolute top-1/2 -right-px w-px h-full bg-canvas/10 hidden md:block" />
      )}
    </motion.div>
  );
}

export function CommissionFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <section className="bg-denim py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-crimson text-xs tracking-[0.3em] uppercase mb-3">
            So entsteht dein Unikat
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic text-canvas">
            Drei Schritte
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-canvas/10">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="ghost-btn inline-block"
          >
            <span>Jetzt anfragen →</span>
          </motion.a>
          <p className="text-canvas/40 text-sm italic font-display">
            Keine Pakete. Kein Preisschild. Nur ein Gespräch.
          </p>
        </div>
      </div>
    </section>
  );
}
