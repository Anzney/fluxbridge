"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const teamMembers = [
  {
    name: "Roque Dcosta",
    image: "/teams/Roque.png",
    title: "Managing Director",
  },
  {
    name: "Khalid Abdallah Al-Damegh",
    image: "/teams/Khalid.png",
    title: "Leadership Team",
  },
  {
    name: "Alan Castelino",
    image: "/teams/Alan.png",
    title: "Leadership Team",
  },
  {
    name: "Vaishali Castelino",
    image: "/teams/Vaishali.png",
    title: "Leadership Team",
  },
  {
    name: "Abdulmalek Al-Eisa",
    image: "/teams/Abdulmalek.png",
    title: "Management Team",
  },
  {
    name: "Abhay Kumar",
    image: "/teams/Abhay.png",
    title: "Management Team",
  },
  {
    name: "Abiali Shaikh",
    image: "/teams/Abiali.png",
    title: "Management Team",
  },
  {
    name: "Amit Desai",
    image: "/teams/amit.png",
    title: "Management Team",
  },
  {
    name: "Farhan Khan",
    image: "/teams/Farhan.png",
    title: "Management Team",
  },
  {
    name: "Hamed Mohammed",
    image: "/teams/Hamed.png",
    title: "Management Team",
  },
  {
    name: "Kavilash Chawla",
    image: "/teams/Kavilash.png",
    title: "Management Team",
  },
  {
    name: "Raghad Alamri",
    image: "/teams/Raghad.png",
    title: "Management Team",
  },
  {
    name: "Vikrant Ponkshe",
    image: "/teams/Vikrant.png",
    title: "Management Team",
  },
  {
    name: "Vinod Kumar Chockalingam",
    image: "/teams/Vinod.png",
    title: "Management Team",
  },
  {
    name: "Wala'a Dashash",
    image: "/teams/Wala'a.png",
    title: "Management Team",
  },
  {
    name: "Wedad Dashash",
    image: "/teams/Wedad.png",
    title: "Management Team",
  },
];

const Leadership = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
    Automatically move to the next person.
  */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeMember = teamMembers[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#07111f] text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,59,150,0.22),transparent_38%),radial-gradient(circle_at_5%_80%,rgba(158,27,30,0.12),transparent_30%)]" />

      {/* Blue atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003b96]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-8 border-t border-white/10 pt-8 lg:mb-12">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
                09 — Leadership
              </p>

              <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
                People behind
                <br />
                <span className="text-white/35">
                  the progress.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45 lg:pb-2">
              Meet the people bringing experience, expertise and
              relationships together to create meaningful results.
            </p>

          </div>

        </div>

        {/* =====================================================
            CIRCULAR TEAM AREA
        ====================================================== */}
        <div
          className="relative mx-auto h-[680px] w-full max-w-[1200px] overflow-hidden sm:h-[760px] lg:h-[900px]"
          
        >

          {/* Outer circle */}
          <div className="absolute z-10 left-1/2 top-1/2 h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[700px]" />

          {/* Inner circle */}
          <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] sm:h-[400px] sm:w-[400px] lg:h-[470px] lg:w-[470px]" />

          {/* Blue center atmosphere */}
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003b96]/15 blur-[70px]" />

          {/* =================================================
              ROTATING TEAM ORBIT
          ================================================= */}
          <div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[700px]"
            style={{
              transform: `translate(-50%, -50%) rotate(${
                -activeIndex * (360 / teamMembers.length)
              }deg)`,
              transition:
                "transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >

            {teamMembers.map((member, index) => {

              const angle =
                (index * 360) / teamMembers.length;

              const isActive = index === activeIndex;

              return (
                <button
                  key={member.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-350px) rotate(${
                      -angle + activeIndex * (360 / teamMembers.length)
                    }deg)`,
                  }}
                  aria-label={`View ${member.name}`}
                >

                  {/* Person image */}
                  <div
                    className={`relative overflow-hidden rounded-full transition-all duration-700 ${
                      isActive
                        ? "h-[92px] w-[92px] sm:h-[112px] sm:w-[112px] lg:h-[130px] lg:w-[130px]"
                        : "h-[58px] w-[58px] opacity-50 sm:h-[68px] sm:w-[68px] lg:h-[76px] lg:w-[76px]"
                    }`}
                  >

                    {/* Active glow */}
                    {isActive && (
                      <div className="absolute -inset-2 rounded-full bg-[#3764ff]/40 blur-xl" />
                    )}

                    <div
                      className={`relative h-full w-full overflow-hidden rounded-full border ${
                        isActive
                          ? "border-[#3764ff] shadow-[0_0_35px_rgba(55,100,255,0.55)]"
                          : "border-white/15"
                      }`}
                    >

                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-top"
                      />

                    </div>

                  </div>

                </button>
              );
            })}

          </div>

          {/* =================================================
              CENTER INFORMATION
          ================================================= */}
          <div className="absolute left-1/2 top-1/2 flex w-[260px] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:w-[330px]">

            {/* Center label */}
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#6f8dff]">
              {activeMember.title}
            </p>

            {/* Name */}
            <h3
              key={activeMember.name}
              className="text-2xl font-medium leading-tight tracking-[-0.035em] sm:text-3xl lg:text-4xl"
            >
              {activeMember.name}
            </h3>

            {/* Divider */}
            <div className="my-6 h-px w-16 bg-white/20" />

            {/* Position counter */}
            <p className="text-xs tracking-[0.18em] text-white/30">
              {String(activeIndex + 1).padStart(2, "0")}{" "}
              /{" "}
              {String(teamMembers.length).padStart(2, "0")}
            </p>

          </div>

          {/* =================================================
              TOP LABEL
          ================================================= */}
          <div className="absolute left-1/2 top-3 -translate-x-1/2 text-center">

            

          </div>

          {/* =================================================
              BOTTOM LABEL
          ================================================= */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center">

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
              Leadership • Management • Advisors
            </p>

          </div>

        </div>

        {/* =====================================================
            TEAM COUNTER
        ====================================================== */}
        <div className="mx-auto mt-2 max-w-[1200px] border-t border-white/10 pt-6">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <span className="h-1.5 w-1.5 rounded-full bg-[#3764ff]" />

              <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                Our team
              </span>

            </div>

            <span className="text-xs tracking-[0.18em] text-white/25">
              {String(teamMembers.length).padStart(2, "0")} PEOPLE
            </span>

          </div>

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <div className="mt-20 border-t border-white/10 pt-10 lg:mt-28">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                One team
              </p>

              <p className="mt-4 max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                Experience, relationships and
                <br />
                <span className="text-white/40">
                  people that make things happen.
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

export default Leadership;