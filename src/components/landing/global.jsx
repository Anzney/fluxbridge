import React from 'react'
import { Card, CardContent } from '../ui/card'

const GlobalPresence = () => {
  return (
    <div className="relative flex items-center justify-center h-full mb-10 px-4 sm:px-6 md:px-8">
      <Card className="relative w-full max-w-[1350px] bg-[#ffffff0d] rounded-3xl md:rounded-[50px] backdrop-blur-[25px] border-none overflow-hidden">
        <CardContent className="p-0">
          {/* Map Section with overlaid header */}
          <div className="relative w-full pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-45">
            {/* Overlaid header */}
            <div className="absolute top-2 md:top-2 left-4 right-4 z-10 flex items-center justify-between gap-3">
              <h2 className="bg-[linear-gradient(127deg,rgba(55,100,255,1)_0%,rgba(255,255,255,1)_100%)] bg-clip-text text-transparent font-normal leading-tight lg:leading-[1.1] text-3xl sm:text-4xl md:text-[42px] lg:text-[56px] md:whitespace-nowrap">
                Our Global
                <br className="sm:block md:hidden" />
                <span className="md:hidden">Presence</span>
                <span className="hidden md:inline md:ml-4 lg:ml-6">Presence</span>
              </h2>
              <img
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto shrink-0"
                alt="Vision 2030"
                src="https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-5.png"
              />
            </div>
            {/* Background map image */}
            <img
              className="w-full h-auto"
              alt="Global Map"
              src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-17.png"
            />

            {/* Location markers and labels */}
            <div className="absolute inset-0 pt-20 md:pt-28 lg:pt-32">
              {/* Seattle */}
              <div className="absolute top-[42%] left-[15%] hidden md:flex flex-col items-center gap-1">
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  alt="Location Pin"
                  src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector.svg"
                />
                <div className="text-white text-xs font-bold text-center whitespace-nowrap">
                  Seattle<br/>USA
                </div>
              </div>

              {/* Hounslow, UK */}
              <div className="absolute top-[40%] left-[44%] flex flex-col items-center gap-1">
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  alt="Location Pin"
                  src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector.svg"
                />
                <div className="text-white text-[10px] sm:text-xs md:text-sm font-bold text-center whitespace-nowrap">
                  Hounslow<br/>UK
                </div>
              </div>

              {/* Riyadh, KSA (HQ) */}
              <div className="absolute top-[53%] left-[54%] flex flex-col items-center gap-1">
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  alt="Location Pin"
                  src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector.svg"
                />
                <div className="text-white text-[10px] sm:text-xs md:text-sm font-bold text-center whitespace-nowrap mt-7 ml-[-1px]">
                  Riyadh, Kingdom of<br/>Saudia Arabia (HQ)
                </div>
              </div>

              {/* Dubai, UAE */}
              <div className="absolute top-[52%] left-[59%] hidden sm:flex flex-col-reverse items-center gap-1">
                <img
                  className="w-1 h-3 md:w-8 md:h-8"
                  alt="Location Pin"
                  src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector.svg"
                />
                <div className="text-white text-[10px] sm:text-xs md:text-sm font-bold text-center whitespace-nowrap">
                  Dubai, UAE
                </div>
              </div>

              {/* Oman */}
              <div className="absolute top-[53%] left-[61%] hidden sm:flex flex-col items-center gap-1">
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  alt="Location Pin"
                  src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector.svg"
                />
                <div className="text-white text-[10px] sm:text-xs md:text-sm font-bold text-center whitespace-nowrap">
                  Oman
                </div>
              </div>

              {/* Mumbai, India */}
              <div className="absolute top-[54.1%] left-[65.3%] hidden sm:flex flex-col items-center gap-1">
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  alt="Location Pin"
                  src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector.svg"
                />
                <div className="text-white text-[5px] sm:text-xs md:text-sm font-bold text-center whitespace-nowrap">
                  Mumbai<br/>India
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        {/* Address section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 md:gap-5 px-4 md:px-8 lg:px-10 mt-4 md:mt-6 lg:mt-0 pb-6 lg:absolute lg:left-10 lg:bottom-10 lg:right-10">
          {[
            {
              title: 'UAE Address',
              text: 'IFZA Property, Freezone Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE.',
            },
            {
              title: 'Riyadh - Kingdom of Saudi Arabia (HQ)',
              text: 'Flux Bridge Co 7783, Ibn Katheer St - King Abdulaziz District, Riyadh 12233-4264 Kingdom of Saudi Arabia',
            },
            {
              title: 'India',
              text: 'BLDG No: 2, A3 Station, Unit No: 118, opposite RUPA SOLITAIRE, Millenium Business Park, Sector 1, Mahape, Navi Mumbai, Maharashtra 400701.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 sm:p-6 md:p-6 lg:p-8 rounded-2xl backdrop-blur-xl bg-white/10 ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] lg:bg-[#d9d9d9]/5 lg:ring-0 lg:shadow-none h-full"
            >
              <p className="text-white font-semibold text-base sm:text-lg">{item.title}</p>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mt-1.5">{item.text}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default GlobalPresence
