import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function CeoMessage() {
  return (
    <div className="py-16 lg:py-10">
      {/* <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 sm:p-10 lg:p-10 text-black flex flex-col justify-center">
            <div className="flex items-center gap-3 text-yellow-400">
              <Quote className="w-8 h-8" />
              <p className="uppercase tracking-[0.2em] text-sm font-semibold">
                CEO Message
              </p>
            </div>

            <h2 className="mt-4 text-3xl lg:text-4xl font-bold leading-tight">
              A message from our leadership
            </h2>

            <p className="mt-6 text-black ">
              At our company, we believe real estate is not just about buildings
              but about creating opportunities, improving lifestyles, and
              shaping stronger communities. Every project we take on reflects
              our commitment to quality, transparency, and long-term trust.
            </p>

            <p className="mt-4 text-black">
              We continue to move forward with a clear purpose: to deliver
              developments that combine modern design, reliable construction,
              and meaningful value for every client.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-yellow-400">
                Mr. Bakhtullah Khan
              </h3>
              <p className="text-black mt-1">Chief Executive Officer</p>
            </div>
          </div>
          <div className="relative min-h-[350px] lg:min-h-[100%]">
            <Image
              src="/images/2b.jpg"
              alt="CEO"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div> */}
      <div className="text-center leading-8">
        <h2 className="mt-4 text-3xl lg:text-4xl  font-bold text-black">
          A message from our leadership
        </h2>

        <p className="mt-6 mx-auto text-2xl font-bold max-w-3xl text-yellow-500 ">
          At our company, we believe real estate is not just about buildings but
          about creating opportunities, improving lifestyles, and shaping
          stronger communities. Every project we take on reflects our commitment
          to quality, transparency, and long-term trust.
        </p>
      </div>
    </div>
  );
}
