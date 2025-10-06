"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const partnerCategories = [
  "Human Resources",
  "Business Consulting",
  "IT Consulting & Services",
  "Learning & Development",
];

// Map each category to its partner logos. Update these arrays as needed.
const partnersByCategory = {
  "Human Resources": [
    "/group-13.png",
    "/group-15.png",
    "/group-16.png",
    "/mask-group-6.png",
    "/mask-group-7.png",
  ],
  "Business Consulting": ["/sammati_logo.png", "/baton.png"],
  "IT Consulting & Services": ["/aqm-logo.png", "/notion-logo.png", "/zi.png"],
  "Learning & Development": ["/leoron.png", "/skillup.png", "/nse-logo.png"],
};

export default function StrategicGlobalPartners() {
  const [selectedCategory, setSelectedCategory] = useState(
    partnerCategories[0]
  );
  const partners = partnersByCategory[selectedCategory] || [];
  return (
    <div className="mt-10 md:mt-16 lg:mt-20 z-10 flex flex-col items-center gap-8 md:gap-12 lg:gap-20 px-4 md:px-8 lg:px-0">
      {/* Strategic Global Partners Title */}
      <h1 className="text-2xl pb-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-[rgb(55,100,255,1)] to-white bg-clip-text font-normal text-transparent text-center max-w-4xl">
        Strategic Global Partners
      </h1>

      {/* Partner Categories */}
      <div className="relative w-full max-w-[1240px]">
        {/* Background border */}
        <div className="hidden lg:block w-full h-[60px] md:h-[72px] rounded-[30px] md:rounded-[50px] border border-solid border-[#d9d9d94c]" />

        {/* Category buttons - Desktop Layout */}
        <div className="hidden lg:flex absolute top-[7px] left-[7px] justify-between w-[calc(100%-14px)]">
          {partnerCategories.map((category, index) => (
            <Button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`flex-1 mx-1 h-[57px] ${
                selectedCategory === category
                  ? "bg-[#3764ff]"
                  : "bg-[#ffffff03]"
              } rounded-[50px] hover:bg-[#3764ff] transition-colors`}
            >
              <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {category}
              </div>
            </Button>
          ))}
        </div>

        {/* Category buttons - Mobile/Tablet Layout */}
        <div className="lg:hidden absolute top-[6px] left-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)]">
          <div className="grid grid-cols-2 gap-3 h-full p-2">
            {partnerCategories.map((category, index) => (
              <Button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center justify-center h-full ${
                  selectedCategory === category
                    ? "bg-[#3764ff]"
                    : "bg-transparent"
                } rounded-[50px] hover:bg-[#3764ff] transition-colors`}
              >
                <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-xs sm:text-sm md:text-base text-center tracking-[0] leading-tight">
                  {category}
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="w-full max-w-[1150px] mt-24 md:mt-24 lg:mt-16">
        {/* Desktop Layout - Single Row */}
        <div className="hidden lg:flex gap-20 items-center  px-4">
          {partners.map((partner, index) => (
            <img
              key={index}
              className={`object-contain ${
                index === 0
                  ? "w-[185px] h-[66px]"
                  : index === 1
                  ? "w-[203px] h-[73px]"
                  : index === 2
                  ? "w-[214px] h-[54px]"
                  : index === 3
                  ? "w-[130px] h-[68px]"
                  : index === 4
                  ? "w-[89px] h-[89px]"
                  : "w-[89px] h-[89px]"
              }`}
              alt={`Partner logo ${index + 1}`}
              src={partner}
              onError={(e) => {
                console.log(`Failed to load partner image: ${partner}`);
                e.target.style.display = "none";
              }}
            />
          ))}
        </div>

        {/* Mobile Layout - Grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 px-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 bg-white/5 rounded-lg border border-[#d9d9d94c]"
            >
              <img
                className="object-contain max-w-full max-h-[60px] md:max-h-[80px]"
                alt={`Partner logo ${index + 1}`}
                src={partner}
                onError={(e) => {
                  console.log(`Failed to load partner image: ${partner}`);
                  e.target.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
