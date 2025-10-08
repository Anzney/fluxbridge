import React from 'react'

const learningServices = [
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-8.png",
    title: "ASSESSMENTS & IDPS",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-9.png",
    title: "LEADERSHIP DEVELOPMENT",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-10.png",
    title: "ESG - COMPLIANCE & GOVERNANCE",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-11.png",
    title: "CULTURE MANAGEMENT",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-12.png",
    title: "EMPLOYEE EXPERIENCE",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-13.png",
    title: "TRAIN THE– TRAINER",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-14.png",
    title: "CHANGE ENGAGEMENT",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-15.png",
    title: "BEHAVIORAL / ESSENTIALS SKILLS",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-16.png",
    title: "SALES & CLIENT SERVICE",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-17.png",
    title: "TECHNICAL & FUNCTIONAL COMPETENCIES",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-18.png",
    title: "DIVERSITY, EQUITY & INCLUSION (DEI)",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-19.png",
    title: "EXECUTIVE COACHING",
  },
];
 
const LearningAndDevelopment = () => {
  return (
    <div className='mt-10 md:mt-20 lg:mt-50 z-10 flex flex-col items-center gap-8 md:gap-12 lg:gap-20 px-4 md:px-8 lg:px-0'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-[rgb(55,100,255,1)] to-white bg-clip-text font-normal text-transparent text-center pb-1 max-w-4xl'>
        Learning & Development Solutions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full max-w-7xl  transition-all duration-200 ">
        {learningServices.map((service, index) => (
          <div key={index} className="group relative w-full aspect-[400/211] max-w-[400px] mx-auto bg-[#1a1a1a] border border-gray-700 hover:border-[#3764ff] cursor-pointer rounded-4xl transition-all duration-200 hover:rounded-2xl ring-0 group-hover:ring-2 ring-[#3855bc]">
            {/* <img
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              alt="Rectangle"
              src={`https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-${66 + index}.svg`}
            /> */}
            <div className="absolute inset-0 rounded-lg bg-[#3764ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div
              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-[79px] md:h-[79px] rounded-full flex items-center justify-center transition-colors duration-200 ]"
            >
              <img className="size-10 md:size-18 mt-5" alt="Mask group" src={service.icon} />
            </div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 [font-family:'DM_Sans',Helvetica] font-bold text-white text-xs sm:text-sm md:text-[15px] text-center tracking-[0] leading-tight md:leading-[21.8px]">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LearningAndDevelopment