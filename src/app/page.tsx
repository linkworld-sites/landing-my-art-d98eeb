import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "My Art — Bespoke Hand-Painted Denim Jackets",
  description:
    "My Art hand-paints bespoke, machine-washable acrylic portraits onto denim — collaborative sketch-to-paint commissions, Certificate of Authenticity. From $120. 500+ jackets, 4.9 stars.",
  alternates: {
    canonical: "https://8b7b3ef4.run.linkworld.ai",
  },
};

const BASE_URL = "https://8b7b3ef4.run.linkworld.ai";
const HERO_IMAGE = `${BASE_URL}/images/hero.png`;
const SCHEMA_DESCRIPTION =
  "Hand-painted bespoke denim jackets — 100% custom commission, machine-washable textile acrylics, Certificate of Authenticity. 500+ commissions, 4.9-star rating.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "My Art",
      description: SCHEMA_DESCRIPTION,
      url: BASE_URL,
      image: HERO_IMAGE,
      priceRange: "$120–$480",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.9,
        reviewCount: 500,
      },
    },
    {
      "@type": "Product",
      name: "My Art Custom Hand-Painted Denim Jacket",
      description: SCHEMA_DESCRIPTION,
      image: HERO_IMAGE,
      url: BASE_URL,
      brand: {
        "@type": "Brand",
        name: "My Art",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "120",
        highPrice: "480",
        offerCount: 3,
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.9,
        reviewCount: 500,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
