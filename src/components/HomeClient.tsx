"use client";

import { Loader } from "@/components/Loader";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ManifestoTicker } from "@/components/ManifestoTicker";
import { Gallery } from "@/components/Gallery";
import { Process } from "@/components/Process";
import { CommissionFlow } from "@/components/CommissionFlow";
import { ArtistStatement } from "@/components/ArtistStatement";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function HomeClient() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <ManifestoTicker />
        <Gallery />
        <Process />
        <CommissionFlow />
        <ArtistStatement />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
