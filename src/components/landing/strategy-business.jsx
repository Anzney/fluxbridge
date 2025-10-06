import React from "react";

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
  return (
    <div className="my-10 md:my-50 z-10 flex flex-col items-center gap-6 md:gap-10">
      {/* Section Title */}
      <h1 className="text-3xl md:text-6xl bg-gradient-to-r from-[rgb(55,100,255,1)] to-white bg-clip-text font-normal text-transparent text-center pb-1">
        Strategy & Business
        <br />
        Transformation
      </h1>
      
      {/* Main Content Panel */}
      <div
        className="relative w-full max-w-[360px] md:max-w-none md:w-[1240px] h-auto md:h-[600px] rounded-[30px] md:rounded-[50px] p-6 md:p-10 pt-20 md:pt-10 flex flex-col md:flex-row items-start gap-6 md:gap-10 mx-auto overflow-hidden md:overflow-visible"
      >
        <img className="absolute -top-4 -left-2 hidden md:pl-8 md:block md:w-[750px] md:h-[510px] lg:w-[1240px] lg:h-[600px] z-0 pointer-events-none select-none" alt="Union background" src="/Union.png" />
        <img className="absolute inset-0 w-full h-full object-contain object-top md:hidden z-0 pointer-events-none select-none" alt="Union mobile background" src="/UnionM.png" />
        {/* Transformation Areas (tabs) */}
        <div className="absolute top-3 md:top-2  right-3 md:text-sm  lg:left-15 md:left-10 flex items-center justify-center md:justify-start md:gap-20 lg:gap-50 text-white/90 text-xs z-10">
          {transformationAreas.map((area, index) => (
            <div
              key={index}
              className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal md:text-sm lg:text-lg leading-normal whitespace-nowrap hover:text-white transition-colors"
            >
              {area}
            </div>
          ))}
        </div>

        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start gap-6 md:gap-3 relative mt-2 md:mt-16 z-10">
          <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white md:text-xl lg:text-2xl leading-7 md:text-[46px] md:leading-[46px]">
            Business / Strategy
            <br />
            Consulting
          </div>
          <div className="flex flex-col items-start gap-6 md:gap-2 text-white/90">
            {businessConsultingServices.map((service, index) => (
              <div key={index} className="flex flex-col items-start gap-1 w-full ">
                <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#4f76ff] md:text-base lg:text-2xl leading-normal">
                  {service.title}
                </div>
                <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] text-base md:text-sm lg:text-xl leading-normal">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <img
          className="w-full h-auto md:w-[300px] md:h-[240px] lg:w-[560px] lg:h-[360px] rounded-[18px] object-cover md:mb-6 md:mt-15 mr-0 md:mr-120 lg:mr-4 mt-0  z-10 shadow-lg"
          alt="Workflow Strategy"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-82.svg"
        />
      </div>
    </div>
  );
};

export default StrategyBusiness;
