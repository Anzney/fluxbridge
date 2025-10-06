import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const navigationItems = [
  "About Us",
  "Services",
  "Executive Search",
  "Learning & Development",
  "Strategy & Business Transform",
];

const sectorCards = [
  {
    image: "https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-61.svg",
    title: "Banking &\nReal Estate",
  },
  {
    image: "https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-62.svg",
    title: "Technology &\nTelecom",
  },
  {
    image: "https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-63.svg",
    title: "Defence &\nManufacturing",
  },
  {
    image: "https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-64.svg",
    title: "Construction &\nInfrastructure",
  },
  {
    image: "https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-64-1.svg",
    title: "Retail &\nHospitality",
  },
];

const keyPositions = [
  "Top Executive Leadership",
  "Business & Investment Leadership",
  "Corporate Functions & Governance",
  "Data, Technology & Risk Leadership",
  "Specialised Consultants & Analysts",
];

const humanCapitalServices = [
  {
    number: "01",
    title: "Executive Search/ Recruitment",
    isActive: true,
  },
  {
    number: "02",
    title: "Structure & Governance",
  },
  {
    number: "03",
    title: "Culture Development",
  },
  {
    number: "04",
    title: "HR Strategy Services",
  },
  {
    number: "05",
    title: "Job Evaluation & Grading Structure",
  },
  {
    number: "06",
    title: "Job Evaluation & Grading Structure",
  },
  {
    number: "07",
    title: "Job Evaluation & Grading Structure",
  },
  {
    number: "08",
    title: "Job Evaluation & Grading Structure",
  },
  {
    number: "09",
    title: "Job Evaluation & Grading Structure",
  },
  {
    number: "10",
    title: "Job Evaluation & Grading Structure",
  },
];

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

const deliveryMethods = [
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-1.png",
    title: "Live In Person\nTraining",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-2.png",
    title: "Live Virtual\nTraining",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-3.png",
    title: "Self Paced E-\nlearning (LMS/LXP)",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-4.png",
    title: "Gamification",
  },
  {
    title: "Simulations & AI\nbased learning",
  },
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

const transformationAreas = [
  "Business / Strategy Consulting",
  "Technology & Digital",
  "Strategic Alliances & Startups",
];

const globalPartners = [
  "https://c.animaapp.com/mfvdxb8gInTGFO/img/group-13.png",
  "https://c.animaapp.com/mfvdxb8gInTGFO/img/group-14.png",
  "https://c.animaapp.com/mfvdxb8gInTGFO/img/group-15.png",
  "https://c.animaapp.com/mfvdxb8gInTGFO/img/group-16.png",
  "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-6.png",
  "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-7.png",
];

const partnerCategories = [
  "Human Resources",
  "Business Consulting",
  "IT Consulting & Services",
  "Learning & Development",
];

const quickLinks = [
  "About Us",
  "Services",
  "Industries",
  "Global Presence",
  "Client & Partners",
];

const officeLocations = [
  {
    title: "UAE Address",
    address:
      "IFZA Property, Freezone Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE.",
  },
  {
    title: "Riyadh - Kingdom of Saudi Arabia (HQ)",
    address:
      "Flux Bridge Co 7783, Ibn Katheer St- King Abdulaziz District, Riyadh 12233-4264, Kingdom of Saudi Arabia",
  },
  {
    title: "India",
    address:
      "BLDG No: 2, A3 Station, Unit No: 118, opposite RUPA SOLITAIRE, Millenium Business Park, Sector 1, Mahape, Navi Mumbai, Maharashtra 400701",
  },
];

