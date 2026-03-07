"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";

const carousel1 = Array.from({ length: 6 }, (_, i) => `/assets/testimonials/carousel-1/0${i + 1}.webp`);
const carousel2 = Array.from({ length: 6 }, (_, i) => `/assets/testimonials/carousel-2/0${i + 1}.webp`);

export function SectionFive() {
  return (
    <section className="overflow-hidden bg-black py-12 md:py-24">
      <div className="section-container mb-10">
        <h2 className="text-center font-tomorrow text-xl font-bold uppercase text-white md:text-3xl">
          Confira os Depoimentos dos meus{" "}
          <span className="text-[#D42727]">CASES DE SUCESSO</span>.
        </h2>
      </div>

      {/* Carousel 1 — scrolls LEFT */}
      <div className="mb-6">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={5000}
          slidesPerView="auto"
          allowTouchMove={true}
          className="!overflow-visible"
        >
          {carousel1.map((src, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <div className="mx-2 h-[280px] w-[200px] overflow-hidden rounded-lg md:h-[350px] md:w-[260px]">
                <Image
                  src={src}
                  alt={`Depoimento ${i + 1}`}
                  width={260}
                  height={350}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Carousel 2 — scrolls RIGHT */}
      <div>
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
          speed={5000}
          slidesPerView="auto"
          allowTouchMove={true}
          className="!overflow-visible"
        >
          {carousel2.map((src, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <div className="mx-2 h-[280px] w-[200px] overflow-hidden rounded-lg md:h-[350px] md:w-[260px]">
                <Image
                  src={src}
                  alt={`Depoimento ${i + 7}`}
                  width={260}
                  height={350}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
