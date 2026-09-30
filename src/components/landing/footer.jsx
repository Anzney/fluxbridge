"use client";

import {
  ArrowUpRight,
  Linkedin,
  Mail,
  Instagram,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services/talent-acquisition" },
  { label: "Global Presence", href: "/global" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

const offices = [
  {
    title: "Headquarters — KSA",
    text: "Flux Bridge Co. 7783, Ibn Katheer St – King Abdulaziz District, Riyadh 12233-4264, Kingdom of Saudi Arabia.",
  },
  {
    title: "India",
    text: "BLDG No: 2, A3 Station, Unit No: 118, Opposite RUPA SOLITAIRE, Millenium Business Park, Sector 1, Mahape, Navi Mumbai, Maharashtra 400701.",
  },
  {
    title: "UAE",
    text: "IFZA Property, Freezone Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE.",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050b14] text-white">

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_80%)]" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute right-[-10%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#9e1b1e]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        {/* BIG CLOSING STATEMENT */}
        <div className="border-t border-white/10 py-20 sm:py-28 lg:py-36">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <h2 className="max-w-6xl text-[clamp(3.5rem,8vw,9rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
                Connecting Talent.
                <br />
                <span className="text-white/30">
                  Building Future.
                </span>
              </h2>
            </div>

            <a
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-[#003B96]"
            >
              Start a conversation

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="border-t border-white/10 py-14 sm:py-16 lg:py-20">

          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr_0.9fr] lg:gap-12">

            {/* COMPANY */}
            <div>

              <img
                className="h-20 w-20 object-contain"
                alt="Flux Bridge Logo"
                src="https://c.animaapp.com/mfvdxb8gInTGFO/img/image-4.png"
                onError={(e) => {
                  console.log("Failed to load footer logo");
                  e.currentTarget.style.display = "none";
                }}
              />

              <p className="mt-7 max-w-sm text-sm leading-6 text-white/40">
                Flux Bridge is a global Human Capital Advisory firm
                headquartered in Riyadh, KSA. Since 2017, we&apos;ve partnered
                with 100+ clients across 14+ countries, helping organizations
                transform people, processes, and technology for sustainable
                success.
              </p>

              <div className="mt-8 flex items-center gap-3">

  {/* Email */}
  <a
    href="mailto:a.mathew@fluxbridge360.com"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all hover:border-white/20 hover:bg-white/[0.08]"
    aria-label="Email"
  >
    <Mail size={16} className="text-white/60" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/fluxbridge360/posts/?feedView=all"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all hover:border-white/20 hover:bg-white/[0.08]"
    aria-label="LinkedIn"
  >
    <Linkedin size={16} className="text-white/60" />
  </a>

  {/* Instagram */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all hover:border-white/20 hover:bg-white/[0.08]"
    aria-label="Instagram"
  >
    <Instagram size={16} className="text-white/60" />
  </a>

  {/* WhatsApp */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all hover:border-white/20 hover:bg-white/[0.08]"
    aria-label="WhatsApp"
  >
    <MessageCircle size={16} className="text-white/60" />
  </a>

  {/* X */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm font-semibold text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.08]"
    aria-label="X"
  >
    X
  </a>

</div>

            </div>

            {/* QUICK LINKS */}
            <div>

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                Explore
              </p>

              <div className="mt-7 flex flex-col gap-4">

                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-60"
                    />
                  </a>
                ))}

              </div>

            </div>

            {/* OFFICES */}
            <div>

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                Global Offices
              </p>

              <div className="mt-7 space-y-7">

                {offices.map((office) => (
                  <div key={office.title}>

                    <p className="text-sm font-medium text-white/70">
                      {office.title}
                    </p>

                    <p className="mt-2 max-w-sm text-xs leading-5 text-white/35">
                      {office.text}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* NEWSLETTER */}
            <div>

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                Stay Connected
              </p>

              <h3 className="mt-7 text-2xl font-medium leading-tight tracking-[-0.03em]">
                Insights that
                <br />
                move forward.
              </h3>

              <p className="mt-4 text-xs leading-5 text-white/35">
                Subscribe for updates, insights and news from Flux Bridge.
              </p>

              <div className="mt-7 flex w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.03] p-1">

                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent px-4 text-xs text-white outline-none placeholder:text-white/20"
                />

                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#050b14] transition-all hover:bg-[#3764ff] hover:text-white"
                  aria-label="Subscribe"
                >
                  <ArrowUpRight size={16} />
                </button>

              </div>

            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-7">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs text-white/25">
              © 2025 Flux Bridge Co. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-xs text-white/25">
              <a
                href="#"
                className="transition-colors hover:text-white/60"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition-colors hover:text-white/60"
              >
                Terms of Service
              </a>
            </div>

            <p className="text-xs uppercase tracking-[0.18em] text-white/20">
              Riyadh · Dubai · India
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}