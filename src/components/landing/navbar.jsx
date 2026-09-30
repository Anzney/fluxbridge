"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Jobs", href: "/jobs" },
];

const serviceItems = [
  {
    label: "Talent Acquisition",
    href: "/services/talent-acquisition",
  },
  {
    label: "HR Consulting",
    href: "/services/hr-consulting",
  },
  {
  label: "Manpower / Payroll Services",
  href: "/services/manpower-payroll",
  },
  {
    label: "HR Tech",
    href: "/services/hr-technology",
  },
  {
    label: "Trainer Deployment Services",
    href: "/services/trainer-deployment-services",
  },
  {
    label: "Business Consulting",
    href: "/services/business-consulting",
  },
  
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <div className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-white/10 bg-[#07111f]/5 px-3 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:px-6 sm:py-3">

        {/* =====================================================
            LOGO
        ====================================================== */}

        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 sm:gap-3"
        >
         <div className="flex items-center">
          <img
            src="/logo.png"
            alt="FluxBridge 360"
            className="h-9 w-auto object-contain sm:h-12 sm:scale-160"
          />
        </div>

          <div className="font-sans text-lg font-semibold tracking-[0.22em] text-white">
            <img
          src="/fluxbridge-text.png"
          alt="FluxBridge"
          className="h-6 w-auto object-contain sm:h-8 sm:scale-110"
            />
          </div>
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav className="hidden items-center gap-1 lg:flex">


          {/* About */}
          <Link
            href="/"
            className="group relative rounded-full px-4 py-2.5 text-[16px] font-medium text-white/80 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
          >
            Home

            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#3764ff] transition-all duration-300 group-hover:w-3" />
          </Link>


          {/* About */}
          <Link
            href="/about"
            className="group relative rounded-full px-4 py-2.5 text-[16px] font-medium text-white/80 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
          >
            About

            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#3764ff] transition-all duration-300 group-hover:w-3" />
          </Link>



          {/* =================================================
              SERVICES DROPDOWN
          ================================================== */}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >

            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`group flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[16px] font-medium transition-all duration-300 ${
                servicesOpen
                  ? "bg-white/[0.08] text-white"
                  : "text-white/80 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              Services

              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />

              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#3764ff] transition-all duration-300 group-hover:w-3" />
            </button>


            {/* Dropdown */}
            <div
              className={`absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-3 transition-all duration-300 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07111f] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">

                <div className="px-4 pb-3 pt-3">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                    Our Services
                  </p>

                </div>

                {serviceItems.map((service, index) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="group flex items-center gap-4 rounded-xl px-4 py-4 transition-all duration-300 hover:bg-white/[0.07]"
                  >

                    <span className="text-[12px] tracking-[0.15em] text-white/20 group-hover:text-[#3764ff]">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-medium text-white/70 group-hover:text-white hover:text-[#00A8FF]">
                      {service.label}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="ml-auto text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#3764ff]"
                    />

                  </Link>
                ))}

              </div>

            </div>

          </div>


          {/* Remaining navigation */}
          {navItems.slice(1).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative rounded-full px-4 py-2.5 text-[16px] font-medium text-white/80 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}

              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#3764ff] transition-all duration-300 group-hover:w-3" />
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-full px-4 py-2.5 text-[16px] font-medium text-white/80 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              Partners
              <ChevronDown
                size={15}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div className="invisible absolute left-6 right-0 top-full z-50 mt-3 w-56 translate-y-2 rounded-2xl border border-white/10 bg-[#07111f] p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href="https://uknowva.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/[0.06] hover:text-[#00A8FF]"
              >
                uKnowva
              </a>

              <a
                href="https://www.assesshub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/[0.06] hover:text-[#00A8FF]"
              >
                AssessHub
              </a>

              <a
                href="https://nautilusnext.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/[0.06] hover:text-[#00A8FF]"
              >
                Nautilus Next
              </a>
            </div>
          </div>

          <Link
            href="/Upload-Resume"
            className="group inline-flex items-center gap- rounded-full  px-4 py-3 text-sm font-medium border border-white/60 text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-[#003B96]"
          >
            Upload Resume
            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#3764ff] transition-all duration-300 group-hover:w-3" />
          </Link>

        </nav>


        {/* =====================================================
                CONTACT + EMPLOYEE
            ====================================================== */}

            <div className="hidden items-center gap-3 lg:flex">

              {/* Contact */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0] px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-[#003B96] hover:text-white"
              >
                Contact

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              {/* Employee */}
              <Link
                href="/employee"
                className="group inline-flex items-center rounded-full border border-white/20  px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-[#003B96] hover:text-white"
              >
                Employee
              </Link>

            </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        <div className="lg:hidden">

          <Sheet>

            <SheetTrigger asChild>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#07111f] transition-all duration-300 hover:bg-[#3764ff] hover:text-white sm:h-11 sm:w-11"
                aria-label="Open navigation menu"
              >
                <Menu size={20} />
              </button>

            </SheetTrigger>


            <SheetContent
              side="right"
              className="w-[88%] border-l border-white/10 bg-[#050b14] text-white sm:max-w-sm"
            >

              <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute right-[-30%] top-[15%] h-[350px] w-[350px] rounded-full bg-[#003b96]/15 blur-[120px]" />

                <div className="absolute bottom-[-10%] left-[-30%] h-[300px] w-[300px] rounded-full bg-[#9e1b1e]/10 blur-[120px]" />

              </div>


              <div className="relative flex h-full flex-col justify-between py-8">

                <div>

                  {/* Mobile Logo */}

                  <div className="mb-10">

                    <p className="text-lg font-semibold tracking-[0.18em]">
                      FLUXBRIDGE
                    </p>

                  </div>


                  <nav className="flex flex-col">

                    {/* About */}

                    <Link
                      href="/about"
                      className="group flex items-center border-b border-white/10 py-5"
                    >
                      <span className="mr-5 text-[10px] tracking-[0.18em] text-white/25">
                        01
                      </span>

                      <span className="text-2xl font-medium">
                        About
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="ml-auto text-white/20"
                      />
                    </Link>


                    {/* Mobile Services */}

                    <div className="border-b border-white/10">

                      <button
                        type="button"
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex w-full items-center py-5 text-left"
                      >

                        <span className="mr-5 text-[10px] tracking-[0.18em] text-white/25">
                          02
                        </span>

                        <span className="text-2xl font-medium">
                          Services
                        </span>

                        <ChevronDown
                          size={18}
                          className={`ml-auto transition-transform duration-300 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />

                      </button>


                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          servicesOpen
                            ? "max-h-[400px] pb-3 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >

                        {serviceItems.map((service, index) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/55 transition-colors hover:bg-white/[0.05] hover:text-white"
                          >

                            <span className="text-[9px] text-[#3764ff]">
                              0{index + 1}
                            </span>

                            {service.label}

                            <ArrowUpRight
                              size={14}
                              className="ml-auto"
                            />

                          </Link>
                        ))}

                      </div>

                    </div>



                    {/* Partners */}

                    <Link
                      href="/clients"
                      className="group flex items-center border-b border-white/10 py-5"
                    >
                      <span className="mr-5 text-[10px] tracking-[0.18em] text-white/25">
                        05
                      </span>

                      <span className="text-2xl font-medium">
                        Partners
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="ml-auto text-white/20"
                      />
                    </Link>

                  </nav>

                </div>


                {/* Mobile Contact */}

                <div>

                  <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-white/25">
                    Start a conversation
                  </p>

                  <Link
                    href="/contact"
                    className="group flex items-center justify-between rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:bg-[#3764ff] hover:text-white"
                  >
                    Contact FluxBridge

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>

                </div>

              </div>

            </SheetContent>

          </Sheet>

        </div>

      </div>

    </header>
  );
}