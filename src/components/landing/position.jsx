import React from 'react'
import { Card, CardContent } from '../ui/card';

const keyPositions = [
  "Top Executive Leadership",
  "Business & Investment Leadership",
  "Corporate Functions & Governance",
  "Data, Technology & Risk Leadership",
  "Specialised Consultants & Analysts",
];

const KeyPosition = () => {
  return (
    <div className='flex relative items-center justify-center pt-24 sm:pt-32 md:pt-40 px-4 sm:px-6'>
      {/* Decorative blur - hidden on small screens to reduce clutter */}
      <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 sm:w-80 sm:h-80 md:w-[550px] md:h-[550px] bg-[#0017ff] rounded-[40px] md:rounded-[75px] blur-[160px] md:blur-[250px] opacity-65 -z-10" />
      <Card className="w-full max-w-[1350px] 2xl:h-[797px] bg-[#ffffff0d] rounded-2xl md:rounded-[50px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] border-none">
        <CardContent className="p-6 sm:p-8 2xl:p-0 relative">
          {/* Header */}
          <div className="relative 2xl:absolute 2xl:top-[51px] 2xl:left-[calc(50%_-_620px)] w-full 2xl:w-[753px] text-center 2xl:text-left bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent text-2xl sm:text-4xl 2xl:text-[56px] leading-tight 2xl:leading-[normal]">
            Key Positions Hired For
            <br />
            Our Esteemed Clients
          </div>

          {/* Responsive layout: stack on mobile, grid on md–xl, precise absolute layout on 2xl+ */}
          <div className="mt-6 2xl:mt-0 grid grid-cols-1 md:grid md:grid-cols-2 md:gap-8 2xl:block">
            {/* Left: Key Positions List */}
            <div className="mt-6 sm:mt-10 md:mt-4 2xl:mt-0 2xl:absolute 2xl:top-[245px] 2xl:left-[100px] flex flex-col gap-3 sm:gap-[18px]">
              {keyPositions.map((position, index) => (
                <div
                  key={index}
                  className={`${index === 0 ? "bg-[#3764ff] shadow-[0px_0px_2.05px_#3764ff,0px_0px_4.1px_#3764ff,0px_0px_14.35px_#3764ff,0px_0px_28.69px_#3764ff,0px_0px_49.19px_#3764ff]" : "border-[0.5px] border-solid border-white shadow-[0px_4px_52.1px_#00000008]"} rounded-[50px] w-full 2xl:w-[610px] py-3 sm:py-4 2xl:py-0 2xl:h-[83px] flex items-center justify-center cursor-pointer hover:bg-[#3764ff] transition-colors`}
                >
                  <div className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-base sm:text-xl 2xl:text-2xl leading-6 sm:leading-[30px] text-center px-4">
                    {position}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image and overlays */}
            {/* Border box (2xl+) at exact position */}
            <div className="hidden 2xl:block absolute top-[194px] left-[771px] w-[569px] h-[497px] rounded-[50px] border border-solid border-[#3764ff]" />

            {/* Image - responsive on mobile, grid aligned on md–xl, absolute on 2xl */}
            <div className="mt-8 md:mt-0 flex justify-center md:justify-end 2xl:block">
              <img
                className="w-full max-w-[583px] h-auto md:max-w-[520px] lg:max-w-[560px] 2xl:w-[583px] 2xl:h-[524px] 2xl:absolute 2xl:top-[212px] 2xl:left-[740px]"
                alt="Image"
                src="https://c.animaapp.com/mfvdxb8gInTGFO/img/image.svg"
              />
            </div>

            {/* Bottom badge */}
            <div className="relative w-full mt-4 md:mt-2 flex items-center md:justify-end 2xl:justify-center">
              <div className="hidden 2xl:block absolute top-[641px] left-[740px] w-[300px] h-[94px]">
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
              {/* Simplified badge on mobile/tablet */}
              <div className="2xl:hidden flex items-center gap-3 px-4 py-3 rounded-full border border-white/60 bg-[#3764ff]/20">
                <img className="w-7 h-7" alt="Icon" src="https://c.animaapp.com/mfvdxb8gInTGFO/img/icon.svg" />
                <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm sm:text-base">Top Executive Leadership</span>
              </div>
            </div>

            {/* Bullet list to the right of image (md+) or below on mobile */}
            <div className="mt-6 md:mt-4">
              <div className="2xl:absolute 2xl:top-[296px] 2xl:left-[787px] 2xl:w-[322px] relative md:max-w-[520px] md:ml-auto pl-6 [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-base sm:text-lg 2xl:text-xl leading-7 sm:leading-8 2xl:leading-[48px]">
                <span>Chief Operating Officer (COO)</span>
                <br />
                <span>Deputy CFO CHRO</span>
                <br />
                <span>(Chief Human Resources Officer)</span>
                {/* bullets */}
                <span className="absolute top-[10px] left-0 w-[5px] h-[5px] bg-[#3764ff] rounded-[2.45px]" />
                <span className="absolute top-[38px] sm:top-[42px] 2xl:top-[70px] left-0 w-[5px] h-[5px] bg-[#3764ff] rounded-[2.45px]" />
                <span className="absolute top-[66px] sm:top-[74px] 2xl:top-[118px] left-0 w-[5px] h-[5px] bg-[#3764ff] rounded-[2.45px]" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default KeyPosition