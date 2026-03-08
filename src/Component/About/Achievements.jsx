import React from "react";
import { Building2, Award, Users, BriefcaseBusiness } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "120+",
    subtitle: "Projects Completed",
    icon: Building2,
  },
  {
    id: 2,
    title: "10+",
    subtitle: "Years of Experience",
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    title: "500+",
    subtitle: "Satisfied Clients",
    icon: Users,
  },
  {
    id: 4,
    title: "05+",
    subtitle: "Industry Recognitions",
    icon: Award,
  },
];

export default function Achievements() {
  return (
    <section className="py-16 lg:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-yellow-500 font-semibold tracking-[0.2em] uppercase text-sm">
          Our Achievements
        </p>
        <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-gray-900">
          Numbers that reflect our growth
        </h2>
        <p className="mt-5 text-gray-600 leading-8">
          Our achievements represent the trust of our clients, the quality of
          our work, and our commitment to building projects that stand the test
          of time.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-yellow-400">
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="mt-5 text-4xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}