"use client";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const heading = "Empowering Organizations Through People, Strategy & Innovation"

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full relative bg-transparent">
      <div className="flex items-center flex-col justify-center min-h-screen h-screen px-4 sm:px-6 py-24 sm:py-0">
        <h1 className="text-[26px] leading-[1.25] min-[390px]:text-[28px] min-[414px]:text-[32px] sm:text-4xl md:text-5xl lg:text-[65px] max-w-[320px] min-[390px]:max-w-[360px] min-[414px]:max-w-[390px] sm:max-w-[600px] md:max-w-[780px] lg:max-w-[980px] z-10 text-center md:leading-[1.20] font-thin text-white">
          {Array.from(heading).map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              className={char === " " ? "inline-block whitespace-pre" : "inline-block"}
              initial={{ opacity: 0, y: isMobile ? 12 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ 
                duration: isMobile ? 0.3 : 0.4, 
                delay: index * (isMobile ? 0.025 : 0.045), 
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="text-white/90 z-10 mt-5 sm:mt-6 md:mt-8 max-w-[320px] min-[390px]:max-w-[360px] min-[414px]:max-w-[390px] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl text-center text-[13px] leading-relaxed min-[390px]:text-[13.5px] min-[414px]:text-[14px] sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ 
            duration: 0.8, 
            delay: isMobile ? 2 : 3, 
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          Flux Bridge is a global Human Capital and Business Advisory firm headquartered in Riyadh, helping organizations redefine success through executive recruitment, leadership development, HR strategy, and digital transformation.
        </motion.p>
        <motion.div
          className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 z-10 w-full max-w-[320px] min-[390px]:max-w-[360px] min-[414px]:max-w-[390px] sm:max-w-none sm:w-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ 
            duration: 0.8, 
            delay: isMobile ? 2.2 : 3, 
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          <Button 
            variant="pillBlue" 
            size="xl" 
            className="px-6 sm:px-8 w-full sm:w-auto text-[14px] sm:text-base h-12 sm:h-auto"
          >
            Explore Our Services
          </Button>
          <Button 
            variant="pillDark" 
            size="xl" 
            className="px-6 sm:px-8 w-full sm:w-auto text-[14px] sm:text-base h-12 sm:h-auto"
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </div>

  );
}

export default HeroSection
