"use client";
import { motion } from "motion/react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="w-full relative py-8 sm:py-10 md:py-12 lg:py-10"
    > 
    <img
      className="absolute rotate-180 top-0 left-0 w-screen opacity-80 sm:opacity-100"
      alt="Group"
      src="/Group.png"
    />

      <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16 lg:py-0 h-full relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-20 ">
          {/* Left Content */}
          <div className="z-10 space-y-8">
            <motion.h2
              className="text-5xl lg:text-6xl font-thin text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              About Flux Bridge
            </motion.h2>

            <motion.div
              className="space-y-6 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-lg leading-relaxed">
                Founded in 2017 and headquartered in Riyadh, KSA, Flux Bridge is a global talent 
                solutions firm connecting exceptional talent with opportunity. With 6 global offices and 
                a 30+ member core team, we've served 100+ clients across 16 industries and 14 
                countries, placing 100+ C-level and management roles. Our track record includes 50+ 
                strategic assignments, 600+ trainers, 100+ leaders coached, and 1M+ assessments 
                delivered for 140 roles with 85% accuracy. With a 24-day average recruitment lead time, 
                we combine strategic planning and speed to deliver lasting organizational impact.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <h3 className="text-blue-400 font-semibold text-lg mb-2 uppercase tracking-tight">
                  OUR VISION & MISSION
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>By 2030, we aim to lead in Human Capital Advisory with global solutions and local talent.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Redefining Human Resources as a strategic catalyst for organisational potential and success.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-blue-400 font-semibold text-lg mb-2 uppercase tracking-tight">
                  OUR VALUES
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span><strong>Customer Focus</strong> Dedicated to client success</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span><strong>Integrity</strong> Upholding honesty and ethics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span><strong>Excellence</strong> Striving for superior quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span><strong>Objectivity</strong> Ensuring fair, balanced judgment</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="z-10 flex mt-8 lg:mt-0 min-h-[400px] md:min-h-[500px] "
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full h-full">
              <div className="absolute top-[calc(50%-12px)] left-[calc(50%-12px)] md:top-[calc(50%-25px)] md:left-[calc(50%-20px)] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[360px] md:w-[380px] md:h-[450px] xl:w-[487px] xl:h-[574px] rounded-3xl md:rounded-[50px] border border-solid border-[#3764ff]" />
                <img
                  src="https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-2.svg"
                  alt="Professional woman working"
                  width={400}
                  height={500}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] md:w-[380px] md:h-[480px] xl:w-[490px] xl:h-[585px] rounded-lg"
                  priority
                />
             
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About