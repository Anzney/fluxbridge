import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const industryCards = [
  {
    title: "Banking &\nReal Estate",
    image: "https://c.animaapp.com/mgait8g8g8XVIJ/img/rectangle-61.svg"
  },
  {
    title: "Technology &\nTelecom", 
    image: "https://c.animaapp.com/mgait8g8g8XVIJ/img/rectangle-62.svg"
  },
  {
    title: "Defence &\nManufacturing",
    image: "https://c.animaapp.com/mgait8g8g8XVIJ/img/rectangle-63.svg"
  },
  {
    title: "Construction &\nInfrastructure",
    image: "https://c.animaapp.com/mgait8g8g8XVIJ/img/rectangle-64.svg"
  },
  {
    title: "Retail &\nHospitality",
    image: "https://c.animaapp.com/mgait8g8g8XVIJ/img/rectangle-64-1.svg"
  }
];

const humanCapitalServices = [
  { number: "01", title: "Executive Search/ Recruitment", active: true },
  { number: "02", title: "Structure & Governance" },
  { number: "03", title: "Culture Development" },
  { number: "04", title: "HR Strategy Services" },
  { number: "05", title: "Job Evaluation & Grading Structure" },
  { number: "06", title: "Manpower Outsourcing" },
  { number: "07", title: "Job Evaluation & Grading Structure" },
  { number: "08", title: "Competency - based Organizational transformation" },
  { number: "09", title: "KPIs Developmant/ Performance Management" },
  { number: "10", title: "Reward and Recognition" }
];

const recruitmentSteps = [
  {
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/stat-icon-container-4.svg",
    title: "CandidateOn-Boarding",
    description: ["Support Client on visas  Onboarding support", "Report to work confirmation"],
    position: "right"
  },
  {
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/stat-icon-container-5.svg",
    title: "Understand\nClientneeds",
    description: ["Job profile & Organization dynamics Reward dynamics", "Specific skill sets & Experience"],
    position: "left"
  },
  {
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/stat-icon-container-2.svg",
    title: "Offer Letter",
    description: ["Client to issue offer, Candidate acceptance", "Agree on the joining date withthe candidate"],
    position: "right"
  },
  {
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/stat-icon-container-1.svg",
    title: "Sourcing\nCandidates",
    description: ["Internal database", "Website / Headhunting", "Social media"],
    position: "left"
  },
  {
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/stat-icon-container-3.svg",
    title: "Client Interview",
    description: ["Candidates Telephonic\n/ Physical interview, AEMS to receive interview results"],
    position: "right"
  },
  {
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/stat-icon-container.svg",
    title: "AEMSCandidateScreening",
    description: ["Evaluate competencies & experience fit", "Shortlist & submit to client"],
    position: "left"
  }
];

const keyPositions = [
  { title: "Top Executive Leadership", active: true },
  { title: "Business & Investment Leadership", active: false },
  { title: "Corporate Functions & Governance", active: false },
  { title: "Data, Technology & Risk Leadership", active: false },
  { title: "Specialised Consultants & Analysts", active: false }
];

const learningServices = [
  {
    title: "ASSESSMENTS\n& IDPS",
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/mask-group-2.png",
    active: true
  },
  {
    title: "CULTURE\nMANAGEMENT", 
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/mask-group-3.png",
    active: false
  },
  {
    title: "CHANGE\nENGAGEMENT",
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/mask-group-4.png",
    active: false
  },
  {
    title: "TECHNICAL &\nFUNCTIONAL\nCOMPETENCIES",
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/group-54.png",
    active: false
  },
  {
    title: "LEADERSHIP\nDEVELOPMENT",
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/mask-group-5.png",
    active: false
  },
  {
    title: "EMPLOYEE\nEXPERIENCE",
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/mask-group-6.png",
    active: false
  },
  {
    title: "BEHAVIORAL /\nESSENTIALS SKILLS",
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/mask-group-7.png",
    active: false
  },
  {
    title: "DIVERSITY, EQUITY &\nINCLUSION (DEI)",
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/mask-group-8.png",
    active: false
  },
  {
    title: "ESG - COMPLIANCE &\nGOVERNANCE",
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/mask-group-9.png",
    active: false
  },
  {
    title: "TRAIN THE–\nTRAINER",
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/mask-group-10.png",
    active: false
  },
  {
    title: "SALES & CLIENT\nSERVICE",
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/group-55.png",
    active: false
  },
  {
    title: "EXECUTIVE\nCOACHING",
    icon: "https://c.animaapp.com/mgait8g8g8XVIJ/img/group-56.png",
    active: false
  }
];

const deliveryMethods = [
  { title: "Live In Person\nTraining", position: "top-left" },
  { title: "Live Virtual\nTraining", position: "top-right" },
  { title: "Self Paced E-\nlearning\n(LMS/LXP)", position: "middle-left" },
  { title: "Gamification", position: "middle-right" },
  { title: "Simulations &\nAI based\nlearning", position: "bottom-left" }
];

const serviceCategories = [
  { title: "Human Resources", active: true },
  { title: "Business Consulting", active: false },
  { title: "IT Consulting & Services", active: false },
  { title: "Learning & Development", active: false }
];

const quickLinks = [
  "About Us",
  "Services", 
  "Industries",
  "Global Presence",
  "Client & Partners"
];

