import React from "react";
import ServiceCard from "../Common/Cards/ServiceCard"; // adjust path if needed

export default function ServicesPage() {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="inline-flex items-center rounded-full w-[130px] border border-[#eed498] px-4 py-2 text-xs tracking-widest">
                    <h2 className="text-black">WHO WE ARE</h2>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-6 text-center mt-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
                    Take a brief look at
                    <br />
                    some of the services
                    <br />
                    we offer
                </h2>
            </div>
            <div className="max-w-7xl mx-auto mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                    title="Real Estate"
                    image="/images/1 ba night.jpg"
                    description="We provide premium residential and commercial property solutions tailored to your needs."
                    services={["Property Buying & Selling", "Leasing Services", "Market Analysis"]}
                />

                <ServiceCard
                    title="Project Management"
                    image="/images/1 ba night.jpg"
                    description="End-to-end construction and development management with complete transparency."
                    services={["Planning & Execution", "Cost Control", "Timeline Management"]}
                />

                <ServiceCard
                    title="Investment & Capital"
                    image="/images/1 ba night.jpg"
                    description="Strategic investment advisory services designed to maximize real estate returns."
                    services={["Capital Structuring", "ROI Forecasting", "Portfolio Management"]}
                />
            </div>
        </div>
    );
}