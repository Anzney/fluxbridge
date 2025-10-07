'use client'

import React, { useState, useEffect } from 'react'

const Leadership = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [screenSize, setScreenSize] = useState('desktop');

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1280) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Team members data with their images
  const teamMembers = [
    { name: 'Roque Dcosta', image: '/teams/Roque.png', title: 'Managing Director' },
    { name: 'Khalid Abdallah Al-Damegh', image: '/teams/Khalid.png', title: 'Leadership Team' },
    { name: 'Alan Castelino', image: '/teams/Alan.png', title: 'Leadership Team' },
    { name: 'Vaishali Castelino', image: '/teams/Vaishali.png', title: 'Leadership Team' },
    { name: 'Abdulmalek Al-Eisa', image: '/teams/Abdulmalek.png', title: 'Management Team' },
    { name: 'Abhay Kumar', image: '/teams/Abhay.png', title: 'Management Team' },
    { name: 'Abiali Shaikh', image: '/teams/Abiali.png', title: 'Management Team' },
    { name: 'Amit Desai', image: '/teams/amit.png', title: 'Management Team' },
    { name: 'Farhan Khan', image: '/teams/Farhan.png', title: 'Management Team' },
    { name: 'Hamed Mohammed', image: '/teams/Hamed.png', title: 'Management Team' },
    { name: 'Kavilash Chawla', image: '/teams/Kavilash.png', title: 'Management Team' },
    { name: 'Raghad Alamri', image: '/teams/Raghad.png', title: 'Management Team' },
    { name: 'Vikrant Ponkshe', image: '/teams/Vikrant.png', title: 'Management Team' },
    { name: 'Vinod Kumar Chockalingam', image: '/teams/Vinod.png', title: 'Management Team' },
    { name: "Wala'a Dashash", image: '/teams/Wala\'a.png', title: 'Management Team' },
    { name: 'Wedad Dashash', image: '/teams/Wedad.png', title: 'Management Team' },
  ];

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  // Get visible team members (7 at a time)
  const getVisibleMembers = () => {
    const visible = [];
    for (let i = -3; i <= 3; i++) {
      const index = (centerIndex + i + teamMembers.length) % teamMembers.length;
      visible.push({
        ...teamMembers[index],
        position: i,
      });
    }
    return visible;
  };

  // Calculate scale and styling based on position
  const getImageStyle = (position) => {
    const absPosition = Math.abs(position);
    let scale, opacity, zIndex, blur, horizontalOffset, verticalOffset;

    // Define spacing based on screen size
    const spacing = {
      mobile: { adjacent: 80, second: 68, outer: 60 },
      tablet: { adjacent: 115, second: 92, outer: 80 },  // Adjust these values for md screens
      desktop: { adjacent: 140, second: 115, outer: 100 }
    };

    const currentSpacing = spacing[screenSize];

    if (position === 0) {
      // Center image
      scale = 0.95;
      opacity = 1;
      zIndex = 50;
      blur = 0;
      horizontalOffset = 0;
      verticalOffset = 0;
    } else if (absPosition === 1) {
      // Adjacent images
      scale = 0.90;
      opacity = 0.8;
      zIndex = 40;
      blur = 0;
      horizontalOffset = position * currentSpacing.adjacent;
      verticalOffset = screenSize === 'mobile' ? 6 : 10;
    } else if (absPosition === 2) {
      // Second tier
      scale = 0.70;
      opacity = 0.6;
      zIndex = 30;
      blur = 1;
      horizontalOffset = position * currentSpacing.second;
      verticalOffset = screenSize === 'mobile' ? 12 : 18;
    } else {
      // Outermost images
      scale = 0.5;
      opacity = 0.4;
      zIndex = 20;
      blur = 2;
      horizontalOffset = position * currentSpacing.outer;
      verticalOffset = screenSize === 'mobile' ? 15 : 22;
    }

    return {
      transform: `translate3d(${horizontalOffset}px, ${verticalOffset}px, 0) scale(${scale})`,
      opacity,
      zIndex,
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
    };
  };

  const visibleMembers = getVisibleMembers();
  const centerMember = teamMembers[centerIndex];

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

        {/* Carousel Container */}
        <div className="absolute left-1/2 -translate-x-1/2 top-39 md:top-80 xl:top-125 z-30 w-full flex items-center justify-center h-[120px] md:h-[180px]">
          {visibleMembers.map((member, idx) => (
            <div
              key={`${member.name}-${idx}`}
              className="absolute will-change-transform"
              style={{
                ...getImageStyle(member.position),
                transition: 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className={`relative transition-all duration-1000 ease-out ${member.position === 0 ? 'w-[80px] h-[80px] md:w-[120px] md:h-[120px] xl:w-[160px] xl:h-[160px]' : 'w-[60px] h-[60px] md:w-[70px] md:h-[70px] xl:w-[90px] xl:h-[90px]'}`}>
                {/* Blue glow ring for center image */}
                {member.position === 0 && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 blur-xl opacity-60 scale-110 transition-opacity duration-1000"></div>
                    <div className="absolute inset-0 rounded-full border-3 border-blue-500 shadow-[0_0_30px_rgba(0,23,255,0.8)] transition-opacity duration-1000"></div>
                  </>
                )}
                {/* Image container */}
                <div className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-1000 ${member.position === 0 ? 'border-3 border-blue-500' : 'border-2 border-blue-400/30'}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center member name display */}
        <div className="flex flex-col w-[230px] md:w-[300px] items-center gap-[3px] absolute left-1/2 -translate-x-1/2 top-70 md:top-125 xl:top-180 z-40 flex-[0_0_auto]">
          <div 
            key={`name-${centerIndex}`}
            className="relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-sm md:text-lg text-center tracking-[-0.36px] leading-[18px] transition-all duration-500 ease-out animate-fade-in"
          >
            {centerMember.name}
          </div>
          <div 
            key={`title-${centerIndex}`}
            className="relative self-stretch [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-[#ffffffa6] text-xs leading-[18px] text-center tracking-[0] transition-all duration-500 ease-out animate-fade-in"
          >
            {centerMember.title}
          </div>
        </div>
    </div>
  )
}

export default Leadership
