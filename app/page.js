import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import SubscribeSection from "@/components/SubscribeSection";
import Wave from "@/components/Wave";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f2f2f2]">
      <Navbar />
      <Hero />
      {/* <Headline /> */}
      <Intro />
      <WhyChooseUs />
      <BannerSection />
      <SubscribeSection />
      <Footer />
    </main>
  );
}
