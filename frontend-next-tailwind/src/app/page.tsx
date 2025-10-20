import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative px-11  flex flex-col min-h-screen">
      {/* <div className=" w-full  h-screen "> */}
      <Navbar />
      {/* <HeroSection />
      <HeroSection /> */}
      <HeroSection />
      {/* </div> */}
      <Footer />
    </div>
  );
}
