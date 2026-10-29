import type { Metadata } from "next";
import LocalSeoExperience from "@/app/components/service/LocalSeoExperience";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("seo-local");

if (!service) {
  throw new Error("Configuração do serviço SEO Local não encontrada.");
}

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: {
    canonical: "/servicos/seo-local",
  },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    url: "/servicos/seo-local",
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
    url: "https://fictious-designs.vercel.app/servicos/seo-local",
    provider: {
      "@type": "Organization",
      name: "Fictious Media",
      url: "https://fictious-designs.vercel.app",
    },
    areaServed: {
      "@type": "Country",
      name: "Mozambique",
    },
    serviceType: "SEO Local",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
        item: "https://fictious-designs.vercel.app/servicos/seo-local",
      },
    ],
  },
];

export default function SeoLocalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <LocalSeoExperience />
    </>
  );
}
