import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

const services = [
  "Executive Search",
  "Permanent / Temporary / Project-based Staffing",
  "Recruitment Process Outsourcing (RPO)",
  "Local Talent Programs (Saudization)",
  "Overseas Recruitment",
  "Interim Executives",
];

const otherServices = [
  {
    title: "HR Consulting",
    description:
      "HR strategy, organisation development, performance management, talent management, and leadership development.",
    href: "/services/hr-consulting",
    image: "/hero-5.jpg",
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
    image: "/hero-8.jpg",
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

export default function TalentAcquisitionPage() {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden">

        {/* Background */}
        <img
          src="/hero-12.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 20%, black 55%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 20%, black 55%, black 100%)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050b14]" />

        {/* Brand atmosphere */}
    

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-end px-6 pb-20 pt-36 sm:px-10 lg:px-16">

        

  

          <h1 className="max-w-5xl text-[clamp(4rem,8vw,8rem)] text-[#9E1B22] font-medium leading-[0.85] tracking-[-0.06em]">
            Talent
            <br />
            <span className="text-white/55">
              Acquisition
            </span>
          </h1>

          <div className="mb-10 mt-10 mb-50 max-w-2xl">
            <p className="text-lg leading-8 text-white/65 sm:text-xl">
              Connecting organizations with exceptional talent through
              strategic recruitment and workforce solutions.
            </p>
          </div>

        </div>

      </section>


          {/* =====================================================
    INTRODUCTION
====================================================== */}

<section className="relative overflow-hidden border-t border-white/10">

  <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

    <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

      {/* LEFT — CONTENT */}
      <div>
        <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
          Building teams that move organizations forward.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
          At FluxBridge 360, our specialized teams execute precision research
          and targeted talent acquisition tailored to your unique requirements.
          By leveraging advanced AI-driven analytics, deep market intelligence,
          and an extensive network across local and global channels, we identify
          and evaluate top-tier candidates—delivering qualified shortlists in as
          little as two weeks.
        </p>

      </div>

      {/* RIGHT — IMAGE */}
      <div className="relative h-[420px] overflow-hidden">

        <img
          src="/hero-14.jpg"
          alt="Talent acquisition"
          className="h-full w-full object-cover object-center"
        />

        {/* LEFT FADE */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-transparent to-transparent" />

        {/* BOTTOM FADE */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050b14] to-transparent" />

      </div>

    </div>

  </div>

</section>


            {/* =====================================================
    SERVICES
====================================================== */}

<section className="relative overflow-hidden border-t border-white/10">

  <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

    <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

      {/* LEFT — HEADING */}
      <div className="relative z-10">

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.58em] text-[#6f8dff]">
          Our Capabilities
        </p>

        <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
          Talent solutions
          <br />
          for every stage
          <br />
          of growth.
        </h2>

        <p className="mt-8 max-w-lg text-base leading-8 text-white/45 sm:text-lg">
          From executive search to specialist staffing, we connect
          organizations with the talent required to move forward.
        </p>

      </div>


      {/* RIGHT — CURVED SERVICE FLOW */}
      <div className="relative min-h-[650px] w-full">

        {/* CURVED FLOW LINE */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 700 650"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>

                  {/* Neon gradient */}
                  <linearGradient
                    id="neonFlowGradient"
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

                  {/* Glow filter */}
                  <filter
                    id="neonGlow"
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


                {/* BASE CURVE */}
                <path
                  d="M210 15
                    C500 40 610 130 535 225
                    C470 310 300 280 285 365
                    C270 455 500 480 585 630"
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="1.5"
                  fill="none"
                />


                {/* NEON FLOW */}
                <path
                  d="M210 15
                    C500 40 610 130 535 225
                    C470 310 300 280 285 365
                    C270 455 500 480 585 630"
                  stroke="url(#neonFlowGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#neonGlow)"
                  strokeDasharray="35 500"
                  className="neon-service-flow"
                />

              </svg>


        {/* SERVICE 01 */}
        <div className="absolute left-[4%] top-[0%] flex items-start gap-4">
          <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
            01
          </span>

          <div>
            <h3 className="max-w-[260px] text-lg font-medium text-white/85">
              Targeted C-Suite Recruitment
            </h3>
          </div>
        </div>


        {/* SERVICE 02 */}
        <div className="absolute right-[2%] top-[17%] flex items-start gap-4">
          <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
            02
          </span>

          <div>
            <h3 className="max-w-[260px] text-lg font-medium text-white/85">
              Corporate Leadership Hiring
            </h3>
          </div>
        </div>


        {/* SERVICE 03 */}
        <div className="absolute right-[28%] top-[39%] flex items-start gap-4">
          <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
            03
          </span>

          <div>
            <h3 className="max-w-[260px] text-lg font-medium text-white/85">
              Middle & Senior-Level Recruitment
            </h3>
          </div>
        </div>


        {/* SERVICE 04 */}
        <div className="absolute left-[3%] top-[54%] flex items-start gap-4">
          <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
            04
          </span>

          <div>
            <h3 className="max-w-[260px] text-lg font-medium text-white/85">
              Contract & Temporary Staffing
            </h3>
          </div>
        </div>


        {/* SERVICE 05 */}
        <div className="absolute right-[4%] top-[70%] flex items-start gap-4">
          <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
            05
          </span>

          <div>
            <h3 className="max-w-[260px] text-lg font-medium text-white/85">
              Recruitment as Outsourced Services
            </h3>
          </div>
        </div>


        {/* SERVICE 06 */}
        <div className="absolute left-[20%] bottom-[0%] flex items-start gap-4">
          <span className="mt-1 text-xs tracking-[0.2em] text-[#3764ff]">
            06
          </span>

          <div>
            <h3 className="max-w-[280px] text-lg font-medium text-white/85">
              Assessment & Psychometric Testing
            </h3>
          </div>
        </div>

      </div>

    </div>

  </div>

</section>


              {/* =====================================================
    RECRUITMENT CYCLE
====================================================== */}

<section className="relative overflow-hidden border-t border-white/10">

  <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

      {/* LEFT */}
      <div>

        <p className="text-xs font-semibold uppercase tracking-[0.58em] text-white/55">
          Recruitment Approach
        </p>

        <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
          From requirement
          <br />
          to placement.
        </h2>

      </div>


      {/* RIGHT — RECRUITMENT FLOW */}
      <div className="relative">

        {[
          "Understand Client Needs",
          "Source Candidates",
          "Candidate Screening",
          "Client Interview",
          "Offer Letter",
          "Candidate On-Boarding",
        ].map((step, index) => (
          <div
            key={step}
            className="recruitment-step group relative flex items-center gap-6 border-t border-white/10 py-7"
            style={{
              animationDelay: `${index * 2.2}s`,
            }}
          >

            {/* STEP NUMBER */}
            <span className="w-8 shrink-0 text-xs tracking-[0.15em] text-[#3764ff]">
              0{index + 1}
            </span>


            {/* STEP NAME */}
            <span className="whitespace-nowrap text-lg text-white/55 transition-colors duration-500 group-hover:text-white sm:text-xl">
              {step}
            </span>


            {/* ARROW */}
            <ArrowRight
              size={18}
              className="ml-auto shrink-0 text-white/20 transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#00a8ff]"
            />


            {/* SLOW NEON FLOW */}
            <span className="recruitment-neon-line" />

          </div>
        ))}

        {/* LAST BORDER */}
        <div className="border-t border-white/10" />

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

      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.58em] text-[#9E1B22]">
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

          <div className="flex items-start justify-between">

          
            {/* IMAGE */}
                <div className="relative h-40 w-full overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />
                </div>

          </div>

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
            Let&apos;s Build Your Team
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            Connect with the talent your organization needs.
          </h2>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 mt-10 rounded-full border border-white/20 bg-white/[0.08] px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.15]"
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