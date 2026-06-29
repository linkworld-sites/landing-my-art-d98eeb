import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "My Art — Bespoke Hand-Painted Denim Jackets",
  description:
    "My Art hand-paints bespoke, machine-washable acrylic portraits onto denim jackets. 500+ commissions. 4.9-star rating. Start your custom jacket today.",
  alternates: {
    canonical: "https://8b7b3ef4.run.linkworld.ai",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "My Art",
  description:
    "My Art hand-paints bespoke, machine-washable acrylic portraits onto denim jackets. 500+ commissions. 4.9-star rating. Start your custom jacket today.",
  url: "https://8b7b3ef4.run.linkworld.ai",
  priceRange: "$120–$480",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 500,
  },
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
