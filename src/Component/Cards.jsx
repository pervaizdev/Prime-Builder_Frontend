import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";

export default function ProjectCard({ item }) {
  return (
    <>
    <Link href={`/projects/${item.id}`} className="block">
    <div className="relative h-[520] w-full overflow-hidden rounded-[30]">
      <Image src={item.image} alt={item.title} fill className="object-cover" />
      <div className="absolute inset-0 flex flex-col bg-linear-to-t from-black via-black/20 p-7">
        <div className="flex justify-between">
          <span className="rounded-full bg-lime-200 px-4 py-2 text-sm font-bold text-black">
            {item.status}
          </span>
          <span className="rounded-full bg-blue-200 px-4 py-2 text-sm font-bold text-black">
            {item.availability}
          </span>
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-3 text-white">
            <span className="flex  items-center justify-center text-lime-200">
              <HiLocationMarker className="text-2xl" />
            </span>

            <p className="font-semibold">{item.location}</p>
          </div>
          <hr className="my-6 border border-white-400" />
          <h3 className="text-white font-bold font-sans text-4xl">{item.title}</h3>
        </div>
      </div>
    </div>
    </Link>
    </>
  );
}
