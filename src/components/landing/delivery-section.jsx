"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const deliveryMethods = [
  {
    icon: "Mask-group-4.png",
    title: "Live In Person Training",
  },
  {
    icon: "Mask-group-5.png",
    title: "Live Virtual Training",
  },
  {
    icon: "Mask-group-1.png",
    title: "Self Paced E-learning (LMS/LXP)",
  },
  {
    icon: "Mask-group-2.png",
    title: "Gamification",
  },
  {
    icon: "Mask-group-3.png",
    title: "Simulations & AI based learning",
  },
];

export default function DeliverySection() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] text-white">

      {/* SAME BACKGROUND AS SERVICES */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/hero-recruitment.jpg')",
        }}
      />

      {/* SAME BRAND GRADIENTS AS SERVICES */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(0,59,150,0.28),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(158,27,30,0.20),transparent_30%)]" />

      {/* Large atmospheric glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003b96]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* HEADER */}
        <div className="mb-20 flex flex-col gap-8 lg:mb-28 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
              07 — Delivery
            </p>

            <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              Omni-channel
              <br />
              <span className="text-white/40">
                learning delivery.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/50 lg:pb-2">
            Flexible learning experiences delivered through multiple
            channels to meet different learner needs and organizational
            requirements.
          </p>

        </div>

        {/* DELIVERY METHODS */}
        <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-5">

          {deliveryMethods.map((method, index) => (
            <div
              key={index}
              className="group relative min-h-[330px] border-b border-r border-white/10 bg-[#07111f]/70 p-7 transition-all duration-500 hover:bg-[#0b1c35] sm:min-h-[360px] lg:min-h-[390px]"
            >

              {/* Number + Arrow */}
              <div className="flex items-start justify-between">

                <span className="text-xs font-medium tracking-[0.2em] text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/30 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-[#07111f]">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

              </div>

              {/* Icon */}
              <div className="mt-14 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:scale-105 group-hover:border-[#003b96]/70 group-hover:bg-[#003b96]/20">

                <img
                  src={`/${method.icon}`}
                  alt={method.title}
                  className="h-14 w-14 object-contain opacity-75 transition-all duration-500 group-hover:opacity-100"
                />

              </div>

              {/* Title */}
              <div className="absolute bottom-8 left-7 right-7">

                <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Delivery Method
                </p>

                <h3 className="max-w-[220px] text-lg font-medium leading-6 tracking-[-0.02em] text-white/80 transition-colors duration-500 group-hover:text-white">
                  {method.title}
                </h3>

              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-7 right-7 h-px bg-white/10 transition-all duration-500 group-hover:bg-[#003b96]" />

            </div>
          ))}

        </div>

        {/* FEATURE STATEMENT */}
        <div className="mt-20 border-t border-white/15 pt-10 lg:mt-28">

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Designed for flexibility
              </p>

              <p className="mt-4 max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                One learning strategy.
                <br />
                <span className="text-white/40">
                  Multiple ways to experience it.
                </span>
              </p>
            </div>

            <div className="lg:flex lg:justify-end">
              <a
                href="/contact"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:bg-[#003b96] hover:text-white"
              >
                Discuss your learning needs

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}