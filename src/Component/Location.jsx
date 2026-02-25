import { projects } from "@/data/card.js";

export default function LocationMapCard() {
  const project = projects.find((p) => p.id === "p1");

  return (
    <div className="lg:px-6 mt-16">
      <h2 className="text-3xl lg:text-5xl font-sans font-bold text-black">
        Location
      </h2>

      <div className="mt-12 h-90 lg:h-110 w-full overflow-hidden rounded-3xl lg:rounded-[36px] bg-white">
        <iframe
          title="Map"
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={project?.mapUrl}
        />
      </div>
    </div>
  );
}
