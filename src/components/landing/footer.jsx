"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  "About Us",
  "Services",
  "Industries",
  "Global Presence",
  "Client & Partners",
];

export default function Footer() {
  return (
    <footer className="mt-50 w-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e] py-16">
      <div className="max-w-[1240px] mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Logo and Description */}
          <div className="flex flex-col gap-6">
            <img
              className="w-[85px] h-[85px]"
              alt="Flux Bridge Logo"
              src="https://c.animaapp.com/mfvdxb8gInTGFO/img/image-4.png"
              onError={(e) => {
                console.log('Failed to load footer logo');
                e.target.style.display = 'none';
              }}
            />
            <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6 max-w-[280px]">
              Flux Bridge is a global Human Capital Advisory firm headquartered
              in Riyadh, KSA. Since 2017, we've partnered with 100+ clients
              across 14+ countries, helping organizations transform people,
              processes, and technology for sustainable success.
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-7">
              Quick Links
            </h3>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link, index) => (
                <div
                  key={index}
                  className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] cursor-pointer hover:text-[#3764ff] transition-colors"
                >
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-7">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-5">
                  Headquarters (KSA)
                </div>
                <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-4 max-w-[240px]">
                  Flux Bridge Co. 7783, Ibn Katheer St – King Abdulaziz District
                  Riyadh 12233-4264, Kingdom of Saudi Arabia
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-5">
                  India
                </div>
                <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-4 max-w-[240px]">
                  BLDG No: 2, A3 Station, Unit No: 118 Opposite RUPA SOLITAIRE,
                  Millenium Business Park Sector 1, Mahape, Navi Mumbai,
                  Maharashtra 400701
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-5">
                  UAE:
                </div>
                <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-4 max-w-[240px]">
                  IFZA Property, Freezone Building A1 Dubai Digital Park, Dubai
                  Silicon Oasis, Dubai, UAE
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col gap-8">
            <h3 className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-7">
              Subscribe to Our Newsletter
            </h3>
            <div className="flex w-full max-w-[300px] h-[50px] rounded-[25px] border border-solid border-[#d9d9d9] bg-black/20">
              <div className="flex items-center w-full px-2">
                <Input
                  placeholder="Email"
                  className="bg-transparent bg-none border-none text-white placeholder:text-gray-400 [font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-sm tracking-[0] leading-5 flex-1 focus:outline-none"
                />
                <Button className="ml-2 px-6 py-2 bg-[#3764ff] rounded-[25px] hover:bg-[#2952fe] transition-colors">
                  <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                    Subscribe
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-7">
                Follow Us
              </h3>
              <img
                className="w-[32px] h-[32px]"
                alt="Social media links"
                src="https://c.animaapp.com/mfvdxb8gInTGFO/img/frame-59.svg"
                onError={(e) => {
                  console.log('Failed to load social media icons');
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-6 border-t border-[#d9d9d94c]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
              Copyright © 2025 Flux Bridge Co. All Rights Reserved.
            </div>
            <div className="[font-family:'Aeonik_TRIAL-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
              Privacy Policy | Terms of Service
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
