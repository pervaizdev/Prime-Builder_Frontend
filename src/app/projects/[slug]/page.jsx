import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/card";
import CardDetails from "@/Component/CardDetails.jsx";
import FeaturesAmenities from "@/Component/FeaturesAmenities";
import Description from "@/Component/ProjectDescription.jsx";
import MediaSection from "@/Component/MediaSection";
import Location from "@/Component/Location"

import {
  AnimatedHeroTitle,
  AnimatedSection,
  AnimatedStagger,
  AnimatedFadeUp,
  AnimatedImage,
  AnimatedDivider,
} from "@/Component/AnimationWrappers";

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-15 w-15 items-center justify-center rounded-full border border-black/10">
        <Icon className="text-2xl text-black/80" />
      </div>
      <div className="font-sans">
        <p className="font-bold text-black/40">{label}</p>
        <p className="font-bold text-black">{value}</p>
      </div>
    </div>
  );
}

export default async function Page({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.id === slug);
  if (!project) return notFound();

  return (
    <>
      <div className="relative h-[35vh] w-full lg:h-[95vh]">
        <Image
          src="/footer-bg.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative top-[-320] bg-white rounded-[60] px-8 mt-12">
        <CardDetails project={project} InfoItem={InfoItem} />
        <div className="mx-auto px-10 pt-14">
          <AnimatedImage className="relative mt-12 h-[650] w-full overflow-hidden rounded-[40]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </AnimatedImage>

          <AnimatedSection>
            <Description />
          </AnimatedSection>
        </div>
        <hr className="border mt-15" />
        <FeaturesAmenities />
        <hr className="border mt-15 mb-10" />
        <MediaSection/>
        <Location/>
      </div>
    </>
  );
}
