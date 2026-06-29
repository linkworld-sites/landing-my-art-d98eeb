"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-shadow border-t border-canvas/10 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo mark */}
          <div>
            <p className="font-display text-2xl italic text-canvas">My Art</p>
            <p className="text-canvas/30 text-xs tracking-wider mt-1">
              Bespoke Painted Denim · Berlin
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6 text-xs tracking-widest uppercase text-canvas/40">
            <Link href="/#gallery" className="hover:text-canvas/70 transition-colors">
              Werke
            </Link>
            <Link href="/#process" className="hover:text-canvas/70 transition-colors">
              Prozess
            </Link>
            <Link href="/#contact" className="hover:text-canvas/70 transition-colors">
              Anfrage
            </Link>
            <Link href="/shop" className="hover:text-canvas/70 transition-colors">
              Shop
            </Link>
            <Link href="/blog" className="hover:text-canvas/70 transition-colors">
              Journal
            </Link>
          </nav>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/myart.denim"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-canvas/40 hover:text-canvas transition-colors"
            aria-label="Instagram"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </motion.a>
        </div>

        <div className="mt-10 pt-6 border-t border-canvas/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-canvas/25 text-xs">
            © {new Date().getFullYear()} My Art. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-xs text-canvas/25">
            <Link href="/legal/impressum" className="hover:text-canvas/50 transition-colors">
              Impressum
            </Link>
            <Link href="/legal/datenschutz" className="hover:text-canvas/50 transition-colors">
              Datenschutz
            </Link>
            <Link href="/legal/cookies" className="hover:text-canvas/50 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
