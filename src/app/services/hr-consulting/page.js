import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

const capabilities = [
  "HR Strategy & Transformation",
  "HR Audits Health Checks",
  "Organization Design & Planning",
  "Job Description & Job Evaluation",
  "Job Grading & Salary Structure",
  "Workforce Planning & Cost Optimization",
  "Goal Setting & Performance Planning / KPI’s",
  "Reward & Recognition (STIP, LTIP, Incentive)",
  "Career & Succession Planning",
  "Competency Framework Development & Mapping",
  "HR Policy Development",
];

const approach = [
  "Understand Organizational Needs",
  "Assess Current HR Practices",
  "Develop HR Strategy",
  "Design & Implement Solutions",
  "Measure Outcomes",
  "Continuous Improvement",
];

const otherServices = [
  {
    title: "Talent Acquisition",
    description:
      "Executive search, staffing, RPO, Saudization, overseas recruitment, and interim executives.",
    href: "/services/talent-acquisition",
    image: "/hero-2.jpg",
  },
  {
    title: "HR Technology",
    description:
      "HR digital transformation, technology solutions, AI, automation, analytics, and workforce technology.",
    href: "/services/hr-technology",
    image: "/hero-7.jpg",
  },
  {
    title: "Business Consulting",
    description:
      "Strategy development, organisational transformation, market analysis, and business restructuring.",
    href: "/services/business-consulting",
    image: "/hero-5.jpg",
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

export default function HRConsultingPage() {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)] text-white">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative min-h-[75vh] overflow-hidden">


          {/* HERO IMAGE */}
            <img
              src="/hero-15.png"
              alt="HR Consulting"
              className="absolute inset-0 h-full w-full object-cover opacity-75"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 25%, black 60%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 25%, black 60%, black 100%)",
              }}
            />
            <div className="absolute inset-0 bg-black/20" />


          <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-[1500px] flex-col justify-end px-6 pb-20 pt-36 sm:px-10 lg:px-16">


            <h1 className="max-w-5xl text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.85] tracking-[-0.06em]">
              HR
              <br />
              <span className="text-white/50">
                Consulting
              </span>
            </h1>

            <div className="mb-50 mt-10 max-w-2xl">
              <p className="text-lg leading-8 text-white/65 sm:text-xl">
                Helping organizations strengthen their people,
                processes and HR strategies to support sustainable
                business growth.
              </p>
            </div>

          </div>

        </section>


        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <section className="relative overflow-hidden border-t border-white/10">

          <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">


              <div className="relative h-[420px] w-full overflow-hidden rounded-2xl">
                <img
                  src="/hero-16.jpg"
                  alt="HR Consulting"
                  className="h-full w-full object-cover"
                />

                {/* Soft fade into page background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#07111f]" />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07111f] to-transparent" />
              </div>


              <div>

                <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                  Turning people strategy into organizational impact.
                </h2>

                <p className="mt-8 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
                  Our HR consulting approach helps organizations
                  align their people strategy with business priorities,
                  strengthen organizational effectiveness and build
                  capabilities for long-term growth.
                </p>

              </div>

            </div>

          </div>

        </section>




        {/* =====================================================
    CAPABILITIES
====================================================== */}