const locations = [
  {
    title: "UAE Address",
    address: "IFZA Property, Freezone Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE."
  },
  {
    title: "URiyadh - Kingdom of Saudi Arabia (HQ)",
    address: "Flux Bridge Co 7783, Ibn Katheer St- King Abdulaziz District, Riyadh 12233-4264, Kingdom of Saudi Arabia"
  },
  {
    title: "India",
    address: "BLDG No: 2, A3 Station, Unit No: 118, opposite RUPA SOLITAIRE, Millenium Business Park, Sector 1, Mahape, Navi Mumbai, Maharashtra 400701"
  }
];

export const Mobile = () => {
  return (
    <div
      className="bg-black overflow-hidden w-full min-w-[440px] relative"
      data-model-id="194:2296"
    >
{/* Background decorative elements */}
      <img
        className="absolute h-[4.02%] top-[88.16%] left-[calc(50.00%_-_220px)] w-[440px]"
        alt="Group"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/group.png"
      />
<img
        className="absolute h-[7.44%] top-[66.86%] left-0 w-[440px]"
        alt="Group"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/group-1.png"
      />
<img
        className="absolute h-[7.44%] top-[66.88%] right-[-347px] w-[440px]"
        alt="Group"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/group-2.png"
      />
{/* Blue blur effects */}
      <div className="absolute top-[10982px] left-[calc(50.00%_-_586px)] w-[1185px] h-[517px] flex gap-[756.7px] -rotate-90">
<div className="w-[214.22px] h-[475.61px] ml-0 bg-[#0017ff] rounded-[107.11px/237.8px] blur-[207.54px]" />
<div className="mt-[41.2px] w-[214.22px] h-[475.61px] bg-[#0017ff] rounded-[107.11px/237.8px] blur-[207.54px]" />
</div>
{/* Industry Cards Section */}
      <section className="absolute top-[6804px] left-[58px]">
<div className="flex gap-[17px] overflow-x-auto">
{industryCards.map((card, index) => (
            <Card key={index} className="relative w-[334px] h-[311px] flex-shrink-0 bg-transparent border-0">
<CardContent className="p-0 relative w-full h-full">
<img
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-[30px]"
                  alt="Rectangle"
                  src={card.image}
                />
<div className="absolute top-0 left-0 w-full h-full rounded-[30px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
<div className="absolute bottom-[74px] left-1/2 transform -translate-x-1/2 [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-lg text-center tracking-[0] leading-[normal] whitespace-pre-line">
{card.title}
                </div>
</CardContent>
</Card>
))}
        </div>
</section>
{/* More blue blur effects */}
      <div className="absolute top-[9228px] left-[343px] w-[257px] h-[344px] bg-[#0017ff] rounded-[128.51px/172.24px] blur-[247px]" />
<div className="absolute top-[8726px] -left-36 w-[257px] h-[330px] bg-[#0017ff] rounded-[128.51px/164.77px] blur-[247px]" />
<img
        className="absolute h-[5.53%] top-[54.46%] left-[calc(50.00%_-_220px)] w-[440px]"
        alt="Group"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/group-3.png"
      />
<img
        className="absolute h-[9.11%] top-[26.81%] left-[calc(50.00%_-_220px)] w-[440px]"
        alt="Group"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/group-4.png"
      />
<div className="absolute top-[1597px] left-[341px] w-[312px] h-[527px] bg-[#0017ff] rounded-[155.83px/263.67px] blur-[305.79px]" />
<div className="absolute top-[830px] -left-24 w-[198px] h-[335px] bg-[#0017ff] rounded-[99.09px/167.67px] blur-[194.45px]" />
<img
        className="absolute h-[7.53%] top-[6.02%] left-[calc(50.00%_-_220px)] w-[440px]"
        alt="Group"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/group-5.png"
      />
{/* Hero Section */}
      <section className="absolute top-0 left-[calc(50.00%_-_220px)] w-[440px] h-[1058px]">
<img
          className="w-full h-full"
          alt="Group"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/group-7.png"
        />
{/* Hero blur effects */}
        <div className="absolute top-48 left-[247px] w-[324px] h-[177px] blur-[173.87px] opacity-70">
<div className="absolute top-0 left-0 w-[221px] h-[177px] bg-[#2e4eb3] rounded-[110.5px/88.71px]" />
<div className="absolute top-px left-[103px] w-[221px] h-[177px] bg-[#90abff] rounded-[110.5px/88.71px]" />
</div>
{/* Logo */}
        <img
          className="absolute top-[22px] left-[30px] w-[38px] h-[38px] translate-y-[-1rem] animate-fade-in opacity-0"
          alt="Image"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/image-3.png"
        />
<div className="absolute top-[777px] left-[calc(50.00%_-_481px)] w-[791px] h-[130px] blur-[72.89px] opacity-55">
<div className="absolute top-[53px] left-0 w-[630px] h-[77px] bg-[#2e4eb3] rounded-[314.86px/38.32px]" />
<div className="absolute top-px left-[calc(50.00%_-_234px)] w-[630px] h-[77px] bg-[#90abff] rounded-[314.86px/38.32px]" />
</div>
{/* Hero Content */}
        <div className="flex flex-col w-[380px] items-start gap-[25px] absolute top-[161px] left-[30px]">
<div className="flex flex-col items-start gap-[17px] relative self-stretch w-full flex-[0_0_auto]">
<h1 className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Light',Helvetica] font-light text-transparent text-[45px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Empowering Organizations Through People, Strategy & Innovation
            </h1>
<p className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
Flux Bridge is a global Human Capital and Business Advisory firm
              headquartered in Riyadh, helping organizations redefine success
              through executive recruitment, leadership development, HR strategy,
              and digital transformation.
            </p>
</div>
<div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
<Button className="bg-[#3664fe] h-auto w-[380px] h-11 gap-[7.84px] px-[25.88px] py-[19.61px] rounded-[39.22px] hover:bg-[#2952e6] transition-colors">
<span className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[11px] text-center tracking-[0] leading-[22.0px] whitespace-nowrap">
Explore Our Services
              </span>
</Button>
<Button variant="outline" className="bg-[#ffffff0d] border-[none] backdrop-blur-[9.8px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9.8px)_brightness(100%)] h-auto w-[380px] h-11 gap-[7.84px] px-[25.88px] py-[19.61px] rounded-[39.22px] before:content-[''] before:absolute before:inset-0 before:p-[0.39px] before:rounded-[39.22px] before:[background:linear-gradient(102deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_46%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#ffffff1a] transition-colors">
<span className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-[11px] text-center tracking-[0] leading-[22.0px] whitespace-nowrap">
Get in Touch
              </span>
</Button>
</div>
</div>
</section>
{/* About Section */}
      <section className="absolute top-[954px] left-[30px] w-[380px]">
<h2 className="bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[35px] tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
About Flux Bridge
        </h2>
<p className="absolute top-[55px] left-0 w-[380px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
Founded in 2017 and headquartered in Riyadh, KSA, Flux Bridge is a
          global talent solutions firm connecting exceptional talent with
          opportunity. With 6 global offices and a 30+ member core team, we've
          served 100+ clients across 16 industries and 14 countries, placing 100+
          C-level and management roles. Our track record includes 50+ strategic
          assignments, 600+ trainers, 100+ leaders coached, and 1M+ assessments
          delivered for 140 roles with 85% accuracy. With a 24-day average
          recruitment lead time, we combine strategic planning and speed to
          deliver lasting organizational impact.
        </p>
</section>
{/* Vision & Mission Section */}
      <section className="flex flex-col w-[382px] items-start gap-[26px] absolute top-[1340px] left-[30px]">
<div className="flex flex-col items-start gap-[7px] relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
<h3 className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#3764ff] text-lg tracking-[0] leading-7">
OUR VISION & MISSION
          </h3>
<div className="flex flex-col w-[380px] items-start gap-2.5 relative flex-[0_0_auto]">
<div className="relative w-[382px] h-8 mr-[-2.00px]">
<div className="absolute top-0 left-3 w-[368px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
By 2030, we aim to lead in Human Capital Advisory with global
                solutions and local talent.
              </div>
<div className="absolute top-1.5 left-0 w-1 h-1 bg-[#3764ff] rounded-[2.17px]" />
</div>
<div className="relative w-[382px] h-8 mr-[-2.00px]">
<div className="absolute top-0 left-3 w-[368px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
Redefining Human Resources as a strategic catalyst for
                organisational potential and success.
              </div>
<div className="absolute top-1.5 left-0 w-1 h-1 bg-[#3764ff] rounded-[2.17px]" />
</div>
</div>
</div>
<div className="flex flex-col w-[291.71px] items-start gap-1 relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
<h3 className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#3764ff] text-lg tracking-[0] leading-7">
OUR VALUES
          </h3>
<div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
<div className="relative w-[291.71px] h-4">
<div className="flex w-[292px] items-center gap-[7px] relative">
<div className="relative w-[4.35px] h-[4.35px] bg-[#3764ff] rounded-[2.17px]" />
<div className="relative w-fit mt-[-1.00px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
Customer Focus Dedicated to client success
                </div>
</div>
</div>
<div className="relative w-[251.71px] h-4">
<div className="flex w-[252px] items-center gap-[7px] relative">
<div className="relative w-[4.35px] h-[4.35px] bg-[#3764ff] rounded-[2.17px]" />
<div className="relative w-fit mt-[-1.00px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
Integrity Upholding honesty and ethics
                </div>
</div>
</div>
<div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
<div className="relative w-[4.35px] h-[4.35px] bg-[#3764ff] rounded-[2.17px]" />
<div className="relative w-fit mt-[-1.00px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
Excellence Striving for superior quality
              </div>
</div>
<div className="flex items-center gap-[7px] relative self-stretch w-full flex-[0_0_auto]">
<div className="relative w-[4.35px] h-[4.35px] bg-[#3764ff] rounded-[2.17px]" />
<div className="relative w-fit mt-[-1.00px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
Objectivity Ensuring fair, balanced judgment
              </div>
</div>
</div>
</div>
</section>
{/* Company Image */}
      <div className="absolute top-[1646px] left-8 w-[378px] h-[448px]">
<div className="absolute top-0 left-0 w-[363px] h-[429px] rounded-[30px] border-[0.75px] border-solid border-[#3764ff]" />
<img
          className="absolute top-[11px] left-3 w-[366px] h-[437px]"
          alt="Rectangle"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/rectangle-2.svg"
        />
</div>
{/* Human Capital Services Section */}
      <section className="absolute top-[2231px] left-[calc(50.00%_-_128px)]">
<h2 className="w-64 bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[35px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Our Human Capital Services
        </h2>
</section>
<img
        className="absolute top-[2419px] left-[calc(50.00%_-_190px)] w-[380px] h-[450px]"
        alt="Rectangle"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/rectangle.svg"
      />
{/* Services List */}
      <div className="absolute top-[2335px] left-[30px] w-[380px]">
{humanCapitalServices.map((service, index) => (
          <div key={index} className={`flex items-center justify-between py-4 ${index > 0 ? 'border-t border-white/20' : ''} translate-y-[-1rem] animate-fade-in opacity-0`} style={{'--animation-delay': `${400 + index * 100}ms`}}>
<div className="flex items-center gap-[70px]">
<span className={`[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[32px] tracking-[0] leading-[normal] ${service.active ? 'text-white' : 'text-[#ffffff99]'}`}>
{service.number}
              </span>
<span className={`[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-lg tracking-[0] leading-[normal] ${service.active ? 'text-[#3764ff]' : 'text-[#ffffff99]'}`}>
{service.title}
              </span>
</div>
<img
              className="w-[45px] h-[45px]"
              alt="Arrow"
              src={`https://c.animaapp.com/mgait8g8g8XVIJ/img/arrow${index === 0 ? '-9' : index === 1 ? '-8' : `-${index - 1}`}.png`}
            />
</div>
))}
      </div>
{/* Executive Search Section */}
      <section className="absolute top-[4315px] left-[calc(50.00%_-_146px)]">
<h2 className="bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[35px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Executive Search -<br />
Recruitment Cycle
        </h2>
</section>
<div className="absolute top-[4327px] -left-16 w-[567px] h-[1227px] flex gap-[312.6px]">
<div className="mt-[622.0px] w-[127.41px] h-[604.76px] bg-[#0017ff] rounded-[63.7px/302.38px] blur-[217.5px]" />
<div className="w-[127.41px] h-[604.76px] bg-[#0017ff] rounded-[63.7px/302.38px] blur-[217.5px]" />
</div>
<img
        className="absolute top-[4523px] left-[220px] w-px h-[1068px]"
        alt="Vector"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/vector-3387.svg"
      />
<img
        className="absolute top-[4314px] left-[45px] w-[350px] h-[350px]"
        alt="Group"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/group-27.png"
      />
{/* Recruitment Process Steps */}
      <div className="absolute top-[4605px] left-[30px] w-[380px]">
{recruitmentSteps.map((step, index) => (
          <div key={index} className={`flex items-start gap-4 mb-[161px] translate-y-[-1rem] animate-fade-in opacity-0`} style={{'--animation-delay': `${400 + index * 200}ms`}}>
<img
              className="w-14 h-14 flex-shrink-0"
              alt="Stat icon container"
              src={step.icon}
            />
<div className={`flex-1 ${step.position === 'right' ? 'ml-[204px]' : ''}`}>
<h4 className="[font-family:'Geist',Helvetica] font-medium text-white text-lg tracking-[-0.36px] leading-[19px] mb-3 whitespace-pre-line">
{step.title}
              </h4>
<div className="flex flex-col gap-3">
{step.description.map((desc, descIndex) => (
                  <p key={descIndex} className="[font-family:'Geist',Helvetica] font-normal text-[#cccccc] text-sm tracking-[-0.28px] leading-[normal]">
{desc}
                  </p>
))}
              </div>
</div>
</div>
))}
      </div>
{/* Key Positions Section */}
      <section className="absolute top-[5731px] left-[calc(50.00%_-_190px)] w-[380px] h-[868px] bg-[#ffffff0d] rounded-[30px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
<div className="absolute top-[34px] left-[calc(50.00%_-_146px)] w-[291px] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[35px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Key Positions Hired For Our Esteemed Clients
        </div>
<div className="flex flex-col w-[319px] items-start gap-3.5 absolute top-[199px] left-[31px]">
{keyPositions.map((position, index) => (
            <Button
              key={index}
              variant={position.active ? "default" : "outline"}
              className={`w-[319px] h-[55px] rounded-[50px] ${
                position.active 
                  ? 'bg-[#3764ff] shadow-[0px_0px_2.05px_#3764ff,0px_0px_4.1px_#3764ff,0px_0px_14.35px_#3764ff,0px_0px_28.69px_#3764ff,0px_0px_49.19px_#3764ff] hover:bg-[#2952e6]' 
                  : 'border-white bg-transparent hover:bg-white/10'
              } transition-colors translate-y-[-1rem] animate-fade-in opacity-0`}
              style={{'--animation-delay': `${400 + index * 100}ms`}}
            >
<span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm tracking-[0] leading-[30px]">
{position.title}
              </span>
</Button>
))}
        </div>
<Card className="absolute top-[558px] left-[16px] w-[305px] h-[264px] bg-transparent border border-[#3764ff] rounded-[30px]">
<CardContent className="p-0 relative">
<img
              className="absolute top-[14px] left-[-16px] w-[307px] h-[264px]"
              alt="Image"
              src="https://c.animaapp.com/mgait8g8g8XVIJ/img/image.svg"
            />
<div className="absolute bottom-0 left-[-16px] w-[249px] h-[78px] flex bg-[url(https://c.animaapp.com/mgait8g8g8XVIJ/img/rectangle-51.svg)] bg-[100%_100%]">
<div className="inline-flex mt-[19.7px] w-[189.35px] h-[39.96px] ml-[25.4px] relative items-start gap-5">
<img
                  className="relative w-[39.96px] h-[39.96px]"
                  alt="Icon"
                  src="https://c.animaapp.com/mgait8g8g8XVIJ/img/icon.svg"
                />
<div className="relative w-[129.4px] h-[37.78px] mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-bold text-white text-lg tracking-[0] leading-[19px]">
Top Executive Leadership
                </div>
</div>
</div>
<div className="absolute top-[41px] left-[17px] w-[198px] h-[108px]">
<div className="absolute top-0 left-2.5 [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-9">
Chief Operating Officer (COO)
                <br />
Deputy CFO CHRO
                <br />
(Chief Human Resources Officer)
              </div>
<div className="absolute top-3.5 left-0 w-[5px] h-[5px] bg-[#3764ff] rounded-[2.45px]" />
<div className="absolute top-[51px] left-0 w-[5px] h-[5px] bg-[#3764ff] rounded-[2.45px]" />
<div className="absolute top-[88px] left-0 w-[5px] h-[5px] bg-[#3764ff] rounded-[2.45px]" />
</div>
</CardContent>
</Card>
</section>
{/* Sector Section */}
      <section className="absolute top-[6738px] left-[calc(50.00%_-_52px)]">
<h2 className="bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[35px] text-center tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Sector
        </h2>
</section>
<div className="absolute top-[6755px] left-[387px] w-[105px] h-[486px] bg-[#010101] blur-[47.5px]" />
{/* Learning & Development Section */}
      <section className="absolute top-[7255px] left-[calc(50.00%_-_190px)]">
<h2 className="w-[380px] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[35px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Learning & Development Solutions
        </h2>
</section>
<div className="flex flex-col w-[382px] items-start gap-[18px] absolute top-[7365px] left-[30px]">
<div className="inline-flex flex-col items-start gap-[18px] relative flex-[0_0_auto]">
<div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
{learningServices.slice(0, 2).map((service, index) => (
              <Card key={index} className={`w-[180px] h-[174.35px] ${
                service.active 
                  ? 'bg-[linear-gradient(180deg,rgba(55,100,255,0)_0%,rgba(55,100,255,0.2)_100%)] border-[#3764ff]' 
                  : 'bg-[#d9d9d91a] border-transparent'
              } rounded-[30px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0`} style={{'--animation-delay': `${400 + index * 100}ms`}}>
<CardContent className="flex items-center gap-2.5 p-[31px]">
<div className="flex flex-col items-center gap-[18px]">
<div className={`relative w-[59.8px] h-[59.8px] ${service.active ? 'bg-[#3764ff]' : 'bg-[url(https://c.animaapp.com/mgait8g8g8XVIJ/img/ellipse-4158.svg)] bg-[100%_100%]'} rounded-[29.9px]`}>
<img
                        className="absolute top-[15px] left-[15px] w-[30px] h-[30px]"
                        alt="Mask group"
                        src={service.icon}
                      />
</div>
<div className="relative text-center [font-family:'DM_Sans',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal] whitespace-pre-line">
{service.title}
                    </div>
</div>
</CardContent>
</Card>
))}
          </div>
<div className="flex w-[380px] items-start gap-5 relative flex-[0_0_auto]">
{learningServices.slice(2, 4).map((service, index) => (
              <Card key={index} className="flex-1 h-[174.35px] bg-[#d9d9d91a] border-transparent rounded-[30px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0" style={{'--animation-delay': `${600 + index * 100}ms`}}>
<CardContent className="flex items-center gap-2.5 p-[31px]">
<div className="flex flex-col items-center gap-[18px] w-full">
<div className="relative w-[59.8px] h-[59.8px] bg-[url(https://c.animaapp.com/mgait8g8g8XVIJ/img/ellipse-4165.svg)] bg-[100%_100%]">
<img
                        className="absolute top-[15px] left-[15px] w-[30px] h-[30px]"
                        alt="Mask group"
                        src={service.icon}
                      />
</div>
<div className="relative text-center [font-family:'DM_Sans',Helvetica] font-medium text-white text-xs tracking-[0] leading-[15.8px] whitespace-pre-line">
{service.title}
                    </div>
</div>
</CardContent>
</Card>
))}
          </div>
<div className="flex w-[382px] items-start gap-5 relative flex-[0_0_auto]">
{learningServices.slice(4, 6).map((service, index) => (
              <Card key={index} className="flex-1 h-[174.35px] bg-[#d9d9d91a] border-transparent rounded-[30px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0" style={{'--animation-delay': `${800 + index * 100}ms`}}>
<CardContent className="flex items-center gap-2.5 p-[31px]">
<div className="flex flex-col items-center gap-[18px] w-full">
<div className="relative w-[59.8px] h-[59.8px] bg-[url(https://c.animaapp.com/mgait8g8g8XVIJ/img/ellipse-4165.svg)] bg-[100%_100%]">
<img
                        className="absolute top-3.5 left-3.5 w-8 h-8"
                        alt="Mask group"
                        src={service.icon}
                      />
</div>
<div className="relative text-center [font-family:'DM_Sans',Helvetica] font-bold text-white text-xs tracking-[0] leading-[15.8px] whitespace-pre-line">
{service.title}
                    </div>
</div>
</CardContent>
</Card>
))}
          </div>
</div>
<div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
<div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
{learningServices.slice(6, 8).map((service, index) => (
              <Card key={index} className="flex-1 h-[174.35px] bg-[#d9d9d91a] border-transparent rounded-[30px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0" style={{'--animation-delay': `${1000 + index * 100}ms`}}>
<CardContent className="flex items-center gap-2.5 p-[25px]">
<div className="flex flex-col items-center gap-[18px] w-full">
<div className="relative w-[59.8px] h-[59.8px] bg-[url(https://c.animaapp.com/mgait8g8g8XVIJ/img/ellipse-4165.svg)] bg-[100%_100%]">
<img
                        className="absolute top-[15px] left-[15px] w-[29px] h-[29px]"
                        alt="Mask group"
                        src={service.icon}
                      />
</div>
<div className="relative text-center [font-family:'DM_Sans',Helvetica] font-medium text-white text-xs tracking-[0] leading-[15.8px] whitespace-pre-line">
{service.title}
                    </div>
</div>
</CardContent>
</Card>
))}
          </div>
<div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
{learningServices.slice(8, 10).map((service, index) => (
              <Card key={index} className="flex-1 h-[174.35px] bg-[#d9d9d91a] border-transparent rounded-[30px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0" style={{'--animation-delay': `${1200 + index * 100}ms`}}>
<CardContent className="flex items-center gap-2.5 p-[20px]">
<div className="flex flex-col items-center gap-[18px] w-full">
<div className="relative w-[59.8px] h-[59.8px] bg-[url(https://c.animaapp.com/mgait8g8g8XVIJ/img/ellipse-4164.svg)] bg-[100%_100%]">
<img
                        className="absolute top-3.5 left-3.5 w-8 h-8"
                        alt="Mask group"
                        src={service.icon}
                      />
</div>
<div className="relative text-center [font-family:'DM_Sans',Helvetica] font-bold text-white text-xs tracking-[0] leading-[15.8px] whitespace-pre-line">
{service.title}
                    </div>
</div>
</CardContent>
</Card>
))}
          </div>
<div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
{learningServices.slice(10, 12).map((service, index) => (
              <Card key={index} className="flex-1 h-[174.35px] bg-[#d9d9d91a] border-transparent rounded-[30px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0" style={{'--animation-delay': `${1400 + index * 100}ms`}}>
<CardContent className="flex items-center gap-2.5 p-[32px]">
<div className="flex flex-col items-center gap-[18px] w-full">
<img
                      className="relative w-[59.8px] h-[59.8px]"
                      alt="Group"
                      src={service.icon}
                    />
<div className="relative text-center [font-family:'DM_Sans',Helvetica] font-medium text-white text-xs tracking-[0] leading-[15.8px] whitespace-pre-line">
{service.title}
                    </div>
</div>
</CardContent>
</Card>
))}
          </div>
</div>
</div>
{/* Omni-Channel Delivery Section */}
      <section className="absolute top-[8696px] left-[calc(50.00%_-_114px)]">
<h2 className="bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[35px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Omni-Channel<br />Delivery
        </h2>
</section>
<img
        className="absolute top-[8799px] left-[calc(50.00%_-_85px)] w-[171px] h-[616px]"
        alt="Group"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/group-57.png"
      />
{/* Delivery Methods */}
      <div className="absolute top-[8828px] left-[30px] w-[380px]">
{deliveryMethods.map((method, index) => (
          <div key={index} className={`absolute [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal] whitespace-pre-line translate-y-[-1rem] animate-fade-in opacity-0 ${
            method.position === 'top-left' ? 'top-0 left-[7px]' :
            method.position === 'top-right' ? 'top-[133px] left-[289px]' :
            method.position === 'middle-left' ? 'top-[249px] left-[10px]' :
            method.position === 'middle-right' ? 'top-[400px] left-[289px] text-center' :
            'top-[513px] left-[7px]'
          }`} style={{'--animation-delay': `${400 + index * 200}ms`}}>
{method.title}
          </div>
))}
      </div>
{/* Strategy & Business Transformation Section */}
      <section className="absolute top-[9594px] left-[calc(50.00%_-_158px)]">
<h2 className="bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[35px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Strategy & Business<br />Transformation
        </h2>
</section>
<img
        className="absolute top-[9695px] left-[30px] w-[380px] h-[844px]"
        alt="Union"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/union.svg"
      />
<div className="flex flex-col w-[297px] h-[309px] items-start gap-4 absolute top-[9830px] left-[62px]">
<h3 className="relative w-fit mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Business / Strategy<br />Consulting
        </h3>
<div className="flex flex-col w-[297px] h-[257px] items-start gap-[19px] relative mb-[-18.00px]">
<div className="flex flex-col items-start gap-[3px] relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
<h4 className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#4f76ff] text-lg tracking-[0] leading-[normal]">
Organisational Transformation
            </h4>
<p className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
People, processes, and technology integration
            </p>
</div>
<div className="flex flex-col items-start gap-[3px] relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
<h4 className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#4f76ff] text-lg tracking-[0] leading-[normal]">
Strategy Development
            </h4>
<p className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
Designing and executing strategies
            </p>
</div>
<div className="flex flex-col items-start gap-[3px] relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
<h4 className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#4f76ff] text-lg tracking-[0] leading-[normal]">
Market & Financial Analysis
            </h4>
<p className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
Feasibility studies and financial modelling
            </p>
</div>
<div className="flex flex-col w-64 items-start gap-[3px] relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
<h4 className="self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-[#4f76ff] text-lg relative tracking-[0] leading-[normal]">
Business Restructuring
            </h4>
<p className="relative w-[250.24px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
Turnaround, expansion, and profitability improvement
            </p>
</div>
</div>
</div>
<img
        className="absolute top-[10166px] left-[58px] w-[323px] h-[348px]"
        alt="Rectangle"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/rectangle-82.svg"
      />
<div className="absolute top-[9719px] left-[calc(50.00%_-_96px)] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
Business / Strategy Consulting
      </div>
<div className="flex w-[560px] items-center justify-center gap-[290px] absolute top-[9719px] left-[-85px] opacity-40">
<div className="relative w-fit mt-[-1.00px] ml-[-0.11px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
Strategic Alliances & Startups
        </div>
<div className="relative w-fit mt-[-1.00px] mr-[-0.11px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-xs whitespace-nowrap text-white text-center tracking-[0] leading-[normal]">
Technology & Digital
        </div>
</div>
<div className="absolute top-[9701px] left-[409px] w-[61px] h-[53px] bg-[#01020b] blur-[15px]" />
<div className="absolute top-[9701px] left-[-31px] w-[61px] h-[53px] bg-[#01020b] blur-[15px]" />
{/* Circular Design Elements */}
      <div className="absolute top-[10567px] left-[calc(50.00%_-_681px)] w-[1361px] h-[1361px]">
<div className="absolute top-[calc(50.00%_-_487px)] left-[calc(50.00%_-_487px)] w-[974px] h-[974px] bg-[#01091a03] rounded-[486.83px] border-[0.81px] border-solid border-black rotate-90" />
<img
          className="absolute top-[calc(50.00%_-_486px)] left-[calc(50.00%_-_220px)] w-[440px] h-[973px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/ellipse-4146.svg"
        />
<img
          className="absolute top-[calc(50.00%_-_405px)] left-[calc(50.00%_-_220px)] w-[440px] h-[811px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/ellipse-4142.svg"
        />
<div className="absolute top-[calc(50.00%_-_406px)] left-[calc(50.00%_-_406px)] w-[812px] h-[812px] rounded-[405.86px] border-[0.81px] border-solid border-black rotate-45 blur-[40.49px]" />
<img
          className="absolute top-[calc(50.00%_-_324px)] left-[calc(50.00%_-_220px)] w-[440px] h-[649px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/ellipse-4143.svg"
        />
<img
          className="absolute top-[calc(50.00%_-_408px)] left-[calc(50.00%_-_220px)] w-[440px] h-[816px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/ellipse-4144.svg"
        />
</div>
{/* Executive Leadership Section */}
      <section className="flex flex-col w-[853px] items-center gap-[33px] absolute top-[11087px] left-[calc(50.00%_-_426px)]">
<div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
<h2 className="relative w-[366.58px] mt-[-1.00px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(0,23,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[35px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Executive Leadership/ Team/ Advisor
          </h2>
</div>
<img
          className="relative w-[440px] flex-[0_0_auto] mt-[-5.33px] mb-[-46.75px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
          alt="Explore images"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/explore-images-container.svg"
        />
<div className="flex flex-col w-[230px] items-center gap-[3px] relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
<h3 className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-lg text-center tracking-[-0.36px] leading-[18px]">
Khalid Abdallah Al-Damegh
          </h3>
<p className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-[#ffffffa6] leading-[18px] relative self-stretch text-xs text-center tracking-[0]">
Leadership Team
          </p>
</div>
</section>
<img
        className="absolute top-[12051px] left-[calc(50.00%_-_220px)] w-[440px] h-[214px]"
        alt="Frame"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/frame-45.svg"
      />
<section className="absolute top-[11955px] left-[calc(50.00%_-_127px)]">
<h2 className="w-[253px] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[35px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Omni-Channel Delivery
        </h2>
</section>
<div className="absolute top-[12587px] left-[calc(50.00%_-_140px)] w-[405px] h-[685px] bg-[#0017ffbf] rounded-[202.31px/342.31px] -rotate-90 blur-[397px]" />
{/* Global Presence Section */}
      <section className="absolute top-[12412px] left-[calc(50.00%_-_190px)] w-[380px] h-[1485px] bg-[#ffffff0d] rounded-[30px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
<div className="absolute top-[30px] left-[calc(50.00%_-_159px)] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[35px] tracking-[0] leading-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Our Global<br />Presence
        </div>
<img
          className="absolute top-[24px] left-[252px] w-[101px] h-[77px]"
          alt="Mask group"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/mask-group.png"
        />
<img
          className="absolute top-[123px] left-0 w-[380px] h-[871px]"
          alt="Mask group"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/mask-group-1.png"
        />
{/* Location Cards */}
        <div className="absolute top-[1003px] left-[20px] w-[340px] space-y-4">
{locations.map((location, index) => (
            <Card key={index} className="w-[336px] bg-[#d9d9d90d] border border-[#ffffff0f] rounded-[30px] translate-y-[-1rem] animate-fade-in opacity-0" style={{'--animation-delay': `${400 + index * 200}ms`}}>
<CardContent className="flex flex-col items-start gap-1.5 p-[26px]">
<h4 className="text-lg leading-[normal] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white tracking-[0]">
{location.title}
                </h4>
<p className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
{location.address}
                </p>
</CardContent>
</Card>
))}
        </div>
{/* Service Categories */}
        <div className="inline-flex flex-col items-start justify-center gap-[15px] absolute top-[1738px] left-0">
<div className="flex w-[380px] items-center gap-5 relative flex-[0_0_auto]">
{serviceCategories.slice(0, 2).map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`w-[180px] h-[57px] gap-2.5 px-[39px] py-2.5 rounded-[50px] ${
                  category.active 
                    ? 'bg-[#3764ff] hover:bg-[#2952e6]' 
                    : 'bg-[#ffffff03] border-transparent hover:bg-white/10'
                } transition-colors translate-y-[-1rem] animate-fade-in opacity-0`}
                style={{'--animation-delay': `${800 + index * 100}ms`}}
              >
<span className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[normal]">
{category.title}
                </span>
</Button>
))}
          </div>
