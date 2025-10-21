import React from "react";

import url from "@/images/url.svg";
import beach from "@/images/beach.svg";
import Image from "next/image";
import { MuseoModerno } from "next/font/google";
import XProductCard from "./XProductCard";
import xapple from "@/images/xapple.svg";

const museo = MuseoModerno({
  display: "swap",
  subsets: ["latin"],
});

const products = [
  {
    src: xapple,
    title: "xApple •",
    status: "Launchpad",
    desc: "xApple—fair launches, real liquidity, and rewards that put traders first.",
    xurl: "#",
    url: "#",
    telegram: "#",
  },
];

const OurProductPage = () => {
  return (
    <div>
      <div className="mt-24 min-h-[calc(100vh+-25rem)] max-w-[81rem] mx-auto">
        <div className="border-image flex    max-w-fit !rounded-4xl">
          <div className="flex py-2 px-4 gap-1 items-start">
            <div>
              <Image alt="product under xcombinator" src={beach} />
            </div>
            <div>
              <p
                className={`text-transparent  bg-clip-text 
                 bg-[linear-gradient(90deg,#CCD1E9_0%,#CCD1E9_100%)] font-normal text-4xl ${museo.className} px-4`}
              >
                Products under{" "}
                <span className="font-medium"> xCombinator </span>
              </p>
            </div>
          </div>
        </div>
        <p className={`${museo.className} text-gray-500 text-base px-4`}>
          xCombinator serves as an{" "}
          <span className="font-semibold"> umbrella organization </span> for our
          suite of products
        </p>

        <XProductCard product={products[0]} />
      </div>
    </div>
  );
};

export default OurProductPage;
