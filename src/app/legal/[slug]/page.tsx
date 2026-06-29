import Link from "next/link";
import { notFound } from "next/navigation";
import { getLegalPage, getLegalSlugs } from "@/lib/legal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return getLegalSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-denim pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-2xl mx-auto">
          <article
            className="post-body text-canvas/80"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
          <div className="mt-12 pt-8 border-t border-canvas/10">
            <Link href="/" className="text-canvas/40 text-sm hover:text-canvas transition-colors">
              ← Startseite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
