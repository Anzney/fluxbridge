import React from 'react'
import Image from 'next/image'

const ExecutiveSearchSection = () => {
  const steps = [
    {
      number: 1,
      title: "Understand Client Needs",
      icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-2.svg",
      details: [
        "Job profile & Organization Reward dynamics",
        "Specific skill sets & Experience"
      ]
    },
    {
      number: 2,
      title: "Sourcing Candidates",
      icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-1.svg",
      details: [
        "Internal database",
        "Website / Head hunting",
        "Social media"
      ]
    },
    {
      number: 3,
      title: "AEMS Candidate Screening",
      icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-3.svg",
      details: [
        "Evaluate competencies & experience fit",
        "Shortlist & submit to client"
      ]
    },
    {
      number: 4,
      title: "Client Interview",
      icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-4.svg",
      details: [
        "Candidates Telephonic / Physical interview, AEMS to receive interview results"
      ]
    },
    {
      number: 5,
      title: "Offer Letter",
      icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container.svg",
      details: [
        "Client to issue offer, Candidate acceptance",
        "Agree on the joining date withthe candidate"
      ]
    },
    {
      number: 6,
      title: "Candidate On-Boarding",
      icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-5.svg",
      details: [
        "Support Client on visas Onboarding support",
        "Report to work confirmation"
      ]
    }
  ];

  return (
    <div className="min-h-screen h-full flex flex-col gap-6 md:gap-10 py-12 md:py-20 px-4 md:px-0"
      style={{
        backgroundImage: 'url(/Group.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    > 

      <div className="bg-gradient-to-r from-[rgb(55,100,255,1)] to-white bg-clip-text font-normal text-transparent text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] text-center md:translate-y-[-1rem] md:px-4">
        Executive Search - Recruitment Cycle
      </div>

      {/* Mobile Layout - Vertical Cards */}
      <div className='md:hidden flex flex-col items-center gap-6 w-full max-w-md mx-auto pb-8'>
        {/* Center Logo */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#0e003b] to-[#0017ff] shadow-2xl flex items-center justify-center ">
            <Image width={60} height={60} src="/logo.png" alt="logo" className="w-16 h-16" />
          </div>
          <div className="absolute inset-0 w-24 h-24 bg-[#0017ff] rounded-full blur-2xl opacity-50 -z-10" />
        </div>

        {/* Step Cards */}
        {steps.map((step, index) => (
          <div key={step.number} className="relative w-full">
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="absolute left-[29px] top-[60px] w-0.5 h-[calc(100%+8px)] bg-gradient-to-b from-blue-500 to-transparent z-0" />
            )}
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-[#0e003b]/80 to-[#0017ff]/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              {/* Number Badge & Icon */}
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 flex items-center gap-3">
                  <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-white font-medium text-lg leading-tight [font-family:'Geist',Helvetica] mb-1">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-2 pl-2">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <p className="text-[#cccccc] text-sm leading-relaxed [font-family:'Geist',Helvetica]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/Tablet Layout - Circular */}
      <div className='hidden md:block relative h-full flex-1'>

        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-[#0017ff] rounded-[75px] blur-[50px]" /> 
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-white rounded-[50px] blur-[25px]" />
        <div className="absolute z-50 h-20 w-20 rounded-full bg-gradient-to-b from-[#0e003b] to-[#0017ff] shadow-2xl top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
          <Image width={50} height={50} src="/logo.png" alt="logo" className="h-14 w-14 mt-3 ml-3 " />
        </div>

        <div className="absolute left-[1246px] w-[405px] h-[685px] bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px] opacity-75" />
        <div className="absolute left-[-230px] w-[405px] h-[685px] bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px] opacity-75" />
        
        <img
          className="absolute md:left-[calc(50%-160px)] lg:left-[calc(50%-200px)] xl:left-[calc(50%-260px)] top-[calc(50%-142px)] -translate-y-1/2 md:w-[160px] md:h-[128px] lg:w-[200px] lg:h-[160px] xl:w-[252px] xl:h-[203px]"
          alt="Vector"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector-3379.svg"
        />

        <img
          className="absolute md:left-[calc(50%-160px)] lg:left-[calc(50%-200px)] xl:left-[calc(50%-260px)] md:top-[calc(50%+75px)] lg:top-[calc(50%+30px)] xl:top-[calc(50%+40px)] md:w-[160px] md:h-[136px] lg:w-[200px] lg:h-[170px] xl:w-[252px] xl:h-[215px]"
          alt="Vector"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector-3380.svg"
        />

        <img
          className="absolute md:left-[calc(50%+4px)] lg:left-[calc(50%+5px)] xl:left-[calc(50.00%+8px)] top-[calc(50%-142px)] -translate-y-1/2 md:w-[160px] md:h-[126px] lg:w-[200px] lg:h-[158px] xl:w-[252px] xl:h-[200px]"
          alt="Vector"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector-3379-1.svg"
        />

        <img
          className="absolute md:left-[calc(50%+4px)] lg:left-[calc(50%+5px)] xl:left-[calc(50.00%_+_8px)] md:top-[calc(50%+70px)] lg:top-[calc(50%+30px)] xl:top-[calc(50%+40px)] md:w-[160px] md:h-[142px] lg:w-[200px] lg:h-[178px] xl:w-[252px] xl:h-[225px]"
          alt="Vector"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/vector-3380-1.svg"
        />

        <img 
          className='absolute md:left-[calc(50%-170px)] lg:left-[calc(50%-210px)] xl:left-[calc(50%-270px)] top-1/2 md:w-[150px] lg:w-[180px] md:h-auto lg:h-auto xl:w-auto'
          alt="Vector"
          src="/Vector-5.png"
        />

        <img 
          className='absolute md:left-[calc(50%+25px)] lg:left-[calc(50%+30px)] xl:left-[calc(50%+40px)] top-1/2 md:w-[150px] lg:w-[180px] md:h-auto lg:h-auto xl:w-auto'
          alt="Vector"
          src="/Vector-5.png"
        />

        <div className="flex flex-col md:w-[200px] lg:w-[250px] xl:w-[250px] items-start gap-0.5 absolute md:left-[calc(50%-360px)] lg:left-[calc(50%-480px)] xl:left-[calc(50%-580px)] md:top-[calc(50%-250px)] lg:top-[calc(50%-300px)] xl:top-[calc(50%-300px)]">
          <div className="font-medium md:text-base lg:text-lg xl:text-xl tracking-[-0.48px] md:leading-6 lg:leading-9 xl:leading-9 relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
            Candidate On-Boarding
          </div>
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="font-normal md:text-sm lg:text-base xl:text-lg tracking-[-0.36px] md:leading-5 lg:leading-[normal] xl:leading-[normal] relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
              Support Client on visas Onboarding support
            </div>
            <div className="text-white md:leading-5 lg:leading-[27px] xl:leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal md:text-sm lg:text-base xl:text-lg tracking-[-0.36px]">
              Report to work confirmation
            </div>
          </div>
        </div>

        <img
          className="absolute md:top-[calc(50%-220px)] lg:top-[calc(50%-245px)] xl:top-[calc(50%-265px)] md:left-[calc(50%-175px)] lg:left-[calc(50%-215px)] xl:left-[calc(50%-275px)] md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
          alt="Stat icon container"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-5.svg"
        />

        <div className="flex flex-col md:w-[200px] lg:w-[250px] xl:w-[250px] items-end gap-0.5 absolute md:top-[calc(50%-60px)] lg:top-[calc(50%-70px)] xl:top-[calc(50%-70px)] md:left-[calc(50%-360px)] lg:left-[calc(50%-480px)] xl:left-[calc(50%-580px)] ">
          <div className="font-medium md:text-base lg:text-lg xl:text-xl tracking-[-0.48px] md:leading-6 lg:leading-9 xl:leading-9 relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
            Offer Letter
          </div>
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="md:text-sm lg:text-base xl:text-lg tracking-[-0.36px] md:leading-5 lg:leading-[normal] xl:leading-[normal] relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
              Client to issue offer, Candidate acceptance
            </div>
            <div className="text-white md:leading-5 lg:leading-[27px] xl:leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal md:text-sm lg:text-base xl:text-lg tracking-[-0.36px]">
              Agree on the joining date withthe candidate
            </div>
          </div>
        </div>

        <img
          className="absolute md:top-[calc(50%-15px)] lg:top-[calc(50%-20px)] xl:top-[calc(50%-20px)] md:left-[calc(50%-175px)] lg:left-[calc(50%-215px)] xl:left-[calc(50%-275px)] md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
          alt="Stat icon container"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container.svg"
        />

        <div className="flex flex-col md:w-[200px] lg:w-60 xl:w-60 items-start gap-0.5 absolute md:top-[calc(50%+145px)] lg:top-[calc(50%+175px)] xl:top-[calc(50%+175px)] md:left-[calc(50%-360px)] lg:left-[calc(50%-480px)] xl:left-[calc(50%-580px)]">
          <div className="font-medium md:text-base lg:text-lg xl:text-xl tracking-[-0.48px] md:leading-6 lg:leading-9 xl:leading-9 relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
            Client Interview
          </div>
          <div className="text-[#cccccc] md:leading-5 lg:leading-[27px] xl:leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal md:text-sm lg:text-base xl:text-lg tracking-[-0.36px]">
            Candidates Telephonic / Physical interview, AEMS to receive interview
            results
          </div>
        </div>

        <img
          className="absolute md:left-[calc(50%-175px)] lg:left-[calc(50%-215px)] xl:left-[calc(50%-275px)] md:top-[calc(50%+190px)] lg:top-[calc(50%+190px)] xl:top-[calc(50%+230px)] md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
          alt="Stat icon container"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-4.svg"
        />


        <div className="flex flex-col md:w-[220px] lg:max-w-[251px] xl:w-[271px] items-end gap-0.5 absolute md:top-[calc(50%-250px)] lg:top-[calc(50%-300px)] xl:top-[calc(50%-300px)] md:right-[calc(50%-400px)] lg:right-[calc(50%-460px)] xl:right-[calc(50%-620px)] ">
          <div className="font-medium md:text-base lg:text-lg xl:text-xl tracking-[-0.48px] md:leading-6 lg:leading-9 xl:leading-9 relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
            Understand Client Needs
          </div>
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="mt-[-1.00px] text-[#cccccc] md:leading-5 lg:leading-[27px] xl:leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal md:text-sm lg:text-base xl:text-lg tracking-[-0.36px]">
              Job profile & Organization Reward dynamics
            </div>
            <div className="text-[#cccccc] md:leading-5 lg:leading-[27px] xl:leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal md:text-sm lg:text-base xl:text-lg tracking-[-0.36px]">
              Specific skill sets & Experience
            </div>
          </div>
        </div>

        <img
          className="absolute md:top-[calc(50%-220px)] lg:top-[calc(50%-245px)] xl:top-[calc(50%-265px)] md:right-[calc(50%-175px)] lg:right-[calc(50%-215px)] xl:right-[calc(50%-275px)] md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
          alt="Stat icon container"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-2.svg"
        />

        <div className="absolute md:right-[calc(50%-400px)] lg:right-[calc(50%-474px)] xl:right-[calc(50%-580px)] md:top-[calc(50%-50px)] lg:top-[calc(50%-70px)] xl:top-[calc(50%-70px)] md:w-[190px] lg:w-[242px] xl:w-[242px] md:h-auto lg:h-[125px] xl:h-[125px] flex flex-col gap-0.5">
          <div className="md:w-auto lg:w-60 xl:w-60 md:h-auto lg:h-9 xl:h-9 [font-family:'Geist',Helvetica] font-medium text-white md:text-base lg:text-lg xl:text-xl tracking-[-0.48px] md:leading-6 lg:leading-9 xl:leading-9">
            Sourcing Candidates
          </div>
          <div className="flex md:w-auto lg:w-[210px] xl:w-[210px] md:h-auto lg:h-[87px] xl:h-[87px] relative flex-col text-thin items-start gap-[3px]">
            <div className="mt-[-1.00px] text-[#cccccc] md:leading-5 lg:leading-[27px] xl:leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal md:text-sm lg:text-base xl:text-lg tracking-[-0.36px]">
              Internal database
            </div>
            <div className="text-[#cccccc] md:leading-5 lg:leading-[27px] xl:leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal md:text-sm lg:text-base xl:text-lg tracking-[-0.36px]">
              Website / Head hunting
            </div>
            <div className="text-[#cccccc] md:leading-5 lg:leading-[27px] xl:leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal md:text-sm lg:text-base xl:text-lg tracking-[-0.36px]">
              Social media
            </div>
          </div>
        </div>

        <img
          className="absolute md:right-[calc(50%-180px)] lg:right-[calc(50%-215px)] xl:right-[calc(50%-285px)] md:top-[calc(50%-15px)] lg:top-[calc(50%-20px)] xl:top-[calc(50%-20px)] md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
          alt="Stat icon container"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-1.svg"
        />

        <div className="flex flex-col md:w-[230px] lg:w-[293px] xl:w-[293px] items-start gap-2.5 absolute md:top-[calc(50%+145px)] lg:top-[calc(50%+190px)] xl:top-[calc(50%+190px)] md:right-[calc(50%-440px)] lg:right-[calc(50%-525px)] xl:right-[calc(50%-630px)]">
          <div className="font-medium md:text-base lg:text-lg xl:text-xl tracking-[-0.48px] md:leading-5 lg:leading-9 xl:leading-9 relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] text-white">
            AEMS Candidate Screening
          </div>
          <div className="flex flex-col md:w-auto lg:w-60 xl:w-60 items-start gap-3.5 relative flex-[0_0_auto]">
            <div className="mt-[-1.00px] text-[#cccccc] text-thin md:leading-5 lg:leading-[normal] xl:leading-[normal] relative self-stretch [font-family:'Geist',Helvetica] font-normal md:text-sm lg:text-base xl:text-lg tracking-[-0.36px]">
              Evaluate competencies & experience fit
            </div>
            <div className="text-[#cccccc] md:leading-1 lg:leading-[27px] xl:leading-[27px] relative self-stretch [font-family:'Geist',Helvetica] font-normal md:text-sm lg:text-base xl:text-lg tracking-[-0.36px]">
              Shortlist & submit to client
            </div>
          </div>
        </div>

        <img
          className="absolute md:right-[calc(50%-175px)] lg:right-[calc(50%-215px)] xl:right-[calc(50%-275px)] md:top-[calc(50%+195px)] lg:top-[calc(50%+190px)] xl:top-[calc(50%+230px)] md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
          alt="Stat icon container"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/stat-icon-container-3.svg"
        />
      </div>
    </div>
  )
}

export default ExecutiveSearchSection