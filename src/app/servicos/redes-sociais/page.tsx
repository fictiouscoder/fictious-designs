import type { Metadata } from "next";
import SocialMediaExperience from "@/app/components/service/SocialMediaExperience";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("redes-sociais");

if (!service) {
  throw new Error("Configuração do serviço Redes Sociais não encontrada.");
}

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: {
    canonical: "/servicos/redes-sociais",
  },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    url: "/servicos/redes-sociais",
    type: "website",
    locale: "pt_MZ",
    siteName: "Fictious Designs",
  },
  twitter: {
    card: "summary_large_image",
    title: service.seo.title,
    description: service.seo.description,
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.seo.description,
    url: "https://fictious-designs.vercel.app/servicos/redes-sociais",
    provider: {
      "@type": "Organization",
      name: "Fictious Designs",
      url: "https://fictious-designs.vercel.app",
    },
    areaServed: {
      "@type": "Country",
      name: "Mozambique",
    },
    serviceType: "Gestão de Redes Sociais",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://fictious-designs.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Serviços",
        item: "https://fictious-designs.vercel.app/servicos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: "https://fictious-designs.vercel.app/servicos/redes-sociais",
      },
    ],
  },
];

export default function SocialMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SocialMediaExperience />
    </>
  );
}
