import React from 'react'

const Leadership = () => {
  return (
    <div className='relative h-[400px] md:h-screen xl:h-[calc(100vh+200px)] mb-40 overflow-x-clip'>
        {/* Circular Design Elements */}
        <img src="/Group.png" className='absolute' />
        <img src="/Group.png" className='absolute rotate-180' />
        <div className="absolute right-0 top-0 w-[405px] h-[400px] md:h-screen bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px] opacity-75" />
        <div className="absolute left-0 top-0 w-[405px] h-[400px] md:h-screen bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px] opacity-75" />
        
        <img
          className="absolute left-1/2 -translate-x-1/2 md:w-[800px] xl:w-[1201px] md:h-[800px] xl:h-[1201px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/ellipse-4146.svg"
        />

        <img
          className="absolute left-1/2 -translate-x-1/2 top-7 md:top-25 w-[380px] h-[380px] md:w-[600px] xl:w-[1001px] md:h-[600px] xl:h-[1001px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/ellipse-4142.svg"
        />

        <img
          className="absolute left-1/2 -translate-x-1/2 top-16 md:top-50 w-[300px] h-[300px] md:w-[400px] xl:w-[801px] md:h-[400px] xl:h-[801px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/ellipse-4143.svg"
        />

        <img
          className="absolute left-1/2 -translate-x-1/2 top-14 md:top-20 md:w-[600px] xl:w-[1008px] md:h-[600px] xl:h-[1008px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/ellipse-4144.svg"
        />

        <div className="absolute left-1/2 -translate-x-1/2 top-30 md:top-65 xl:top-90 w-[548.9px] mt-[-1.00px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(0,23,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-transparent lg:text-3xl xl:text-5xl text-center tracking-[-0.96px] leading-[normal]">
          Executive Leadership <br/> / Team / Advisor
        </div>
        <img
          className="absolute left-1/2 -translate-x-1/2 w-[340px] md:w-[500px] xl:w-3xl top-30 md:top-70 xl:top-95 z-30"
          alt="Explore images"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/explore-images-container.svg"
        />

        <div className="flex flex-col w-[230px] items-center gap-[3px] absolute left-1/2 -translate-x-1/2 top-70 md:top-125 xl:top-180 z-40 flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white md:text-lg text-center tracking-[-0.36px] leading-[18px]">
            Khalid Abdallah Al-Damegh
          </div>
          <div className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-[#ffffffa6] text-xs leading-[18px] text-center tracking-[0]">
            Leadership Team
          </div>
        </div>
    </div>
  )
}

export default Leadership