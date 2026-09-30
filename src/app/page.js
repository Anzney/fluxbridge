"use client";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import Navbar from "@/components/landing/navbar";
import HeroSection from "@/components/landing/hero";
import Footer from "@/components/landing/footer";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Talent Acquisition",
    description:
      "Executive search, staffing, RPO, Saudization, overseas recruitment, and interim executives.",
    href: "/services/talent-acquisition",
    image: "/hero-2.jpg",
  },
  {
    title: "HR Consulting",
    description:
      "HR strategy, organisation development, performance management, talent management, and leadership development.",
    href: "/services/hr-consulting",
    image: "/hero-5.jpg",
  },
  {
    title: "Manpower / Payroll Services",
    description:
      "Workforce solutions, manpower outsourcing, payroll management, and employee administration.",
    href: "/services/manpower-payroll",
    image: "/hero-22.png",
  },
  {
    title: "HR Technology",
    description:
      "HR digital transformation, technology solutions, AI, automation, analytics, and workforce technology.",
    href: "/services/hr-technology",
    image: "/hero-7.jpg",
  },
   {
    title: "Trainer Deployment Services",
    description:
      "Professional trainer deployment, workforce training support, and specialised learning solutions.",
    href: "/services/trainer-deployment-services",
    image: "/hero-23.png",
  },
  {
    title: "Business Consulting",
    description:
      "Strategy development, organisational transformation, market analysis, and business restructuring.",
    href: "/services/business-consulting",
    image: "/hero-8.jpg",
  },
];



function AnimatedStat({ value, label, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [displayLabel, setDisplayLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);

  // Detect when the statistic enters/leaves the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplayValue(0);
          setDisplayLabel("");
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setDisplayValue(0);
          setDisplayLabel("");
        }
      },
      {
        threshold: 0.30,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Run animation exactly once while visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000;
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 1) {
        // Random number scrambling
        const currentValue = Math.floor(value * progress);

          setDisplayValue(currentValue);
        // Typewriter effect
        const lettersToShow = Math.floor(
          progress * label.length
        );

        setDisplayLabel(label.slice(0, lettersToShow));

        animationFrame = requestAnimationFrame(animate);
      } else {
        // FINAL VALUE
        setDisplayValue(value);
        setDisplayLabel(label);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value, label]);

  return (
    <div ref={ref}>
      <p className="text-7xl font-medium tracking-tight text-white">
        {displayValue.toLocaleString()}
        {suffix}
      </p>

      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/80">
        {displayLabel}
        {isVisible && displayLabel !== label && (
          <span className="ml-1 animate-pulse">|</span>
        )}
      </p>
    </div>
  );
}



function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0);
          setStarted(true);
        } else {
          setStarted(false);
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const duration = 1800;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}



