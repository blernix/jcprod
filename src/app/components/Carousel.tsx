"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselProps {
  images?: string[];
  onImageClick?: (index: number) => void;
}

const defaultImages = [
  "/immo/exterieur.png",
  "/immo/salon.png",
  "/immo/chambre1.png",
  "/immo/chambre2.png",
  "/immo/salledeau.png",
  "/immo/cuisine.png"
];

export default function Carousel({ images = defaultImages, onImageClick }: CarouselProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="rounded-lg shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative w-full h-[500px] ${onImageClick ? 'cursor-pointer' : ''}`}
              onClick={() => onImageClick?.(index)}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}