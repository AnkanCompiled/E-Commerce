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
      <div className="relative h-[270px] sm:h-[360px] lg:h-[540px] xl:h-[720px] bg-[#111]">
        <Image
          src="https://images.pexels.com/photos/9836576/pexels-photo-9836576.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          fill
          priority
          className="object-cover object-center shadow-lg opacity-50"
          alt="banner"
        />
        <div className="absolute h-full w-full grid grid-rows-2">
          <div className="flex flex-col items-center justify-center text-center m-4 space-y-4 h-full">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
              Fashion that Speaks You
            </h1>
            <p className="text-white text-sm sm:text-base lg:text-lg font-mono mt-2">
              Discover the latest trends in fashion
            </p>
          </div>
          <div className="flex items-center lg:items-baseline justify-center h-full">
            <Link
              href="/new"
              className="bg-white px-8 py-2 rounded-md shadow-md hover:bg-gray-200 duration-200"
            >
              <span className="text-xl text-neutral-700 font-semibold uppercase">
                shop the collection
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
