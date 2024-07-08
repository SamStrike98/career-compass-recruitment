import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
import Hero from "@/components/Hero";
import ImageSection from "@/components/ImageSection";
import Navbar from "@/components/Navbar";
import ParalaxImage from "@/components/ParalaxImage";
import SubscribeSection from "@/components/SubscribeSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f2f2f2]">
      <Navbar />
      <Hero />
      <Headline />
      <ParalaxImage />
      <ImageSection />
      <BannerSection />
      <SubscribeSection />
      <Footer />
    </main>
  );
}