<div className="flex w-[380px] items-center gap-5 relative flex-[0_0_auto]">
{serviceCategories.slice(2, 4).map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-[180px] h-[57px] gap-2.5 px-[39px] py-2.5 bg-[#ffffff03] border-transparent rounded-[50px] hover:bg-white/10 transition-colors translate-y-[-1rem] animate-fade-in opacity-0"
                style={{'--animation-delay': `${1000 + index * 100}ms`}}
              >
<span className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[normal]">
{category.title}
                </span>
</Button>
))}
          </div>
</div>
</section>
<section className="absolute top-[14040px] left-[calc(50.00%_-_127px)]">
<h2 className="w-[253px] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-[35px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Strategic Global Partners
        </h2>
</section>
<img
        className="absolute top-[14322px] left-7 w-[380px] h-[246px]"
        alt="Frame"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/frame-128.svg"
      />
<div className="absolute top-[14408px] left-[calc(50.00%_-_14px)] w-[275px] h-[500px] bg-[#0017ffbf] rounded-[137.26px/249.88px] -rotate-90 blur-[248.5px]" />
{/* Footer Section */}
      <footer className="absolute left-[calc(50.00%_-_220px)] bottom-[77px] w-[440px] h-[1073px] bg-[#ffffff1a] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
<img
          className="absolute top-[77px] left-[calc(50.00%_-_190px)] w-[57px] h-[57px]"
          alt="Image"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/image-4.png"
        />
