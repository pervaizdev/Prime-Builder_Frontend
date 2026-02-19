// components/FeaturesAmenities.jsx
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

function FeatureCard({ title, desc, icon }) {
  const Icon = iconMap[icon];

  return (
    <div className="relative rounded-[48] bg-linear-to-b from-[#f5f2ea] to-white px-8 pb-10 pt-20 text-center">
      <div className="absolute left-1/2 top-0 h-27 w-27 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      <div className="absolute left-1/2 top-0 h-17 w-17 -translate-x-1/2 -translate-y-1/3 place-items-center rounded-full bg-lime-300">
         <Icon className="text-4xl mt-4 text-black" />
      </div>
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="mt-5 text-black/50">{desc}</p>
    </div>
  );
}

export default function FeaturesAmenities() {
  return (
    <div className="mt-20 px-6">
      <h2 className="text-6xl font-bold font-sans text-black">
        Features & amenities
      </h2>

      <div className="mt-23 grid gap-10 grid-cols-2 lg:grid-cols-4">
        {featuresAmenities.map((item) => (
          <FeatureCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
