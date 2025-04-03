import Image from "next/image";

const logos = [
  { src: "/logo_avocat.png", alt: "Logo Avocats", width: 80, height: 80 },
  { src: "/logo.png", alt: "Logo Client", width: 100, height: 100 },
  { src: "/logo_immo.png", alt: "Logo Immobilier", width: 80, height: 80 },
];

function LogoCarousel() {
  return (
<div className="h-full w-[60px] overflow-hidden relative">
  <div className="flex animate-carousel items-center h-full w-[400px]">
    {[...logos, ...logos].map((logo, i) => (
      <div
        key={i}
        className="min-w-[60px] flex justify-center items-center h-full"
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={50}
          height={50}
          priority
          className="object-contain max-h-full"
        />
      </div>
    ))}
  </div>
</div>
  );
}

export default LogoCarousel;