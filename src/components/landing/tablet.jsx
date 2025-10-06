import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

const sectors = [
  {
    image: "https://c.animaapp.com/mgalo8ioJHJdQp/img/rectangle-61.svg",
    title: "Banking &\nReal Estate",
  },
  {
    image: "https://c.animaapp.com/mgalo8ioJHJdQp/img/rectangle-62.svg",
    title: "Technology &\nTelecom",
  },
  {
    image: "https://c.animaapp.com/mgalo8ioJHJdQp/img/rectangle-63.svg",
    title: "Defence &\nManufacturing",
  },
  {
    image: "https://c.animaapp.com/mgalo8ioJHJdQp/img/rectangle-64-1.svg",
    title: "Construction &\nInfrastructure",
  },
  {
    image: "https://c.animaapp.com/mgalo8ioJHJdQp/img/rectangle-64.svg",
    title: "Retail &\nHospitality",
  },
];

const recruitmentSteps = [
  {
    position: "top-[2452px] left-[66px]",
    title: "CandidateOn-Boarding",
    description: "Support Client on visas  Onboarding support",
    subdescription: "Report to work confirmation",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/stat-icon-container-3.svg",
    iconPosition: "top-[2472px] left-[236px]",
  },
  {
    position: "top-[2573px] left-[66px]",
    title: "Offer Letter",
    description: "Client to issue offer, Candidate acceptance",
    subdescription: "Agree on the joining date withthe candidate",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/stat-icon-container.svg",
    iconPosition: "top-[2605px] left-[236px]",
  },
  {
    position: "top-[2705px] left-[66px]",
    title: "Client Interview",
    description:
      "Candidates Telephonic / Physical interview, AEMS to receive interview results",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/stat-icon-container-2.svg",
    iconPosition: "top-[2736px] left-[236px]",
  },
  {
    position: "top-[2453px] left-[605px]",
    title: "UnderstandClientneeds",
    description: "Job profile & Organization dynamics Reward dynamics",
    subdescription: "Specific skill sets & Experience",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/stat-icon-container-5.svg",
    iconPosition: "top-[2474px] left-[565px]",
  },
  {
    position: "top-[2577px] left-[605px]",
    title: "SourcingCandidates",
    description: "Internal database",
    subdescription: "Website / Headhunting",
    thirdDescription: "Social media",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/stat-icon-container-4.svg",
    iconPosition: "top-[2604px] left-[565px]",
  },
  {
    position: "top-[2705px] left-[605px]",
    title: "AEMSCandidateScreening",
    description: "Evaluate competencies & experience fit",
    subdescription: "Shortlist & submit to client",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/stat-icon-container-1.svg",
    iconPosition: "top-[2737px] left-[565px]",
  },
];

const keyPositions = [
  { label: "Top Executive Leadership", active: true },
  { label: "Business & Investment Leadership", active: false },
  { label: "Corporate Functions & Governance", active: false },
  { label: "Data, Technology & Risk Leadership", active: false },
  { label: "Specialised Consultants & Analysts", active: false },
];

const learningServices = [
  {
    title: "ASSESSMENTS & IDPS",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-8.png",
    active: true,
  },
  {
    title: "LEADERSHIP DEVELOPMENT",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-9.png",
    active: true,
  },
  {
    title: "ESG - COMPLIANCE & GOVERNANCE",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-10.png",
    active: true,
  },
  {
    title: "CULTURE MANAGEMENT",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-11.png",
    active: false,
  },
  {
    title: "EMPLOYEE EXPERIENCE",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-12.png",
    active: false,
  },
  {
    title: "TRAIN THE– TRAINER",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-13.png",
    active: false,
  },
  {
    title: "CHANGE ENGAGEMENT",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-14.png",
    active: false,
  },
  {
    title: "BEHAVIORAL / ESSENTIALS SKILLS",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-15.png",
    active: false,
  },
  {
    title: "SALES & CLIENT SERVICE",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-16.png",
    active: false,
  },
  {
    title: "TECHNICAL & FUNCTIONAL COMPETENCIES",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-19.png",
    active: false,
  },
  {
    title: "DIVERSITY, EQUITY & INCLUSION (DEI)",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-17.png",
    active: false,
  },
  {
    title: "EXECUTIVE COACHING",
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-18.png",
    active: false,
  },
];

const deliveryMethods = [
  {
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-1.png",
    title: "Live Virtual\nTraining",
    position: "top-[4770px] left-[232px]",
  },
  {
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-2.png",
    title: "Self Paced E-\nlearning (LMS/LXP)",
    position: "top-[4830px] left-[359px]",
  },
  {
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-3.png",
    title: "Gamification",
    position: "top-[4770px] left-[527px]",
  },
  {
    icon: "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-4.png",
    title: "Simulations & AI\nbased learning",
    position: "top-[4831px] left-[666px]",
  },
];

const services = [
  {
    number: "01",
    title: "Executive Search/ Recruitment",
    active: true,
  },
  {
    number: "02",
    title: "Structure & Governance",
    active: false,
  },
  {
    number: "03",
    title: "Culture Development",
    active: false,
  },
  {
    number: "04",
    title: "HR Strategy Services",
    active: false,
  },
  {
    number: "05",
    title: "Job Evaluation & Grading Structure",
    active: false,
  },
  {
    number: "06",
    title: "Job Evaluation & Grading Structure",
    active: false,
  },
  {
    number: "07",
    title: "Job Evaluation & Grading Structure",
    active: false,
  },
  {
    number: "08",
    title: "Job Evaluation & Grading Structure",
    active: false,
  },
  {
    number: "09",
    title: "Job Evaluation & Grading Structure",
    active: false,
  },
  {
    number: "10",
    title: "Job Evaluation & Grading Structure",
    active: false,
  },
];

const locations = [
  { name: "Seattle USA", position: "top-[6935px] left-[154px]" },
  { name: "Hounslow\nUK", position: "top-[6928px] left-[377px]" },
  {
    name: "Riyadh, Kingdom of Saudia Arabia (HQ)",
    position: "top-[7001px] left-[409px]",
  },
  { name: "Dubai, UAE Oman", position: "top-[7007px] left-[513px]" },
  { name: "Mumbai\nIndia", position: "top-[7030px] left-[549px]" },
];

