import { ArrowDown_Asset } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex justify-evenly lg:justify-center bg-neutral-700 h-[40px]">
        {["men", "women", "new", "sale"].map((item, index) => (
          <Link
            key={index}
            href={item}
            className="flex items-center justify-center h-full lg:w-[100px] hover:bg-neutral-600 duration-200"
          >
            <span className="flex gap-2 items-center px-2 text-white font-mono text-sm uppercase">
              {item} <ArrowDown_Asset color="#fff" size="20px" />
            </span>
          </Link>
        ))}
      </div>
      <div className="relative h-[270px] sm:h-[360px] lg:h-[540px]">
        <Image
          src="https://images.pexels.com/photos/9836576/pexels-photo-9836576.jpeg?auto=compress&cs=tinysrgb&w=3500&h=2333&dpr=1"
          fill
          priority
          className="object-cover object-center"
          alt="banner"
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2">
          <span className="font-bold text-white text-4xl sm:text-5xl lg:text-6xl drop-shadow-lg">
            Temp Text
          </span>
        </div>
      </div>
    </>
  );
}
