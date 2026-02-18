import { featuresAmenities } from "@/data/featuresAmenities";

import {
  HiOutlineShieldCheck,
  HiOutlineVideoCamera,
  HiOutlineWrenchScrewdriver,
  HiOutlineLifebuoy,
  HiOutlineFire,
  HiOutlineFaceSmile,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

// ✅ icon map MUST be in component
const iconMap = {
  shield: HiOutlineShieldCheck,
  camera: HiOutlineVideoCamera,
  dumbbell: HiOutlineSparkles,
  kids: HiOutlineFaceSmile,
  tools: HiOutlineWrenchScrewdriver,
  pool: HiOutlineLifebuoy,
  fire: HiOutlineFire,
  garden: HiOutlineGlobeAlt,
};

function FeatureIcon({ icon, title, desc }) {
  const Icon = iconMap[icon];

  return (
    <div className="relative overflow-hidden rounded-[48px] bg-[#FAF8F3] px-10 pb-12 pt-24 text-center">
      
      {/* Top Cut */}
      <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

      {/* Icon Bubble */}
      <div className="absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lime-300">
        {Icon && <Icon className="text-4xl text-black" />}
      </div>

      <h3 className="text-2xl font-bold text-black">{title}</h3>
      <p className="mt-5 text-lg text-black/50">{desc}</p>
    </div>
  );
}



export default function FeaturesAmenities() {
  return (
    <section className="mx-auto mt-28 max-w-7xl px-6">
      <h2 className="text-6xl font-extrabold text-black">
        Features & amenities
      </h2>

      <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {featuresAmenities.map((item) => (
          <FeatureIcon key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
