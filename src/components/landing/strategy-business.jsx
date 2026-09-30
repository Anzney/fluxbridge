"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const transformationAreas = [
  "Business / Strategy Consulting",
  "Technology & Digital",
  "Strategic Alliances & Startups",
];

const contentByArea = {
  "Business / Strategy Consulting": {
    short: "01",
    title: "Business / Strategy Consulting",
    intro:
      "Helping organizations navigate transformation through people, processes and technology.",
    services: [
      {
        title: "Organisational Transformation",
        description: "People, processes, and technology integration",
      },
      {
        title: "Strategy Development",
        description: "Designing and executing strategies",
      },
      {
        title: "Market & Financial Analysis",
        description: "Feasibility studies and financial modelling",
      },
      {
        title: "Business Restructuring",
        description:
          "Turnaround, expansion, and profitability improvement",
      },
    ],
    image: "/Rectangle82.png",
    imageAlt: "Business and Strategy Consulting",
  },

  "Technology & Digital": {
    short: "02",
    title: "Technology & Digital",
    intro:
      "Technology-led solutions that improve efficiency, insight and digital capability.",
    services: [
      {
        title: "Digital Transformation",
        description:
          "Assessment, strategy roadmap and implementation",
      },
      {
        title: "Data Analytics",
        description:
          "Leveraging AI and machine learning for insights",
      },
      {
        title: "Process Automation (RPACoE)",
        description:
          "Driving efficiency though automation excellence",
      },
      {
        title: "Technology & Devlopment",
        description:
          "IT Solutions, PMO, and mobile/web applications",
      },
    ],
    image: "/Technology.png",
    imageAlt: "Technology and Digital",
  },

  "Strategic Alliances & Startups": {
    short: "03",
    title: "Strategic Alliances & Startups",
    intro:
      "Building partnerships and supporting businesses from concept creation through sustainable growth.",
    services: [
      {
        title: "Joint Ventures & Alliances",
        description:
          "Partnership with businesses and family offices",
      },
      {
        title: "Project Development",
        description:
          "From concept creation to final execution",
      },
      {
        title: "Start-up Support",
        description:
          "Advisory, strategy, and growth enablement",
      },
      {
        title: "Sustainable Growth",
        description:
          "Long-term scaling and value creation initiatives",
      },
    ],
    image: "/Teamco.jpg",
    imageAlt: "Strategic Alliances and Startups",
  },
};

export default function StrategyBusiness() {
  const [selectedArea, setSelectedArea] = useState(
    transformationAreas[0]
  );

  const active = contentByArea[selectedArea];

  return (
    <section className="relative overflow-hidden bg-[#07111f] text-white">

      {/* SAME BACKGROUND AS OTHER SECTIONS */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/hero-recruitment.jpg')",
        }}
      />

      {/* BRAND GRADIENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(0,59,150,0.28),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(158,27,30,0.20),transparent_30%)]" />

      {/* ATMOSPHERIC GLOW */}
      <div className="pointer-events-none absolute right-[-150px] top-[35%] h-[500px] w-[500px] rounded-full bg-[#003b96]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* HEADER */}
        <div className="mb-16 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
              08 — Transformation
            </p>

            <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              Strategy &
              <br />
              <span className="text-white/40">
                Business Transformation.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/50 lg:pb-2">
            Strategic advisory, digital transformation and partnership
            solutions designed to help organizations evolve and create
            sustainable value.
          </p>

        </div>

        {/* MAIN TILE */}
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-md">

          {/* =========================================
              TOP SELECTABLE TOPICS
          ========================================= */}
          <div className="grid border-b border-white/10 md:grid-cols-3">

            {transformationAreas.map((area, index) => {
              const isActive = selectedArea === area;

              return (
                <button
                  key={area}
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className={`group relative flex min-h-[105px] items-center justify-between gap-4 border-b border-white/10 px-6 py-6 text-left transition-all duration-500 last:border-b-0 md:min-h-[125px] md:border-b-0 md:border-r md:px-8 md:last:border-r-0 lg:px-10 ${
                    isActive
                      ? "bg-white/[0.08] text-white"
                      : "text-white/40 hover:bg-white/[0.04] hover:text-white/80"
                  }`}
                >

                  {/* Active blue line */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#3764ff] transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />

                  <div className="flex items-center gap-4">

                    <span
                      className={`text-xs tracking-[0.2em] ${
                        isActive
                          ? "text-[#6f8dff]"
                          : "text-white/20"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span className="max-w-[260px] text-sm font-semibold leading-5 sm:text-base lg:text-lg">
                      {area}
                    </span>

                  </div>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      isActive
                        ? "border-white/30 bg-white text-[#07111f]"
                        : "border-white/10 text-white/20 group-hover:border-white/25 group-hover:text-white"
                    }`}
                  >
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                </button>
              );
            })}

          </div>

          {/* =========================================
              SELECTED CONTENT
          ========================================= */}
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

            {/* LEFT CONTENT */}
            <div className="p-7 sm:p-10 lg:p-14">

              {/* Small header */}
              <div className="flex items-start justify-between">

                <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                  {active.short} / 03
                </span>

                <span className="text-xs uppercase tracking-[0.18em] text-white/25">
                  Selected
                </span>

              </div>

              {/* Title */}
              <h3 className="mt-14 max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                {active.title}
              </h3>

              {/* Intro */}
              <p className="mt-6 max-w-lg text-sm leading-6 text-white/45 sm:text-base">
                {active.intro}
              </p>

              {/* Services */}
              <div className="mt-10 border-t border-white/10">

                {active.services.map((service, index) => (
                  <div
                    key={index}
                    className="group border-b border-white/10 py-5"
                  >

                    <div className="flex items-start gap-4">

                      <span className="mt-1 text-xs tracking-[0.15em] text-white/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>

                        <h4 className="text-base font-semibold text-white/80 transition-colors duration-300 group-hover:text-white sm:text-lg">
                          {service.title}
                        </h4>

                        <p className="mt-1 text-sm leading-5 text-white/40">
                          {service.description}
                        </p>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative min-h-[350px] overflow-hidden border-t border-white/10 lg:min-h-[650px] lg:border-l lg:border-t-0">

              <img
                src={active.image}
                alt={active.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/85 via-[#07111f]/10 to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    FluxBridge
                  </p>

                  <p className="mt-2 text-lg font-medium text-white">
                    {active.title}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
                  <ArrowUpRight size={18} />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-20 border-t border-white/15 pt-10 lg:mt-28">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Beyond recruitment
              </p>

              <p className="mt-4 max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                Transform the way your
                <br />
                <span className="text-white/40">
                  organization moves forward.
                </span>
              </p>

            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:bg-[#003b96] hover:text-white"
            >
              Discuss your transformation

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