import type { MetadataRoute } from "next";

const baseUrl = "https://fictious-designs.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/servicos", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/servicos/branding", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/servicos/estrategia-conteudo", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/servicos/marketing-digital", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/servicos/redes-sociais", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/servicos/seo-local", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/desenvolvimento-web", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/pacotes", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contactos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/portfolio/branding", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/portfolio/branding/diamam", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/portfolio/conteudo-redes-sociais", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/portfolio/desenvolvimento-web", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/politica-de-privacidade", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/politica-de-servicos", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/pagamentos-e-reembolsos", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/termos-e-condicoes", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
