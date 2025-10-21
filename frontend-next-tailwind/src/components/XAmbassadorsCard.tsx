import Image, { StaticImageData } from "next/image";
import React from "react";
import telegram from "@/images/telegram.svg";
import twitter from "@/images/twitter.svg";
import upaerrow from "@/images/upaerrow.svg";
import url from "@/images/url.svg";
import {
  MuseoModerno,
  Roboto,
  Roboto_Mono,
  Source_Serif_4,
} from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});
const robotomono = Roboto_Mono({
  display: "swap",
  subsets: ["latin"],
});
const museo = MuseoModerno({
  subsets: ["latin"],
  display: "swap",
});
const sourceserifpro = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
});
interface XAmbassadorsCardProps {
  ambassadorcard: {
    src: StaticImageData;
    title: string;
    tag: string[];
    xusername: string;
    name: string;
  };
}

const XAmbassadorsCard = ({ ambassadorcard }: XAmbassadorsCardProps) => {
  return (
    <div className=" max-w-lg mt-8 ">
      {" "}
      <div className="">
        <div className="border-2 border-[#1b1b2569]  !rounded-2xl !bg-transparent">
          <div className="py-4 px-6">
            <div className="flex  gap-6">
              <div className="flex flex-col justify-between">
                <div>
                  <p
                    className={`${museo.className} text-xs font-bold text-[#CCD1E9]  opacity-50`}
                  >
                    {" "}
                    x <span className="font-semibold"> Ambassador </span>
                  </p>
                </div>
                <div className="flex gap-2 flex-col">
                  <p
                    className={`${roboto.className} font-bold text-base text-[#CCD1E9] opacity-90`}
                  >
                    {ambassadorcard.name}
                  </p>

                  <p
                    className={`${sourceserifpro.className} text-sm text-[#CCD1E9] opacity-50`}
                  >
                    {ambassadorcard.xusername}
                  </p>

                  <div className="flex gap-4">
                    {ambassadorcard.tag.map((item, i) => (
                      <p
                        key={i}
                        className="px-2 py-1 bg-gray-600 font-semibold text-[10px] rounded-[10px]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="max-w-[161px] max-h-[161px]">
                <Image src={ambassadorcard.src} alt="ambassador card" />
              </div>
            </div>
            {/* 

            

            <div className="flex justify-start items-center gap-4 pt-5">
              <div className="w-8  h-8  rounded-[10px] bg-[#ffffff1b] flex items-center justify-center">
                <Image src={twitter} alt="twitter " />
              </div>
              <div className="w-8  h-8  rounded-[10px] bg-[#ffffff1b] flex items-center justify-center">
                <Image src={telegram} alt="telegram " />
              </div>{" "}
              <div className="w-8  h-8  rounded-[10px] bg-[#ffffff1b] flex items-center justify-center">
                <Image src={url} alt="url " />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default XAmbassadorsCard;
