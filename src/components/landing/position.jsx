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
      <Card className=" p-0 bg-[#ffffff0d] rounded-2xl md:rounded-3xl lg:rounded-[50px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] border-none">
        <CardContent className="p-6 lg:p-10 xl:p-20">
          {/* Header */}
          <div className="w-full mb-6 lg:mb-10 2xl:w-[753px] text-center md:text-left bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-2xl md:text-3xl lg:text-4xl 2xl:text-[56px] leading-tight 2xl:leading-[normal]">
            Key Positions Hired For
            <br />
            Our Esteemed Clients
          </div>

          {/* Responsive layout: stack on mobile, grid on md–xl, precise absolute layout on 2xl+ */}
          <div className="flex gap-8 md:gap-10 xl:gap-25 flex-col md:flex-row md:w-[650px] h-[560px] sm:h-auto lg:w-[800px] xl:w-5xl">
            {/* Left: Key Positions List */}
            <div className="flex flex-col gap-3 lg:gap-4 xl:gap-6 md:w-1/2">
              {keyPositions.map((position, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPosition(position)}
                  className={`${selectedPosition === position ? "bg-[#3764ff] shadow-[0px_0px_2.05px_#3764ff,0px_0px_4.1px_#3764ff,0px_0px_14.35px_#3764ff,0px_0px_28.69px_#3764ff,0px_0px_49.19px_#3764ff]" : "border-[0.5px] border-solid border-white shadow-[0px_4px_52.1px_#00000008]"} rounded-[50px] w-full 2xl:w-[610px] p-2 lg:py-3 xl:py-4 flex items-center justify-center cursor-pointer hover:bg-[#3764ff] transition-colors`}
                >
                  <div className="font-bold text-white text-base lg:text-lg 2xl:text-2xl leading-6 sm:leading-[30px] text-center">
                    {position}
                  </div>
                </div>
              ))}
            </div>

            <div className='relative w-1/2' >

              <div className="absolute -top-3 md:-top-4 left-10 md:left-4 lg:left-6 xl:left-10 rounded-2xl border border-solid border-[#3764ff] size-[260px] md:h-[259px] md:w-[300px] lg:h-[320px] lg:w-[370px] xl:h-[380px] xl:w-[440px] md:rounded-[28.96px] md:border-[0.58px]" />   
            
              
              <div className="absolute flex justify-center">
                <img
                  className="min-w-[290px] sm:min-w-0"
                  alt="Image"
                  src="https://c.animaapp.com/mfvdxb8gInTGFO/img/image.svg"
                />
              </div>

              <div className="absolute left-6 top-6 lg:left-10 lg:top-8 ">
                <div className="2xl:w-[322px] md:max-w-[520px] md:ml-auto font-bold text-white text-sm md:text-base xl:text-lg leading-7 sm:leading-8 2xl:leading-[48px]">
                  {positionData[selectedPosition].map((item, index) => (
                    <div key={index} className=" flex items-center mb-2">
                    
                      <span className="w-[5px] h-[5px] bg-[#3764ff] rounded-[2.45px] mr-3 flex-shrink-0" />
                      <span className="whitespace-nowrap">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
    

              <div className='absolute -bottom-69 md:bottom-6 lg:-bottom-2 xl:bottom-0 left-0'>

                <div className=" w-full mt-4 md:mt-2 flex items-center md:justify-end 2xl:justify-center">
                  <div className=" relative lg:w-[238px] lg:h-[94px] xl:w-[298px] xl:h-[94px] w-[200px] md:w-[192px] md:h-[64px]">
                    <img
                      className=" md:top-0 md:left-0 w-[398px] h-[94px]"
                      alt="Rectangle"
                      src="https://c.animaapp.com/mfvdxb8gInTGFO/img/rectangle-51.svg"
                    />
                    <div className="absolute top-7 lg:top-5 left-12 lg:left-12 xl:left-18 text-xs font-bold text-white lg:text-sm xl:text-lg md:text-[10px]">
                      {selectedPosition}
                    </div>
                    <img
                      className=" absolute top-10 md:top-7 lg:top-6 left-2 xl:w-[54px] xl:h-[54px] size-6 md:w-[31px] md:h-[31px]"
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