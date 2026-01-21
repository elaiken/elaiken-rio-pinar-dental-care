import type { MetadataRoute } from "next";

const baseUrl = "https://arguetadental.com";

const routes = [
  "",
  "/services",
  "/appointments",
  "/insurance",
  "/intake",
  "/team",
  "/reviews",
  "/founder",
  "/emergency",
  "/hipaa",
  "/faq",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
