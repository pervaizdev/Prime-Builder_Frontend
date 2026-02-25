import { HiLocationMarker } from "react-icons/hi";
import {
  HiOutlineSquares2X2,
  HiOutlineCalendarDays,
  HiOutlineBuildingOffice2,
  HiOutlineCircleStack,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";

export default function CardDetails({ project, InfoItem }) {
  return (
    <div className="pt-14 px-5">
      <div className="flex items-center gap-3">
        <HiLocationMarker className="text-xl lg:text-3xl text-lime-300" />
        <p className=" font-bold text-sm lg:text-lg text-black">{project.location}</p>
      </div>
      <h1 className="mt-5 lg:text-7xl text-2xl font-sans font-bold text-black">
        {project.title}
      </h1>
      <hr className="my-12 border-black/20" />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-0">
        <InfoItem
          icon={HiOutlineCircleStack}
          label="Status"
          value={
            project.status === "COMPLETED" ? "Completed" : "Under Construction"
          }
        />
        <InfoItem
          icon={HiOutlineBuildingOffice2}
          label="Project Type"
          value={project.projectType}
        />
        <InfoItem
          icon={HiOutlineSquares2X2}
          label="Project Area"
          value={project.projectArea}
        />
        <InfoItem
          icon={HiOutlineCalendarDays}
          label="Commencement date"
          value={project.commencementDate}
        />
        <InfoItem
          icon={HiOutlineCurrencyDollar}
          label="Price Range"
          value={project.priceRange}
        />
      </div>
    </div>
  );
}
