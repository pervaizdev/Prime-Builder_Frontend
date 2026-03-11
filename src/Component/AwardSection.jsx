import Image from "next/image";
import { awardSections } from "@/data/awardData";
import { motion } from "framer-motion";

function AwardBlock({ award, reverse = false }) {
  const { title, subtitle, year, category, description, highlights, image } = award;

  return (
    <div className="py-10 lg:py-14 border-b border-gray-100 last:border-0 overflow-hidden">
      <div
        className={`grid gap-8 lg:gap-12 grid-cols-1 items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid-cols-2`}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`flex flex-col ${reverse ? "lg:order-2" : "lg:order-1"}`}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-50 text-yellow-400 text-lg rounded-full uppercase tracking-wider">
              {category}
            </span>
            <span className="flex items-center gap-1.5 text-gray-500 font-medium text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {year}
            </span>
          </div>

          <h2 className="mb-2 text-3xl lg:text-3xl parisienne-font text-gray-900 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <h3 className="mb-4 text-xl lg:text-xl font-medium text-gray-600">
              {subtitle}
            </h3>
          )}

          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>

          <p className="text-base text-gray-700 leading-relaxed mb-6">
            {description}
          </p>

          {highlights && highlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Key Recognitions:</h4>
              <ul className="grid gap-2">
                {highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="shrink-0 mt-0.5">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-sm text-gray-700 font-medium">{highlight}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Image Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className={`relative w-full max-w-sm mx-auto ${reverse ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="relative group perspective-1000">
            {/* Decorative backgrounds */}
            <div className="absolute inset-0 bg-linear-to-tr from-gray-200 to-gray-50 transform rotate-2 rounded-3xl -z-10 shadow-lg transition-transform duration-500 group-hover:rotate-3"></div>
            <div className="absolute inset-0 bg-white transform -rotate-2 rounded-3xl -z-10 border border-gray-100 shadow-xl transition-transform duration-500 group-hover:-rotate-3"></div>

            <div className="relative w-full aspect-square p-6 md:p-8 flex flex-col items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="p-4 md:p-6 object-contain drop-shadow-xl transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function AwardSection() {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <div className="text-center mb-12 max-w-2xl mx-auto px-4">
      
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-3xl parisienne-font text-gray-900 leading-tight"
        >
          Celebrating Excellence & Recognition
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"
        ></motion.div>
      </div>

      <div className="flex flex-col">
        {awardSections.map((section, index) => (
          <AwardBlock
            key={section.id}
            award={section}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}