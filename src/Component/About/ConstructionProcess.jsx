import React from "react";
import * as Icons from "lucide-react";
import { constructionProcessData } from "@/data/constructionProcessData";

export default function ConstructionProcess() {
  return (
    <div className="container mx-auto py-16 lg:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-yellow-500 font-semibold tracking-[0.2em] uppercase text-sm">
          Construction Process
        </p>

        <p className="mt-5 text-gray-600 leading-8">
          Our process is designed to ensure clarity, quality, and consistency at
          every stage, from the first idea to final project delivery.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-6 gap-6">
        {constructionProcessData.map((step, index) => {
          const Icon = Icons[step.icon];

          const positionClass =
            index < 3
              ? "lg:col-span-2"
              : index === 3
                ? "lg:col-span-2 lg:col-start-2"
                : "lg:col-span-2";

          return (
            <div
              key={step.id}
              className={`
          rounded-3xl bg-gray-50 border border-gray-200 p-6
        ${positionClass}
        `}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-yellow-400">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>

                <span className="text-2xl font-bold text-gray-300">
                  {step.id}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
