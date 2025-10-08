import React from "react";

const learningServices = [
  {
    icon: "/assessments.png",
    title: "ASSESSMENTS & IDPS",
  },
  {
    icon: "/leadership.png",
    title: "LEADERSHIP DEVELOPMENT",
  },
  {
    icon: "/esg.png",
    title: "ESG - COMPLIANCE & GOVERNANCE",
  },
  {
    icon: "/culture.png",
    title: "CULTURE MANAGEMENT",
  },
  {
    icon: "/employee.png",
    title: "EMPLOYEE EXPERIENCE",
  },
  {
    icon: "/trainer.png",
    title: "TRAIN THE– TRAINER",
  },
  {
    icon: "/change.png",
    title: "CHANGE ENGAGEMENT",
  },
  {
    icon: "/behavioral.png",
    title: "BEHAVIORAL / ESSENTIALS SKILLS",
  },
  {
    icon: "/sales.png",
    title: "SALES & CLIENT SERVICE",
  },
  {
    icon: "/technical.png",
    title: "TECHNICAL & FUNCTIONAL COMPETENCIES",
  },
  {
    icon: "/diversity.png",
    title: "DIVERSITY, EQUITY & INCLUSION (DEI)",
  },
  {
    icon: "/executive.png",
    title: "EXECUTIVE COACHING",
  },
];

const LearningAndDevelopment = () => {
  return (
    <div className="mt-10 md:mt-20 lg:mt-50 z-10 flex flex-col items-center gap-8 md:gap-12 lg:gap-20 px-4 md:px-8 lg:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-[rgb(55,100,255,1)] to-white bg-clip-text font-normal text-transparent text-center pb-1 max-w-4xl">
        Learning & Development Solutions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full max-w-7xl  transition-all duration-200 ">
        {learningServices.map((service, index) => (
          <div
            key={index}
            className="group relative w-full aspect-[400/211] max-w-[400px] mx-auto bg-[#1a1a1a] border border-gray-700 hover:border-[#3764ff] cursor-pointer rounded-4xl transition-all duration-200 hover:rounded-2xl ring-0 group-hover:ring-2 ring-[#3855bc]"
          >
            <div className="absolute inset-0 rounded-lg bg-[#3764ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-[79px] md:h-[79px] rounded-full flex items-center justify-center transition-colors duration-200 ]">
              <img
                className="size-10 md:size-18 mt-5"
                alt="Mask group"
                src={service.icon}
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 [font-family:'DM_Sans',Helvetica] font-bold text-white text-xs sm:text-sm md:text-[15px] text-center tracking-[0] leading-tight md:leading-[21.8px]">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningAndDevelopment;
