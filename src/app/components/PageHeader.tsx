"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Import de l'animation

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  clientImageSrc?: string; // Image optionnelle pour ton client
}

export default function PageHeader({ title, subtitle, imageSrc, clientImageSrc }: PageHeaderProps) {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 z-0">
      {/* Image de fond */}
      <Image
  src={imageSrc}
  alt={title}
  fill // ✅ Remplace `layout="fill"`
  className="brightness-75 object-cover" // ✅ Remplace `objectFit="cover"`
  priority
  sizes="100vw"
  quality={85}
/>

      {/* Contenu superposé */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg md:text-xl text-center">{subtitle}</p>}
      </div>

      {/* Image du client (si fournie) */}
      {clientImageSrc && (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="absolute bottom-0 w-40 md:w-52 lg:w-64 hidden md:hidden lg:block" // 👈 Ajout ici !
    style={{ right: "1%" }} // Décalage en pourcentage
  >
        <Image
  src={clientImageSrc}
  alt="Avocat"
  width={300}
  height={300}
  className="object-cover shadow-lg"
  style={{
    width: "auto", // ✅ Ajout pour éviter la distorsion
    height: "auto", // ✅ Ajout pour éviter la distorsion
    maskImage: "linear-gradient(to right, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 60%)",
    WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 60%)"
  }}
/>
        </motion.div>
      )}
    </div>
  );
}