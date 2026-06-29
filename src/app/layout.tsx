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
    "My Art hand-paints bespoke, machine-washable acrylic portraits onto denim jackets. 500+ commissions. 4.9-star rating. Start your custom jacket today.",
  robots: {
    index: true,
    follow: true,
  },
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
