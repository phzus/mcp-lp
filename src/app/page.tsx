import { Hero } from "@/components/sections/hero";
import { SectionTwo } from "@/components/sections/section-two";
import { SectionThree } from "@/components/sections/section-three";
import { SectionFour } from "@/components/sections/section-four";
import { BannerIntermediary } from "@/components/sections/banner-intermediary";
import { SectionFive } from "@/components/sections/section-five";
import { SectionSix } from "@/components/sections/section-six";
import { SectionSeven } from "@/components/sections/section-seven";
import { SectionEight } from "@/components/sections/section-eight";
import { SectionNine } from "@/components/sections/section-nine";
import { SectionTen } from "@/components/sections/section-ten";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-[#E8160E] selection:text-white">
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <BannerIntermediary />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
