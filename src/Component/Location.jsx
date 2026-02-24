// components/LocationMapCard.jsx
export default function LocationMapCard() {
  return (
    <div className="px-6 mt-16">
      <h2 className="text-5xl font-bold text-black">Location</h2> 
        <div className="mt-12 h-110 w-full rounded-[36px] bg-white">
            <iframe
              title="Map"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=London%20Eye&output=embed"
            />
        </div>
    </div>
  );
}