import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/card";
import CardDetails from "@/Component/CardDetails.jsx";
import FeaturesAmenities from "@/Component/FeaturesAmenities";


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
  const { slug } = await params; // ✅ IMPORTANT FIX

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
      <div className="relative top-[-320] bg-white rounded-[60] px-8 py-12">
        <CardDetails project={project} InfoItem={InfoItem} />
        <div className="mx-auto px-6 pt-14">
          <div className="relative mt-12 h-[650] w-full overflow-hidden rounded-[40]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="mt-16 flex justify-between gap-24">
            <div className="w-[55%]">
              <h2 className="text-5xl font-bold text-black">
                Project description
              </h2>

              <div className="mt-8 space-y-6 text-lg text-black/60">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia eum quis reiciendis sequi culpa voluptatibus fugit
                  illo quaerat hic? Nam voluptatibus dignissimos eos tenetur
                  optio blanditiis molestiae maxime? Voluptatem, id.
                </p>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa libero velit vel dolorum in, aspernatur earum nulla odit
                  amet itaque porro eligendi soluta nam incidunt delectus.
                  Corporis alias, dignissimos consectetur quod molestias earum
                  ipsa sapiente explicabo quos culpa nemo consequatur facere
                  aliquid quo eligendi ex magni iusto ut, tenetur eaque?
                  Excepturi possimus provident delectus reiciendis amet nihil
                  exercitationem repellendus quos?
                </p>
              </div>
            </div>
            <div className="w-[35%] mt-5">
              <h3 className="mt-2 text-xl font-bold font-sans text-black">
                Key Details
              </h3>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-yellow-200" />
                  <p className="text-lg text-black/70">
                    <span className="font-bold text-black">Location:</span>
                    Central Business District.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-yellow-200" />
                  <p className="text-lg text-black/70">
                    <span className="font-bold text-black">
                      Total Built-Up Area:
                    </span>
                    350,000 sq. ft.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-yellow-200" />
                  <p className="text-lg text-black/70">
                    <span className="font-bold text-black">
                      Number of Floors:
                    </span>
                    20, including two underground levels for parking.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-yellow-200" />
                  <p className="text-lg text-black/70">
                    <span className="font-bold text-black">
                      Special Features:
                    </span>
                    Vertical garden facade, collaborative workspaces, and an
                    energy-efficient HVAC system.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-yellow-200" />
                  <p className="text-lg text-black/70">
                    <span className="font-bold text-black">Amenities:</span>{" "}
                    Gym, café, daycare, and rooftop event space.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border mt-15" />
        <FeaturesAmenities />
      </div>
    </>
  );
}
