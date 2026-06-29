import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Journal — My Art",
  description: "Einblicke ins Atelier, Geschichten hinter den Stücken, und die Kunst des handbemalten Denims.",
};

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-denim pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-crimson text-xs tracking-[0.3em] uppercase mb-4">
            Aus dem Atelier
          </p>
          <h1 className="font-display text-5xl italic text-canvas mb-16">
            Journal
          </h1>

          {posts.length === 0 ? (
            <p className="text-canvas/60 mt-8">
              Neue Einblicke folgen bald — schau wieder vorbei.
            </p>
          ) : (
            <ul className="space-y-12">
              {posts.map((p) => (
                <li key={p.slug} className="border-t border-canvas/15 pt-10">
                  <Link href={`/blog/${p.slug}`} className="group block">
                    {p.date && (
                      <p className="text-canvas/40 text-xs tracking-widest uppercase mb-3">
                        {p.date}
                      </p>
                    )}
                    <h2 className="font-display text-2xl md:text-3xl italic text-canvas group-hover:text-crimson transition-colors duration-200">
                      {p.title}
                    </h2>
                    {p.description && (
                      <p className="mt-3 text-canvas/60 text-sm leading-relaxed max-w-xl">
                        {p.description}
                      </p>
                    )}
                    <span className="mt-4 inline-block text-sm text-canvas/40 group-hover:text-crimson transition-colors">
                      Weiterlesen →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-16 pt-8 border-t border-canvas/10">
            <Link href="/" className="text-canvas/40 text-sm hover:text-canvas transition-colors">
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
