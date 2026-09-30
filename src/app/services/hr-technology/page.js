import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

const services = [
  "HR Digital Transformation",
  "HR Technology Solutions",
  "Digital HR Platforms",
  "AI & HR Automation",
  "HR Data & Analytics",
  "Workforce Technology Solutions",
];

const approach = [
  "Understand Business & HR Requirements",
  "Assess Existing HR Technology",
  "Identify Digital Opportunities",
  "Design the Technology Roadmap",
  "Implement Digital Solutions",
  "Optimize & Continuously Improve",
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
    title: "Business Consulting",
    description:
      "Strategy development, organisational transformation, market analysis, and business restructuring.",
    href: "/services/business-consulting",
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

export default function HRTechnologyPage() {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)] text-white">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative min-h-[75vh] overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0">
            <img
              src="/hero-18.png"
              alt="HR Technology"
              className="h-full w-full object-cover opacity-100"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 25%, black 50%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 25%, black 60%, black 100%)",
              }}
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/70 via-[#07111f]/20 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-[1500px] flex-col justify-end px-6 pb-20 pt-36 sm:px-10 lg:px-16">
          


            <h1 className="max-w-5xl text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.85] tracking-[-0.06em] text-white">
              HR
              <br />
              <span className="text-white/75">
                Technology
              </span>
            </h1>

            <div className="mt-10 mb-50 max-w-2xl">
              <p className="text-lg leading-8 text-white/65 sm:text-xl">
                Helping organizations use technology, data and
                automation to create smarter and more connected
                HR operations.
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

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                  01 — HR Technology
                </p>

              </div>

              <div>

                <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                  Connecting people strategy with technology.
                </h2>

                <p className="mt-8 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
                  Our HR technology solutions help organizations
                  modernize their HR operations, improve workforce
                  processes and use digital capabilities to support
                  better decision-making.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CAPABILITIES
        ====================================================== */}

        <section className="relative border-t border-white/10">

          <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

            <div className="mb-16">

              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#6f8dff]">
                Our Capabilities
              </p>

              <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Digital solutions for modern HR.
              </h2>

            </div>


            <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">

              {services.map((service, index) => (
                <div
                  key={service}
                  className="group min-h-[220px] border-b border-r border-white/10 p-7 transition-colors duration-300 hover:bg-white/[0.035] sm:p-8 lg:p-10"
                >

                  <div className="flex items-start justify-between">

                    <span className="text-xs tracking-[0.2em] text-white/25">
                      0{index + 1}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3764ff]"
                    />

                  </div>

                  <h3 className="mt-20 max-w-xs text-xl font-medium leading-snug text-white/85">
                    {service}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            DIGITAL TRANSFORMATION APPROACH
        ====================================================== */}

        <section className="relative overflow-hidden border-t border-white/10">

          <div className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#003b96]/20 blur-[140px]" />

          <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

            <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                  02 — Our Approach
                </p>

                <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  From HR challenges
                  <br />
                  to digital solutions.
                </h2>

              </div>


              <div>

                {approach.map((step, index) => (
                  <div
                    key={step}
                    className="group flex items-center gap-6 border-t border-white/10 py-6"
                  >

                    <span className="w-8 text-xs tracking-[0.15em] text-[#3764ff]">
                      0{index + 1}
                    </span>

                    <span className="text-lg text-white/65 transition-colors group-hover:text-white">
                      {step}
                    </span>

                    <ArrowRight
                      size={17}
                      className="ml-auto text-white/20 transition-all group-hover:translate-x-1 group-hover:text-[#3764ff]"
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
              className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3764ff]"
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

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="relative overflow-hidden border-t border-white/10">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,59,150,0.28),transparent_50%)]" />

          <div className="relative mx-auto max-w-[1200px] px-6 py-28 text-center sm:px-10 lg:py-36">

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
              Transform Your HR
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Make technology work harder for your people.
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