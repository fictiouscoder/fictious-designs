import Image from "next/image";

const logos = [
  { name: "Aurora", file: "AURORALOGO.png" },
  { name: "Casas Matola", file: "CASASMATOLALOGO.png" },
  { name: "Casa Sup", file: "CASASUPLOGO.png" },
  { name: "Cira Saldanha Fashion", file: "CIRASALDANHALOGO.png" },
  { name: "Crown", file: "CROWNLOGO.png" },
  { name: "DC Fashion", file: "DCFASHION LOGO.png" },
  { name: "Dia Mam", file: "DIAMAM LOGO.png" },
  { name: "Do Zero Ao", file: "DO ZERO AOlogo.png" },
  { name: "Ecotech", file: "ECOTECHLOGO.png" },
  { name: "Gallery Coffee", file: "GALLERYCOFFELOGO.png" },
  { name: "Jano", file: "JANOTALOGO.png" },
  { name: "Mulheres Excel", file: "MULHERSEXCLOGO.png" },
  { name: "Mulheres Impact", file: "MULHERSIMPACTLOGO.png" },
  { name: "Nhonga", file: "NHONGALOGO.png" },
  { name: "Zunigust", file: "ZUNIGUSTLOGO.png" },
  { name: "Alex Grill", file: "Alex Grill Logo.png" },
  { name: "Urban Grill", file: "Urban Grill Logo.png" },
];

function LogoGroup({ copy = false }: { copy?: boolean }) {
  return (
    <div
      className={`logo-marquee-group${copy ? " logo-marquee-group-copy" : ""}`}
      aria-hidden={copy ? true : undefined}
    >
      {logos.map((logo) => (
        <div
  className={`logo-marquee-item${
    logo.name === "Alex Grill"
      ? " logo-marquee-item-alex"
      : logo.name === "Urban Grill"
        ? " logo-marquee-item-urban"
        : ""
  }`}
  key={logo.file}
>
        <Image
  src={`/images/logos-trimmed/${encodeURIComponent(logo.file)}`}
  alt={copy ? "" : logo.name}
  width={300}
  height={300}
  sizes="140px"
  loading="lazy"
  className="logo-marquee-image"
/>
        </div>
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section
      className="logo-marquee"
      aria-label="Marcas e clientes"
    >
      <div className="logo-marquee-track">
        <LogoGroup />
        <LogoGroup copy />
      </div>
    </section>
  );
}