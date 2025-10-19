import { MuseoModerno } from "next/font/google";
import React from "react";
import Image from "next/image";
import solanalogo from "@/images/solana.svg";

const museo = MuseoModerno({
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <div>
      <div className="absolute bottom-0 w-full h-48 flex justify-center items-end bg-[radial-gradient(ellipse_at_50%_120%,rgba(217,217,217,0.21),rgba(217,217,217,0.15),rgba(217,217,217,0.1),rgba(217,217,217,0.05),rgba(217,217,217,0.02),rgba(217,217,217,0.01),rgba(115,115,115,0.0001),rgba(115,115,115,0.0000)))] ">
        <div
          className={`text-white text-center py-4 flex items-center justify-center ${museo.className}`}
        >
          <span className="opacity-35 pr-1 text-sm ">powered by </span>
          <Image alt="solana logo" height={16} src={solanalogo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
