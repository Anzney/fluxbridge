"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

const values = [
  {
    number: "01",
    title: "People",
    description:
      "We believe people are at the centre of every successful organisation and transformation.",
  },
  {
    number: "02",
    title: "Partnership",
    description:
      "We build long-term relationships with clients, candidates, and partners based on trust.",
  },
  {
    number: "03",
    title: "Expertise",
    description:
      "We bring specialised knowledge across recruitment, HR, technology, and business solutions.",
  },
  {
    number: "04",
    title: "Impact",
    description:
      "We focus on creating meaningful outcomes for organisations and the people they work with.",
  },
];


const teamMembers = [
  {
    name: "Roque Dcosta",
    role: "Managing Director",
    image: "/teams/Roque.png",
  },
  {
    name: "Khalid Abdallah Al-Damegh",
    role: "Leadership Team",
    image: "/teams/Khalid.png",
  },
  {
    name: "Alan Castelino",
    role: "Leadership Team",
    image: "/teams/Alan.png",
  },
  {
    name: "Vaishali Castelino",
    role: "Leadership Team",
    image: "/teams/Vaishali.png",
  },
  {
    name: "Abdulmalek Al-Eisa",
    role: "Management Team",
    image: "/teams/Abdulmalek.png",
  },
  {
    name: "Abhay Kumar",
    role: "Management Team",
    image: "/teams/Abhay.png",
  },
  {
    name: "Abiali Shaikh",
    role: "Management Team",
    image: "/teams/Abiali.png",
  },
  {
    name: "Amit Desai",
    role: "Management Team",
    image: "/teams/amit.png",
  },
  {
    name: "Farhan Khan",
    role: "Management Team",
    image: "/teams/Farhan.png",
  },
  {
    name: "Hamed Mohammed",
    role: "Management Team",
    image: "/teams/Hamed.png",
  },
  {
    name: "Kavilash Chawla",
    role: "Management Team",
    image: "/teams/Kavilash.png",
  },
  {
    name: "Raghad Alamri",
    role: "Management Team",
    image: "/teams/Raghad.png",
  },
  {
    name: "Vikrant Ponkshe",
    role: "Management Team",
    image: "/teams/Vikrant.png",
  },
  {
    name: "Vinod Kumar Chockalingam",
    role: "Management Team",
    image: "/teams/Vinod.png",
  },
  {
    name: "Wala'a Dashash",
    role: "Management Team",
    image: "/teams/Wala'a.png",
  },
  {
    name: "Wedad Dashash",
    role: "Management Team",
    image: "/teams/Wedad.png",
  },
];

export default function AboutPage() {
  const [teamIndex, setTeamIndex] = useState(0);
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)] text-white">
      <Navbar />

        {/* HERO */}