<section className="relative overflow-hidden border-t border-white/10">

  <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

    {/* HEADING */}
    <div className="mb-16">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.58em] text-[#6f8dff]">
        HR CONSULTING SERVICES
      </p>

      <h2 className="max-w-5xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
        HR solutions designed
        <br />
        <span className="text-white/40">
          around your organization.
        </span>
      </h2>
    </div>


    {/* =====================================================
        SERVICES PATHWAY
    ====================================================== */}

    <div className="relative mx-auto min-h-[1000px] max-w-[1250px]">

      {/* =====================================================
          VERTICAL HALF-CIRCLE NEON FLOW
      ====================================================== */}

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1000 1000"
        fill="none"
        preserveAspectRatio="none"
      >

        <defs>

          <linearGradient
            id="hrPathGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#003B96" />
            <stop offset="35%" stopColor="#00A8FF" />
            <stop offset="65%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#9E1B1E" />
          </linearGradient>


          <filter
            id="hrPathGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

        </defs>


        {/* BASE HALF-CIRCLE */}

        <path
          d="
            M500 20
            C180 20 80 220 80 500
            C80 780 180 980 500 980
          "
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="1.5"
          fill="none"
        />


        {/* NEON FLOW */}

        <path
          d="
            M500 20
            C180 20 80 220 80 500
            C80 780 180 980 500 980
          "
          stroke="url(#hrPathGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          filter="url(#hrPathGlow)"
          strokeDasharray="45 900"
          className="hr-path-neon"
        />


        {/* START POINT */}

        <circle
          cx="500"
          cy="20"
          r="5"
          fill="#00A8FF"
          filter="url(#hrPathGlow)"
        />


        {/* END POINT */}

        <circle
          cx="500"
          cy="980"
          r="5"
          fill="#00A8FF"
          filter="url(#hrPathGlow)"
        />

      </svg>


      {/* =====================================================
          SERVICE 01
      ====================================================== */}

      <div className="absolute left-[55%] top-[0%] flex items-start gap-5">

        <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
          01
        </span>

        <h3 className="max-w-[400px] text-xl font-medium text-white/80">
          HR Strategy & Transformation
        </h3>

      </div>


      {/* SERVICE 02 */}

      <div className="absolute left-[55%] top-[10%] flex items-start gap-5">

        <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
          02
        </span>

        <h3 className="max-w-[400px] text-xl font-medium text-white/80">
          HR Audits Health Checks
        </h3>

      </div>


      {/* SERVICE 03 */}

      <div className="absolute left-[55%] top-[20%] flex items-start gap-5">

        <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
          03
        </span>

        <h3 className="max-w-[400px] text-xl font-medium text-white/80">
          Organization Design & Planning
        </h3>

      </div>


      {/* SERVICE 04 */}

      <div className="absolute left-[55%] top-[30%] flex items-start gap-5">

        <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
          04
        </span>

        <h3 className="max-w-[400px] text-xl font-medium text-white/80">
          Job Description & Job Evaluation
        </h3>

      </div>


      {/* SERVICE 05 */}

      <div className="absolute left-[55%] top-[40%] flex items-start gap-5">

        <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
          05
        </span>

        <h3 className="max-w-[400px] text-xl font-medium text-white/80">
          Job Grading & Salary Structure
        </h3>

      </div>


      {/* SERVICE 06 */}

      <div className="absolute left-[55%] top-[50%] flex items-start gap-5">

        <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
          06
        </span>

        <h3 className="max-w-[400px] text-xl font-medium text-white/80">
          Workforce Planning & Cost Optimization
        </h3>

      </div>


      {/* SERVICE 07 */}

      <div className="absolute left-[55%] top-[60%] flex items-start gap-5">

        <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
          07
        </span>

        <h3 className="max-w-[400px] text-xl font-medium text-white/80">
          Goal Setting & Performance Planning / KPI’s
        </h3>

      </div>


      {/* SERVICE 08 */}

      <div className="absolute left-[55%] top-[70%] flex items-start gap-5">

        <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
          08
        </span>

        <h3 className="max-w-[400px] text-xl font-medium text-white/80">
          Reward & Recognition (STIP, LTIP, Incentive)
        </h3>

      </div>


      {/* SERVICE 09 */}

      <div className="absolute left-[55%] top-[80%] flex items-start gap-5">

        <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
          09
        </span>

        <h3 className="max-w-[400px] text-xl font-medium text-white/80">
          Career & Succession Planning
        </h3>

      </div>


      {/* SERVICE 10 */}

      <div className="absolute left-[55%] top-[90%] flex items-start gap-5">

        <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
          10
        </span>

        <h3 className="mbmax-w-[400px] text-xl font-medium text-white/80">
          Competency Framework Development & Mapping
        </h3>

      </div>


      {/* SERVICE 11 */}

      <div className="absolute left-[55%] bottom-[0%] flex items-start gap-5">

        <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
          11
        </span>

        <h3 className="max-w-[400px] text-xl font-medium text-white/80">
          HR Policy Development
        </h3>

      </div>

    </div>

  </div>

</section>


       


        {/* =====================================================
    OTHER SERVICES
====================================================== */}

<section className="relative border-t border-white/10">

  <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

    <div className="mb-14">

      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f8dff]">
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

    <div className="grid md:grid-cols-3">

  {otherServices.map((service, index) => (
    <Link
      key={service.title}
      href={service.href}
      className="service-card group relative mx-3 min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:bg-white/[0.05] sm:p-7 lg:mx-4 lg:p-8"
    >

      {/* NEON HOVER FLOW */}
      <span className="service-neon-flow service-neon-top" />
      <span className="service-neon-flow service-neon-right" />
      <span className="service-neon-flow service-neon-bottom" />
      <span className="service-neon-flow service-neon-left" />

      {/* IMAGE */}
      <div className="relative h-40 w-full overflow-hidden rounded-xl">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="mt-7">

        <h3 className="text-xl font-medium text-white/85 transition-colors duration-300 group-hover:text-[#00A8FF] lg:text-[22px]">
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

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="relative overflow-hidden border-t border-white/10">

          <div className="relative mx-auto max-w-[1200px] px-6 py-28 text-center sm:px-10 lg:py-36">

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
              Let&apos;s Build Better Organizations
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Build an HR strategy that supports your future.
            </h2>

            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:bg-[#3764ff] hover:text-white"
            >
              Start a conversation

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </section>
        <Footer />

      </main>
    </div>
  );
}