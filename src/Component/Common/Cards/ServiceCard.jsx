import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function ServiceCard({
  title,
  image,
  description,
  services = [],
}) {
  return (
    <div className="rounded-[8px] overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300">
      
      {/* Image */}
      <div className="w-full h-[240px]">
        <Image
          src={image}
          alt={title}
          width={800}
          height={240}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 md:text-sm leading-relaxed">
          {description}
        </p>

        {/* Small Service Details */}
        <ul className="text-sm text-gray-500 space-y-1">
          {services.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>


      

      </div>
    </div>
  );
}