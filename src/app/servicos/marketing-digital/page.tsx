import type { Metadata } from "next";
import MarketingExperience from "@/app/components/service/MarketingExperience";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("marketing-digital");

if (!service) {
  throw new Error("Configuração do serviço Marketing Digital não encontrada.");
}

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: {
    canonical: "/servicos/marketing-digital",
  },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    url: "/servicos/marketing-digital",
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
    url: "https://fictious-designs.vercel.app/servicos/marketing-digital",
    provider: {
      "@type": "Organization",
      name: "Fictious Designs",
      url: "https://fictious-designs.vercel.app",
    },
    areaServed: {
      "@type": "Country",
      name: "Mozambique",
    },
    serviceType: "Marketing Digital e Publicidade Online",
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
        item: "https://fictious-designs.vercel.app/servicos/marketing-digital",
      },
    ],
  },
];

export default function MarketingDigitalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <MarketingExperience />
    </>
  );
}