export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)] text-white">
      <Navbar />

      {/* HERO */}
      <HeroSection />

      {/* ABOUT PREVIEW */}
      <section className="relative overflow-hidden border-t border-white/10 py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <div >

            <div className="mb-7 h-px w-45 bg-white/50" />
            <p className="mb-8 lg:text-[1.4rem] font-medium uppercase tracking-[0.15em] text-[#00000]">
              About US
            </p>
            <div className="mb-15 h-px w-20 bg-white/50" />

              <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-[3.9rem]">
                Connecting people <br />with<br />
        
                <span className="text-white/40"> possibility.</span>
              </h2>
            </div>

            <div>
              <p className="text-lg mb-6 text-white/60 leading-relaxed">
                FluxBridge stands as a one-stop HR solutions partner,
                connecting talent, organisations, technology, and business
                solutions across markets.
              </p>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[#00A8FF] hover:bg-[#003B96] hover:text-white"
              >
                Discover FluxBridge
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>


{/* ANIMATED STATS */}
<section className="neon-stats-container mx-6 overflow-hidden rounded-[2rem] border border-white/10 py-9 lg:mx-12">
  <div className="mx-auto max-w-9xl px-6 lg:px-12">
    <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-x-10 lg:grid-cols-5 lg:gap-x-16">
      
      <div>
        <p className="text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <AnimatedStat value={2017} label="Founded" />
        </p>
      </div>


      <div>
        <p className="text-7xl font-medium tracking-tight text-white">
          <AnimatedStat value={30} suffix="+" label="Team Members" />
        </p>
      </div>

      <div>
        <p className="text-7xl font-medium tracking-tight text-white">
          <AnimatedStat value={100} suffix="+" label="Clients Served" />
        </p>
      </div>

      <div>
        <p className="text-7xl font-medium tracking-tight text-white">
          <AnimatedStat value={16} label="Industries" />
        </p>
      </div>

      <div>
        <p className="text-7xl font-medium tracking-tight text-white">
          <AnimatedStat value={14} label="Countries" />
        </p>
      </div>

    </div>
  </div>
</section>


              {/* SERVICES PREVIEW */}
              <section className="relative overflow-hidden border-0 py-28 lg:py-36">
                <div className="mb-20 h-px w-full bg-white/10" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                  {/* SERVICES HEADING */}

          <div className="mb-16">

            {/* CENTERED LABEL */}
            

            {/* TITLE + LINK */}
            <div className="flex flex-col mb-20 gap-8 md:flex-row md:items-end md:justify-between">

              <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-7xl lg:text-[4.8rem]">
                Solutions for
                <br />
                <span className="text-white/40">
                  modern organisations.
                </span>
              </h2>


              <a
                href="/Flux Bridge Company Profile.pdf"
                download
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/30 bg-white/[0.06] px-5 py-3.5 text-sm font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-[#003B96] hover:text-white sm:w-auto sm:px-7"
              >
                Download Company Profile

                <Download
                  size={18}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

            </div>

            <div className="mb-8 h-px w-20 bg-white/50" />
            <p className="mb-10 lg:text-[1.4rem] font-medium uppercase tracking-[0.15em] text-[#00000]">
              Services
            </p>
            <div className="mb-5 h-px w-45 bg-white/50" />

          </div>

          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4"> 
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="service-card group relative z-10 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.025] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05]"
              >
                {/* IMAGE */}
                <div className="relative h-36 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* NEON HOVER FLOW */}
                    <span className="service-neon-flow service-neon-top" />
                    <span className="service-neon-flow service-neon-right" />
                    <span className="service-neon-flow service-neon-bottom" />
                    <span className="service-neon-flow service-neon-left" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="min-h-[150px] p-6">

                  <div className="mb-3 flex items-start justify-between">
                    <span className="text-12 text-white/30 transition-all duration-500 group-hover:text-white group-hover:translate-x-3">
                      0{index + 1}
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="text-white/30 transition-all duration-500 group-hover:translate-x-3 group-hover:-translate-y-1 group-hover:text-[#9E1B1E]"
                    />
                  </div>

                  <h3 className="relative z-10 text-center text-xl font-medium tracking-tight text-white/90 transition-all duration-500 group-hover:text-[#00a8ff]">
                  {service.title}
                  </h3>

                  

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      
{/* GLOBAL PRESENCE PREVIEW */}
<section className="relative overflow-hidden py-28 lg:py-36">
  
  {/* Background glow */}
  <div className="mb-40 h-px w-full bg-white/10" />

  <div className="relative mx-auto max-w-[1300px] px-6 lg:px-12">

    <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">

      {/* LEFT CONTENT */}
      <div>
        <div className="mb-8 h-px w-45 bg-white/50" />
            <p className="mb-10 lg:text-[1.4rem] font-medium uppercase tracking-[0.15em] text-[#00000]">
              Our Global Network
            </p>
            <div className="mb-5 h-px w-20 bg-white/50" />

        <h2 className="mb-16 text-5xl font-medium leading-[0.92] tracking-[-0.04em] sm:text-6xl md:mb-30 md:text-8xl lg:text-[5.5rem]">
          Local expertise.
          <br />
          <span className="text-white/35">
            Global reach.
          </span>
        </h2>

        <p className="mt-10 mb-10 max-w-[600px] text-base leading-8 text-white md:text-lg">
          Connecting organisations and talent across key markets through
          our growing international network.
        </p>

        <Link
          href="/global"
          className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-[#003B96]"
        >
          <span>Explore our global presence</span>
        </Link>

      </div>


      {/* RIGHT WORLD MAP */}
<div className="relative flex items-center justify-center">

  {/* NEON CIRCLE AROUND MAP */}
<svg
  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[300%] w-[150%] -translate-x-1/2 -translate-y-1/2 sm:h-[380%] sm:w-[140%] lg:h-[455%] lg:w-[135%]"
  viewBox="0 0 500 500"
  fill="none  "
>
  <defs>
    <linearGradient
      id="mapCircleGradient"
      x1="0"
      y1="0"
      x2="1"
      y2="1"
    >
      <stop offset="0%" stopColor="#003B96" />
      <stop offset="40%" stopColor="#00A8FF" />
      <stop offset="70%" stopColor="#00D4FF" />
      <stop offset="100%" stopColor="#9E1B1E" />
    </linearGradient>

    <filter
      id="mapCircleGlow"
      x="-100%"
      y="-100%"
      width="300%"
      height="300%"
    >
      <feGaussianBlur
        stdDeviation="4"
        result="blur"
      />

      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  {/* STATIC THIN CIRCLE */}
  <circle
    cx="250"
    cy="250"
    r="220"
    stroke="rgba(255,255,255,0.10)"
    strokeWidth="1"
  />

  {/* SINGLE MOVING NEON SEGMENT */}
  <circle
    cx="250"
    cy="250"
    r="220"
    stroke="url(#mapCircleGradient)"
    strokeWidth="1"
    strokeLinecap="round"
    strokeDasharray="90 1292"
    strokeDashoffset="0"
    filter="url(#mapCircleGlow)"
    className="map-neon-circle"
  />
</svg>

  {/* Map glow */}
  <div className="pointer-events-none absolute inset-0 rounded-full bg-[#003B96]/10 blur-3xl" />

  <div className="relative w-full max-w-[700px]">

    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 125,
        center: [20, 15],
      }}
      className="h-auto w-full"
    >

      <Geographies
        geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#101a2b"
              stroke="#263449"
              strokeWidth={0.5}
              style={{
                default: {
                  outline: "none",
                },
                hover: {
                  fill: "#16243a",
                  outline: "none",
                },
                pressed: {
                  outline: "none",
                },
              }}
            />
          ))
        }
      </Geographies>

      {/* RIYADH MARKER */}
      <Marker coordinates={[46.6753, 24.7136]}>

        {/* Large soft glow */}
        <circle
          r={18}
          fill="#9E1B1E"
          opacity={0.12}
        />

        {/* Animated glow */}
        <circle
          r={10}
          fill="none"
          stroke="#9E1B1E"
          strokeWidth={1.5}
          opacity={0.7}
          className="animate-ping"
        />

        {/* Main glow */}
        <circle
          r={5}
          fill="#9E1B1E"
          opacity={0.35}
        />

        {/* Main location point */}
        <circle
          r={2.8}
          fill="#ff3b3b"
          className="drop-shadow-[0_0_8px_rgba(255,59,59,1)]"
        />

      </Marker>

    </ComposableMap>

    {/* Riyadh label */}
    <div className="absolute left-[63%] top-[48%] flex items-center gap-2">
      <span className="h-px w-8 bg-gradient-to-r from-[#9E1B1E] to-transparent" />

      <span className="text-xs uppercase tracking-[0.2em] text-white/70">
        Riyadh · KSA
      </span>
    </div>

  </div>
