import React from "react";

export default function HeroSection() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-full text-white text-center">
      
      <h1 className="text-7xl mt-56 font-extrabold leading-tight">
        Shaping future
      </h1>

      <h1 className="text-7xl font-extrabold leading-tight">
        through excellence
      </h1>

      <p className="text-xl font-semibold mt-5 text-[#FFFFFF99]">
        We are a top 25 builder and developer fully invested in our customers’<br />
        success and improving the communities we serve.
      </p>
      <div className="w-[80%] mt-28 h-px bg-gray-300 my-6"></div>

      <div className="flex mt-10 items-start justify-between w-[80%]">
        <p className="text-white text-start leading-[1.05] text-3xl ">
          We developed landmark real estate <br />
          projects that deliver lasting value to <br />
          investors and communities.
        </p>

        {/* Right Button */}
        <button className="flex items-center bg-white rounded-full px-4 py-2  text-black shadow-md">
          <span className="mr-4">View Services</span>

          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-lime-200">
            ↗
          </span>
        </button>
      </div>

    </div>
  );
}
