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
    <div className="relative mt-40 flex items-center flex-col justify-center gap-8 h-[calc(100vh-100px)]"
      style={{
        backgroundImage: 'url(/Group.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    > 
      
      <div className="bg-gradient-to-r from-[rgb(55,100,255,1)] to-white bg-clip-text  font-normal text-transparent text-4xl lg:text-5xl xl:text-[56px] text-center">
        Omni-Channel Delivery
      </div>

      <div className="absolute left-[1246px] w-[405px] h-[685px] bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px] opacity-75" />
      <div className="absolute  left-[-230px] w-[405px] h-[685px] bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px] opacity-75" />
      
      <div className='max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto'>
        <img
          className="w-full h-full z-20 hidden md:block"
          alt="Group"
          src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-6.png"
        />

        <img
          className="w-[171px] h-[616px] md:hidden"
          alt="Group"
          src="https://c.animaapp.com/mgait8g8g8XVIJ/img/group-57.png"
        />

      </div>
      <div className='hidden md:flex md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] xl:h-[160px] xl:w-[160px] bg-white rounded-full shadow-2xl absolute top-[51.5%] lg:top-[51%] xl:top-[50.4%] items-center justify-center'>
        <img alt="mask-1" src="/Mask-group-1.png" className="w-10 h-10 lg:w-14 xl:w-20 lg:h-14 xl:h-20" />
      </div>
      <div className='md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] xl:h-[160px] xl:w-[160px] bg-white rounded-full shadow-2xl absolute top-[51.5%] lg:top-[51%] xl:top-[50.4%] left-[7%] xl:left-[8.4%] 2xl:left-[18.48%] hidden md:flex items-center justify-center'>
        <img width={40} height={40} alt="mask-1" src="/Mask-group-4.png" className="w-10 h-10 lg:w-14 xl:w-20 lg:h-14 xl:h-20" />
      </div>
      <div className='md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] xl:h-[160px] xl:w-[160px] bg-white rounded-full shadow-2xl absolute top-[44.5%] lg:top-[42%] xl:top-[37.5%] left-[25.5%] xl:left-[26.5%] 2xl:left-[32%] hidden md:flex items-center justify-center'>
        <img width={40} height={40} alt="mask-1" src="/Mask-group-5.png" className="w-10 h-10 lg:w-14 xl:w-20 lg:h-14 xl:h-20" />
      </div>
      <div className='md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] xl:h-[160px] xl:w-[160px] bg-white rounded-full shadow-2xl absolute top-[44.5%] lg:top-[42%] xl:top-[37.5%] right-[25.5%] xl:right-[26.4%] hidden md:flex items-center justify-center'>
        <img width={40} height={40} alt="mask-1" src="/Mask-group-2.png" className="w-10 h-10 lg:w-14 xl:w-20 lg:h-14 xl:h-20" />
      </div>
      <div className='md:h-[90px] md:w-[90px] lg:h-[120px] lg:w-[120px] xl:h-[160px] xl:w-[160px] bg-white rounded-full shadow-2xl absolute top-[51.5%] lg:top-[51%] xl:top-[50.4%] right-[7%] xl:right-[8.35%] 2xl:right-[18.48%] hidden md:flex items-center justify-center'>
        <img width={40} height={40} alt="mask-1" src="/Mask-group-3.png" className="w-10 h-10 lg:w-14 xl:w-20 lg:h-14 xl:h-20" />
      </div>


      <p className='absolute max-w-[250px] top-[19%] md:top-auto md:bottom-[26%] lg:bottom-[20%] xl:bottom-[10%] left-[6%] lg:left-[8%] text-center md:text-xl lg:text-2xl xl:text-3xl'>
        Live In Person <br/> Training
      </p>

      <p className='absolute top-[35%] md:top-auto md:bottom-[34%] lg:bottom-[30%] xl:bottom-[25%] right-10 md:right-auto md:left-[25%] lg:left-[26%] xl:left-[27.50%] text-center md:text-xl lg:text-2xl xl:text-3xl'>
        Live Virtual <br /> Training
      </p>

      <p className='absolute bottom-[42%] md:bottom-[26%] lg:bottom-[20%] xl:bottom-[15%] left-18 md:left-[50%] -translate-x-1/2 text-center md:text-xl lg:text-2xl xl:text-3xl'>
        Self Paced <br className='md:hidden' /> E-<br className='hidden md:block' />Learning <br className='md:hidden' /> (LMS/LXP)
      </p>

      <p className='absolute bottom-[29%] md:bottom-[37%] lg:bottom-[33%] xl:bottom-[29%] 2xl:bottom-[31%] right-8 md:right-[25%] 2xl:right-[31.50%] text-center md:text-xl lg:text-2xl xl:text-3xl'>
        Gamification
      </p>

      <p className='absolute bottom-18 md:bottom-[26%] lg:bottom-[20%] xl:bottom-[12%] 2xl:bottom-[15%] left-8 md:left-auto md:right-[7%] xl:right-[8%] 2xl:right-[16%] text-center md:text-xl lg:text-2xl xl:text-3xl'>
        Simulations <br className='md:hidden' /> & AI <br className='hidden md:block' /> based <br className='md:block' /> learning
      </p>

    </div>
  )
}

export default DeliverySection