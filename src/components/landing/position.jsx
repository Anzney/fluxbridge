"use client"

import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card';

const positionData = {
  "Top Executive Leadership": [
    "Chief Operating Officer (COO)",
    "Deputy CFO CHRO",
    "(Chief Human Resources Officer)"
  ],
  "Business & Investment Leadership": [
    "Head of Investment Banking",
    "Head of Asset Management",
    "Chief of Venture Development",
    "Head of Compliance"
  ],
  "Corporate Functions & Governance": [
    "Head of Procurement",
    "Director of Contracts",
    "PMO Governance Manager"
  ],
  "Data, Technology & Risk Leadership": [
    "Data Modeller Head",
    "Data Protection Head"
  ],
  "Specialised Consultants & Analysts": [
    "SAP QM & PM Consultant",
    "Venture Capital Analyst"
  ]
};

const keyPositions = [
  "Top Executive Leadership",
  "Business & Investment Leadership",
  "Corporate Functions & Governance",
  "Data, Technology & Risk Leadership",
  "Specialised Consultants & Analysts",
];

const KeyPosition = () => {
  const [selectedPosition, setSelectedPosition] = useState(keyPositions[0]);

  return (
    <div className='flex relative items-center justify-center pt-24 sm:pt-32 md:pt-40 px-4 sm:px-6'>
      <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 sm:w-80 sm:h-80 md:w-[550px] md:h-[550px] bg-[#0017ff] rounded-[40px] md:rounded-[75px] blur-[160px] md:blur-[250px] opacity-65 -z-10" />
      <Card className=" p-0   bg-[#ffffff0d] rounded-2xl md:rounded-[50px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] border-none">
        <CardContent className="xl:p-20">
          {/* Header */}
          <div className="w-full mb-10 2xl:w-[753px] text-center md:text-left md:text-[36px] bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-2xl sm:text-4xl 2xl:text-[56px] leading-tight 2xl:leading-[normal]">
            Key Positions Hired For
            <br />
            Our Esteemed Clients
          </div>

          {/* Responsive layout: stack on mobile, grid on md–xl, precise absolute layout on 2xl+ */}
          <div className="flex gap-25 flex-col md:flex-row">
            {/* Left: Key Positions List */}
            <div className="mt-6 sm:mt-10 md:mt-4 2xl:mt-0 flex flex-col gap-3 sm:gap-[18px]">
              {keyPositions.map((position, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPosition(position)}
                  className={`${selectedPosition === position ? "bg-[#3764ff] shadow-[0px_0px_2.05px_#3764ff,0px_0px_4.1px_#3764ff,0px_0px_14.35px_#3764ff,0px_0px_28.69px_#3764ff,0px_0px_49.19px_#3764ff]" : "border-[0.5px] border-solid border-white shadow-[0px_4px_52.1px_#00000008]"} rounded-[50px] w-full 2xl:w-[610px] py-3 sm:py-4 2xl:py-0 2xl:h-[83px] flex items-center justify-center cursor-pointer hover:bg-[#3764ff] transition-colors`}
                >
                  <div className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-base sm:text-xl 2xl:text-2xl leading-6 sm:leading-[30px] text-center px-4">
                    {position}
                  </div>
                </div>
              ))}
            </div>

          <div className='relative w-[600px]' >

          <div className="absolute -top-4 left-5 rounded-[50px] border border-solid border-[#3764ff] xl:w-[569px] xl:h-[497px] md:h-[259px] md:w-[300px] md:rounded-[28.96px] md:border-[0.58px] md:top-14 md:left-4" />   
          
          <div className=" absolute top-0 left-0 mt-8 flex justify-center 2xl:block">
              <img
                className="w-full max-w-[583px] h-auto md:w-[303.22px] md:h-[337.55px] md:max-w-none md:max-h-none lg:max-w-[560px] 2xl:w-[583px] 2xl:h-[524px]"
                alt="Image"
                src="https://c.animaapp.com/mfvdxb8gInTGFO/img/image.svg"
              />
            </div>

            <div className=" absolute left-4 top-6  mt-6 md:top-18 md:left-1">
              <div className=" 2xl:w-[322px] md:max-w-[520px] md:ml-auto md:text-[12px] pl-6 [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-base sm:text-lg 2xl:text-xl leading-7 sm:leading-8 2xl:leading-[48px]">
                {positionData[selectedPosition].map((item, index) => (
                  <div key={index} className=" flex items-center mb-2">
                   
                    <span className="w-[5px] h-[5px] bg-[#3764ff] rounded-[2.45px] mr-3 flex-shrink-0" />
                    <span className="whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </div>
  

            <div className='absolute -bottom-7 left-0 md:bottom-52.25 md:-left-0.20'>

            <div className=" w-full mt-4 md:mt-2 flex items-center md:justify-end 2xl:justify-center">
              <div className=" relative w-[298px] h-[94px] md:w-[172px] md:h-[54px]">
                <img
                  className="top-0 left-0 w-[398px] h-[94px]"
                  alt="Rectangle"
                  src="https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-51.svg"
                />
                <div className=" absolute top-5 left-20 font-bold text-white text-lg text-left md:text-[10px] md:left-20">
                  {selectedPosition}
                </div>
                <img
                  className=" absolute top-6 left-2 w-[54px] h-[54px] md:w-[31px] md:h-[31px]"
                  alt="Icon"
                  src="https://c.animaapp.com/mfvdxb8gInTGFO/img/icon.svg"
                />
              </div>
              
             
            </div>
            </div>
             

          </div>
            
           
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default KeyPosition