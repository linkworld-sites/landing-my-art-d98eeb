import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://8b7b3ef4.run.linkworld.ai";
  const today = "2026-06-29";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const posts = getPosts();
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date || today,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
