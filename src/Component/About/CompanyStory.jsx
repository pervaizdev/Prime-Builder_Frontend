import React from "react";
import Image from "next/image";

export default function CompanyStory() {
  return (
    <div className="container mx-auto py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative h-[320px] lg:h-[550px] overflow-hidden rounded-3xl">
          <Image
            src="/images/2b.jpg"
            alt="Company Story"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-yellow-500 font-semibold tracking-[0.2em] uppercase text-sm">
            Our Story
          </p>

          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-gray-900">
            Building spaces with purpose, trust, and long term value
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Our company was founded with a vision to create modern residential
            and commercial developments that meet evolving lifestyle and
            business needs. From the beginning, our focus has been on quality
            construction, smart planning, and delivering projects that create
            real value for clients and communities.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-3 text-gray-600 leading-7">
                To be a trusted name in real estate and construction, known for
                innovation, quality, and community-focused development.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-3 text-gray-600 leading-7">
                To deliver reliable real estate solutions and well-planned
                developments that enhance modern living and business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}