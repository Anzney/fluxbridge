"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";


export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07111f] text-white"
    >
      {/* Same background as Hero */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-recruitment.jpg')",
        }}
      />

      {/* Same cinematic overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Same FluxBridge brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* Heading */}
        <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
              01 — About FluxBridge
            </p>

            <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
              Connecting
              <br />
              <span className="text-white/70">people</span> with
              <br />
              <span className="text-white">possibility.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/60 lg:pt-12">
            A strategic HR partner helping organizations identify,
            attract, develop and retain the talent they need to build
            their future.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">

          {/* Left text */}
          <div>
            <p className="max-w-3xl text-xl font-medium leading-8 sm:text-2xl lg:text-3xl lg:leading-10">
              FluxBridge is a one-stop HR solutions partner delivering
              integrated services across recruitment, assessment,
              consulting, outsourcing, HR digital and workforce
              management.
            </p>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/60">
              We combine industry knowledge, technology and a
              people-first approach to help organizations build
              stronger teams and create sustainable workforce
              solutions.
            </p>

            <Link
              href="#services"
              className="group mt-10 inline-flex items-center gap-3 border-b border-white/50 pb-2 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              Discover our capabilities
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Image card using SAME hero image */}
          <div className="group relative overflow-hidden">
            <div className="aspect-[4/5] overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
              <img
                src="/hero-recruitment.jpg"
                alt="FluxBridge corporate environment"
                className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  FluxBridge
                </p>
                <p className="mt-2 text-lg font-medium">
                  Human Capital • GCC
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-24 border-t border-white/20 pt-10 lg:mt-32">
          <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-0">

            <div className="lg:border-r lg:border-white/15 lg:px-8 lg:first:pl-0">
              <p className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-0.05em]">
                15+
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/50">
                Years of Experience
              </p>
            </div>

            <div className="lg:border-r lg:border-white/15 lg:px-8">
              <p className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-0.05em]">
                20+
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/50">
                Countries Served
              </p>
            </div>

            <div className="lg:border-r lg:border-white/15 lg:px-8">
              <p className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-0.05em]">
                100+
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/50">
                Clients & Partners
              </p>
            </div>

            <div className="lg:px-8 lg:pr-0">
              <p className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-0.05em]">
                GCC
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/50">
                Regional Focus
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}