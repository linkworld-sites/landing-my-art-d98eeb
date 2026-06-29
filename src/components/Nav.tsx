"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#gallery", label: "Werke" },
    { href: "/#process", label: "Prozess" },
    { href: "/#contact", label: "Anfrage" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Journal" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-shadow/95 backdrop-blur-sm border-b border-canvas/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl italic text-canvas tracking-wide">
          My Art
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <motion.div key={l.href} whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
              <Link
                href={l.href}
                className="painted-link text-canvas/70 hover:text-canvas text-sm tracking-widest uppercase transition-colors duration-200"
              >
                {l.label}
              </Link>
            </motion.div>
          ))}
          <Link href="/shop" className="relative">
            <span className="text-canvas/70 text-sm tracking-widest uppercase">
              Warenkorb
            </span>
            {count > 0 && (
              <span className="absolute -top-2 -right-4 bg-crimson text-warm text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-canvas p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu öffnen"
        >
          <span className="block w-6 h-px bg-canvas mb-1.5 transition-all" />
          <span className="block w-4 h-px bg-canvas ml-auto transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-shadow border-t border-canvas/10 px-6 py-6 space-y-4"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-canvas/80 hover:text-canvas text-sm tracking-widest uppercase py-2"
            >
              {l.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
