import Image from "next/image";
import React from "react";
import telegram from "@/images/telegram.svg";
import twitter from "@/images/twitter.svg";
import upaerrow from "@/images/upaerrow.svg";
import url from "@/images/url.svg";
import { Roboto, Roboto_Mono } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});
const robotomono = Roboto_Mono({
  display: "swap",
  subsets: ["latin"],
});
interface IXProductProps {
  product: {
    src: any;
    title: string;
    status: string;
    desc: string;
    xurl: string;
    url: string;
    telegram: string;
  };
}
const XProductCard = ({ product }: IXProductProps) => {
  return (
    <div className="max-w-[30rem] mt-8">
      {" "}
      <div className="">
        <div className="border-2 border-[#1b1b2569]  !rounded-2xl !bg-transparent">
          <div className="py-4 px-6">
            <div className="flex items-center justify-between ">
              <div className="w-9">
                <Image src={product.src} alt={product.desc} />
              </div>
              <div className="w-4">
                <Image src={upaerrow} alt={"full detail of product"} />
              </div>
            </div>
            <p
              className={`${roboto.className} text-base font-bold text-[#CCD1E9] pt-5 opacity-90`}
            >
              {" "}
              {product.title}{" "}
              <span
                className={`text-sm ${robotomono.className} font-normal opacity-50`}
              >
                {" "}
                {product.status}
              </span>
            </p>

            <p
              className={`text-sm ${roboto.className} pt-4 text-white opacity-40 max-w-[25rem]`}
            >
              xApple—fair launches, real liquidity, and rewards that put
              traders first.
            </p>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XProductCard;
