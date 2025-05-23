"use client";
import { ArrowDown_Asset } from "@/assets";
import Banner_Component from "@/components/Banner_Component";
import BestSelling_Component from "@/components/BestSelling_Component";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      {/* Navbar */}
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

      {/* Banner */}
      <Banner_Component />

      {/*Best Selling Section */}
      <BestSelling_Component />
    </>
  );
}
