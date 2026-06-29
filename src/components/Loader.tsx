"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#2C2C2C] overflow-hidden"
        >
          {/* Brush stroke SVG wipe — crimson stroke across the screen */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <motion.rect
              x="0"
              y="440"
              width="1440"
              height="6"
              rx="3"
              fill="#C0392B"
              initial={{ scaleX: 0, originX: "0%" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left center" }}
            />
            {/* Secondary thinner stroke above */}
            <motion.rect
              x="0"
              y="432"
              width="1440"
              height="2"
              rx="1"
              fill="#C0392B"
              fillOpacity="0.4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left center" }}
            />
          </svg>

          {/* Brand name reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center"
          >
            <p className="font-display text-5xl md:text-7xl italic text-canvas tracking-wide">
              My Art
            </p>
            {/* Underline sweeps in */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] bg-crimson mt-4"
              style={{ transformOrigin: "left center" }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="mt-4 text-canvas/50 text-xs tracking-[0.35em] uppercase font-body"
            >
              Bespoke Painted Denim
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
