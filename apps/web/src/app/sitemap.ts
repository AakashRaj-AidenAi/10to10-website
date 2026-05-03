import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils";
import { zones } from "@/content/zones";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/play-school`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/memberships`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/party-planner`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/summer-camp`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const zonePages: MetadataRoute.Sitemap = zones.map((z) => ({
    url: `${base}/zones/${z.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...zonePages];
}