export const HomePage = () => {
  return (
    <div
      className="bg-black overflow-hidden w-full h-[13948px] relative"
      data-model-id="139:228"
    >
      {/* Background blur effects */}
      <div className="absolute top-[13157px] left-[calc(50.00%_+_258px)] w-[405px] h-[685px] bg-[#0017ffbf] rounded-[202.31px/342.31px] -rotate-90 blur-[397px]" />

      <img
        className="absolute h-[6.91%] top-[90.20%] left-0 w-[1440px]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group.png"
      />

      <div className="absolute left-[calc(50.00%_-_720px)] bottom-px w-[1440px] h-[531px] bg-[#ffffff1a] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]" />

      <img
        className="absolute h-[6.91%] top-[55.06%] left-0 w-[1440px]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-1.png"
      />

      <img
        className="absolute h-[6.91%] top-[69.22%] left-0 w-[1440px]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-2.png"
      />

      <img
        className="absolute h-[6.91%] top-[69.22%] right-[-5px] w-[1440px]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-3.png"
      />

      {/* Additional blur effects */}
      <div className="absolute top-[7700px] left-[calc(50.00%_-_896px)] w-[1792px] h-[898px] flex gap-[982.8px]">
        <div className="w-[404.62px] h-[898.34px] bg-[#0017ff] rounded-[202.31px/449.17px] blur-[392px]" />
        <div className="w-[404.62px] h-[898.34px] bg-[#0017ff] rounded-[202.31px/449.17px] blur-[392px]" />
      </div>

      <div className="absolute top-[9631px] left-[calc(50.00%_-_896px)] w-[1792px] h-[898px] flex gap-[982.8px]">
        <div className="w-[404.62px] h-[898.34px] bg-[#0017ff] rounded-[202.31px/449.17px] blur-[392px]" />
        <div className="w-[404.62px] h-[898.34px] bg-[#0017ff] rounded-[202.31px/449.17px] blur-[392px]" />
      </div>

      <img
        className="absolute top-[8765px] left-[100px] w-[1240px] h-[598px]"
        alt="Union"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/union.svg"
      />

      <img
        className="absolute top-[5829px] left-0 w-[1440px] h-[952px]"
        alt="Mask group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group.png"
      />

      {/* Sectors Section */}
      <div className="absolute top-[6089px] left-[100px] w-[2090px] h-[373px]">
        {sectorCards.map((sector, index) => (
          <div
            key={index}
            className={`absolute top-0 ${index === 0 ? "left-0" : index === 1 ? "left-[420px]" : index === 2 ? "left-[840px]" : index === 3 ? "left-[1260px]" : "left-[1680px]"} w-[400px] h-[373px]`}
          >
            <img
              className="absolute top-0 left-0 w-[400px] h-[373px] object-cover"
              alt="Rectangle"
              src={sector.image}
            />
            <div className="absolute top-0 left-0 w-[400px] h-[373px] rounded-[50px] border border-solid border-black bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
            <div className="absolute top-[284px] left-[118px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-pre-line">
              {sector.title}
            </div>
          </div>
        ))}
      </div>

      {/* More blur effects */}
      <div className="absolute top-[3992px] left-[calc(50.00%_-_896px)] w-[1792px] h-[898px] flex gap-[982.8px]">
        <div className="w-[404.62px] h-[898.34px] bg-[#0017ff] rounded-[202.31px/449.17px] blur-[392px]" />
        <div className="w-[404.62px] h-[898.34px] bg-[#0017ff] rounded-[202.31px/449.17px] blur-[392px]" />
      </div>

      <div className="absolute top-[5275px] left-[calc(50.00%_-_202px)] w-[405px] h-[685px] bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px]" />
      <div className="absolute top-[11694px] left-[calc(50.00%_-_202px)] w-[405px] h-[685px] bg-[#0017ffbf] rounded-[202.31px/342.31px] -rotate-90 blur-[397px]" />

      {/* Sectors Title */}
      <div className="absolute top-[5980px] left-[calc(50.00%_-_96px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[56px] tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        Sectors
      </div>

      {/* Hero Background */}
      <img
        className="absolute top-0 left-0 w-[1440px] h-[1452px]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-7.png"
      />

      {/* Hero blur effects */}
      <div className="top-[161px] left-[918px] w-[448px] h-[245px] opacity-70 absolute blur-[240.51px]">
        <div className="absolute top-0 left-0 w-[306px] h-[245px] bg-[#2e4eb3] rounded-[152.84px/122.7px]" />
        <div className="absolute top-px left-[142px] w-[306px] h-[245px] bg-[#90abff] rounded-[152.84px/122.7px]" />
      </div>

      <div className="top-[967px] left-[-262px] w-[1882px] h-[272px] absolute blur-[240.51px]">
        <div className="absolute top-0 left-0 w-[1285px] h-[272px] bg-[#2e4eb3] rounded-[642.34px/135.87px]" />
        <div className="absolute top-px left-[598px] w-[1285px] h-[272px] bg-[#90abff] rounded-[642.34px/135.87px]" />
      </div>

      {/* Hero Title */}
      <div className="absolute top-[362px] left-[163px] w-[1115px] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Light',Helvetica] font-light text-transparent text-[65px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Empowering Organizations Through People, Strategy & Innovation
      </div>

      {/* Hero Description */}
      <div className="absolute top-[527px] left-[237px] w-[967px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Flux Bridge is a global Human Capital and Business Advisory firm
        headquartered in Riyadh, helping organizations redefine success through
        executive recruitment, leadership development, HR strategy, and digital
        transformation.
      </div>

      {/* Navigation */}
      <nav className="inline-flex items-start justify-center gap-[35px] absolute top-[65px] left-[calc(50.00%_-_393px)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className="relative w-fit mt-[-1.00px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer hover:text-[#3764ff] transition-colors"
          >
            {item}
          </div>
        ))}
      </nav>

      {/* Logo */}
      <img
        className="absolute top-[46px] left-[100px] w-14 h-14 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]"
        alt="Image"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/image-3.png"
      />

      {/* Hero CTAs */}
      <Button className="w-40 top-[607px] left-[758px] bg-[#ffffff0d] border-[none] backdrop-blur-[12.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12.5px)_brightness(100%)] h-14 absolute rounded-[50px] before:content-[''] before:absolute before:inset-0 before:p-[0.5px] before:rounded-[50px] before:[background:linear-gradient(102deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_46%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] hover:bg-[#ffffff1a] transition-colors h-auto">
        <div className="relative w-fit mt-[-11.50px] mb-[-10.50px] ml-[-4.00px] mr-[-4.00px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
          Get in Touch
        </div>
      </Button>

      <Button className="w-[142px] top-[46px] left-[1199px] bg-[#ffffff0d] border-[none] backdrop-blur-[12.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12.5px)_brightness(100%)] h-14 absolute rounded-[50px] before:content-[''] before:absolute before:inset-0 before:p-[0.5px] before:rounded-[50px] before:[background:linear-gradient(102deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_46%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] hover:bg-[#ffffff1a] transition-colors h-auto">
        <div className="relative w-fit mt-[-11.50px] mb-[-10.50px] ml-[-7.50px] mr-[-7.50px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
          Contact Us
        </div>
      </Button>

      <Button className="w-[219px] top-[607px] left-[523px] bg-[#3664fe] h-14 absolute rounded-[50px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] hover:bg-[#2952fe] transition-colors h-auto">
        <div className="relative w-fit mt-[-12.00px] mb-[-10.00px] ml-[-7.00px] mr-[-7.00px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
          Explore Our Services
        </div>
      </Button>

      {/* Background blur */}
      <div className="absolute top-[1024px] left-[-132px] w-[1704px] h-[1091px] bg-black blur-[112.5px]" />

      <img
        className="absolute h-[6.91%] top-[7.15%] left-0 w-[1440px]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-4.png"
      />

      <img
        className="absolute h-[6.91%] top-[28.47%] left-0 w-[1440px]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-5.png"
      />

      {/* More blur effects */}
      <div className="absolute top-[1469px] left-[1246px] w-[405px] h-[685px] bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px]" />
      <div className="absolute top-[898px] left-[-230px] w-[405px] h-[685px] bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px]" />

      {/* About Section */}
      <div className="flex flex-col w-[703px] items-start gap-[15px] absolute top-[1158px] left-[100px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[56px] tracking-[0] leading-[normal]">
          About Flux Bridge
        </div>
        <div className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-7">
          Founded in 2017 and headquartered in Riyadh, KSA, Flux Bridge is a
          global talent solutions firm connecting exceptional talent with
          opportunity. With 6 global offices and a 30+ member core team, we've
          served 100+ clients across 16 industries and 14 countries, placing
          100+ C-level and management roles. Our track record includes 50+
          strategic assignments, 600+ trainers, 100+ leaders coached, and 1M+
          assessments delivered for 140 roles with 85% accuracy. With a 24-day
          average recruitment lead time, we combine strategic planning and speed
          to deliver lasting organizational impact.
        </div>
      </div>

      {/* About Image */}
      <div className="absolute top-[1167px] left-[835px] w-[506px] h-[599px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="absolute top-0 left-0 w-[487px] h-[574px] rounded-[50px] border border-solid border-[#3764ff]" />
        <img
          className="absolute top-[15px] left-4 w-[490px] h-[585px]"
          alt="Rectangle"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-2.svg"
        />
      </div>

      {/* Human Capital Services Title */}
      <div className="absolute top-[1939px] left-[calc(50.00%_-_342px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[56px] tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Our Human Capital Services
      </div>

      {/* Executive Search Title */}
      <div className="absolute top-[4067px] left-[calc(50.00%_-_234px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[56px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Executive Search -<br />
        Recruitment Cycle
      </div>

      {/* Central blur effect */}
      <div className="absolute top-[calc(50.00%_-_2530px)] left-[calc(50.00%_-_75px)] w-[150px] h-[150px] bg-[#0017ff] rounded-[75px] blur-[50px]" />

      {/* Executive Search Process Diagrams */}
      <img
        className="absolute top-[4292px] left-[calc(50.00%_-_260px)] w-[252px] h-[203px]"
        alt="Vector"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector-3379.svg"
      />

      <img
        className="absolute top-[4533px] left-[calc(50.00%_-_260px)] w-[252px] h-[215px]"
        alt="Vector"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector-3380.svg"
      />

      <img
        className="absolute top-[4294px] left-[calc(50.00%_+_8px)] w-[252px] h-[200px]"
        alt="Vector"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector-3379-1.svg"
      />

      <img
        className="absolute top-[4523px] left-[calc(50.00%_+_8px)] w-[252px] h-[225px]"
        alt="Vector"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector-3380-1.svg"
      />

      {/* Executive Search Process Steps */}
      <div className="flex flex-col w-[250px] items-start gap-0.5 absolute top-[4234px] left-[115px]">
        <div className="font-medium text-2xl tracking-[-0.48px] leading-9 relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
          CandidateOn-Boarding
        </div>
        <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="font-normal text-lg tracking-[-0.36px] leading-[normal] relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
            Support Client on visas Onboarding support
          </div>
          <div className="text-white leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal text-lg tracking-[-0.36px]">
            Report to work confirmation
          </div>
        </div>
      </div>

      <img
        className="absolute top-[4268px] left-[408px] w-14 h-14"
        alt="Stat icon container"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-5.svg"
      />

      <div className="flex flex-col w-[250px] items-end gap-0.5 absolute top-[4443px] left-[115px]">
        <div className="font-medium text-2xl tracking-[-0.48px] leading-9 relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
          Offer Letter
        </div>
        <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="font-normal text-lg tracking-[-0.36px] leading-[normal] relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
            Client to issue offer, Candidate acceptance
          </div>
          <div className="text-white leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal text-lg tracking-[-0.36px]">
            Agree on the joining date withthe candidate
          </div>
        </div>
      </div>

      <img
        className="absolute top-[4497px] left-[408px] w-14 h-14"
        alt="Stat icon container"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container.svg"
      />

      <div className="flex flex-col w-60 items-start gap-0.5 absolute top-[4670px] left-[115px]">
        <div className="font-medium text-2xl tracking-[-0.48px] leading-9 relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
          Client Interview
        </div>
        <div className="text-[#cccccc] leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal text-lg tracking-[-0.36px]">
          Candidates Telephonic / Physical interview, AEMS to receive interview
          results
        </div>
      </div>

      <img
        className="absolute top-[4724px] left-[408px] w-14 h-14"
        alt="Stat icon container"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-4.svg"
      />

      <img
        className="absolute w-[16.70%] h-0 top-[32.40%] left-[51.38%] object-cover"
        alt="Vector"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector-3385.svg"
      />

      <div className="absolute top-[4463px] left-[670px] w-[100px] h-[100px] bg-white rounded-[50px] blur-[25px]" />

      <img
        className="absolute w-[16.70%] h-0 top-[32.40%] left-[31.92%] object-cover"
        alt="Vector"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector-3385.svg"
      />

      <div className="flex flex-col w-[271px] items-end gap-0.5 absolute top-[4235px] left-[1045px]">
        <div className="font-medium text-2xl tracking-[-0.48px] leading-9 relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
          UnderstandClientneeds
        </div>
        <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="mt-[-1.00px] text-[#cccccc] leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal text-lg tracking-[-0.36px]">
            Job profile & Organization dynamics Reward dynamics
          </div>
          <div className="text-[#cccccc] leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal text-lg tracking-[-0.36px]">
            Specific skill sets & Experience
          </div>
        </div>
      </div>

      <img
        className="absolute top-[4271px] left-[976px] w-14 h-14"
        alt="Stat icon container"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-2.svg"
      />

      <div className="absolute top-[4450px] left-[1045px] w-[242px] h-[125px] flex flex-col gap-0.5">
        <div className="w-60 h-9 [font-family:'Geist',Helvetica] font-medium text-white text-2xl tracking-[-0.48px] leading-9">
          SourcingCandidates
        </div>
        <div className="flex w-[210px] h-[87px] relative flex-col items-start gap-[3px]">
          <div className="mt-[-1.00px] text-[#cccccc] leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal text-lg tracking-[-0.36px]">
            Internal database
          </div>
          <div className="text-[#cccccc] leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal text-lg tracking-[-0.36px]">
            Website / Headhunting
          </div>
          <div className="text-[#cccccc] leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal text-lg tracking-[-0.36px]">
            Social media
          </div>
        </div>
      </div>

      <img
        className="absolute top-[4497px] left-[976px] w-14 h-14"
        alt="Stat icon container"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-1.svg"
      />

      <div className="flex flex-col w-[293px] items-start gap-2.5 absolute top-[4670px] left-[1045px]">
        <div className="font-medium text-2xl tracking-[-0.48px] leading-9 relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
          AEMSCandidateScreening
        </div>
        <div className="flex flex-col w-60 items-start gap-3.5 relative flex-[0_0_auto]">
          <div className="mt-[-1.00px] text-[#cccccc] leading-[normal] relative self-stretch [font-family:'Geist',Helvetica] font-normal text-lg tracking-[-0.36px]">
            Evaluate competencies & experience fit
          </div>
          <div className="text-[#cccccc] leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal text-lg tracking-[-0.36px]">
            Shortlist & submit to client
          </div>
        </div>
      </div>

      <img
        className="absolute top-[4726px] left-[976px] w-14 h-14"
        alt="Stat icon container"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-3.svg"
      />

      <Button className="flex w-20 items-center justify-center gap-4 px-6 py-3 absolute top-[4477px] left-[680px] rounded-[100px] border-[none] rotate-180 shadow-[0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(14,0,59,1)_0%,rgba(0,23,255,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[100px] before:[background:linear-gradient(180deg,rgba(0,23,255,1)_0%,rgba(14,0,59,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[linear-gradient(180deg,rgba(14,0,59,0.9)_0%,rgba(0,23,255,0.9)_100%)] transition-colors h-auto">
        <img
          className="relative w-[47.4px] h-[47.45px] ml-[-7.70px] mr-[-7.70px] -rotate-180"
          alt="Image"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/image-5.png"
        />
      </Button>

      {/* Key Positions Section */}
      <Card className="absolute top-[4993px] left-[calc(50.00%_-_675px)] w-[1350px] h-[797px] bg-[#ffffff0d] rounded-[50px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] border-none">
        <CardContent className="p-0">
          <div className="absolute top-[51px] left-[calc(50.00%_-_620px)] w-[753px] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[56px] tracking-[0] leading-[normal]">
            Key Positions Hired For
            <br />
            Our Esteemed Clients
          </div>

          {/* Key Positions List */}
          <div className="absolute top-[245px] left-[100px] flex flex-col gap-[18px]">
            {keyPositions.map((position, index) => (
              <div
                key={index}
                className={`w-[610px] h-[83px] ${index === 0 ? "bg-[#3764ff] shadow-[0px_0px_2.05px_#3764ff,0px_0px_4.1px_#3764ff,0px_0px_14.35px_#3764ff,0px_0px_28.69px_#3764ff,0px_0px_49.19px_#3764ff]" : "border-[0.5px] border-solid border-white shadow-[0px_4px_52.1px_#00000008]"} rounded-[50px] flex items-center justify-center cursor-pointer hover:bg-[#3764ff] transition-colors`}
              >
                <div className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                  {position}
                </div>
              </div>
            ))}
          </div>

          {/* Key Positions Image */}
          <div className="absolute top-[194px] left-[771px] w-[569px] h-[497px] rounded-[50px] border border-solid border-[#3764ff]" />
          <img
            className="absolute top-[212px] left-[740px] w-[583px] h-[524px]"
            alt="Image"
            src="https://c.animaapp.com/mfvdxb8gInTGFO/img/image.svg"
          />

          <div className="absolute top-[641px] left-[740px] w-[300px] h-[94px]">
            <img
              className="absolute top-0 left-0 w-[298px] h-[94px]"
              alt="Rectangle"
              src="https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-51.svg"
            />
            <div className="absolute top-6 left-[calc(50.00%_-_26px)] w-[140px] [font-family:'DM_Sans',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
              Top Executive Leadership
            </div>
            <img
              className="absolute top-[23px] left-[35px] w-[54px] h-[54px]"
              alt="Icon"
              src="https://c.animaapp.com/mfvdxb8gInTGFO/img/icon.svg"
            />
          </div>

          <div className="absolute top-[296px] left-[787px] w-[322px] h-36">
            <div className="absolute top-0 left-[11px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[48px]">
              Chief Operating Officer (COO)
              <br />
              Deputy CFO CHRO
              <br />
              (Chief Human Resources Officer)
            </div>
            <div className="absolute top-[21px] left-0 w-[5px] h-[5px] bg-[#3764ff] rounded-[2.45px]" />
            <div className="absolute top-[70px] left-0 w-[5px] h-[5px] bg-[#3764ff] rounded-[2.45px]" />
            <div className="absolute top-[118px] left-0 w-[5px] h-[5px] bg-[#3764ff] rounded-[2.45px]" />
          </div>
        </CardContent>
      </Card>

      <div className="absolute top-[6050px] left-[1397px] w-[105px] h-[486px] bg-[#010101] blur-[47.5px]" />

      {/* Learning & Development Title */}
      <div className="absolute top-[6662px] left-[calc(50.00%_-_420px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[56px] tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Learning & Development Solutions
      </div>

      {/* Learning Services Grid */}
      <div className="absolute top-[6776px] left-[100px] grid grid-cols-3 gap-[20px]">
        {learningServices.map((service, index) => (
          <div key={index} className="relative w-[400px] h-[211px]">
            <img
              className="absolute top-0 left-0 w-[400px] h-[211px]"
              alt="Rectangle"
              src={`https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-${66 + index}.svg`}
            />
            <div
              className={`absolute top-[51px] left-[160px] w-[79px] h-[79px] ${index === 0 ? "bg-[#3764ff]" : ""} rounded-[39.54px] flex items-center justify-center`}
            >
              <img className="w-10 h-10" alt="Mask group" src={service.icon} />
            </div>
            <div className="absolute top-[165px] left-[57px] w-[286px] [font-family:'DM_Sans',Helvetica] font-bold text-white text-[15px] text-center tracking-[0] leading-[21.8px]">
              {service.title}
            </div>
          </div>
        ))}
      </div>

      {/* Omni-Channel Delivery Title */}
      <div className="absolute top-[7887px] left-[calc(50.00%_-_288px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[56px] text-center tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Omni-Channel Delivery
      </div>

      {/* Delivery Methods */}
      <div className="absolute top-[8066px] left-[100px] flex justify-between w-[1240px]">
        {deliveryMethods.map((method, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            {method.icon && (
              <img
                className="w-[76px] h-[76px]"
                alt="Mask group"
                src={method.icon}
              />
            )}
            <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-pre-line">
              {method.title}
            </div>
          </div>
        ))}
      </div>

      {/* Strategy & Business Transformation Title */}
      <div className="absolute top-[8596px] left-[calc(50.00%_-_252px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[56px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Strategy & Business
        <br />
        Transformation
      </div>

      {/* Transformation Areas */}
      <div className="absolute top-[8798px] left-[100px] flex justify-between w-[1240px]">
        {transformationAreas.map((area, index) => (
          <div
            key={index}
            className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal] whitespace-nowrap"
          >
            {area}
          </div>
        ))}
      </div>

      {/* Business Consulting Section */}
      <div className="flex flex-col w-[501px] items-start gap-[30px] absolute top-[8916px] left-[162px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-[46px] tracking-[0] leading-[46px]">
          Business / Strategy
          <br />
          Consulting
        </div>
        <div className="flex flex-col h-[257px] items-start justify-between relative self-stretch w-full">
          {businessConsultingServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-[3px] relative self-stretch w-full flex-[0_0_auto]"
            >
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#4f76ff] text-xl tracking-[0] leading-[normal]">
                {service.title}
              </div>
              <div className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        className="absolute top-[8891px] left-[727px] w-[574px] h-[428px]"
        alt="Rectangle"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-82.svg"
      />

      {/* Circular Design Elements */}
      <div className="absolute top-[calc(50.00%_+_2578px)] left-[calc(50.00%_-_601px)] w-[1202px] h-[1202px] bg-[#01091a03] rounded-[601px] border border-solid border-black rotate-90" />

      <img
        className="absolute top-[calc(50.00%_+_2578px)] left-[calc(50.00%_-_601px)] w-[1201px] h-[1201px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/ellipse-4146.svg"
      />

      <img
        className="absolute top-[calc(50.00%_+_2678px)] left-[calc(50.00%_-_501px)] w-[1001px] h-[1001px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/ellipse-4142.svg"
      />

      <div className="absolute top-[calc(50.00%_+_2678px)] left-[calc(50.00%_-_501px)] w-[1002px] h-[1002px] rounded-[501px] border border-solid border-black rotate-45 blur-[50px]" />

      <img
        className="absolute top-[calc(50.00%_+_2778px)] left-[calc(50.00%_-_401px)] w-[801px] h-[801px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/ellipse-4143.svg"
      />

      <img
        className="absolute top-[calc(50.00%_+_2675px)] left-[calc(50.00%_-_504px)] w-[1008px] h-[1008px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/ellipse-4144.svg"
      />

      {/* Executive Leadership Section */}
      <div className="flex flex-col w-[853px] items-center gap-[33px] absolute top-[9974px] left-[294px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
          <div className="relative w-[548.9px] mt-[-1.00px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(0,23,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-5xl text-center tracking-[-0.96px] leading-[normal]">
            Executive Leadership/ Team/ Advisor
          </div>
        </div>

        <img
          className="relative self-stretch w-full flex-[0_0_auto] mt-[-14.88px] mb-[-86.44px]"
          alt="Explore images"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/explore-images-container.svg"
        />

        <div className="flex flex-col w-[230px] items-center gap-[3px] relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-lg text-center tracking-[-0.36px] leading-[18px]">
            Khalid Abdallah Al-Damegh
          </div>
          <div className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-[#ffffffa6] text-xs leading-[18px] text-center tracking-[0]">
            Leadership Team
          </div>
        </div>
      </div>

      <img
        className="absolute top-[11059px] left-[calc(50.00%_-_720px)] w-[1440px] h-[252px]"
        alt="Frame"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/frame-45.svg"
      />

      <div className="absolute top-[10948px] left-[calc(50.00%_-_288px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[56px] text-center tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Omni-Channel Delivery
      </div>

      {/* Global Presence Section */}
      <Card className="absolute top-[11494px] left-[calc(50.00%_-_675px)] w-[1350px] h-[1261px] bg-[#ffffff0d] rounded-[50px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] border-none">
        <CardContent className="p-0">
          <div className="absolute top-[56px] left-[calc(50.00%_-_620px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[56px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Our Global Presence
          </div>

          <img
            className="absolute top-[175px] left-[calc(50.00%_-_610px)] w-[1220px] h-[804px]"
            alt="Group"
            src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-17.png"
          />

          {/* Location markers and labels */}
          <img
            className="absolute w-0 h-0 top-[87.19%] left-[64.61%]"
            alt="Vector"
            src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector.svg"
          />

          <div className="absolute top-[644px] left-[948px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-[13px]">
            Mumbai
            <br />
            India
          </div>

          <div className="absolute top-[594px] left-[706px] w-32 [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-[normal]">
            Riyadh, Kingdom of Saudia Arabia (HQ)
          </div>

          <div className="absolute top-[468px] left-[651px] w-[66px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-[normal]">
            Hounslow
            <br />
            UK UK
          </div>

          <div className="absolute top-[480px] left-[267px] w-14 [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-[normal]">
            Seattle USA
          </div>

          <div className="absolute top-[604px] left-[886px] w-[76px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal]">
            Dubai, UAE Oman
          </div>

          <img
            className="absolute top-[1033px] left-[1212px] w-[143px] h-[109px]"
            alt="Mask group"
            src="https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-5.png"
          />
        </CardContent>
      </Card>

      {/* Strategic Global Partners Title */}
      <div className="absolute top-[12917px] left-[calc(50.00%_-_312px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[56px] text-center tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Strategic Global Partners
      </div>

      {/* Partner Categories */}
      <div className="absolute top-[13012px] left-[100px] w-[1240px] h-[72px] rounded-[50px] border border-solid border-[#d9d9d94c]" />

      <div className="flex justify-between absolute top-[13019px] left-[107px] w-[1226px]">
        {partnerCategories.map((category, index) => (
          <Button
            key={index}
            className={`w-[299px] h-[57px] ${index === 0 ? "bg-[#3764ff]" : "bg-[#ffffff03]"} rounded-[50px] hover:bg-[#3764ff] transition-colors h-auto`}
          >
            <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal] whitespace-nowrap">
              {category}
            </div>
          </Button>
        ))}
      </div>

      {/* Partner Logos */}
      <div className="absolute top-[13165px] left-[145px] flex justify-between w-[1150px] items-center">
        {globalPartners.map((partner, index) => (
          <img
            key={index}
            className={`${index === 0 ? "w-[185px] h-[66px]" : index === 1 ? "w-[203px] h-[73px]" : index === 2 ? "w-[214px] h-[54px]" : index === 3 ? "w-[130px] h-[68px]" : index === 4 ? "w-[89px] h-[89px]" : "w-[89px] h-[89px]"}`}
            alt="Partner logo"
            src={partner}
          />
        ))}
      </div>

      {/* Office Locations */}
      <div className="absolute top-[12513px] left-[100px] flex gap-[20px]">
        {officeLocations.map((location, index) => (
          <Card
            key={index}
            className="w-[400px] h-[185px] bg-[#d9d9d90d] rounded-[30px] border border-solid border-[#ffffff0f]"
          >
            <CardContent className="p-7">
              <div className="text-2xl text-center leading-[normal] whitespace-nowrap [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white tracking-[0] mb-4">
                {location.title}
              </div>
              <div className="w-[317px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[22px]">
                {location.address}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <footer className="absolute top-[13463px] left-[100px] w-[1240px]">
        {/* Company Logo and Description */}
        <div className="flex items-start gap-[411px]">
          <div className="flex flex-col gap-[24px]">
            <img
              className="w-[85px] h-[85px]"
              alt="Image"
              src="https://c.animaapp.com/mfvdxb8gInTGFO/img/image-4.png"
            />
            <div className="w-[295px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-7">
              Flux Bridge is a global Human Capital Advisory firm headquartered
              in Riyadh, KSA. Since 2017, we've partnered with 100+ clients
              across 14+ countries, helping organizations transform people,
              processes, and technology for sustainable success.
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-[19px]">
            <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-7">
              Quick Links
            </div>
            <div className="flex flex-col gap-[30px]">
              {quickLinks.map((link, index) => (
                <div
                  key={index}
                  className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer hover:text-[#3764ff] transition-colors"
                >
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-[19px]">
            <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-7">
              Contact Info
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-7">
                  Headquarters (KSA)
                </div>
                <div className="w-[236.48px] h-[54px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px]">
                  Flux Bridge Co. 7783, Ibn Katheer St – King Abdulaziz District
                  Riyadh 12233-4264, Kingdom of Saudi Arabia
                </div>
              </div>
              <div className="flex flex-col">
                <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-7">
                  India
                </div>
                <div className="w-[264.59px] h-[57px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px]">
                  BLDG No: 2, A3 Station, Unit No: 118 Opposite RUPA SOLITAIRE,
                  Millenium Business Park Sector 1, Mahape, Navi Mumbai,
                  Maharashtra 400701
                </div>
              </div>
              <div className="flex flex-col">
                <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-7">
                  UAE:
                </div>
                <div className="w-[242.93px] h-[38px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px]">
                  IFZA Property, Freezone Building A1 Dubai Digital Park, Dubai
                  Silicon Oasis, Dubai, UAE
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col gap-[46px]">
            <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-7 whitespace-nowrap">
              Subscribe to Our Newsletter
            </div>
            <div className="flex w-[315px] h-[70px] rounded-[50px] border border-solid border-[#d9d9d9]">
              <div className="flex mt-2 w-[277.95px] h-[53px] ml-[27.0px] relative items-center justify-between">
                <Input
                  placeholder="Email"
                  className="bg-transparent border-none text-white placeholder:text-white [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-base tracking-[0] leading-7"
                />
                <Button className="w-[113px] h-[53px] bg-[#3764ff] rounded-[50px] hover:bg-[#2952fe] transition-colors h-auto">
                  <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-7 whitespace-nowrap">
                    Subscribe
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[9px]">
              <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-7">
                Follow Us
              </div>
              <img
                className="w-[42.22px] h-[42.22px]"
                alt="Frame"
                src="https://c.animaapp.com/mfvdxb8gInTGFO/img/frame-59.svg"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-[383px] pt-[34px] border-t border-[#d9d9d94c]">
          <div className="flex justify-between items-center">
            <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
              Copyright © 2025 Flux Bridge Co. All Rights Reserved.
            </div>
            <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
              Privacy Policy | Terms of Service
            </div>
          </div>
        </div>
      </footer>

      {/* Human Capital Services List */}
      <div className="absolute top-[2044px] left-[100px] w-[1245px] h-[548px]">
        <img
          className="absolute top-[98px] left-0 w-[1241px] h-[450px]"
          alt="Rectangle"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle.svg"
        />

        {humanCapitalServices.map((service, index) => (
          <div
            key={index}
            className={`absolute ${index === 0 ? "top-[17px]" : `top-[${638 + (index - 1) * 148}px]`} left-0 w-[1245px] h-[74px] flex items-center cursor-pointer hover:bg-[#ffffff0a] transition-colors group`}
          >
            <div
              className={`${service.isActive ? "text-white" : "text-[#ffffff99]"} [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[32px] tracking-[0] leading-[normal] whitespace-nowrap ml-0`}
            >
              {service.number}
            </div>
            <div
              className={`ml-[70px] ${service.isActive ? "text-[#3764ff]" : "text-[#ffffff99]"} [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-3xl tracking-[0] leading-[normal] whitespace-nowrap group-hover:text-[#3764ff] transition-colors`}
            >
              {service.title}
            </div>
            <img
              className="absolute right-[71px] w-[71px] h-[71px]"
              alt="Arrow"
              src={`https://c.animaapp.com/mfvdxb8gInTGFO/img/arrow${index === 0 ? "-9" : index === 1 ? "-8" : index === 2 ? "" : index === 3 ? "-1" : index === 4 ? "-2" : index === 5 ? "-3" : index === 6 ? "-4" : index === 7 ? "-5" : index === 8 ? "-6" : "-7"}.png`}
            />
            {index < humanCapitalServices.length - 1 && (
              <img
                className={`absolute bottom-0 left-0 w-[1240px] h-px object-cover`}
                alt="Line"
                src="https://c.animaapp.com/mfvdxb8gInTGFO/img/line.svg"
              />
            )}
          </div>
        ))}
      </div>

      {/* Vision & Mission */}
      <div className="flex flex-col w-[517px] items-start gap-[7px] absolute top-[1456px] left-[100px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#3764ff] text-lg tracking-[0] leading-7">
          OUR VISION & MISSION
        </div>
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[519.16px] h-[42px] mr-[-2.00px] flex items-start gap-3">
            <div className="w-1 h-1 bg-[#3764ff] rounded-[2.17px] mt-2" />
            <div className="w-[505px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
              By 2030, we aim to lead in Human Capital Advisory with global
              solutions and local talent.
            </div>
          </div>
          <div className="relative w-[519.16px] h-[42px] mr-[-2.00px] flex items-start gap-3">
            <div className="w-1 h-1 bg-[#3764ff] rounded-[2.17px] mt-2" />
            <div className="w-[505px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
              Redefining Human Resources as a strategic catalyst for
              organisational potential and success.
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="absolute top-[1606px] left-[100px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#3764ff] text-lg tracking-[0] leading-7 whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        OUR VALUES
      </div>

      <div className="absolute top-[1638px] left-[100px] flex flex-col gap-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="flex items-center gap-[7.4px]">
          <div className="w-[4.35px] h-[4.35px] bg-[#3764ff] rounded-[2.17px]" />
          <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
            Customer Focus Dedicated to client success
          </div>
        </div>
        <div className="flex items-center gap-[7.4px]">
          <div className="w-[4.35px] h-[4.35px] bg-[#3764ff] rounded-[2.17px]" />
          <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
            Integrity Upholding honesty and ethics
          </div>
        </div>
        <div className="flex items-center gap-[7.4px]">
          <div className="w-[4.35px] h-[4.35px] bg-[#3764ff] rounded-[2.17px]" />
          <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
            Excellence Striving for superior quality
          </div>
        </div>
        <div className="flex items-center gap-[7.4px]">
          <div className="w-[4.35px] h-[4.35px] bg-[#3764ff] rounded-[2.17px]" />
          <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
            Objectivity Ensuring fair, balanced judgment
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <img
        className="absolute w-[85.49%] h-[2.31%] top-[57.42%] left-[7.09%]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-6.png"
      />

      <img
        className="absolute w-[13.48%] h-0 top-[58.16%] left-[6.94%]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-8.png"
      />

      <img
        className="absolute w-[13.29%] h-0 top-[57.41%] left-[25.08%]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-9.png"
      />

      <img
        className="absolute w-[14.08%] h-0 top-[58.14%] left-[42.76%]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-10.png"
      />

      <img
        className="absolute w-[12.87%] h-0 top-[58.21%] left-[79.20%]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-11.png"
      />

      <img
        className="absolute w-[11.33%] h-0 top-[57.44%] left-[61.14%]"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-12.png"
      />
    </div>
  );
};
