import React from "react";

import url from "@/images/url.svg";
import beach from "@/images/beach.svg";
import Image from "next/image";
import { MuseoModerno } from "next/font/google";
import XAmbassadorsCard from "./XAmbassadorsCard";
import ambasdor from "@/images/ambassador.svg";
import tempambassador from "@/images/tempambassador.svg";
const museo = MuseoModerno({
  display: "swap",
  subsets: ["latin"],
});

const ambassadorcard = [
  {
    src: tempambassador,
    title: "xAmbassador",
    tag: ["Advisor", "Blockchain expert"],
    xusername: "@JardanPrs",
    name: "cynthontheblock",
  },
  {
    src: tempambassador,
    title: "xAmbassador",
    tag: ["Advisor", "Blockchain expert"],
    xusername: "@JardanPrs",
    name: "cynthontheblock",
  },
  {
    src: tempambassador,
    title: "xAmbassador",
    tag: ["Advisor", "Blockchain expert"],
    xusername: "@JardanPrs",
    name: "cynthontheblock",
  },
  {
    src: tempambassador,
    title: "xAmbassador •",
    tag: ["Advisor", "Blockchain expert"],
    xusername: "@JardanPrs",
    name: "cynthontheblock",
  },
  {
    src: tempambassador,
    title: "xAmbassador •",
    tag: ["Advisor", "Blockchain expert"],
    xusername: "@JardanPrs",
    name: "cynthontheblock",
  },
  {
    src: tempambassador,
    title: "xAmbassador •",
    tag: ["Advisor", "Blockchain expert"],
    xusername: "@JardanPrs",
    name: "cynthontheblock",
  },
];

const AmbassadorsPage = () => {
  return (
    <div>
      <div className="mt-24 min-h-[calc(100vh+-25rem)] max-w-[81rem] mx-auto">
        <div className="border-image flex    max-w-fit !rounded-4xl">
          <div className="flex py-2 px-4 gap-1 items-start">
            <div>
              <Image alt="product under xcombinator" src={ambasdor} />
            </div>
            <div>
              <p
                className={`text-transparent  bg-clip-text 
                 bg-[linear-gradient(90deg,#CCD1E9_0%,#CCD1E9_100%)] font-normal text-4xl ${museo.className} px-4`}
              >
                xCombinator <span className="font-semibold"> Ambassadors </span>
              </p>
            </div>
          </div>
        </div>
        <p className={`${museo.className} text-gray-500 text-base px-4`}>
          Ambassadors are trusted builders connecting
          <span className="font-semibold">
            {" "}
            real projects with real expertise{" "}
          </span>{" "}
          for our suite of products
        </p>

        <div className="flex items-center justify-between flex-wrap">
          {ambassadorcard.map((item, idx) => (
            <XAmbassadorsCard key={idx} ambassadorcard={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmbassadorsPage;
