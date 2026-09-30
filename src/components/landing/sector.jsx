"use client";

import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Banking & Financial Services",
    description:
      "Talent solutions for banking, financial institutions, investment and fintech organizations.",
  },
  {
    number: "02",
    title: "Technology",
    description:
      "Specialized technology talent across digital transformation, software, data, AI and IT.",
  },
  {
    number: "03",
    title: "Engineering & Construction",
    description:
      "Workforce solutions for engineering, infrastructure, construction and major projects.",
  },
  {
    number: "04",
    title: "Healthcare & Life Sciences",
    description:
      "Recruitment and workforce solutions supporting healthcare and life sciences organizations.",
  },
  {
    number: "05",
    title: "Energy & Utilities",
    description:
      "Connecting organizations with professionals across energy, utilities and industrial sectors.",
  },
  {
    number: "06",
    title: "Retail & Consumer",
    description:
      "Talent acquisition and workforce support for retail, consumer and commercial organizations.",
  },
];

export default function Sectors() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#07111f] text-white"
    >
      {/* SAME BACKGROUND AS SERVICES.JSX */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/hero-recruitment.jpg')",
        }}
      />

      {/* SAME BRAND GRADIENTS AS SERVICES.JSX */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(0,59,150,0.28),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(158,27,30,0.20),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* Header */}
        <div className="mb-20 flex flex-col gap-8 lg:mb-28 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
              03 — Industries
            </p>

            <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              Expertise across
              <br />
              <span className="text-white/45">industries.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/50 lg:pb-2">
            We understand the people, skills and workforce requirements
            shaping organizations across diverse industries and markets.
          </p>
        </div>

        {/* Industries */}
        <div className="border-t border-white/15">
          {industries.map((industry) => (
            <div
              key={industry.number}
              className="group border-b border-white/15"
            >
              <div className="grid gap-5 py-8 sm:py-10 lg:grid-cols-[100px_1fr_1fr_60px] lg:items-center lg:gap-8 lg:py-12">

                {/* Number */}
                <span className="text-xs font-medium tracking-[0.2em] text-white/35">
                  {industry.number}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-medium tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl lg:text-4xl">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="max-w-xl text-sm leading-6 text-white/45 transition-colors duration-500 group-hover:text-white/70">
                  {industry.description}
                </p>

                {/* Arrow */}
                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[#07111f] lg:flex">
                  <ArrowUpRight size={19} />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-20 flex flex-col gap-8 border-t border-white/15 pt-10 lg:mt-28 lg:flex-row lg:items-end lg:justify-between">

          <p className="max-w-3xl text-2xl font-medium leading-9 tracking-[-0.02em] sm:text-3xl lg:text-4xl">
            Deep industry understanding.
            <br />
            <span className="text-white/40">
              Human expertise where it matters.
            </span>
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:bg-[#003b96] hover:text-white"
          >
            Discuss your requirements

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </div>
      </div>
    </section>
  );
}