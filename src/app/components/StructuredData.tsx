const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fictious Designs",
    url: "https://fictiousdesigns.vercel.app",
    description:
      "Servicos de design, branding, desenvolvimento web e presenca digital para marcas e empresas.",
    areaServed: "Worldwide",
    knowsAbout: [
      "Design grafico",
      "Identidade visual e branding",
      "Desenvolvimento web",
      "Marketing digital",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fictious Designs",
    url: "https://fictiousdesigns.vercel.app",
    inLanguage: "pt",
    publisher: {
      "@type": "Organization",
      name: "Fictious Designs",
      url: "https://fictiousdesigns.vercel.app",
    },
  },
];

export default function StructuredData() {
  return (
    <>
      {structuredData.map((item) => (
        <script
          key={item["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}