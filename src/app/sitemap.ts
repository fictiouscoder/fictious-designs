import type { MetadataRoute } from "next";

const baseUrl = "https://fictiousdesigns.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "monthly" as const },
    {
      path: "/desenvolvimento-web",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/pacotes",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/politica-de-privacidade",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/politica-de-servicos",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/pagamentos-e-reembolsos",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/termos-e-condicoes",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
