import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-denim pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="text-canvas/40 text-xs tracking-widest uppercase hover:text-canvas transition-colors"
          >
            ← Journal
          </Link>

          {post.date && (
            <p className="mt-8 text-canvas/40 text-xs tracking-widest uppercase">
              {post.date}
            </p>
          )}
          <h1 className="mt-3 font-display text-4xl md:text-5xl italic text-canvas leading-snug">
            {post.title}
          </h1>

          {post.description && (
            <p className="mt-5 text-canvas/60 text-base leading-relaxed border-l-2 border-crimson pl-4">
              {post.description}
            </p>
          )}

          <article
            className="post-body mt-12 text-canvas/80"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="mt-16 pt-8 border-t border-canvas/15">
            <Link href="/blog" className="text-canvas/40 text-sm hover:text-canvas transition-colors">
              ← Alle Beiträge
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
