import Link from "next/link";
import { getProducts } from "@/lib/products";
import ShopClient from "@/components/ShopClient";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProductTracker } from "./ProductTracker";

export const metadata = {
  title: "Shop — My Art | Bespoke Painted Denim",
  description:
    "Handbemalte Denim-Unikate. Jedes Stück ist einmalig — kaufe direkt oder frage ein individuelles Auftragswerk an.",
};

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <>
      <Nav />
      <ProductTracker />
      <main className="min-h-screen bg-denim pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-crimson text-xs tracking-[0.3em] uppercase mb-3">
              Handgemacht · Einmalig
            </p>
            <h1 className="font-display text-5xl md:text-6xl italic text-canvas mb-4">
              Verfügbare Stücke
            </h1>
            <p className="text-canvas/60 text-base max-w-xl leading-relaxed">
              Jedes Stück ist ein Unikat — handgemalt, einmalig, unwiederholbar.
              Einige sind bereits fertig und bereit für dich. Oder{" "}
              <Link href="/#contact" className="text-crimson underline">
                frage ein Auftragswerk an
              </Link>
              .
            </p>
          </div>

          {/* ShopClient handles the catalog + cart UI */}
          <ShopClient products={products} />

          {/* Commission CTA */}
          <div className="mt-24 border-t border-canvas/10 pt-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl italic text-canvas mb-4">
                Nichts dabei?
              </h2>
              <p className="text-canvas/60 text-base leading-relaxed mb-8">
                Das hier ist nur, was gerade fertig ist. Was ich wirklich mache,
                sind Auftragsarbeiten — dein Motiv, deine Farben, dein Stück.
                Schreib mir.
              </p>
              <Link
                href="/#contact"
                className="ghost-btn inline-block"
              >
                <span>Auftragsarbeit anfragen →</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
