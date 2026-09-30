"use client";

import React from "react";
import { ArrowUpRight, MapPin } from "lucide-react";

const locations = [
  {
    city: "Seattle",
    country: "USA",
    position: "top-[49%] left-[16%]",
    showMobile: false,
  },
  {
    city: "Hounslow",
    country: "UK",
    position: "top-[43%] left-[46%]",
    showMobile: true,
  },
  {
    city: "Riyadh",
    country: "Kingdom of Saudi Arabia",
    extra: "(HQ)",
    position: "top-[58%] left-[56%]",
    showMobile: true,
    active: true,
  },
  {
    city: "Dubai",
    country: "UAE",
    position: "top-[64%] left-[62%]",
    showMobile: true,
  },
  
  {
    city: "Mumbai",
    country: "India",
    position: "top-[61%] left-[67%]",
    showMobile: true,
  },
];

const offices = [
  {
    number: "01",
    title: "UAE Office",
    text: "IFZA Property, Freezone Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE.",
  },
  {
    number: "02",
    title: "Riyadh — Kingdom of Saudi Arabia",
    text: "Flux Bridge Co 7783, Ibn Katheer St - King Abdulaziz District, Riyadh 12233-4264 Kingdom of Saudi Arabia.",
    headquarters: true,
  },
  {
    number: "03",
    title: "India Office",
    text: "BLDG No: 2, A3 Station, Unit No: 118, opposite RUPA SOLITAIRE, Millenium Business Park, Sector 1, Mahape, Navi Mumbai, Maharashtra 400701.",
  },
];

const GlobalPresence = () => {
  return (
    <section
      id="global"
      className="relative overflow-hidden bg-[#07111f] text-white"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[15%] h-[400px] w-[400px] rounded-full bg-[#003b96]/10 blur-[160px]" />
        <div className="absolute right-[0%] top-[45%] h-[500px] w-[500px] rounded-full bg-[#9e1b1e]/10 blur-[180px]" />
        <div className="absolute bottom-[-200px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#003b96]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* HEADER */}
        <div className="mb-14 border-t border-white/10 pt-8 lg:mb-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                10 — Global Presence
              </p>

              <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.84] tracking-[-0.06em]">
                Our Global
                <br />
                <span className="text-white/35">Presence.</span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-5 lg:items-end">
              <p className="max-w-sm text-sm leading-6 text-white/45 lg:text-right">
                Connecting businesses and talent across strategic markets,
                with a strong presence across the GCC, India and international
                locations.
              </p>

              <img
                className="h-12 w-auto opacity-80 sm:h-14 lg:h-16"
                alt="Vision 2030"
                src="https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-5.png"
              />
            </div>

          </div>
        </div>

        {/* MAP AREA */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] lg:rounded-[48px]">

          {/* Map header */}
          <div className="relative z-20 flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8 lg:px-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                Worldwide Network
              </p>
              <p className="mt-2 text-sm text-white/60">
                Strategic locations. Global reach.
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#3764ff] shadow-[0_0_12px_rgba(55,100,255,0.8)]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Active Locations
              </span>
            </div>
          </div>

          {/* Map */}
          <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">

            {/* Map glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003b96]/15 blur-[100px]" />

            <img
              className="absolute left-1/2 top-1/2 w-[105%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-55 sm:w-[100%] lg:w-[92%]"
              alt="Global Map"
              src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-17.png"
            />

            {/* Location markers */}
            {locations.map((location) => (
              <div
                key={`${location.city}-${location.country}`}
                className={`absolute ${location.position} ${
                  location.showMobile ? "flex" : "hidden md:flex"
                } z-10 -translate-x-1/2 -translate-y-1/2 flex-col items-center`}
              >
                {/* marker */}
                <div className="relative">
                  {location.active && (
                    <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#3764ff]/20" />
                  )}

                  <div
                    className={`relative flex h-7 w-7 items-center justify-center rounded-full border ${
                      location.active
                        ? "border-[#6f8dff] bg-[#3764ff] shadow-[0_0_25px_rgba(55,100,255,0.7)]"
                        : "border-white/40 bg-[#07111f]/80"
                    }`}
                  >
                    <MapPin
                      size={13}
                      className={
                        location.active ? "text-white" : "text-white/60"
                      }
                    />
                  </div>
                </div>

                {/* label */}
                <div
                  className={`mt-2 rounded-full border px-3 py-1.5 text-center backdrop-blur-md ${
                    location.active
                      ? "border-[#3764ff]/40 bg-[#3764ff]/15"
                      : "border-white/10 bg-[#07111f]/60"
                  }`}
                >
                  <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:text-xs">
                    {location.city}
                  </p>

                  <p className="whitespace-nowrap text-[9px] text-white/40 sm:text-[10px]">
                    {location.country}{" "}
                    {location.extra && (
                      <span className="text-[#6f8dff]">{location.extra}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}

            {/* Center caption */}
            <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center sm:bottom-10">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                Connecting Talent
              </p>
              <p className="mt-2 text-xs text-white/40">
                Across borders. Across industries.
              </p>
            </div>
          </div>
        </div>

        {/* OFFICE LOCATIONS */}
        <div className="mt-16 lg:mt-24">
          <div className="mb-8 flex items-end justify-between border-t border-white/10 pt-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Our Offices
              </p>

              <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Where we are.
              </h3>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-white/20 sm:block">
              03 Locations
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.number}
                className={`group relative overflow-hidden rounded-[28px] border p-7 transition-all duration-500 lg:p-8 ${
                  office.headquarters
                    ? "border-[#3764ff]/30 bg-[#003b96]/10"
                    : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.2em] text-white/25">
                    {office.number}
                  </span>

                  {office.headquarters && (
                    <span className="rounded-full border border-[#3764ff]/30 bg-[#3764ff]/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-[#8fa5ff]">
                      Headquarters
                    </span>
                  )}
                </div>

                <h4 className="mt-12 max-w-sm text-xl font-medium leading-tight tracking-[-0.025em] sm:text-2xl">
                  {office.title}
                </h4>

                <p className="mt-5 text-sm leading-6 text-white/45">
                  {office.text}
                </p>

                <div className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/25 transition-colors group-hover:text-white/60">
                  <span>View location</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                {/* decorative glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#003b96]/20 blur-[70px] transition-all duration-500 group-hover:bg-[#3764ff]/20" />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-20 border-t border-white/10 pt-10 lg:mt-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Global by nature
              </p>

              <p className="mt-4 max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                Local expertise.
                <br />
                <span className="text-white/40">
                  International perspective.
                </span>
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:bg-[#003b96] hover:text-white"
            >
              Connect with us

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
};

export default GlobalPresence;