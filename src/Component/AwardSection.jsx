import Image from "next/image";
import { awardSections } from "@/data/awardData";

function AwardBlock({ title, description, image, reverse = false }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className={reverse ? "lg:order-2" : "lg:order-1"}>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h1>

            <p className="text-lg font-light text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>

          {/* Image */}
          <div
            className={`flex justify-center ${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative w-full max-w-md">
              {/* Control height with aspect ratio box */}
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-xl object-contain"
                  sizes="(min-width: 1024px) 448px, 100vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AwardSection() {
  return (
    <>
      {awardSections.map((section, index) => (
        <AwardBlock
          key={section.id}
          title={section.title}
          description={section.description}
          image={section.image}
          reverse={index % 2 === 1} // second section reversed
        />
      ))}
    </>
  );
}