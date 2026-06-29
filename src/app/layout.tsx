import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FunnelTracker } from "@/components/FunnelTracker";
import { CookieConsent } from "@/components/CookieConsent";
import { CartProvider } from "@/components/CartContext";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Art — Bespoke Painted Denim",
  description:
    "Deine Jeans. Meine Kunst. Ein Unikat. Handbemalte Denim-Stücke — kein Algorithmus, kein Print-on-Demand, nur Farbe, Stoff und Handarbeit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-denim text-canvas font-body antialiased">
        <FunnelTracker />
        <CartProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </CartProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
