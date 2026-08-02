import type { MetadataRoute } from "next";
import { cars } from "@/data/cars";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/cars", "/contact"].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const carRoutes = cars.map((car) => ({
    url: `${siteConfig.siteUrl}/cars/${car.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...carRoutes];
}
