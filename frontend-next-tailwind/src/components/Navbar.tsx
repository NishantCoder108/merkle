import { MuseoModerno, Roboto, Roboto_Mono } from "next/font/google";
import Image from "next/image";
import React from "react";
import Aerrow from "@/images/aerrow.svg";
import Link from "next/link";

const museo = MuseoModerno({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="flex items-center justify-between py-6  border-b border-solid border-[#FFFFFF1A]">
        <Link href={"/"}>
          <div
            className={`text-2xl  text-[40px] text-transparent bg-clip-text bg-[linear-gradient(90.17deg,#CCD1E9_0.15%,#CACFE7_21.17%)] ${museo.className}`}
          >
            <span className={`font-semibold`}>x</span>
            <span className="font-medium">Combinator</span>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/api/ambassadors"
            className={`font-medium text-sm text-[#636475] hover:text-white transition ${roboto.className} `}
          >
            Ambassadors
          </Link>
          <Link
            href="/api/our-products"
            className={`font-medium text-sm text-[#636475] hover:text-white transition ${roboto.className} `}
          >
            our products
          </Link>
          <Link
            href="/api/x"
            className={`font-medium text-sm text-[#636475] hover:text-white transition ${roboto.className} `}
          >
            $X
          </Link>
          <Link
            href="#"
            className={`font-medium text-sm text-[#636475] group  ${roboto.className} flex items-center justify-center `}
          >
            <span className="pr-1 group-hover:text-white transition">
              {" "}
              contact us{" "}
            </span>
            <Image
              alt="solana logo"
              height={9}
              src={Aerrow}
              className="  transition group-hover:brightness-200 group-hover:scale-125"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