<section className="relative min-h-[85vh] flex items-center overflow-hidden">

  {/* FULL HERO IMAGE */}
  <div className="absolute inset-0 z-0">
    <img
      src="/hero-3.png"
      alt=""
      className="h-full w-full object-cover object-center"
    />

    {/* DARK OVERLAY - same visual style as Talent Acquisition */}
    <div className="absolute inset-0 bg-black/01" />

    {/* LEFT SIDE DARK GRADIENT FOR TEXT */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
  </div>

  {/* HERO CONTENT */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-12">

    <div className="max-w-5xl">

      <h1 className="mb-30 text-7xl font-medium leading-[0.92] tracking-[-0.06em] md:text-8xl lg:text-[6.5rem]">

        <span className="block">
          <span className="block animate-[aboutReveal_0.8s_ease-out_forwards] text-[#002b76]">
            Engineered for
          </span>
        </span>

        <span className="block">
          <span className="block animate-[aboutReveal_0.8s_ease-out_0.15s_forwards] opacity-0 text-white">
            Growth,
          </span>
        </span>

        <span className="block">
          <span className="block animate-[aboutReveal_0.8s_ease-out_0.3s_forwards] opacity-0 text-white/30">
            Driven by Talent
          </span>
        </span>

      </h1>

      <Link
        href="#story"
        className="mb-32 group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.15]"
      >
        Discover FluxBridge
        <ArrowRight size={18} />
      </Link>

    </div>
  </div>

</section>

        {/* STORY */}
<section
  id="story"
  className="relative overflow-hidden py-28 lg:py-40"
>
  {/* Background glow */}
  

  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

    {/* TOP LABEL */}
    <div className="mb-20 flex items-center gap-6"></div>

    {/* MAIN CONTENT */}
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-28">

      {/* LEFT */}
      <div>
        <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[6.5rem]">
          People.
          <br />
          <span className="text-white/30">
            Organisations.
          </span>
          <br />
          <span className="text-white">
            Possibilities.
          </span>
        </h2>
      </div>

          {/* RIGHT */}
          <div className="relative">

          {/* Vertical accent */}
          <div className="neon-story-line pointer-events-none absolute left-0 top-0 h-full w-[2px]" />
          <div className="pl-8 lg:pl-14">

          <p className="max-w-2xl text-xl leading-relaxed text-white/70 md:text-1xl">
            FluxBridge stands as a one-stop HR solutions partner,
            providing integrated services across Recruitment,
            Assessment, HR Consulting, HR Digital, Outsourcing,
            Managing HR, and GR services.
          </p>

          <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/70   md:text-20">
            <div className="h-px w-12.5 bg-[#002b76]" />
          <h3>VISION</h3><div className="h-px w-118 bg-white/80" />
            To bridge people & possibilities through 
            excellence in recruitment, HR solutions, & 
            HR consulting.
          </p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-20">
            <div className="h-px w-16 bg-[#9E1B1E]" />
            <h3>MISSION</h3><div className="h-px w-123 bg-white/80" />
            To unlock human potential & organizational performance 
            by delivering intelligent, people-centered recruitment 
            & HR<br /> consulting solutions that create lasting impact.
          </p>

          {/* Bottom accent */}
          

        </div>
      </div>
    </div>
  </div>
</section>

      

      {/* VALUES */}
      <section className="relative py-28 lg:py-36">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">


            <h2 className="mb-20  text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[6.5rem]">
              What guides
              <br />
              <span className="text-white/40">our work.</span>
            </h2>
          </div>

          <div className="values-grid grid md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.number}
                className="values-card group relative bg-[#050b14] p-8 lg:p-9 min-h-[300px] hover:bg-white/[0.04] transition"
              >
                <div className="values-neon-line" />
                <div className="flex items-start justify-between mb-12">
                  

                </div>

                <h3 className="text-2xl font-light mb-5">
                  {value.title}
                </h3>

                <p className="text-white/50 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
    <section className="relative py-28 lg:py-36">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>


              <h2 className="mb-17 text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[5.5rem]">
                People behind
                <br />
                <span className="text-white/40">the vision.</span>
              </h2>
            </div>

            <div>
              

              
            <div className="mt-10 flex items-center gap-4">

            {/* LEFT ARROW */}
            <button
              type="button"
              onClick={() =>
                setTeamIndex(
                  (teamIndex - 1 + teamMembers.length) % teamMembers.length
                )
              }
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-all duration-300 hover:border-[#00a8ff] hover:bg-[#003B96]/30 hover:text-[#00a8ff] hover:shadow-[0_0_10px_rgba(0,168,255,0.8),0_0_25px_rgba(0,168,255,0.4)]"
              aria-label="Previous team member"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>

            {/* TEAM BOX */}
            <div className="relative h-[250px] flex-1 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#050b14]">
              <img
                src={teamMembers[teamIndex].image}
                alt={teamMembers[teamIndex].name}
                className="absolute right-0 top-0 h-full w-[48%] object-cover object-center"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#050b14] via-[#050b14]/50 to-transparent" />

              {/* TEAM INFO */}
              <div className="mb-17 absolute bottom-0 left-0 z-10 w-[52%] p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#00a8ff]">
                  {teamMembers[teamIndex].role}
                </p>

                <h3 className="mt-2 text-2xl font-light text-white">
                  {teamMembers[teamIndex].name}
                </h3>
              </div>

              {/* NEON ACCENT */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#003B96] via-[#00a8ff] to-[#9E1B1E]" />
            </div>

            {/* RIGHT ARROW */}
            <button
              type="button"
              onClick={() =>
                setTeamIndex((teamIndex + 1) % teamMembers.length)
              }
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-all duration-300 hover:border-[#9E1B1E] hover:bg-[#9E1B1E]/20 hover:text-[#ff4b4b] hover:shadow-[0_0_10px_rgba(158,27,30,0.9),0_0_25px_rgba(158,27,30,0.5)]"
              aria-label="Next team member"
            >
              <ArrowRight size={20} />
            </button>
          </div>


            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 lg:py-36">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-6">
            Work With Us
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
            Let&apos;s connect
            <br />
            people with possibility.
          </h2>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 mt-10 rounded-full border border-white/20 bg-white/[0.08] px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.15]"
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