<p className="absolute top-[152px] left-[30px] w-[380px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
Flux Bridge is a global Human Capital Advisory firm headquartered in
          Riyadh, KSA. Since 2017, we've partnered with 100+ clients across 14+
          countries, helping organizations transform people, processes, and
          technology for sustainable success.
        </p>
{/* Newsletter Section */}
        <div className="absolute top-[352px] left-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
<h3 className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-7 whitespace-nowrap mb-[27px]">
Subscribe to Our Newsletter
          </h3>
<div className="flex w-[379px] h-[70px] rounded-[50px] border border-solid border-[#d9d9d9] overflow-hidden">
<Input
              placeholder="Email"
              className="flex-1 bg-transparent border-0 text-white placeholder:text-white [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-base tracking-[0] leading-7 px-6"
            />
<Button className="w-[113px] h-[53px] bg-[#3764ff] rounded-[50px] m-2 hover:bg-[#2952e6] transition-colors">
<span className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-7">
Subscribe
              </span>
</Button>
</div>
</div>
{/* Social Media */}
        <div className="flex flex-col w-[107px] items-start gap-[5px] absolute top-[498px] left-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
<h3 className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-7">
Follow Us
          </h3>
<img
            className="relative w-[42.22px] h-[42.22px]"
            alt="Frame"
            src="https://c.animaapp.com/mgait8g8g8XVIJ/img/frame-59.svg"
          />