</div>

    </div>

  </div>
</section>        



      {/* PARTNERS PREVIEW */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <div className="mb-30 h-px w-full bg-white/10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
            <div className="mb-8 h-px w-20 bg-white/50" />
            <p className="mb-10 lg:text-[1.4rem] font-medium uppercase tracking-[0.15em] text-[#00000]">
              GLOBAL PARTNERS
            </p>
            <div className="mb-5 h-px w-45 bg-white/50" />

              <h2 className="mb-10 text-5xl font-medium leading-[0.92] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-[5.5rem]">
                Strong
                <br />
                <span className="text-white/40">partnerships.</span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-[#003B96]"
            >
              Explore our partners
              <ArrowRight size={18} />
            </Link>
          </div>

          
  <div className="mt-16 -mx-26 overflow-hidden py-17 lg:py-16">
  <div className="relative overflow-hidden">
    <div className="partners-marquee flex w-max items-center gap-16 lg:gap-24">
      
      {[
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
      ].map((logo, index) => (
        <div
          key={index}
          className="flex h-28 w-52 shrink-0 items-center justify-center"
        >
          <img
            src={logo}
            alt={`Partner ${index + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}

      {[
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
      ].map((logo, index) => (
        <div
          key={`duplicate-${index}`}
          className="flex h-20 w-40 shrink-0 items-center justify-center lg:h-24 lg:w-48"
        >
          <img
            src={logo}
            alt=""
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}

    </div>
  </div>
</div>


        </div>
      </section>
      
       <Footer />

    </main>
  );
}