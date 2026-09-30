"use client";

import { motion } from "motion/react";
import {
  Target,
  Users,
  BarChart3,
  BriefcaseBusiness,
  FileText,
  TrendingUp,
  ArrowDown,
} from "lucide-react";

const cycleSteps = [
  {
    id: 1,
    title: "Understand Client needs",
    description: "Job profile & Organization dynamics Reward dynamics",
    detail: "Specific skill sets & Experience",
    icon: Target,
  },
  {
    id: 2,
    title: "Sourcing Candidates",
    description: "Internal database",
    detail: "Website / Headhunting Social media",
    icon: Users,
  },
  {
    id: 3,
    title: "AEMS Candidate Screening",
    description: "Evaluate competencies & experience fit",
    detail: "Shortlist & submit to client",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Client Interview",
    description:
      "Candidates Telephonic / Physical Interview, AEMS to receive interview results",
    detail: "",
    icon: BriefcaseBusiness,
  },
  {
    id: 5,
    title: "Offer Letter",
    description: "Client to issue offer, Candidate acceptance",
    detail: "Agree on the joining date withthe candidate",
    icon: FileText,
  },
  {
    id: 6,
    title: "Candidate On-Boarding",
    description: "Support Client on visas Onboarding support",
    detail: "Report to work confirmation",
    icon: TrendingUp,
  },
];

export default function RecruitmentCycle() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] text-white">

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

        {/* SECTION HEADER */}
        <motion.div
          className="mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
            04 — Our Process
          </p>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              Executive Search
              <br />
              <span className="text-white/45">
                Recruitment Cycle.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-white/50 lg:pb-2">
              A structured recruitment journey designed to connect
              organizations with the right talent through every stage
              of the hiring process.
            </p>
          </div>
        </motion.div>

        {/* DESKTOP PROCESS */}
        <div className="hidden lg:block">

          {/* Top row */}
          <div className="grid grid-cols-3 gap-8">

            {cycleSteps.slice(0, 3).map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                >
                  <StepCard step={step} Icon={Icon} />
                </motion.div>
              );
            })}

          </div>

          {/* Connecting line */}
          <div className="relative my-8 h-px bg-white/15">
            <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/60" />
            <div className="absolute left-1/3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/60" />
            <div className="absolute left-2/3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/60" />
            <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/60" />
          </div>

          {/* Center indicator */}
          <div className="my-12 flex items-center justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-xl">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#003b96]/50 bg-[#003b96]/30">
                <img
                  src="/favicon.png"
                  alt="FluxBridge Logo"
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-3 gap-8">

            {cycleSteps
              .slice(3, 6)
              .reverse()
              .map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                    }}
                  >
                    <StepCard step={step} Icon={Icon} />
                  </motion.div>
                );
              })}

          </div>
        </div>

        {/* MOBILE / TABLET PROCESS */}
        <div className="lg:hidden">

          <div className="relative">

            {/* Vertical line */}
            <div className="absolute left-[23px] top-6 bottom-6 w-px bg-white/15" />

            <div className="space-y-8">

              {cycleSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    className="relative flex gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                  >

                    {/* Number */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#07111f] text-xs font-semibold text-white/60">
                      0{step.id}
                    </div>

                    <StepCard step={step} Icon={Icon} />

                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="mt-24 border-t border-white/15 pt-10 lg:mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                From requirement
              </p>

              <p className="mt-3 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                To the right candidate.
                <br />
                <span className="text-white/40">
                  Every step is connected.
                </span>
              </p>
            </div>

            <ArrowDown className="hidden text-white/30 lg:block" size={32} />

          </div>
        </motion.div>

      </div>
    </section>
  );
}


/* =========================================================
   STEP CARD
========================================================= */

function StepCard({ step, Icon }) {
  return (
    <div className="group relative h-full">

      <div className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.07]">

        {/* Top */}
        <div className="mb-8 flex items-start justify-between">

          <span className="text-xs font-medium tracking-[0.2em] text-white/30">
            STEP {String(step.id).padStart(2, "0")}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition-all duration-500 group-hover:border-[#003b96]/70 group-hover:bg-[#003b96]/30">
            <Icon
              size={20}
              strokeWidth={1.5}
              className="text-white/70"
            />
          </div>

        </div>

        {/* Title */}
        <h3 className="max-w-md text-2xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-3xl">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mt-5 text-sm leading-6 text-white/45">
          {step.description}
        </p>

        {/* Detail */}
        {step.detail && (
          <p className="mt-3 text-sm font-medium leading-6 text-white/65">
            {step.detail}
          </p>
        )}

        {/* Bottom line */}
        <div className="mt-8 h-px w-full bg-white/10 transition-all duration-500 group-hover:bg-white/25" />

      </div>
    </div>
  );
}