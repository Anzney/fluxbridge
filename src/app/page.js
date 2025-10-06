import HeroSection from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";
import About from "@/components/landing/about";
import Services from "@/components/landing/services";
import { StarsBackground } from "@/components/ui/star-background";
import { HomePage } from "@/components/landing/home";
import ExecutiveSearchSection from "@/components/landing/executive-search";
import KeyPosition from "@/components/landing/position";
import Sectors from "@/components/landing/sector";
import LearningAndDevelopment from "@/components/landing/learning";
import DeliverySection from "@/components/landing/delivery-section";
import StrategyBusiness from "@/components/landing/strategy-business";
import OmniChannelDelivery from "@/components/landing/omni-channel-delivery";
import StrategicGlobalPartners from "@/components/landing/strategic-global-partners";
import Footer from "@/components/landing/footer";
import Leadership from "@/components/landing/leadership";
import GlobalPresence from "@/components/landing/global";

export default function Home() {
  return (
    <div className="max-w-screen h-full relative overflow-hidden">
      {/* Hero Section */}
      <img
        className="absolute top-0 left-0 w-screen h-screen"
        alt="Group"
        src="https://c.animaapp.com/mfvdxb8gInTGFO/img/group-7.png"
      />

      <div className="top-[161px] right-[300px] w-[448px] h-[245px] opacity-70 absolute blur-[240.51px]">
        <div className="absolute top-0 left-0 w-[306px] h-[245px] bg-[#2e4eb3] rounded-[152.84px/122.7px]" />
        <div className="absolute top-px left-[142px] w-[306px] h-[245px] bg-[#90abff] rounded-[152.84px/122.7px]" />
      </div>

      <div className="top-[967px] left-[-202px] w-[1882px] h-[272px] absolute blur-[240.51px]">
        <div className="absolute top-0 left-0 w-[1285px] h-[272px] bg-[#2e4eb3] rounded-[642.34px/135.87px]" />
        <div className="absolute top-px left-[598px] w-[1285px] h-[272px] bg-[#90abff] rounded-[642.34px/135.87px]" />
      </div>

      <Navbar />

      <HeroSection />

      <div className="absolute top-[1024px] left-[-132px] w-screen h-[1091px] bg-black blur-[112.5px]" />

      <div className="absolute top-[1469px] left-[1246px] w-[405px] h-[685px] bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px] opacity-75" />
      <div className="absolute top-[898px] left-[-230px] w-[405px] h-[685px] bg-[#0017ff] rounded-[202.31px/342.31px] blur-[397px] opacity-75" />

      <About />

      <Services />

      <ExecutiveSearchSection />

      <KeyPosition />

      <Sectors />

      <LearningAndDevelopment />

      <DeliverySection />

      <StrategyBusiness />

      <Leadership />

      <OmniChannelDelivery />

      <GlobalPresence />
      
      <StrategicGlobalPartners />

      <Footer />

    </div>
  );
}