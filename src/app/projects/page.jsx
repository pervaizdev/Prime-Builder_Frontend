import Image from "next/image";
import ProjectCard from "../../Component/Cards";
import { projects } from "../../data/card";

export default function ProjectPage() {
  return (
    <>
      <div className="relative w-full h-[35vh] lg:h-[95vh]">
        <Image
          src="/footer-bg.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <h1 className="text-white font-sans font-bold ms-4 lg:ms-12 text-4xl lg:text-8xl">
            Our Projects
          </h1>
        </div>
      </div>

     <div className=" relative top-[-60] bg-white rounded-[60] px-8 py-12">
       <hr className="border-gray-700 my-20"/>
       <div className="mx-auto gap-6 grid grid-cols-1 lg:grid-cols-3 mt-13 mb-30">
        {projects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
       </div>
     </div>

    </>
  );
}
