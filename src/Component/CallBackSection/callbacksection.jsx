"use client";

export default function CallBackSection() {
  return (
    <section className="bg-white text-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Background Container */}
        <div
          className="rounded-[36px] bg-cover bg-center py-20 px-6 sm:px-10 md:px-16"
          style={{
            backgroundImage: "url('/images/1 ba night.jpg')", // replace with your image
          }}
        >
          {/* White Card */}
          <div className="mx-auto max-w-4xl rounded-3xl bg-white px-6 py-12 shadow-xl sm:px-12">
            
            {/* Badge */}
            <div className="flex justify-center">
              <span className="rounded-full border border-lime-400 px-4 py-1 text-[10px] font-semibold tracking-[0.25em]">
                QUICK EN
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-6 text-center text-xl font-extrabold leading-snug sm:text-2xl md:text-3xl">
              Get specialist advice for residential,
              <br className="hidden sm:block" />
              commercial or property
            </h2>

            {/* Form */}
            <form className="mt-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input placeholder="Your Name*" />
                <Input placeholder="Email*" />
                <Input placeholder="Phone Number*" />
                <Select placeholder="You inquiry about..." />
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-gray-500">
                  We're excited to connect with you!
                  <br />
                  Required fields are marked *
                </p>

                <button
                  type="submit"
                  className="flex items-center gap-3 rounded-full bg-lime-400 px-6 py-3 text-xs font-bold transition hover:brightness-95 active:scale-95"
                >
                  Get A Call Back
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Inputs */

function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="h-12 w-full rounded-full bg-gray-100 px-5 text-sm outline-none focus:ring-2 focus:ring-lime-300"
    />
  );
}

function Select({ placeholder }) {
  return (
    <select className="h-12 w-full rounded-full bg-gray-100 px-5 text-sm outline-none focus:ring-2 focus:ring-lime-300">
      <option>{placeholder}</option>
      <option>Residential</option>
      <option>Commercial</option>
      <option>Property</option>
    </select>
  );
}