"use client";
import { motion } from "motion/react";
import Image from "next/image";

const cycleSteps = [
  {
    id: 1,
    title: "Understand Client needs",
    description: "Job profile & Organization dynamics Reward dynamics",
    detail: "Specific skill sets & Experience",
    position: "top-right",
    icon: "🎯"
  },
  {
    id: 2, 
    title: "Sourcing Candidates",
    description: "Internal database",
    detail: "Website / Headhunting Social media",
    position: "right",
    icon: "👥"
  },
  {
    id: 3,
    title: "AEMS Candidate Screening",
    description: "Evaluate competencies & experience fit",
    detail: "Shortlist & submit to client",
    position: "bottom-right",
    icon: "📊"
  },
  {
    id: 4,
    title: "Client Interview",
    description: "Candidates Telephonic / Physical Interview, AEMS to receive interview results",
    detail: "",
    position: "bottom-left",
    icon: "💼"
  },
  {
    id: 5,
    title: "Offer Letter",
    description: "Client to issue offer, Candidate acceptance",
    detail: "Agree on the joining date withthe candidate",
    position: "left",
    icon: "📝"
  },
  {
    id: 6,
    title: "Candidate On-Boarding",
    description: "Support Client on visas Onboarding support",
    detail: "Report to work confirmation",
    position: "top-left",
    icon: "📈"
  }
];

const RecruitmentCycle = () => {
  return (
    <div className="w-full relative">
      {/* Continue gradient from Services section */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 139, 0.6) 0%, rgba(0, 0, 80, 0.4) 50%, transparent 100%)"
        }}
      />
      
      <div className="relative z-10 px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl lg:text-5xl font-thin text-white mb-4">
              Executive Search –<br />Recruitment Cycle
            </h2>
          </motion.div>

          {/* Recruitment Cycle Diagram */}
          <div className="relative flex items-center justify-center min-h-[800px]">
            {/* Center Logo */}
            <motion.div
              className="absolute z-20 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/80 to-blue-800/80 flex items-center justify-center shadow-xl border-2 border-blue-400/40">
                <Image
                  src="/logo.png"
                  alt="Flux Bridge Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Connection Lines */}
            <svg
              className="absolute inset-0 w-full h-full z-10"
              viewBox="0 0 800 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Central connecting lines */}
              <g stroke="rgba(120, 180, 255, 0.4)" strokeWidth="2" strokeDasharray="5,5">
                {/* Top Right */}
                <line x1="400" y1="400" x2="580" y2="220" />
                {/* Right */}
                <line x1="400" y1="400" x2="580" y2="400" />
                {/* Bottom Right */}
                <line x1="400" y1="400" x2="580" y2="580" />
                {/* Bottom Left */}
                <line x1="400" y1="400" x2="220" y2="580" />
                {/* Left */}
                <line x1="400" y1="400" x2="220" y2="400" />
                {/* Top Left */}
                <line x1="400" y1="400" x2="220" y2="220" />
              </g>
            </svg>

            {/* Cycle Steps */}
            {cycleSteps.map((step, index) => {
              const positions = {
                "top-right": "top-4 right-4 lg:top-8 lg:right-8",
                "right": "right-4 top-1/2 -translate-y-1/2 lg:right-8",
                "bottom-right": "bottom-4 right-4 lg:bottom-8 lg:right-8",
                "bottom-left": "bottom-4 left-4 lg:bottom-8 lg:left-8",
                "left": "left-4 top-1/2 -translate-y-1/2 lg:left-8",
                "top-left": "top-4 left-4 lg:top-8 lg:left-8"
              };

              return (
                <motion.div
                  key={step.id}
                  className={`absolute ${positions[step.position]} w-64 lg:w-72`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2 + 0.3,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                >
                  {/* Step Card */}
                  <div className="relative group">
                    {/* Icon Circle */}
                    <div className="absolute -top-4 -left-4 z-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center border-2 border-blue-400/50 shadow-lg">
                        <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            {step.id === 1 && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>}
                            {step.id === 2 && <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2c0 .88-.59 1.64-1.41 1.86C18.85 6.58 19 7.27 19 8v3l-3 4v2h-2v-2l-3-4V8c0-.73.15-1.42.41-2.14C10.59 5.64 10 4.88 10 4c0-1.11.89-2 2-2s2 .89 2 2z"/>}
                            {step.id === 3 && <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>}
                            {step.id === 4 && <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V8c0-1.11.89-2 2-2h16z"/>}
                            {step.id === 5 && <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>}
                            {step.id === 6 && <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>}
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-400/40">
                      <h3 className="text-white font-semibold text-lg mb-3 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-blue-100 text-sm mb-2 leading-relaxed">
                        {step.description}
                      </p>
                      {step.detail && (
                        <p className="text-blue-200 text-sm font-medium">
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentCycle;
