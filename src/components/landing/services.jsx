"use client";

import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Executive Search",
    description:
      "Identifying and connecting organizations with senior-level professionals and leadership talent.",
  },
  {
    number: "02",
    title: "Permanent & Project Staffing",
    description:
      "Flexible staffing solutions designed around permanent, temporary and project-based workforce requirements.",
  },
  {
    number: "03",
    title: "Recruitment Process Outsourcing",
    description:
      "End-to-end recruitment support that helps organizations build efficient and scalable talent acquisition processes.",
  },
  {
    number: "04",
    title: "Local Talent Programs",
    description:
      "Workforce solutions supporting localization and Saudization strategies across organizations.",
  },
  {
    number: "05",
    title: "Overseas Recruitment",
    description:
      "Connecting organizations with qualified international talent across multiple markets and industries.",
  },
  {
    number: "06",
    title: "HR Consulting",
    description:
      "Strategic HR advisory services designed to improve workforce effectiveness and organizational performance.",
  },
  {
    number: "07",
    title: "HR Digital Solutions",
    description:
      "Technology-enabled HR solutions that help organizations modernize and streamline their people processes.",
  },
  {
    number: "08",
    title: "Outsourcing & HR Management",
    description:
      "Integrated workforce and HR management solutions that allow organizations to focus on their core business.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#07111f] text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/hero-recruitment.jpg')",
        }}
      />

      {/* Brand gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(0,59,150,0.28),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(158,27,30,0.20),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* Header */}
        <div className="mb-20 lg:mb-28">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
            02 — What We Do
          </p>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              Solutions built
              <br />
              around <span className="text-white/45">people.</span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-white/50 lg:pb-2">
              From executive search to workforce management, our
              integrated HR solutions support organizations throughout
              the talent lifecycle.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="border-t border-white/15">
          {services.map((service) => (
            <div
              key={service.number}
              className="group border-b border-white/15"
            >
              <div className="grid gap-5 py-8 transition-all duration-500 sm:py-10 lg:grid-cols-[100px_1fr_1.1fr_60px] lg:items-center lg:gap-8 lg:py-12">

                {/* Number */}
                <span className="text-xs font-medium tracking-[0.2em] text-white/35">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-medium tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl lg:text-4xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="max-w-xl text-sm leading-6 text-white/45 transition-colors duration-500 group-hover:text-white/70">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[#07111f] lg:flex">
                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-500 group-hover:rotate-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-20 flex flex-col gap-8 border-t border-white/15 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-3xl text-2xl font-medium leading-9 tracking-[-0.02em] sm:text-3xl lg:text-4xl">
            One partner.
            <br />
            <span className="text-white/40">
              Multiple ways to build your workforce.
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