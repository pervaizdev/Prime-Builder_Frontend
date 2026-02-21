import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";

export default function DifferentSection() {
  return (
    <section className="bg-[#f5f5f5] text-black py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
    {/* LEFT IMAGE */}
<div className="relative">
  {/* Image */}
  <div className="rounded-[40px] overflow-hidden">
    <Image
      src="/images/1 ba night.jpg"
      alt="What makes us different"
      width={600}
      height={700}
      className="w-full h-[520px] object-cover"
    />
  </div>

  {/* Rating Card */}
  <div
    className="absolute bottom-10 left-10 w-[240px] rounded-2xl
               bg-gradient-to-b from-[#4b3f35] to-[#2c2622]
               p-6 text-center shadow-2xl"
  >
    <h3 className="text-4xl font-bold text-yellow-400">4.9</h3>

    {/* Avatars */}
    <div className="flex justify-center -space-x-3 mt-3">
      <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white" />
      <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white" />
      <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-white" />
    </div>

    {/* Stars */}
    <div className="text-yellow-400 text-sm mt-2">★★★★★</div>

    <p className="text-xs text-gray-300 mt-2">2k+ satisfied customers</p>
  </div>
</div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="inline-block px-4 py-1 text-sm border rounded-full mb-6">
            OUR COMMITMENT
          </span>

          <h2 className="text-4xl font-bold mb-6">
            What makes us <br /> different
          </h2>

          <p className="text-gray-600 mb-10">
            It's not just about creating something good; it's about designing,
            innovating, and collaborating to forge remarkable and unparalleled
            experiences.
          </p>

          <div className="space-y-8">
            
            {/* Item 1 */}
            <div className="flex gap-6 items-start">
              <div className="bg-yellow-400 p-4 rounded-full">
                <FiThumbsUp className="text-black text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Corporate Responsibility
                </h4>
                <p className="text-gray-600 text-sm">
                  Our goal is zero incidents and our lost time frequency rate
                  is industry leading.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-6 items-start">
              <div className="bg-yellow-400 p-4 rounded-full">
                <RiTeamLine className="text-black text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Experts with Team Spirit
                </h4>
                <p className="text-gray-600 text-sm">
                  Our multi-skilled team provides innovative, forward-thinking
                  solutions.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-6 items-start">
              <div className="bg-yellow-400 p-4 rounded-full">
                <HiOutlineUsers className="text-black text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Diversity, Equity & Inclusion
                </h4>
                <p className="text-gray-600 text-sm">
                  We work with both investors and developers to create
                  landmarks that make an impact.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}