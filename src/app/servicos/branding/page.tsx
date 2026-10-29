import type { Metadata } from "next";
import BrandingExperience from "@/app/components/service/BrandingExperience";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("branding");

if (!service) {
  throw new Error("Configuração do serviço Branding não encontrada.");
}

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: {
    canonical: "/servicos/branding",
  },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    url: "/servicos/branding",
    type: "website",
    locale: "pt_MZ",
    siteName: "Fictious Media",
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
    url: "https://fictious-designs.vercel.app/servicos/branding",
    provider: {
      "@type": "Organization",
      name: "Fictious Media",
      url: "https://fictious-designs.vercel.app",
    },
    areaServed: {
      "@type": "Country",
      name: "Mozambique",
    },
    serviceType: "Branding e Identidade Visual",
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
        item: "https://fictious-designs.vercel.app/servicos/branding",
      },
    ],
  },
];

export default function BrandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <BrandingExperience />
    </>
  );
}
