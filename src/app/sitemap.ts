import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

const routes = [
  { path: "/", priority: 1.0 },
  { path: "/menu", priority: 0.9 },
  { path: "/our-story", priority: 0.7 },
  { path: "/visit", priority: 0.8 },
  { path: "/catering", priority: 0.7 },
  { path: "/private-events", priority: 0.7 },
  { path: "/order", priority: 0.8 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.path === "/menu" ? "weekly" : "monthly",
    priority: r.priority,
  }));
}