const addresses = [
  {
    title: "UAE Address",
    content:
      "IFZA Property, Freezone Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE.",
  },
  {
    title: "Riyadh - Kingdom of Saudi Arabia (HQ)",
    content:
      "Flux Bridge Co 7783, Ibn Katheer St- King Abdulaziz District, Riyadh 12233-4264, Kingdom of Saudi Arabia",
  },
  {
    title: "India",
    content:
      "BLDG No: 2, A3 Station, Unit No: 118, opposite RUPA SOLITAIRE, Millenium Business Park, Sector 1, Mahape, Navi Mumbai, Maharashtra 400701",
  },
];

const partnerCategories = [
  { label: "Human Resources", active: true },
  { label: "Business Consulting", active: false },
  { label: "IT Consulting & Services", active: false },
  { label: "Learning & Development", active: false },
];

const partnerLogos = [
  "https://c.animaapp.com/mgalo8ioJHJdQp/img/group-13.png",
  "https://c.animaapp.com/mgalo8ioJHJdQp/img/group-15.png",
  "https://c.animaapp.com/mgalo8ioJHJdQp/img/group-16.png",
  "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-6.png",
  "https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-7.png",
];

const quickLinks = [
  "About Us",
  "Services",
  "Industries",
  "Global Presence",
  "Client & Partners",
];

const values = [
  "Customer Focus Dedicated to client success",
  "Integrity Upholding honesty and ethics",
  "Excellence Striving for superior quality",
  "Objectivity Ensuring fair, balanced judgment",
];

