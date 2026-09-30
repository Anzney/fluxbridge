"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

const capabilities = [
  {
    number: "01",
    title: "Organisational Transformation",
    description:
      "Supporting organisations in transforming people, processes, and technology to create sustainable business outcomes.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Designing and executing strategies aligned with organisational objectives and long-term business goals.",
  },
  {
    number: "03",
    title: "Market & Financial Analysis",
    description:
      "Providing market analysis, feasibility studies, and financial modelling to support informed business decisions.",
  },
  {
    number: "04",
    title: "Business Restructuring",
    description:
      "Supporting business restructuring initiatives focused on turnaround, expansion, and improved profitability.",
  },
  {
    number: "05",
    title: "Strategic Alliances & Startups",
    description:
      "Supporting strategic alliances and startup initiatives through structured business and growth-focused solutions.",
  },
];

const approach = [
  "Understand Business Objectives",
  "Assess Current Position",
  "Develop Strategic Direction",
  "Build Transformation Roadmap",
  "Support Implementation",
  "Measure Impact",
];

const otherServices = [
  {
    title: "Talent Acquisition",
    description:
      "Executive search, staffing, RPO, Saudization, overseas recruitment, and interim executives.",
    href: "/services/talent-acquisition",
  },
  {
    title: "HR Consulting",
    description:
      "HR strategy, organisation development, performance management, talent management, and leadership development.",
    href: "/services/hr-consulting",
  },
  {
    title: "HR Technology",
    description:
      "HR digital transformation, technology solutions, AI, automation, analytics, and workforce technology.",
    href: "/services/hr-technology",
  },
  {
    title: "Manpower / Payroll Services",
    description:
      "Flexible workforce, payroll management, employee administration, and workforce outsourcing solutions.",
    href: "/services/manpower-payroll",
    image: "/hero-15.png",
  },
  {
    title: "Trainer Deployment Services",
    description:
      "Professional trainers for technical, leadership, compliance, soft skills, and workforce development programs.",
    href: "/services/trainer-deployment-services",
    image: "/hero-16.jpg",
  },
];

export default function BusinessConsultingPage() {
  return (
    <main className="min-h-screen bg-[#050b14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003B96]/25 via-[#050b14] to-[#9E1B1E]/20" />

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#003B96]/20 blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#9E1B1E]/20 blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
          <div className="max-w-5xl">
            <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-8">
              Business Consulting
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
              Turning strategy
              <br />
              into <span className="text-[#9E1B1E]">business impact.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed">
              Helping organisations navigate transformation, develop effective
              strategies, and create sustainable business growth.
            </p>

            <Link
              href="#capabilities"
              className="inline-flex items-center gap-3 mt-10 px-6 py-4 rounded-full bg-white text-black hover:bg-white/90 transition"
            >
              Explore capabilities
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 lg:left-12 text-xs tracking-[0.25em] uppercase text-white/30">
          FluxBridge 360 · Business Consulting
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 lg:py-36 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#9E1B1E] mb-6">
                Business & Strategy
              </p>

              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                Building stronger
                <br />
                businesses through
                <br />
                <span className="text-white/50">strategic thinking.</span>
              </h2>
            </div>

            <div className="text-white/60 text-lg leading-relaxed">
              <p>
                Our Business Consulting services support organisations through
                strategic planning, transformation, analysis, restructuring,
                and growth initiatives.
              </p>

              <p className="mt-6">
                We help organisations connect business objectives with practical
                strategies and transformation initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="py-28 lg:py-36 bg-[#07111f]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#9E1B1E] mb-5">
                Our Capabilities
              </p>

              <h2 className="text-4xl md:text-6xl font-light">
                Business solutions
                <br />
                <span className="text-white/40">built around your goals.</span>
              </h2>
            </div>

            <p className="max-w-md text-white/50 leading-relaxed">
              From strategy development to transformation and restructuring,
              our capabilities address key areas of business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="group bg-[#07111f] p-8 lg:p-10 min-h-[280px] hover:bg-white/[0.04] transition"
              >
                <div className="flex items-start justify-between mb-12">
                  <span className="text-sm text-white/30">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-white/30 group-hover:text-[#9E1B1E] transition"
                  />
                </div>

                <h3 className="text-2xl font-light mb-5">
                  {item.title}
                </h3>

                <p className="text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#9E1B1E] mb-6">
                Our Approach
              </p>

              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                From
                <br />
                <span className="text-white/40">challenge</span>
                <br />
                to action.
              </h2>
            </div>

            <div className="border-t border-white/10">
              {approach.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-6 py-7 border-b border-white/10"
                >
                  <span className="text-sm text-[#9E1B1E] w-8">
                    0{index + 1}
                  </span>

                  <span className="text-xl md:text-2xl font-light">
                    {step}
                  </span>

                  <ArrowRight
                    size={18}
                    className="ml-auto text-white/30"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
    OTHER SERVICES
====================================================== */}

<section className="relative border-t border-white/10 bg-[#050b14]">

  <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

    <div className="mb-14">

      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#9E1B1E]">
        Explore More
      </p>

      <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
        Explore our other
        <br />
        <span className="text-white/40">
          services.
        </span>
      </h2>

    </div>

    <div className="grid border-l border-t border-white/10 md:grid-cols-3">

      {otherServices.map((service, index) => (
        <Link
          key={service.title}
          href={service.href}
          className="group min-h-[300px] border-b border-r border-white/10 p-8 transition-all duration-300 hover:bg-white/[0.04] lg:p-10"
        >

          <div className="flex items-start justify-between">

            <span className="text-xs tracking-[0.2em] text-white/25">
              0{index + 1}
            </span>

            <ArrowUpRight
              size={19}
              className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#9E1B1E]"
            />

          </div>

          <div className="mt-20">

            <h3 className="text-2xl font-medium text-white/85 transition-colors group-hover:text-white">
              {service.title}
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
              {service.description}
            </p>

          </div>

        </Link>
      ))}

    </div>

  </div>

</section>

      {/* CTA */}
      <section className="py-28 lg:py-36 bg-gradient-to-br from-[#003B96] to-[#07111f]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-6">
            Let&apos;s Build What&apos;s Next
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
            Ready to transform
            <br />
            your business?
          </h2>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-10 px-7 py-4 rounded-full bg-white text-black hover:bg-white/90 transition"
          >
            Start a conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}