import Image from 'next/image';
import React from 'react'

const deliveryMethods = [
  {
    icon: "Mask-group-4.png",
    title: "Live In Person\nTraining",
  },
  {
    icon: "Mask-group-5.png",
    title: "Live Virtual\nTraining",
  },
  {
    icon: "Mask-group-1.png",
    title: "Self Paced E-\nlearning (LMS/LXP)",
  },
  {
    icon: "Mask-group-2.png",
    title: "Gamification",
  },
  {
    icon: "Mask-group-3.png",
    title: "Simulations & AI\nbased learning",
  },
];

const DeliverySection = () => {
  return (
    <div className="relative mt-40 flex items-center flex-col justify-center gap-8 py-24 md:py-28 lg:py-32"
      style={{
        backgroundImage: 'url(/Group.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    > 
      
      <div className="bg-gradient-to-r from-[rgb(55,100,255,1)] to-white bg-clip-text  font-normal text-transparent text-4xl lg:text-5xl xl:text-[56px] text-center mb-20">
        Omni-Channel Delivery
      </div>

      {/* Glow accents preserved, but without interfering with layout */}
      <div className="pointer-events-none absolute -left-32 top-10 w-[405px] h-[685px] bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px] opacity-60" />
      <div className="pointer-events-none absolute -right-32 bottom-10 w-[405px] h-[685px] bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px] opacity-60" />

      {/* Responsive grid of circular items */}
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 sm:gap-8 place-items-center">
          {deliveryMethods.map((method, index) => (
            <div
              key={index}
              className={`${index % 2 === 1 ? 'md:-translate-y-6 lg:-translate-y-16' : ''} flex flex-col items-center text-center gap-4 transition-transform`}
            >
              <div className="relative">
                {/* Outer blue gradient ring */}
                <div className="bg-gradient-to-b from-[#1E40FF] to-[#60A5FA] p-3 rounded-full">
                  {/* Inner white circle */}
                  <div className="bg-white rounded-full flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 shadow-xl">
                    <img
                      alt={method.title}
                      src={`/${method.icon}`}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-18 md:h-18"
                    />
                  </div>
                </div>
                {/* Triangle pointer to text below */}
                <svg
                  className="absolute left-1/2 -translate-x-1/2 -bottom-3 md:-bottom-3.5"
                  width="22"
                  height="14"
                  viewBox="0 0 22 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id={`circlePointerGrad-${index}`} x1="0" y1="0" x2="0" y2="14" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#1E40FF" />
                      <stop offset="1" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                  <path d="M11 14 L0 0 L22 0 Z" fill={`url(#circlePointerGrad-${index})`} />
                </svg>
              </div>
              <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-snug whitespace-pre-line">
                {method.title}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default DeliverySection