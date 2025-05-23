"use client";
import { ArrowDown_Asset, NorthEast_Asset } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner_Component() {
  const [currentBanner, setCurrentBanner] = React.useState(0);
  const bannerInterval = React.useRef(null);
  const banners = [
    "https://images.pexels.com/photos/9836581/pexels-photo-9836581.jpeg",
    "https://images.pexels.com/photos/28354681/pexels-photo-28354681/free-photo-of-a-man-in-a-hat-and-white-pants-standing-on-a-beach.jpeg",
    "https://images.pexels.com/photos/8879825/pexels-photo-8879825.jpeg",
  ];
  const startBannerInterval = () => {
    bannerInterval.current = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 10000);
  };
  const clearBannerInterval = () => {
    if (bannerInterval.current) clearInterval(bannerInterval.current);
  };

  React.useEffect(() => {
    startBannerInterval();
    return clearBannerInterval;
  }, []);
  return (
    <div className="group relative h-[270px] sm:h-[360px] lg:h-[540px]">
      {/* Images */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
            currentBanner === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={banner}
            fill
            priority
            className="object-cover object-center shadow-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="banner"
          />
        </div>
      ))}
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900/60 to-neutral-900/10"></div>
      {/* Content */}
      <div className="absolute h-full w-full grid grid-rows-2">
        <div className="flex flex-col items-center justify-center text-center m-4 space-y-4 h-full">
          <h1 className="text-white text-2xl sm:text-5xl lg:text-6xl font-bold opacity-70">
            Fashion that Speaks You
          </h1>
          <p className="text-white text-sm sm:text-base lg:text-lg font-mono mt-2">
            Discover the latest trends in fashion
          </p>
        </div>
        <div className="flex items-center lg:items-baseline justify-center h-full">
          <Link
            href="/new"
            className="bg-white px-8 py-2 flex items-center space-x-2 rounded-md shadow-md hover:bg-gray-200 duration-200"
          >
            <span className="text-xl text-neutral-700 font-semibold uppercase">
              shop the collection
            </span>
            <NorthEast_Asset color="#222" size="20px" />
          </Link>
        </div>
      </div>
      {/* Controls */}
      <div className="absolute hidden sm:flex bottom-6 left-1/2 transform -translate-x-1/2 space-x-4">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full bg-white cursor-pointer transition-all duration-300 ${
              currentBanner === index ? "scale-125" : "opacity-50"
            }`}
            onClick={() => {
              setCurrentBanner(index);
              clearBannerInterval();
              startBannerInterval();
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
