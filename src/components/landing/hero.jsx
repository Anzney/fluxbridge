"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  MapPin,
  Sparkles,
  Download,
} from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const videos = [
    "/hero-video.mp4",
    "/hero-video1.mp4",
    "/hero-video2.mp4",
    "/hero-video3.mp4",
  ];

  const handleVideoEnd = () => {
    setVideoIndex((current) => (current + 1) % videos.length);
  };

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#07111f] text-white">

      {/* =====================================================
          SAME BACKGROUND AS ABOUT.JSX
      ====================================================== */}

      {/* Background image */}
      {/* HERO VIDEO */}
      <video
        ref={videoRef}
        key={videos[videoIndex]}
        className="absolute inset-0 z-0 h-full w-full object-cover pointer-events-none"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src={videos[videoIndex]} type="video/mp4" />
      </video> 

      {/* CINEMATIC OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/30" />



      {/* FluxBridge brand glow */}
      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)]" />


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-30 mx-auto max-w-[1200px] pb-10 pt-12 sm:pb-12 lg:pt-16">

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

          </div>

        </div>


        {/* =====================================================
            MAIN HERO CONTENT
        ====================================================== */}

        <div className="max-w-[1200px] pb-10 pt-12 sm:pb-12 lg:pt-16">

          {/* Category */}
          <div className="mb-7 flex items-center gap-3">

          </div>


          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h1 className="max-w-[1050px] text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.07em]">
            <span className="hero-line hero-line-1 block">
              Building Talent
            </span>

            <span className="hero-line hero-line-2 block text-white/45">
              Empowering
            </span>

            <span className="hero-line hero-line-3 block text-white/90">
              Growth
            </span>
          </h1>


          {/* =================================================
              DESCRIPTION + CTA
          ================================================== */}

          <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            {/* Description */}
            <div className="max-w-[560px]">

              <div className="mb-5 h-px w-16 bg-white/30" />

              <p className="hero-description text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                FluxBridge connects exceptional talent with organizations through executive recruitment, HR consulting, outsourcing, and workforce solutions across the GCC and beyond.
              </p>

            </div>


            {/* Buttons */}
            <div className="flex flex-wrap gap-3">

              {/* Contact CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[#00A8FF] hover:bg-[#003B96] hover:text-white"
                
              >

                Let's Connect

                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>


            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM INFORMATION BAR
        ====================================================== */}

        <div className="border-t border-white/15 pt-5">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            


            {/* Scroll indicator */}
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/30 sm:text-xs">

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SIDE ACCENT
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[20%] lg:block" />


    </section>
  );
}