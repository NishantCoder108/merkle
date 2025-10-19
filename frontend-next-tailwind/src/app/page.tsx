import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative px-11">
      <div className=" w-full h-screen ">
        <Navbar />

        {/* 1. Base color */}
        {/* <div className="absolute inset-0 "></div> */}

        {/* 2. Noise overlay */}
        <div
        // className="absolute inset-0 bg-[url('/images/noise.png')] bg-repeat"
        // style={{
        //   backgroundSize: "200px 200px",
        //   opacity: 0.86,
        //   mixBlendMode: "soft-light",
        // }}
        />

        {/* 3. Gradient overlay (if needed) */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B25]/80 to-[#65658B]/80"></div> */}

        {/* 4. Content */}
        <div className=" z-10 p-8 text-white">Your content here</div>
      </div>
      <Footer />
    </div>
  );
}

// background: radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, rgba(115, 115, 115, 0) 100%);
