"use client";

const deliveryMethods = [
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-1.png",
    title: "Live In Person\nTraining",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-2.png",
    title: "Live Virtual\nTraining",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-3.png",
    title: "Self Paced E-\nlearning (LMS/LXP)",
  },
  {
    icon: "https://c.animaapp.com/mfvdxb8gInTGFO/img/mask-group-4.png",
    title: "Gamification",
  },
  {
    title: "Simulations & AI\nbased learning",
  },
];

export default function OmniChannelDelivery() {
  return (
    <div className="my-50 z-10 flex flex-col items-center gap-10">
      {/* Omni-Channel Delivery Title */}
      <h1 className="text-6xl bg-gradient-to-r from-[rgb(55,100,255,1)] to-white bg-clip-text font-normal text-transparent text-center pb-1">
        Omni-Channel Delivery
      </h1>

      {/* Delivery Methods */}
      <img
        className="w-[1440px] h-[252px]"
        alt="Frame"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/frame-45.svg"
      />
    </div>
  );
}