</div>
{/* Quick Links */}
        <div className="flex flex-col w-[114px] items-start gap-[18px] absolute top-[620px] left-[calc(50.00%_-_190px)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
<h3 className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-7">
Quick Links
          </h3>
<div className="flex flex-col items-start justify-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
{quickLinks.map((link, index) => (
              <a key={index} href="#" className="relative w-fit [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#3764ff] transition-colors">
{link}
              </a>
))}
          </div>
</div>
{/* Contact Info */}
        <div className="flex flex-col w-[200px] items-start gap-[13px] absolute top-[620px] left-[210px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
<h3 className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-7">
Contact Info
          </h3>
<div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
<div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
<h4 className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-7">
Headquarters (KSA)
              </h4>
<p className="relative w-[199.37px] h-[70.24px] -mt-px [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px]">
Flux Bridge Co. 7783, Ibn Katheer St – King Abdulaziz District
                Riyadh 12233-4264, Kingdom of Saudi Arabia
              </p>
</div>
<div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
<h4 className="text-base leading-7 relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white tracking-[0]">
India
              </h4>
<p className="relative self-stretch h-[72px] -mt-px [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px]">
BLDG No: 2, A3 Station, Unit No: 118 Opposite RUPA SOLITAIRE,
                Millenium Business Park Sector 1, Mahape, Navi Mumbai, Maharashtra
                400701
              </p>
</div>
<div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
<h4 className="text-base leading-7 relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white tracking-[0]">
UAE:
              </h4>
<p className="relative self-stretch h-[54px] -mt-px [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px]">
IFZA Property, Freezone Building A1 Dubai Digital Park, Dubai
                Silicon Oasis, Dubai, UAE
              </p>
</div>
</div>
</div>
{/* Footer Bottom */}
        <img
          className="absolute top-[1005px] left-[30px] w-[380px] h-px object-cover"
          alt="Vector"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/vector-3388.svg"
        />
<div className="flex flex-col w-[337px] items-center gap-[11px] absolute top-[1032px] left-[52px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
<p className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[normal]">
Copyright © 2025 Flux Bridge Co. All Rights Reserved.
          </p>
<p className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-7">
Privacy Policy | Terms of Service
          </p>
</div>
</footer>
<img
        className="absolute w-[4.32%] h-0 top-0 left-[88.86%]"
        alt="Group"
        src="https://c.animaapp.com/mgait8g8g8XVIJ/img/group-6.png"
      />
</div>
);
};
