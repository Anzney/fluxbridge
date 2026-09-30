"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const positionData = {
  "Top Executive Leadership": [
    "Chief Operating Officer (COO)",
    "Deputy CFO CHRO",
    "(Chief Human Resources Officer)",
  ],
  "Business & Investment Leadership": [
    "Head of Investment Banking",
    "Head of Asset Management",
    "Chief of Venture Development",
    "Head of Compliance",
  ],
  "Corporate Functions & Governance": [
    "Head of Procurement",
    "Director of Contracts",
    "PMO Governance Manager",
  ],
  "Data, Technology & Risk Leadership": [
    "Data Modeller Head",
    "Data Protection Head",
  ],
  "Specialised Consultants & Analysts": [
    "SAP QM & PM Consultant",
    "Venture Capital Analyst",
  ],
};

const keyPositions = [
  "Top Executive Leadership",
  "Business & Investment Leadership",
  "Corporate Functions & Governance",
  "Data, Technology & Risk Leadership",
  "Specialised Consultants & Analysts",
];

export default function KeyPosition() {
  const [selectedPosition, setSelectedPosition] = useState(keyPositions[0]);

  const selectedJobs = positionData[selectedPosition];

  return (
    <section className="relative overflow-hidden bg-[#07111f] text-white">

      {/* SAME BACKGROUND AS SERVICES.JSX */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/hero-recruitment.jpg')",
        }}
      />

      {/* SAME BRAND GRADIENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(0,59,150,0.28),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(158,27,30,0.20),transparent_30%)]" />

      {/* Subtle glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003b96]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* HEADER */}
        <div className="mb-20 flex flex-col gap-8 lg:mb-28 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
              05 — Key Positions
            </p>

            <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              Key positions
              <br />
              <span className="text-white/40">
                hired for our clients.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/50 lg:pb-2">
            A selection of leadership, specialist and professional
            positions recruited for our esteemed clients.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* LEFT — POSITION CATEGORIES */}
          <div>
            <div className="mb-5 text-xs uppercase tracking-[0.2em] text-white/30">
              Position Categories
            </div>

            <div className="border-t border-white/15">

              {keyPositions.map((position, index) => {
                const isSelected = selectedPosition === position;

                return (
                  <button
                    key={position}
                    type="button"
                    onClick={() => setSelectedPosition(position)}
                    className={`group flex w-full items-center justify-between border-b border-white/15 px-0 py-6 text-left transition-all duration-500 sm:py-7 ${
                      isSelected
                        ? "text-white"
                        : "text-white/45 hover:text-white"
                    }`}
                  >

                    <div className="flex items-center gap-5">

                      <span
                        className={`text-xs tracking-[0.2em] transition-colors duration-300 ${
                          isSelected
                            ? "text-white/70"
                            : "text-white/25"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`text-lg font-medium tracking-[-0.02em] transition-transform duration-500 sm:text-xl ${
                          isSelected
                            ? "translate-x-1"
                            : "group-hover:translate-x-1"
                        }`}
                      >
                        {position}
                      </span>

                    </div>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isSelected
                          ? "border-white/30 bg-white text-[#07111f]"
                          : "border-white/10 bg-white/[0.03] text-white/30 group-hover:border-white/25 group-hover:text-white"
                      }`}
                    >
                      <ChevronRight
                        size={18}
                        className={`transition-transform duration-300 ${
                          isSelected ? "translate-x-0.5" : ""
                        }`}
                      />
                    </div>

                  </button>
                );
              })}

            </div>
          </div>

          {/* RIGHT — SELECTED POSITIONS */}
          <div className="relative">

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-md sm:p-10 lg:min-h-[500px] lg:p-12">

              {/* Card header */}
              <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-8">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Selected Category
                  </p>

                  <h3 className="mt-3 max-w-xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                    {selectedPosition}
                  </h3>
                </div>

                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] sm:flex">
                  <span className="text-sm font-medium text-white/50">
                    {String(
                      keyPositions.indexOf(selectedPosition) + 1
                    ).padStart(2, "0")}
                  </span>
                </div>

              </div>

              {/* Job positions */}
              <div className="pt-8">

                <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">
                  Positions
                </p>

                <div className="space-y-0">

                  {selectedJobs.map((job, index) => (
                    <div
                      key={job}
                      className="group flex items-center gap-5 border-b border-white/10 py-5 last:border-b-0"
                    >

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs text-white/30 transition-all duration-300 group-hover:border-[#003b96] group-hover:bg-[#003b96] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="text-base font-medium leading-6 text-white/75 transition-colors duration-300 group-hover:text-white sm:text-lg">
                        {job}
                      </p>

                    </div>
                  ))}

                </div>
              </div>

              {/* Bottom label */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                  Executive & Specialist Talent
                </p>

                <ArrowUpRight
                  size={20}
                  className="text-white/30"
                />

              </div>

            </div>

          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-20 border-t border-white/15 pt-10 lg:mt-28">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Talent matters
              </p>

              <p className="mt-3 max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                The right leadership can shape
                <br />
                <span className="text-white/40">
                  the future of an organization.
                </span>
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:bg-[#003b96] hover:text-white"
            >
              Discuss a position

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