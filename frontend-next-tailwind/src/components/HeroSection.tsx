import React from "react";
import AerrowRight from "@/images/aerrow-right.svg";
import Eye from "@/images/eye.svg";
import HalfStar from "@/images/halfstar.svg";
import Live from "@/images/live.svg";
import Road from "@/images/road.svg";
import xApple from "@/images/xapple.svg";
import Tick from "@/images/tick.svg";
import Image from "next/image";
import { Akshar, IBM_Plex_Mono, MuseoModerno, Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

const ibm = IBM_Plex_Mono({
  weight: "500",
});
const museo = MuseoModerno({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});
const akshar = Akshar({
  display: "swap",
  subsets: ["latin"],
});
const HeroSection = () => {
  return (
    <div>
      <div className="my-5 min-h-[calc(100vh+-21rem)]">
        <div className="border-image flex  justify-self-end  max-w-fit">
          <div className="flex py-2 px-4 gap-4 items-start">
            <div>
              <Image alt="xapple" src={xApple} />
            </div>
            <div>
              <p
                className={`text-transparent text-base bg-clip-text 
                 bg-[linear-gradient(90deg,#CCD1E9_0%,#CCD1E9_100%)] font-bold  ${roboto.className}`}
              >
                xApple
              </p>

              <p className={`text-sm text-[#94A3B8] ${ibm.className}`}>
                Meet our latest Product!
              </p>
            </div>
            <div className="pt-2 ">
              <Image alt="Meet our latest product" src={AerrowRight} />
            </div>
          </div>
        </div>

        <div className="max-w-[71rem] mt-3 mx-auto">
          <div className="flex justify-center gap-6">
            <div className="mt-20 ">
              <p
                className={`text-5xl  mb-8 tracking-wider text-transparent bg-clip-text 
            bg-[linear-gradient(90deg,#CCD1E9_0%,#CCD1E9_100%)] ${museo.className}`}
              >
                Currently, helping people{" "}
                <span className="font-bold">launch </span>
                on Solana
              </p>

              <div className="flex items-center justify-start gap-2 text-base  text-gray-400 mb-8">
                <Image alt="live marketplace" src={Live} />
                <div
                  className={`flex items-center justify-center ${akshar} text-[#7F7F7F]`}
                >
                  <span className={` ${akshar} font-semibold pr-1`}>$X</span>
                  <span>Marketcap</span>
                </div>
                <span className={`${ibm.className} font-bold`}>
                  • $7,789,567.45
                </span>
              </div>

              <div className="border-image flex justify-self-start gap-3 !rounded-4xl">
                <Link
                  href="#"
                  //     className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full hover:border-gray-500
                  // transition text-gray-300 hover:text-white"
                  className={`  flex p-1.5 gap-1 text-base 
                 max-w-fit ${roboto.className} bg-clip-text text-gray-500`}
                >
                  View our
                  <span className="font-semibold "> suite of products </span>
                  <div className="pl-4 flex items-center pr-2">
                    <Image alt="view our suite of products" src={AerrowRight} />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-32">
            <div className="flex items-center justify-evenly flex-wrap">
              <div className={`flex gap-4 ${roboto.className} text-sm`}>
                <div className="max-w-3xs flex items-center gap-3">
                  <Image alt="expert guidance" src={Eye} height={24} />
                  <div>
                    <span className="font-medium mb-1 text-gray-300 pr-1">
                      Expert guidance
                    </span>
                    <span className="text-sm text-gray-500">
                      Industry leaders help scale your project
                    </span>
                  </div>
                </div>
              </div>

              <div className={`flex gap-4 ${roboto.className} text-sm`}>
                <div className="max-w-3xs flex items-center gap-3">
                  <Image alt="full launch support" src={HalfStar} height={24} />
                  <div>
                    <span className="font-medium mb-1 text-gray-300 pr-1">
                      Full launch support
                    </span>
                    <span className="text-sm text-gray-500">
                      From token creation to marketing
                    </span>
                  </div>
                </div>
              </div>

              <div className={`flex gap-4 ${roboto.className} text-sm`}>
                <div className="max-w-3xs flex items-center gap-3">
                  <Image alt="solana native" src={Road} height={24} />
                  <div>
                    <span className="font-medium mb-1 text-gray-300 pr-1">
                      Solana-native
                    </span>
                    <span className="text-sm text-gray-500">
                      Leverage our best tools for effortless launches.
                    </span>
                  </div>
                </div>
              </div>

              <div className={`flex gap-4 ${roboto.className} text-sm`}>
                <div className="max-w-3xs flex items-center gap-3">
                  <Image alt="whale connection" src={Tick} height={24} />
                  <div>
                    <span className="font-medium mb-1 text-gray-300 pr-1">
                      Whale connections
                    </span>
                    <span className="text-sm text-gray-500">
                      Instant traction with top traders and investors.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
