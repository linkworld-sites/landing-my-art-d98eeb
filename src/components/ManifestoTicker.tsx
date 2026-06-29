"use client";

import { useReducedMotion } from "framer-motion";

const text =
  "Kein Stück ist wie das andere. Jede Jeans wird zur Geschichte. · Nicht produziert. Gemalt. · Jedes Stück trägt die Stunden, die ich darin gelassen habe. · ";

export function ManifestoTicker() {
  const reduced = useReducedMotion();

  return (
    <section
      className="bg-shadow py-6 overflow-hidden border-y border-canvas/10"
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={
          reduced
            ? {}
            : { animation: "ticker 28s linear infinite" }
        }
      >
        {/* Repeated 4x for seamless infinite loop */}
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-display text-xl md:text-2xl italic text-canvas/80 pr-0 shrink-0"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
