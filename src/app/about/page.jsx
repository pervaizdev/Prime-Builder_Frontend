import React from "react";
import Image from "next/image";
import FooterSection from "@/Component/Footer/footer";
import CompanyStory from "@/Component/About/CompanyStory";
import CeoMessage from "@/Component/About/CeoMessage";
import Achievements from "@/Component/About/Achievements";
import ConstructionProcess from "@/Component/About/ConstructionProcess";

export default function ServicesPage() {
  return (
    <>
      <div className="sticky top-0 h-screen w-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/2b.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="px-4 lg:px-12">
              <h1 className="text-white font-sans text-center font-bold text-5xl lg:text-8xl">
                About Us
              </h1>

              <p className="mt-5 lg:mt-10 max-w-3xl mx-auto text-center text-xl lg:text-lg text-white/90">
                We deliver quality real estate developments designed for modern
                living and business needs. Our focus is on innovation,
                transparency, and lasting value.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* This section comes up and hides hero content behind it */}
      <div className="relative z-20 bg-white rounded-t-3xl lg:rounded-t-[60px] px-4 lg:px-8 pt-12 -mt-10 lg:-mt-16">
        <hr className="border-gray-700 mt-5 lg:mt-10" />

        <CompanyStory />
        <CeoMessage />
        {/* <Achievements /> */}
        <ConstructionProcess />
        <FooterSection />
      </div>
    </>
  );
}