export const Tablet = () => {
  return (
    <div
      className="bg-black overflow-hidden w-full min-w-[834px] min-h-screen relative"
      data-model-id="198:4939"
    >
      <div className="absolute top-[7620px] left-[calc(50.00%_+_149px)] w-[234px] h-[397px] bg-[#0017ffbf] rounded-[117.17px/198.26px] -rotate-90 blur-[229.93px]" />

      <img
        className="absolute h-[6.91%] top-[90.20%] left-0 w-[834px]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group.png"
      />

      <div className="absolute left-[calc(50.00%_-_417px)] bottom-0 w-[834px] h-[308px] bg-[#ffffff1a] backdrop-blur-[14.48px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.48px)_brightness(100%)]" />

      <img
        className="absolute h-[6.91%] top-[55.06%] left-0 w-[834px]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-1.png"
      />

      <img
        className="absolute h-[6.91%] top-[69.23%] left-0 w-[834px]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-2.png"
      />

      <img
        className="absolute h-[6.91%] top-[69.23%] right-[-3px] w-[834px]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-3.png"
      />

      <div className="absolute top-[4460px] left-[calc(50.00%_-_519px)] w-[1038px] h-[520px] flex gap-[569.2px]">
        <div className="w-[234.34px] h-[520.29px] bg-[#0017ff] rounded-[117.17px/260.14px] blur-[227.03px]" />
        <div className="w-[234.34px] h-[520.29px] bg-[#0017ff] rounded-[117.17px/260.14px] blur-[227.03px]" />
      </div>

      <div className="absolute top-[5578px] left-[calc(50.00%_-_519px)] w-[1038px] h-[520px] flex gap-[569.2px]">
        <div className="w-[234.34px] h-[520.29px] bg-[#0017ff] rounded-[117.17px/260.14px] blur-[227.03px]" />
        <div className="w-[234.34px] h-[520.29px] bg-[#0017ff] rounded-[117.17px/260.14px] blur-[227.03px]" />
      </div>

      <img
        className="absolute top-[5076px] left-[58px] w-[718px] h-[346px]"
        alt="Union"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/union.svg"
      />

      <img
        className="absolute top-[3376px] left-0 w-[834px] h-[551px]"
        alt="Mask group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group.png"
      />

      <section className="absolute top-[3526px] left-[58px] w-[1215px] h-[216px]">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="absolute top-0 w-[232px] h-[216px]"
            style={{ left: `${index * 243}px` }}
          >
            <img
              className="absolute top-0 left-0 w-[232px] h-[216px] object-cover"
              alt="Rectangle"
              src={sector.image}
            />
            <div className="absolute top-0 left-0 w-[232px] h-[216px] rounded-[28.96px] border-[0.58px] border-solid border-black bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
            <div className="absolute top-[164px] left-1/2 -translate-x-1/2 [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-[13.9px] text-center tracking-[0] leading-[normal] whitespace-pre-line">
              {sector.title}
            </div>
          </div>
        ))}
      </section>

      <div className="absolute top-[2312px] left-[calc(50.00%_-_519px)] w-[1038px] h-[520px] flex gap-[569.2px]">
        <div className="w-[234.34px] h-[520.29px] bg-[#0017ff] rounded-[117.17px/260.14px] blur-[227.03px]" />
        <div className="w-[234.34px] h-[520.29px] bg-[#0017ff] rounded-[117.17px/260.14px] blur-[227.03px]" />
      </div>

      <div className="absolute top-[3055px] left-[calc(50.00%_-_117px)] w-[234px] h-[397px] bg-[#0017ff] rounded-[117.17px/198.26px] blur-[229.93px]" />

      <div className="absolute top-[6773px] left-[calc(50.00%_-_117px)] w-[234px] h-[397px] bg-[#0017ffbf] rounded-[117.17px/198.26px] -rotate-90 blur-[229.93px]" />

      <h2 className="absolute top-[3461px] left-[calc(50.00%_-_56px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[32.4px] text-center tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Sectors
      </h2>

      <img
        className="absolute top-0 left-0 w-[834px] h-[841px]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-7.png"
      />

      <div className="top-[93px] left-[532px] w-[259px] h-[142px] opacity-70 absolute blur-[139.3px]">
        <div className="absolute top-0 left-0 w-[177px] h-[142px] bg-[#2e4eb3] rounded-[88.52px/71.07px]" />
        <div className="absolute top-px left-[82px] w-[177px] h-[142px] bg-[#90abff] rounded-[88.52px/71.07px]" />
      </div>

      <div className="top-[560px] left-[-152px] w-[1090px] h-[157px] absolute blur-[139.3px]">
        <div className="absolute top-0 left-0 w-[744px] h-[157px] bg-[#2e4eb3] rounded-[372.02px/78.69px]" />
        <div className="absolute top-0 left-[346px] w-[744px] h-[157px] bg-[#90abff] rounded-[372.02px/78.69px]" />
      </div>

      <h1 className="absolute top-[159px] left-[94px] w-[646px] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Light',Helvetica] font-light text-transparent text-[46px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Empowering Organizations Through People, Strategy & Innovation
      </h1>

      <p className="absolute top-80 left-[137px] w-[560px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] text-center tracking-[0] leading-[16.2px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Flux Bridge is a global Human Capital and Business Advisory firm
        headquartered in Riyadh, helping organizations redefine success through
        executive recruitment, leadership development, HR strategy, and digital
        transformation.
      </p>

      <Button className="w-[93px] left-[439px] bg-[#ffffff0d] border-[none] backdrop-blur-[7.24px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.24px)_brightness(100%)] flex h-auto items-center justify-center gap-[5.79px] px-[19.11px] py-[14.48px] absolute top-[366px] rounded-[28.96px] before:content-[''] before:absolute before:inset-0 before:p-[0.29px] before:rounded-[28.96px] before:[background:linear-gradient(102deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_46%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] transition-transform hover:scale-105">
        <span className="relative w-fit [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] text-center tracking-[0] leading-[16.2px] whitespace-nowrap">
          Get in Touch
        </span>
      </Button>

      <Button className="w-[127px] left-[303px] bg-[#3664fe] flex h-auto items-center justify-center gap-[5.79px] px-[19.11px] py-[14.48px] absolute top-[366px] rounded-[28.96px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] transition-transform hover:scale-105">
        <span className="relative w-fit [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] text-center tracking-[0] leading-[16.2px] whitespace-nowrap">
          Explore Our Services
        </span>
      </Button>

      <div className="absolute top-[593px] left-[-76px] w-[987px] h-[632px] bg-black blur-[65.16px]" />

      <img
        className="absolute h-[6.91%] top-[7.15%] left-0 w-[834px]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-4.png"
      />

      <img
        className="absolute h-[6.91%] top-[28.47%] left-0 w-[834px]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-5.png"
      />

      <div className="absolute top-[851px] left-[722px] w-[234px] h-[397px] bg-[#0017ff] rounded-[117.17px/198.26px] blur-[229.93px]" />

      <div className="absolute top-[520px] left-[-133px] w-[234px] h-[397px] bg-[#0017ff] rounded-[117.17px/198.26px] blur-[229.93px]" />

      <article className="flex flex-col w-[407px] items-start gap-[8.69px] absolute top-[671px] left-[58px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="relative self-stretch mt-[-0.58px] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-4xl tracking-[0] leading-[normal]">
          About Flux Bridge
        </h2>
        <p className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] tracking-[0] leading-[16.2px]">
          Founded in 2017 and headquartered in Riyadh, KSA, Flux Bridge is a
          global talent solutions firm connecting exceptional talent with
          opportunity. With 6 global offices and a 30+ member core team, we've
          served 100+ clients across 16 industries and 14 countries, placing
          100+ C-level and management roles. Our track record includes 50+
          strategic assignments, 600+ trainers, 100+ leaders coached, and 1M+
          assessments delivered for 140 roles with 85% accuracy. With a 24-day
          average recruitment lead time, we combine strategic planning and speed
          to deliver lasting organizational impact.
        </p>
      </article>

      <div className="absolute top-[676px] left-[484px] w-[293px] h-[347px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="absolute top-0 left-0 w-[282px] h-[333px] rounded-[28.96px] border-[0.58px] border-solid border-[#3764ff]" />
        <img
          className="absolute top-[9px] left-[9px] w-[284px] h-[339px]"
          alt="Rectangle"
          src="https://c.animaapp.com/mgalo8ioJHJdQp/img/rectangle-2.svg"
        />
      </div>

      <h2 className="absolute top-[1123px] left-[calc(50.00%_-_225px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Our Human Capital Services
      </h2>

      <h2 className="absolute top-[2353px] left-[calc(50.00%_-_150px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Executive Search -<br />
        Recruitment Cycle
      </h2>

      <div className="absolute top-[calc(50.00%_-_1465px)] left-[calc(50.00%_-_43px)] w-[87px] h-[87px] bg-[#0017ff] rounded-[43.44px] blur-[28.96px]" />

      <img
        className="absolute top-[2486px] left-[calc(50.00%_-_151px)] w-[146px] h-[118px]"
        alt="Vector"
        src="https://c.animaapp
/mgalo8ioJHJdQp/img/vector-3379-1.svg"
      />

      <img
        className="absolute top-[2626px] left-[calc(50.00%_-_151px)] w-[146px] h-[125px]"
        alt="Vector"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/vector-3380.svg"
      />

      <img
        className="absolute top-[2487px] left-[calc(50.00%_+_4px)] w-[146px] h-[116px]"
        alt="Vector"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/vector-3379.svg"
      />

      <img
        className="absolute top-[2620px] left-[calc(50.00%_+_4px)] w-[146px] h-[130px]"
        alt="Vector"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/vector-3380-1.svg"
      />

      {recruitmentSteps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex flex-col items-start gap-[1.16px] absolute ${step.position}`}
            style={{
              width:
                index < 3
                  ? "145px"
                  : index === 3
                    ? "157px"
                    : index === 4
                      ? "141px"
                      : "170px",
            }}
          >
            <div className="font-medium text-[13.9px] tracking-[-0.28px] leading-[20.8px] relative self-stretch mt-[-0.58px] [font-family:'Geist',Helvetica] text-white">
              {step.title}
            </div>
            <div className="flex flex-col items-start gap-[6.95px] relative self-stretch w-full flex-[0_0_auto]">
              <div
                className={`font-normal text-[10.4px] tracking-[-0.21px] leading-[normal] relative self-stretch mt-[-0.58px] [font-family:'Geist',Helvetica] ${index === 2 ? "text-[#cccccc]" : "text-white"}`}
              >
                {step.description}
              </div>
              {step.subdescription && (
                <div
                  className={`leading-[15.6px] relative self-stretch [font-family:'Geist',Helvetica] font-normal text-[10.4px] tracking-[-0.21px] ${index === 2 || index >= 3 ? "text-[#cccccc]" : "text-white"}`}
                >
                  {step.subdescription}
                </div>
              )}
              {step.thirdDescription && (
                <div className="text-[#cccccc] leading-[15.6px] relative self-stretch [font-family:'Geist',Helvetica] font-normal text-[10.4px] tracking-[-0.21px]">
                  {step.thirdDescription}
                </div>
              )}
            </div>
          </div>
          <img
            className={`absolute w-8 h-8 ${step.iconPosition}`}
            alt="Stat icon container"
            src={step.icon}
          />
        </React.Fragment>
      ))}

      <img
        className="absolute w-[16.70%] h-0 top-[32.40%] left-[51.38%]"
        alt="Vector"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/vector-3386.svg"
      />

      <div className="absolute top-[2585px] left-[388px] w-[58px] h-[58px] bg-white rounded-[28.96px] blur-[14.48px]" />

      <img
        className="absolute w-[16.70%] h-0 top-[32.40%] left-[31.92%]"
        alt="Vector"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/vector-3386.svg"
      />

      <Button className="flex w-[46px] h-[46px] items-center justify-center gap-[9.27px] px-[13.9px] py-[6.95px] absolute top-[2593px] left-[394px] rounded-[57.92px] border-[none] rotate-180 shadow-[0px_2.32px_2.32px_#00000040] bg-[linear-gradient(180deg,rgba(14,0,59,1)_0%,rgba(0,23,255,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[0.58px] before:rounded-[57.92px] before:[background:linear-gradient(180deg,rgba(0,23,255,1)_0%,rgba(14,0,59,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none h-auto transition-transform hover:scale-105">
        <img
          className="relative w-[27.45px] h-[27.48px] ml-[-4.46px] mr-[-4.46px] -rotate-180"
          alt="Image"
          src="https://c.animaapp.com/mgalo8ioJHJdQp/img/image-5.png"
        />
      </Button>

      <Card className="absolute top-[2892px] left-[calc(50.00%_-_391px)] w-[782px] h-[462px] bg-[#ffffff0d] rounded-[28.96px] backdrop-blur-[14.48px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.48px)_brightness(100%)] border-none">
        <CardContent className="p-0">
          <h2 className="absolute top-[24px] left-[calc(50.00%_-_359px)] w-[436px] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-4xl tracking-[0] leading-[normal]">
            Key Positions Hired For
            <br />
            Our Esteemed Clients
          </h2>

          <div className="absolute top-[141px] left-[58px] w-[353px] h-12 bg-[#3764ff] rounded-[28.96px] shadow-[0px_0px_1.19px_#3764ff,0px_0px_2.37px_#3764ff,0px_0px_8.31px_#3764ff,0px_0px_16.62px_#3764ff,0px_0px_28.49px_#3764ff]" />

          <div className="absolute top-[157px] left-[calc(50.00%_-_333px)] [font-family:'DM_Sans',Helvetica] font-bold text-white text-[13.9px] tracking-[0] leading-[17.4px] whitespace-nowrap">
            Top Executive Leadership
          </div>

          {keyPositions.slice(1).map((position, index) => (
            <div
              key={index}
              className={`absolute left-[58px] w-[355px] h-12`}
              style={{ top: `${200 + index * 59}px` }}
            >
              <div className="absolute top-px left-0 w-[353px] h-12 rounded-[28.96px] border-[0.29px] border-solid border-white shadow-[0px_2.32px_30.17px_#00000008]" />
              <div className="absolute top-4 left-[calc(50.00%_-_152px)] [font-family:'DM_Sans',Helvetica] font-bold text-white text-[13.9px] tracking-[0] leading-[17.4px] whitespace-nowrap">
                {position.label}
              </div>
            </div>
          ))}

          <div className="absolute top-[112px] left-[447px] w-[329px] h-72 rounded-[28.96px] border-[0.58px] border-solid border-[#3764ff]" />

          <img
            className="absolute top-[122px] left-[429px] w-[338px] h-[303px]"
            alt="Image"
            src="https://c.animaapp.com/mgalo8ioJHJdQp/img/image.svg"
          />

          <div className="absolute top-[371px] left-[429px] w-[175px] h-[54px]">
            <img
              className="absolute top-0 left-0 w-[173px] h-[54px]"
              alt="Rectangle"
              src="https://c.animaapp.com/mgalo8ioJHJdQp/img/rectangle-51.svg"
            />
            <div className="absolute top-3.5 left-[calc(50.00%_-_16px)] w-[81px] [font-family:'DM_Sans',Helvetica] font-bold text-white text-[10.4px] tracking-[0] leading-[normal]">
              Top Executive Leadership
            </div>
            <img
              className="absolute top-[13px] left-5 w-8 h-8"
              alt="Icon"
              src="https://c.animaapp.com/mgalo8ioJHJdQp/img/icon.svg"
            />
          </div>

          <div className="absolute top-[171px] left-[456px] w-[187px] h-[84px]">
            <div className="absolute top-0 left-1.5 [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-[11.6px] tracking-[0] leading-[27.8px]">
              Chief Operating Officer (COO)
              <br />
              Deputy CFO CHRO
              <br />
              (Chief Human Resources Officer)
            </div>
            <div className="absolute top-3 left-px w-[3px] h-[3px] bg-[#3764ff] rounded-[1.42px]" />
            <div className="absolute top-10 left-px w-[3px] h-[3px] bg-[#3764ff] rounded-[1.42px]" />
            <div className="absolute top-[69px] left-px w-[3px] h-[3px] bg-[#3764ff] rounded-[1.42px]" />
          </div>
        </CardContent>
      </Card>

      <Card className="absolute top-[6657px] left-[calc(50.00%_-_391px)] w-[782px] h-[730px] bg-[#ffffff0d] rounded-[28.96px] backdrop-blur-[14.48px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.48px)_brightness(100%)] border-none">
        <CardContent className="p-0">
          <h2 className="absolute top-[32px] left-[calc(50.00%_-_357px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Our Global Presence
          </h2>

          <img
            className="absolute top-[102px] left-[calc(50.00%_-_353px)] w-[707px] h-[466px]"
            alt="Group"
            src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-17.png"
          />

          {locations.map((location, index) => (
            <div
              key={index}
              className={`absolute ${location.position} ${index === 0 ? "w-8" : index === 1 ? "w-[38px]" : index === 2 ? "w-[74px]" : index === 3 ? "w-11" : "w-fit"} [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-[8.1px] ${index === 2 || index === 1 || index === 0 ? "text-center" : ""} tracking-[0] ${index === 2 ? "leading-[normal]" : "leading-[7.5px]"} ${index === 1 || index === 4 ? "whitespace-pre-line" : ""}`}
            >
              {location.name}
            </div>
          ))}

          {addresses.map((address, index) => (
            <div
              key={index}
              className="absolute w-[232px] h-[107px] bg-[#d9d9d90d] rounded-[17.38px] border-[0.58px] border-solid border-[#ffffff0f]"
              style={{ top: "590px", left: `${58 + index * 243}px` }}
            >
              <div
                className={`absolute top-4 ${index === 1 ? "left-20 w-[174px]" : "left-[19px]"} ${index === 0 || index === 2 ? "text-[13.9px] leading-[normal] whitespace-nowrap" : "text-[13.9px] leading-[normal]"} [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white tracking-[0]`}
              >
                {address.title}
              </div>
              <div
                className={`absolute ${index === 1 ? "top-[45px] left-20 w-[183px]" : "top-[27px] left-[19px]"} ${index === 0 ? "w-[183px]" : index === 2 ? "w-[190px]" : ""} [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[9.3px] tracking-[0] leading-[12.7px]`}
              >
                {address.content}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="absolute top-[3504px] left-[809px] w-[61px] h-[281px] bg-[#010101] blur-[27.51px]" />

      <h2 className="absolute top-[4564px] left-[calc(50.00%_-_186px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Omni-Channel Delivery
      </h2>

      <h2 className="absolute top-[4979px] left-[calc(50.00%_-_162px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Strategy & Business
        <br />
        Transformation
      </h2>

      <div className="absolute top-[5096px] left-[103px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        Business / Strategy Consulting
      </div>

      <div className="top-[5096px] left-[358px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-[10.4px] whitespace-nowrap absolute text-white text-center tracking-[0] leading-[normal]">
        Technology & Digital
      </div>

      <div className="absolute top-[5096px] left-[568px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        Strategic Alliances & Startups
      </div>

      <img
        className="absolute w-[85.49%] h-[2.31%] top-[57.43%] left-[7.09%]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-6.png"
      />

      <img
        className="absolute w-[13.48%] h-0 top-[58.16%] left-[6.94%]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-8.png"
      />

      <img
        className="absolute w-[13.29%] h-0 top-[57.42%] left-[25.08%]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-9.png"
      />

      <img
        className="absolute w-[14.08%] h-0 top-[58.14%] left-[42.76%]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-10.png"
      />

      <img
        className="absolute w-[12.87%] h-0 top-[58.21%] left-[79.20%]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-11.png"
      />

      <img
        className="absolute w-[11.33%] h-0 top-[57.45%] left-[61.14%]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-12.png"
      />

      <div className="absolute top-[4831px] left-[72px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[13.9px] text-center tracking-[0] leading-[normal]">
        Live In Person
        <br />
        Training
      </div>

      {deliveryMethods.map((method, index) => (
        <React.Fragment key={index}>
          <div
            className={`absolute ${method.position} [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[13.9px] text-center tracking-[0] leading-[normal] ${index === 3 ? "" : "whitespace-pre-line"}`}
          >
            {method.title}
          </div>
          <img
            className={`absolute ${index === 0 ? "top-[4671px] left-[243px]" : index === 1 ? "top-[4733px] left-[393px]" : index === 2 ? "top-[4672px] left-[544px]" : "top-[4727px] left-[698px]"} ${index === 3 ? "w-[38px] h-[38px]" : "w-11 h-11"}`}
            alt="Mask group"
            src={method.icon}
          />
        </React.Fragment>
      ))}

      <section className="absolute top-[3925px] left-[58px] w-[718px] h-[526px]">
        {learningServices.map((service, index) => {
          const row = Math.floor(index / 3);
          const col = index % 3;
          return (
            <React.Fragment key={index}>
              <img
                className="absolute w-[232px] h-[122px] object-cover"
                style={{ top: `${row * 135}px`, left: `${col * 243}px` }}
                alt="Rectangle"
                src={`https://c.animaapp.com/mgalo8ioJHJdQp/img/rectangle-${66 + index}.svg`}
              />
              <div
                className={`absolute w-[46px] h-[46px] ${service.active ? "bg-[#3764ff]" : ""} rounded-[22.9px]`}
                style={{
                  top: `${row * 135 + 21}px`,
                  left: `${col * 243 + 93}px`,
                }}
              >
                {!service.active && (
                  <img
                    className="w-full h-full"
                    alt="Ellipse"
                    src="https://c.animaapp.com/mgalo8ioJHJdQp/img/ellipse-4165.svg"
                  />
                )}
              </div>
              <div
                className={`absolute ${index === 0 ? "w-[98px]" : index === 1 ? "w-fit whitespace-nowrap" : index === 2 ? "w-[157px]" : index === 3 ? "w-[119px]" : index === 4 ? "w-[133px]" : index === 5 ? "w-[119px]" : index === 6 ? "w-[119px]" : index === 7 ? "w-[202px]" : index === 8 ? "w-[180px]" : index === 9 ? "w-fit whitespace-nowrap" : index === 10 ? "w-fit whitespace-nowrap" : "w-fit whitespace-nowrap"} [font-family:'DM_Sans',Helvetica] ${service.active ? "font-bold" : "font-medium"} text-white text-[8.7px] text-center tracking-[0] leading-[12.6px]`}
                style={{
                  top: `${row * 135 + 87}px`,
                  left: `${col * 243 + (index === 0 ? 27 : index === 1 ? 58 : index === 2 ? 24 : index === 3 ? 33 : index === 4 ? 19 : index === 5 ? 20 : index === 6 ? 33 : index === 7 ? 15 : index === 8 ? 12 : index === 9 ? 26 : index === 10 ? 59 : 33)}px`,
                }}
              >
                {service.title}
              </div>
              <img
                className={`absolute ${index === 0 ? "w-[23px] h-[23px]" : index === 1 ? "w-6 h-6" : index === 2 ? "w-6 h-6" : index === 3 ? "w-[23px] h-[23px]" : index === 4 ? "w-[27px] h-[27px]" : index === 5 ? "w-[22px] h-[22px]" : index === 6 ? "w-[23px] h-[23px]" : index === 7 ? "w-[22px] h-[22px]" : index === 8 ? "w-[22px] h-[22px]" : index === 9 ? "w-[23px] h-[23px]" : index === 10 ? "w-[26px] h-[26px]" : "w-[23px] h-[23px]"}`}
                style={{
                  top: `${row * 135 + (index === 4 ? 23 : index === 10 ? 25 : 27)}px`,
                  left: `${col * 243 + 104}px`,
                }}
                alt="Mask group"
                src={service.icon}
              />
            </React.Fragment>
          );
        })}
      </section>

      <h2 className="absolute top-[3851px] left-[calc(50.00%_-_277px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Learning & Development Solutions
      </h2>

      <img
        className="absolute top-[5150px] left-[421px] w-[332px] h-[248px]"
        alt="Rectangle"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/rectangle-82.svg"
      />

      <div className="absolute top-[calc(50.00%_+_1493px)] left-[calc(50.00%_-_348px)] w-[697px] h-[697px] bg-[#01091a03] rounded-[348.5px] border-[0.58px] border-solid border-black rotate-90" />

      <img
        className="absolute top-[calc(50.00%_+_1493px)] left-[calc(50.00%_-_348px)] w-[696px] h-[696px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/ellipse-4146.svg"
      />

      <img
        className="absolute top-[calc(50.00%_+_1551px)] left-[calc(50.00%_-_290px)] w-[580px] h-[580px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/ellipse-4142.svg"
      />

      <div className="absolute top-[calc(50.00%_+_1550px)] left-[calc(50.00%_-_291px)] w-[581px] h-[581px] rounded-[290.58px] border-[0.58px] border-solid border-black rotate-45 blur-[28.96px]" />

      <img
        className="absolute top-[calc(50.00%_+_1609px)] left-[calc(50.00%_-_232px)] w-[464px] h-[464px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/ellipse-4143.svg"
      />

      <img
        className="absolute top-[calc(50.00%_+_1549px)] left-[calc(50.00%_-_292px)] w-[584px] h-[584px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/ellipse-4144.svg"
      />

      <article className="flex flex-col w-[494px] items-center gap-[19.11px] absolute top-[5776px] left-[calc(50.00%_-_247px)]">
        <div className="inline-flex flex-col items-center gap-[13.9px] relative flex-[0_0_auto]">
          <h3 className="relative w-[348.05px] mt-[-0.58px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(0,23,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-4xl text-center tracking-[-0.72px] leading-[normal]">
            Executive Leadership/ Team/ Advisor
          </h3>
        </div>

        <img
          className="relative self-stretch w-full flex-[0_0_auto] mb-[-48.91px]"
          alt="Explore images"
          src="https://c.animaapp.com/mgalo8ioJHJdQp/img/explore-images-container.svg"
        />

        <div className="flex flex-col w-[133.21px] items-center gap-[1.74px] relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-0.58px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-[10.4px] text-center tracking-[-0.21px] leading-[10.4px]">
            Khalid Abdallah Al-Damegh
          </div>
          <div className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-[#ffffffa6] text-[6.9px] leading-[10.4px] text-center tracking-[0]">
            Leadership Team
          </div>
        </div>
      </article>

      <img
        className="absolute top-[6405px] left-[calc(50.00%_-_417px)] w-[834px] h-[146px]"
        alt="Frame"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/frame-45.svg"
      />

      <h2
        className="absolute top-[6341px] left-[calc(50.00%_-_185px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-4xl text
-center tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
      >
        Omni-Channel Delivery
      </h2>

      <img
        className="absolute w-0 h-0 top-[87.20%] left-[64.61%]"
        alt="Vector"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/vector.svg"
      />

      <img
        className="absolute w-0 h-0 top-[86.97%] left-[60.69%]"
        alt="Vector"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/vector.svg"
      />

      <img
        className="absolute w-0 h-0 top-[86.88%] left-[59.79%]"
        alt="Vector"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/vector-1.svg"
      />

      <img
        className="absolute w-0 h-0 top-[86.91%] left-[56.08%]"
        alt="Vector"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/vector-1.svg"
      />

      <img
        className="absolute w-0 h-0 top-[86.01%] left-[46.78%]"
        alt="Vector"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/vector-1.svg"
      />

      <img
        className="absolute w-0 h-0 top-[86.13%] left-[19.69%]"
        alt="Vector"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/vector.svg"
      />

      <img
        className="absolute top-[6676px] left-[702px] w-[83px] h-[63px]"
        alt="Mask group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group-5.png"
      />

      <h2 className="absolute top-[7473px] left-[calc(50.00%_-_200px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Strategic Global Partners
      </h2>

      <Tabs
        defaultValue="human-resources"
        className="absolute top-[7536px] left-[58px] w-[718px]"
      >
        <TabsList className="h-[41px] w-full rounded-[28.96px] border-[0.58px] border-solid border-[#d9d9d94c] bg-transparent p-0">
          {partnerCategories.map((category, index) => (
            <TabsTrigger
              key={index}
              value={category.label
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/&/g, "and")}
              className={`h-[33px] rounded-[28.96px] px-[22.59px] py-[5.79px] data-[state=active]:bg-[#3764ff] data-[state=inactive]:bg-[#ffffff03] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] text-center tracking-[0] leading-[normal] transition-colors`}
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="absolute top-[7632px] left-[84px] flex gap-[48px] items-center">
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            className={`${index === 0 ? "w-[107px] h-[38px]" : index === 1 ? "w-[118px] h-[42px]" : index === 2 ? "w-[124px] h-[31px]" : index === 3 ? "w-[76px] h-[39px]" : "w-[52px] h-[52px]"}`}
            alt="Group"
            src={logo}
          />
        ))}
      </div>

      <footer className="absolute top-[7797px] left-[58px] w-[718px]">
        <img
          className="w-[49px] h-[49px]"
          alt="Image"
          src="https://c.animaapp.com/mgalo8ioJHJdQp/img/image-4.png"
        />

        <p className="absolute top-[64px] left-0 w-[171px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] tracking-[0] leading-[16.2px]">
          Flux Bridge is a global Human Capital Advisory firm headquartered in
          Riyadh, KSA. Since 2017, we've partnered with 100+ clients across 14+
          countries, helping organizations transform people, processes, and
          technology for sustainable success.
        </p>

        <div className="absolute top-0 left-[296px] w-[79px]">
          <h3 className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-[13.9px] tracking-[0] leading-[16.2px]">
            Quick Links
          </h3>
          <nav className="flex flex-col w-[79px] items-start gap-[17.38px] mt-[29px]">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="relative w-fit [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] text-center tracking-[0] leading-[normal] whitespace-nowrap transition-colors hover:text-[#3764ff]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="absolute top-px left-[421px] w-[152px]">
          <h3 className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-[13.9px] tracking-[0] leading-[16.2px]">
            Contact Info
          </h3>
          <div className="flex flex-col w-[152px] items-start gap-[6.95px] mt-[29px]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-0.58px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-[9.3px] tracking-[0] leading-[16.2px]">
                Headquarters (KSA)
              </div>
              <div className="relative w-[136.96px] h-[31.27px] mt-[-0.58px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[6.9px] tracking-[0] leading-[10.4px]">
                Flux Bridge Co. 7783, Ibn Katheer St – King Abdulaziz District
                Riyadh 12233-4264, Kingdom of Saudi Arabia
              </div>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-0.58px] text-[9.3px] leading-[16.2px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white tracking-[0]">
                India
              </div>
              <div className="relative w-[153.24px] h-[33.01px] mr-[-1.50px] mt-[-0.58px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[6.9px] tracking-[0] leading-[10.4px]">
                BLDG No: 2, A3 Station, Unit No: 118 Opposite RUPA SOLITAIRE,
                Millenium Business Park Sector 1, Mahape, Navi Mumbai,
                Maharashtra 400701
              </div>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-0.58px] text-[9.3px] leading-[16.2px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white tracking-[0]">
                UAE:
              </div>
              <div className="relative w-[140.7px] h-[22.01px] mt-[-0.58px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[6.9px] tracking-[0] leading-[10.4px]">
                IFZA Property, Freezone Building A1 Dubai Digital Park, Dubai
                Silicon Oasis, Dubai, UAE
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-[593px]">
          <h3 className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-[13.9px] tracking-[0] leading-[16.2px] whitespace-nowrap">
            Subscribe to Our Newsletter
          </h3>
          <div className="mt-[27px] w-[182px] h-10 flex rounded-[28.96px] border-[0.58px] border-solid border-[#d9d9d9]">
            <div className="flex mt-[4.6px] w-[160.98px] h-[30.7px] ml-[15.7px] relative items-center justify-between">
              <Input
                placeholder="Email"
                className="relative w-fit [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[9.3px] tracking-[0] leading-[16.2px] bg-transparent border-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="flex w-[65.45px] h-[30.7px] items-center justify-center gap-[5.79px] px-[17.95px] py-[8.11px] relative bg-[#3764ff] rounded-[28.96px] transition-transform hover:scale-105">
                <span className="relative w-fit [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[9.3px] tracking-[0] leading-[16.2px] whitespace-nowrap">
                  Subscribe
                </span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col w-[62px] items-start gap-[5.21px] mt-[56px]">
            <h3 className="relative self-stretch mt-[-0.58px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-[13.9px] tracking-[0] leading-[16.2px]">
              Follow Us
            </h3>
            <img
              className="relative w-[24.45px] h-[24.45px]"
              alt="Frame"
              src="https://c.animaapp.com/mgalo8ioJHJdQp/img/frame-59.svg"
            />
          </div>
        </div>

        <img
          className="absolute top-[222px] left-0 w-[718px] h-px"
          alt="Vector"
          src="https://c.animaapp.com/mgalo8ioJHJdQp/img/vector-3386.svg"
        />

        <div className="absolute top-[242px] left-0 [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] tracking-[0] leading-[16.2px] whitespace-nowrap">
          Copyright © 2025 Flux Bridge Co. All Rights Reserved.
        </div>

        <div className="absolute top-[242px] left-[566px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] tracking-[0] leading-[16.2px] whitespace-nowrap">
          Privacy Policy | Terms of Service
        </div>
      </footer>

      <section className="absolute top-[1184px] left-[58px] w-[723px] h-[1089px]">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            {index === 0 ? (
              <div className="absolute top-0 left-0 w-[719px] h-[318px]">
                <img
                  className="absolute top-[57px] left-0 w-[719px] h-[261px]"
                  alt="Rectangle"
                  src="https://c.animaapp.com/mgalo8ioJHJdQp/img/rectangle.svg"
                />
                <Button className="absolute -top-px left-[676px] w-[43px] h-[43px] p-0 bg-transparent border-none transition-transform hover:scale-105">
                  <img
                    className="w-full h-full"
                    alt="Arrow"
                    src="https://c.animaapp.com/mgalo8ioJHJdQp/img/arrow-9.png"
                  />
                </Button>
                <div className="absolute top-[9px] left-[41px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-[#3764ff] text-[17.4px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {service.title}
                </div>
                <div className="top-2.5 left-0 text-white absolute [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[18.5px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {service.number}
                </div>
              </div>
            ) : (
              <>
                <Button
                  className={`absolute w-[41px] h-[41px] p-0 bg-transparent border-none transition-transform hover:scale-105`}
                  style={{
                    top: `${index === 1 ? 318 : index === 2 ? 400 : index === 3 ? 482 : index === 4 ? 568 : index === 5 ? 653 : index === 6 ? 739 : index === 7 ? 825 : index === 8 ? 910 : 996}px`,
                    left: "677px",
                  }}
                >
                  <img
                    className="w-full h-full"
                    alt="Arrow"
                    src={`https://c.animaapp.com/mgalo8ioJHJdQp/img/arrow-${index - 1}.png`}
                  />
                </Button>
                <div
                  className={`absolute left-[40px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-[#ffffff99] text-[17.4px] tracking-[0] leading-[normal] whitespace-nowrap`}
                  style={{
                    top: `${index === 1 ? 329 : index === 2 ? 410 : index === 3 ? 493 : index === 4 ? 578 : index === 5 ? 664 : index === 6 ? 750 : index === 7 ? 836 : index === 8 ? 921 : 1007}px`,
                  }}
                >
                  {service.title}
                </div>
                <div
                  className={`left-0 text-[#ffffff99] absolute [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[18.5px] tracking-[0] leading-[normal] whitespace-nowrap`}
                  style={{
                    top: `${index === 1 ? 328 : index === 2 ? 409 : index === 3 ? 492 : index === 4 ? 577 : index === 5 ? 663 : index === 6 ? 749 : index === 7 ? 834 : index === 8 ? 920 : 1006}px`,
                  }}
                >
                  {service.number}
                </div>
                <img
                  className="absolute left-0 w-[718px] h-px"
                  style={{
                    top: `${index === 1 ? 381 : index === 2 ? 463 : index === 3 ? 545 : index === 4 ? 631 : index === 5 ? 716 : index === 6 ? 802 : index === 7 ? 888 : index === 8 ? 973 : 1059}px`,
                  }}
                  alt="Line"
                  src={
                    index <= 7
                      ? "https://c.animaapp.com/mgalo8ioJHJdQp/img/line.svg"
                      : "https://c.animaapp.com/mgalo8ioJHJdQp/img/line-1.svg"
                  }
                />
              </>
            )}
          </React.Fragment>
        ))}
      </section>

      <article className="flex flex-col w-[300px] items-start gap-[4.05px] absolute top-[843px] left-[58px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <h3 className="relative self-stretch mt-[-0.58px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#3764ff] text-[10.4px] tracking-[0] leading-[16.2px]">
          OUR VISION & MISSION
        </h3>
        <div className="flex flex-col items-start gap-[5.79px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[301.52px] h-6 mr-[-2.00px]">
            <p className="absolute top-px left-[7px] w-[293px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] tracking-[0] leading-[normal]">
              By 2030, we aim to lead in Human Capital Advisory with global
              solutions and local talent.
            </p>
            <div className="absolute top-[5px] left-0 w-[3px] h-[3px] bg-[#3764ff] rounded-[1.26px]" />
          </div>
          <div className="relative w-[301.52px] h-6 mr-[-2.00px]">
            <p className="absolute top-0 left-[7px] w-[293px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] tracking-[0] leading-[normal]">
              Redefining Human Resources as a strategic catalyst for
              organisational potential and success.
            </p>
            <div className="absolute top-1 left-0 w-[3px] h-[3px] bg-[#3764ff] rounded-[1.26px]" />
          </div>
        </div>
      </article>

      <div className="absolute top-[930px] left-[58px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#3764ff] text-[10.4px] tracking-[0] leading-[16.2px] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        OUR VALUES
      </div>

      {values.map((value, index) => (
        <div
          key={index}
          className={`absolute left-[58px] h-3 flex gap-[4.3px] translate-y-[-1rem] animate-fade-in opacity-0`}
          style={{
            top: `${949 + index * 17}px`,
            width:
              index === 0
                ? "218px"
                : index === 1
                  ? "188px"
                  : index === 2
                    ? "185px"
                    : "213px",
            animationDelay: `${700 + index * 100}ms`,
          }}
        >
          <div className="mt-[5.1px] w-[2.52px] h-[2.52px] ml-0 bg-[#3764ff] rounded-[1.26px]" />
          <div
            className="mt-0 h-3 [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[10.4px] tracking-[0] leading-[normal] whitespace-nowrap"
            style={{
              width:
                index === 0
                  ? "209px"
                  : index === 1
                    ? "179px"
                    : index === 2
                      ? "176px"
                      : "204px",
            }}
          >
            {value}
          </div>
        </div>
      ))}

      <article className="flex flex-col w-[290px] items-start gap-[17.38px] absolute top-[5164px] left-[94px]">
        <h3 className="relative w-fit mt-[-0.58px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-[26.6px] tracking-[0] leading-[26.6px]">
          Business / Strategy
          <br />
          Consulting
        </h3>

        <div className="flex flex-col h-[148.85px] items-start justify-between relative self-stretch w-full">
          <div className="flex flex-col items-start gap-[1.74px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-0.58px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#4f76ff] text-[11.6px] tracking-[0] leading-[normal]">
              Organisational Transformation
            </div>
            <p className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[9.3px] tracking-[0] leading-[normal]">
              People, processes, and technology integration
            </p>
          </div>

          <div className="flex flex-col items-start gap-[1.74px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-0.58px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#4f76ff] text-[11.6px] tracking-[0] leading-[normal]">
              Strategy Development
            </div>
            <p className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[9.3px] tracking-[0] leading-[normal]">
              Designing and executing strategies
            </p>
          </div>

          <div className="flex flex-col items-start gap-[1.74px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-0.58px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#4f76ff] text-[11.6px] tracking-[0] leading-[normal]">
              Market & Financial Analysis
            </div>
            <p className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[9.3px] tracking-[0] leading-[normal]">
              Feasibility studies and financial modelling
            </p>
          </div>

          <div className="flex flex-col items-start gap-[1.74px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="self-stretch mt-[-0.58px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#4f76ff] text-[11.6px] relative tracking-[0] leading-[normal]">
              Business Restructuring
            </div>
            <p className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[9.3px] tracking-[0] leading-[normal]">
              Turnaround, expansion, and profitability improvement
            </p>
          </div>
        </div>
      </article>

      <img
        className="absolute w-[2.28%] h-0 top-0 left-[90.53%]"
        alt="Group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/group-18.png"
      />

      <img
        className="absolute w-[4.56%] top-[21px] left-[7.19%] h-[38px]"
        alt="Image"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/image-3.png"
      />

      <img
        className="absolute top-[4733px] left-[98px] w-11 h-11"
        alt="Mask group"
        src="https://c.animaapp.com/mgalo8ioJHJdQp/img/mask-group.png"
      />
    </div>
  );
};
