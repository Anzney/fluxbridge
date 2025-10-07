'use client';
import React, { useState } from "react";

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
      <h1 className="text-6xl mb-10  bg-gradient-to-r from-[rgb(55,100,255,1)] to-white bg-clip-text font-normal text-transparent text-center pb-1">
        Strategy & Business
        <br />
        Transformation
      </h1>

      {/* Tabs */}
      <div className=" flex justify-between items-center sm:w-[700px] xl:w-[1020px] lg:w-[927px] mr-0  lg:mb-0 overflow-x-auto relative ">
        {transformationAreas.map((area) => {
          const isActive = selectedArea === area;
          return (
            <button
              key={area}
              type="button"
              onClick={() => setSelectedArea(area)}
              className={`[font-family:'Aeonik_TRIAL-Regular',Helvetica] text-lg leading-normal whitespace-nowrap transition-colors rounded-2xl  py-4 lg:px-10  cursor-pointer ${
                isActive
                  ? "text-[#4f76ff] h-[70px]  rounded-b-none rounded-t-3xl border-0  bg-white/10 backdrop-blur-lg scrollbar-hide"
                  : "text-white/90  hover:text-white"
              }`}
            >
              {area}
            </button>
          );
        })}
      </div>

      {/* Main Content Panel - only selected tab content */}
      <div className={`xl:w-[1020px] lg:w-[927px] sm:w-[700px]  rounded-b-3xl ${topRounded}  bg-white/10 backdrop-blur-lg p-5 flex items-start c`}>
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start md:gap-4 lg:gap-4  relative p-10">
          <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-[46px] leading-[46px]">
            {active.titleLines[0]}
            <br />
            {active.titleLines[1]}
          </div>
          <div className="flex flex-col items-start md:gap-4 lg:gap-6 text-white">
            {active.services.map((service, index) => (
              <div key={index} className="flex flex-col items-start gap-1 w-full">
                <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#4f76ff] text-xl leading-normal">
                  {service.title}
                </div>
                <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] text-base leading-normal">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <img
          className="w-[520px] h-[360px] sm:w-[320]  rounded-[18px] object-cover mt-16 mr-10"
          alt={active.imageAlt}
          src={active.image}
        />
      </div>
    </div>
  );
};

export default StrategyBusiness;
