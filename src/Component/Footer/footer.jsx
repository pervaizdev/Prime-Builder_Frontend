"use client";

export default function FooterSection() {
  return (
    <footer
      className="bg-cover bg-center pt-32 pb-16 bg-black/60 bg-blend-multiply"
      style={{
        backgroundImage: "url('/images/1 ba night.jpg')", // rename file (no spaces)
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        
        {/* White Card */}
        <div className="rounded-[32px] bg-white px-10 py-14 shadow-2xl">
          
          {/* Top Content */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold text-black">
                <span className="text-lime-500">▰</span> spaciaz
              </h2>

              <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                We are creators of transformative spaces that inspire,
                innovate, and endure.
              </p>
            </div>

            {/* Middle Column */}
            <div className="grid grid-cols-2 gap-6 text-sm text-gray-600">
              <ul className="space-y-3">
                <li>About Us</li>
                <li>Why Choose Us</li>
                <li>Our Team</li>
                <li>Solutions</li>
                <li>Partners</li>
                <li>Core Values</li>
              </ul>

              <ul className="space-y-3">
                <li>Our Projects</li>
                <li>News & Updates</li>
                <li>Terms & Conditions</li>
                <li>Support Center</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* Right Column */}
            <div>
              <p className="text-lg font-semibold text-black">
                +(084) 123 - 45688
              </p>

              <p className="mt-3 text-lg font-semibold text-black underline underline-offset-4">
                spaciaz@example.com
              </p>

              <p className="mt-6 text-xs text-gray-500">
                Facebook · Instagram · Youtube · Twitter
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-gray-200"></div>

          {/* Bottom */}
          <p className="text-center text-xs text-gray-500">
            © 2025 <span className="font-semibold text-black">Spaciaz</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}