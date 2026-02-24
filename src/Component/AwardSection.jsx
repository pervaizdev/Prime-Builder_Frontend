import Image from "next/image";
import { awardSections } from "@/data/awardData";

function AwardBlock({ title, description, image, reverse = false }) {
  return (
    <div className="py-20"> {/* 👈 adds top & bottom space */}
      <div className="grid gap-14 grid-cols-1 lg:grid-cols-2 px-8">
        
        {/* Text */}
        <div className={reverse ? "lg:order-2" : "lg:order-1"}>
          <h1 className="mb-8 text-4xl font-extrabold text-black">
            {title}
          </h1>

          <p className="text-lg text-black">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className={reverse ? "lg:order-1" : "lg:order-2"}>
          <div className="relative w-full aspect-4/3">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>

      </div>
    </div>
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