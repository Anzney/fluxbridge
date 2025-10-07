'use client';
import React, { useEffect, useRef, useState } from "react";

const transformationAreas = [
  "Business / Strategy Consulting",
  "Technology & Digital",
  "Strategic Alliances & Startups",
];

const businessConsultingServices = [
  {
    title: "Organisational Transformation",
    description: "People, processes, and technology integration",
  },
  {
    title: "Strategy Development",
    description: "Designing and executing strategies",
  },
  {
    title: "Market & Financial Analysis",
    description: "Feasibility studies and financial modelling",
  },
  {
    title: "Business Restructuring",
    description: "Turnaround, expansion, and profitability improvement",
  },
];

const StrategyBusiness = () => {
  const [selectedArea, setSelectedArea] =useState(
    transformationAreas[0]
  );

  // Refs to enable auto-centering of active tab on small screens
  const tabsContainerRef = useRef(null);
  const mainPanelRef = useRef(null);
  const tabRefs = useRef({});

  useEffect(() => {
    // Only auto-center on small screens
    if (typeof window === 'undefined' || window.innerWidth >= 640) return;
    const container = tabsContainerRef.current;
    const panel = mainPanelRef.current;
    const activeEl = tabRefs.current[selectedArea];
    if (!container || !panel || !activeEl) return;

    const centerSelected = () => {
      const panelRect = panel.getBoundingClientRect();
      const panelStyle = window.getComputedStyle(panel);
      const pl = parseFloat(panelStyle.paddingLeft) || 0;
      const pr = parseFloat(panelStyle.paddingRight) || 0;
      const panelCenterX = panelRect.left + pl + (panelRect.width - pl - pr) / 2;

      const activeRect = activeEl.getBoundingClientRect();
      const activeCenterX = activeRect.left + activeRect.width / 2;

      const deltaX = activeCenterX - panelCenterX;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const target = Math.min(maxScroll, Math.max(0, container.scrollLeft + deltaX));
      container.scrollTo({ left: target, behavior: 'smooth' });
    };

    // Defer to next paint and retry after small delay for layout shifts
    const rafId = requestAnimationFrame(() => {
      centerSelected();
      setTimeout(() => {
        requestAnimationFrame(centerSelected);
      }, 150);
    });

    return () => cancelAnimationFrame(rafId);
  }, [selectedArea]);

  const contentByArea = {
    "Business / Strategy Consulting": {
      titleLines: ["Business / Strategy", "Consulting"],
      services: businessConsultingServices,
      image:
        "/Rectangle82.png",
      imageAlt: "Workflow Strategy",
    },
    "Technology & Digital": {
      titleLines: ["Technology &", "Digital"],
      services: [
        {
          title: "Digital Transformation",
          description: "Assessment, strategy roadmap and implementation",
        },
        {
          title: "Data Analytics",
          description: "Leveraging AI and machine learning for insights",
        },
        {
          title: "Process Automation (RPACoE)",
          description: "Driving efficiency though automation excellence",
        },
        {
          title: "Technology & Devlopment",
          description: "IT Solutions , PMO , and mobile/web applications",
        },
      ],
      image:
        "/Technology.png",
      imageAlt: "Technology & Digital",
    },
    "Strategic Alliances & Startups": {
      titleLines: ["Strategic Alliances &", "Startups"],
      services: [
        {
          title: "Joint Ventures & Alliances",
          description: "Partnership with businesses and family offices",
        },
        {
          title: "Project Development",
          description: "From concept creation to final execution",
        },
        {
          title: "Start-up Support",
          description: "Advisory, strategy, and growth enablement",
        },
        {
          title: "Sustainable Growth",
          description: "Long-term scaling and value creation initiatives",
        },
      ],
      image:
        "/Teamco.jpg",
      imageAlt: "Alliances & Startups",
    },
  };

  const active = contentByArea[selectedArea];
  const topRounded =
    selectedArea === "Business / Strategy Consulting"
      ? "rounded-tr-3xl"
      : selectedArea === "Technology & Digital"
      ? "rounded-tl-3xl rounded-tr-3xl"
      : "rounded-tl-3xl";

  return (
    <div className="mt-50 mb-15 z-5 flex flex-col items-center ">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl mb-6 md:mb-8 lg:mb-10 bg-gradient-to-r from-[rgb(55,100,255,1)] to-white bg-clip-text font-normal text-transparent text-center pb-1">
        Strategy & Business
        <br />
        Transformation
      </h1>

      {/* Tabs */}
      <div ref={tabsContainerRef} className="flex justify-start sm:justify-between items-center sm:w-[350px] md:w-[700px] lg:w-[927px] xl:w-[1050px] gap-2 md:gap-3 mr-0 mb-2 md:mb-4 sm:mb-0 lg:mb-0 overflow-x-auto relative scroll-px-8 flex-nowrap snap-x snap-mandatory ">
        {transformationAreas.map((area) => {
          const isActive = selectedArea === area;
          return (
            <button
              key={area}
              type="button"
              ref={(el) => { if (el) tabRefs.current[area] = el; }}
              onClick={() => setSelectedArea(area)}
              className={`[font-family:'Aeonik_TRIAL-Regular',Helvetica] flex-none snap-center sm:text-sm md:text-base lg:text-lg leading-normal whitespace-nowrap transition-colors rounded-2xl py-3 md:py-4 px-4 md:px-6 lg:px-10 cursor-pointer ${
                isActive
                  ? "text-[#4f76ff] sm:h-[40px] md:h-[64px] lg:h-[70px] rounded-b-none rounded-t-3xl border-0 bg-white/10 backdrop-blur-lg scrollbar-hide"
                  : "text-white/90  hover:text-white"
              }`}
            >
              {area}
            </button>
          );
        })}
      </div>

      {/* Main Content Panel - only selected tab content */}
      <div ref={mainPanelRef} className={` sm:w-[300px] md:w-[700px] lg:w-[927px] xl:w-[1050px] rounded-b-3xl ${topRounded} bg-white/10 backdrop-blur-lg p-1 md:p-6 lg:p-4 xl:p-3 flex flex-col lg:flex-row items-stretch lg:items-start`}>
        {/* Left: Text */}
        <div className=" relative flex-1 flex flex-col  sm:gap-4 md:gap-4 lg:gap-3  xl:gap-3 px-3 py-2 md:p-6 lg:p-10">
          <div className=" font-bold text-white tracking-normal sm:tracking-normal leading-normal sm:leading-normal sm:text-2xl md:text-2xl lg:text-2xl xl:text-[40px]  md:leading-[40px] lg:leading-[46px]">
            {active.titleLines}
          </div>
          <div className="flex flex-col items-start md:gap-2 lg:gap-2 xl:gap-2 text-white ml-0 md:ml-0 p-0 md:p-0
">
            {active.services.map((service, index) => (
              <div key={index} className="flex flex-col items-start gap-1 w-full">
                <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#4f76ff] tracking-normal sm:tracking-normal sm:text-xl md:text-lg lg:text-xl xl:text-xl leading-normal">
                  {service.title}
                </div>
                <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] text-sm md:text-base tracking-normal sm:tracking-normal leading-relaxed sm:leading-relaxed">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
       <div>
         <img
          className="w-[250px] h-[200px] md:w-[350px] lg:w-[460px] xl:w-[520px] md:h-[280px] lg:h-[340px] xl:h-[320px] rounded-[18px] object-cover mt-6  md:mt-10 lg:mt-16 m-8 lg:mr-10"
          alt={active.imageAlt}
          src={active.image}
        />
       </div>
      </div>
    </div>
  );
};

export default StrategyBusiness;
