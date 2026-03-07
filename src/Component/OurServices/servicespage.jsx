"use client";

import React from "react";
import { usePathname } from "next/navigation";
import * as Icons from "lucide-react";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";

export default function ServicesPage() {
  const pathname = usePathname();
  const isServicesPage = pathname === "/services";

  const displayServices = isServicesPage
    ? servicesData
    : servicesData.slice(0, 3);

  return (
    <div className="bg-white max-auto overflow-hidden">
      {/* Heading */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl mt-25 font-extrabold text-black leading-tight">
          Our Services
        </h2>
      </div>

      <div className="mt-15 px-6 container mx-auto">
        {/* Button (only show if NOT on /services page) */}
        {!isServicesPage && (
          <div className="flex justify-end mb-6">
            <Link href="/services">
              <button
                className="px-6 py-3 rounded-xl bg-gray-900 text-white font-medium
                 hover:bg-yellow-400 hover:text-gray-900
               transition-all duration-300"
              >
                View Services
              </button>
            </Link>
          </div>
        )}

        {/* Cards */}
        <div className="grid gap-8 mb-20 grid-cols-1 lg:grid-cols-3 container mx-auto">
          {displayServices.map((item) => {
            const Icon = Icons[item.icon];

            return (
              <div key={item.id}>
                <div
                  className="group rounded-2xl bg-white border border-gray-100 shadow-sm
                  hover:shadow-md hover:border-yellow-300
                  transition-all duration-300 ease-out
                  p-8 transform hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    {Icon && (
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <div className="mt-4 h-[2px] w-10 bg-yellow-400 transition-all duration-300 group-hover:w-20" />

                    <p className="mt-4 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
