"use client";

import { ArrowUpRight } from "lucide-react";

const allPartners = [
  "/picture1.png",
  "/picture2.png",
  "/picture3.png",
  "/picture4.png",
  "/picture5.png",

  "/picture6.png",

  "/picture7.png",
  "/picture8.png",
  "/picture9.png",
  "/picture10.png",

  "/picture11.png",
  "/skillup.png",
  "/picture12.png",
];

export default function StrategicGlobalPartners() {
  // Duplicate the logos so the animation can loop smoothly
  const marqueePartners = [...allPartners, ...allPartners];

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#07111f] text-white"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#003b96]/10 blur-[180px]" />

        <div className="absolute right-[-10%] top-[45%] h-[500px] w-[500px] rounded-full bg-[#9e1b1e]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* HEADER */}
        <div className="border-t border-white/10 pt-8">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                11 — Clients & Partners
              </p>

              <h2 className="max-w-5xl text-[clamp(3.2rem,7.5vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.06em]">
                Strategic
                <br />
                <span className="text-white/35">
                  Global Partners.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45 lg:pb-2 lg:text-right">
              Building trusted relationships with organizations and
              specialists across human resources, consulting, technology and
              learning.
            </p>

          </div>
        </div>

        {/* PARTNER LOGOS */}
        <div className="mt-20 lg:mt-28">

          <div className="mb-6 flex items-center justify-between border-t border-white/10 pt-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/30">
                Our Partners
              </p>

              <p className="mt-2 text-sm text-white/40">
                A growing network of trusted organizations
              </p>
            </div>

            <span className="text-xs tracking-[0.18em] text-white/20">
              {String(allPartners.length).padStart(2, "0")} PARTNERS
            </span>
          </div>

          {/* MARQUEE */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] py-12 sm:py-16 lg:py-20">

            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#07111f] to-transparent sm:w-36 lg:w-48" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#07111f] to-transparent sm:w-36 lg:w-48" />

            <div className="flex w-max animate-partner-marquee">

              {marqueePartners.map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="mx-5 flex h-[130px] w-[210px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] px-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] sm:mx-7 sm:h-[150px] sm:w-[240px] lg:mx-8 lg:h-[170px] lg:w-[270px]"
                >
                  <img
                    src={partner}
                    alt={`FluxBridge partner ${index + 1}`}
                    className="max-h-[90px] max-w-[200px] object-contain opacity-65 transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                    onError={(e) => {
                      console.log(
                        `Failed to load partner image: ${partner}`
                      );
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-20 border-t border-white/10 pt-10 lg:mt-28">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Built on relationships
              </p>

              <p className="mt-4 max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                Strong partnerships.
                <br />
                <span className="text-white/40">
                  Greater possibilities.
                </span>
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:bg-[#003b96] hover:text-white"
            >
              Become a partner

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>

        </div>

      </div>

      {/* MARQUEE ANIMATION */}
      <style jsx>{`
        @keyframes partner-marquee {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0%);
          }
        }

        .animate-partner-marquee {
          animation: partner-marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}