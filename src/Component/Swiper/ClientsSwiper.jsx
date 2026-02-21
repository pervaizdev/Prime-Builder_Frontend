"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const logos = [
  { name: "Bechtel", src: "https://static.cdnlogo.com/logos/b/97/bechtel-unternehmen.svg", url: "https://www.bechtel.com/" },
  { name: "Turner Construction", src: "https://static.cdnlogo.com/logos/t/50/turner.svg", url: "https://www.turnerconstruction.com/" },
  { name: "Gensler", src: "https://static.cdnlogo.com/logos/g/31/gensler.svg", url: "https://www.gensler.com/" },
  { name: "Aecom", src: "https://static.cdnlogo.com/logos/a/76/aecom.svg", url: "https://www.aecom.com/" },
  { name: "Skanska", src: "https://static.cdnlogo.com/logos/s/29/skanska.svg", url: "https://www.skanska.com/" },
  { name: "HOK Architects", src: "https://static.cdnlogo.com/logos/h/81/hok.svg", url: "https://www.hok.com/" },
];

const repeatedLogos = Array.from({ length: 8 }, () => logos).flat();

export default function ClientsSwiper() {
  return (
    <section className="bg-white py-20 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-100 pt-16">
          <div className="flex justify-center">
            <p className="text-center text-[10px] md:text-sm font-black tracking-[0.4em] uppercase text-black inline-block bg-yellow-300 px-8 py-2.5 shadow-sm italic">
              WE’RE PROUD TO PARTNER WITH BEST-IN-CLASS CLIENTS
            </p>
          </div>

          <div className="mt-20 overflow-hidden">
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop
              loopAdditionalSlides={30}
              speed={12000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                stopOnLastSlide: false,
              }}
              freeMode={{ enabled: true, momentum: false }}
              allowTouchMove={false}
              grabCursor={false}
              slidesPerView={2}
              spaceBetween={40}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 60 },
                1024: { slidesPerView: 5, spaceBetween: 100 },
              }}
              className="w-full swiper-linear-marquee"
              // 👇 Force autoplay to keep running even after click/tap
              onTouchEnd={(swiper) => {
                swiper.autoplay?.start();
              }}
              onClick={(swiper) => {
                swiper.autoplay?.start();
              }}
            >
              {repeatedLogos.map((logo, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center py-4">
                  <a
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform duration-300 hover:scale-110"
                    title={logo.name}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={180}
                      height={60}
                      unoptimized
                      className="h-[35px] md:h-[45px] w-auto object-contain"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-linear-marquee .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}