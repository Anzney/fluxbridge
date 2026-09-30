"use client";

import { ArrowUpRight } from "lucide-react";

const learningServices = [
  {
    icon: "/assessments.png",
    title: "ASSESSMENTS & IDPS",
  },
  {
    icon: "/leadership.png",
    title: "LEADERSHIP DEVELOPMENT",
  },
  {
    icon: "/esg.png",
    title: "ESG - COMPLIANCE & GOVERNANCE",
  },
  {
    icon: "/culture.png",
    title: "CULTURE MANAGEMENT",
  },
  {
    icon: "/employee.png",
    title: "EMPLOYEE EXPERIENCE",
  },
  {
    icon: "/trainer.png",
    title: "TRAIN THE– TRAINER",
  },
  {
    icon: "/change.png",
    title: "CHANGE ENGAGEMENT",
  },
  {
    icon: "/behavioral.png",
    title: "BEHAVIORAL / ESSENTIALS SKILLS",
  },
  {
    icon: "/sales.png",
    title: "SALES & CLIENT SERVICE",
  },
  {
    icon: "/technical.png",
    title: "TECHNICAL & FUNCTIONAL COMPETENCIES",
  },
  {
    icon: "/diversity.png",
    title: "DIVERSITY, EQUITY & INCLUSION (DEI)",
  },
  {
    icon: "/executive.png",
    title: "EXECUTIVE COACHING",
  },
];

export default function LearningAndDevelopment() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] text-white">

      {/* SAME BACKGROUND AS SERVICES */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/hero-recruitment.jpg')",
        }}
      />

      {/* SAME BRAND GRADIENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(0,59,150,0.28),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(158,27,30,0.20),transparent_30%)]" />

      {/* Subtle central glow */}
      <div className="absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#003b96]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* HEADER */}
        <div className="mb-20 flex flex-col gap-8 lg:mb-28 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
              06 — Learning & Development
            </p>

            <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              Develop people.
              <br />
              <span className="text-white/40">
                Strengthen organizations.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/50 lg:pb-2">
            Learning and development solutions designed to build
            capability, strengthen leadership and create meaningful
            employee experiences.
          </p>
        </div>

        {/* SERVICE GRID */}
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

          {learningServices.map((service, index) => (
            <div
              key={index}
              className="group relative min-h-[280px] overflow-hidden bg-[#07111f]/90 p-7 transition-all duration-500 hover:bg-[#0b1c35] sm:min-h-[300px] lg:min-h-[320px]"
            >

              {/* Hover glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#003b96]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative z-10 flex items-start justify-between">

                <span className="text-xs font-medium tracking-[0.2em] text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/30 transition-all duration-500 group-hover:border-white/25 group-hover:bg-white group-hover:text-[#07111f]">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

              </div>

              {/* Icon */}
              <div className="relative z-10 mt-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] transition-all duration-500 group-hover:scale-105 group-hover:border-[#003b96]/60 group-hover:bg-[#003b96]/20">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-11 w-11 object-contain opacity-75 transition-all duration-500 group-hover:opacity-100"
                />
              </div>

              {/* Title */}
              <div className="relative z-10 mt-8 flex items-end justify-between gap-5">

                <h3 className="max-w-[290px] text-base font-semibold leading-6 tracking-[0.01em] text-white/80 transition-colors duration-500 group-hover:text-white sm:text-lg">
                  {service.title}
                </h3>

              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-7 right-7 h-px bg-white/10 transition-all duration-500 group-hover:bg-white/30" />

            </div>
          ))}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-20 border-t border-white/15 pt-10 lg:mt-28">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Continuous development
              </p>

              <p className="mt-3 max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                Build capability today.
                <br />
                <span className="text-white/40">
                  Prepare people for tomorrow.
                </span>
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:bg-[#003b96] hover:text-white"
            >
              Explore L&D solutions

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}