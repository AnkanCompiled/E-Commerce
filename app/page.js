"use client";
import { ArrowDown_Asset } from "@/assets";
import Banner_Component from "@/components/Banner_Component";
import BestSelling_Component from "@/components/BestSelling_Component";
import React, { useState } from "react";

export default function page() {
  const [menuItem, setMenuItem] = useState(null);
  const menuItems = ["men", "women", "new", "sale"];
  return (
    <>
      <div className="flex justify-evenly lg:justify-center bg-neutral-700 h-[40px]">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setMenuItem(item)}
            className="flex items-center justify-center h-full lg:w-[100px] hover:bg-neutral-600 duration-200 cursor-pointer"
          >
            <span className="flex gap-2 items-center px-2 text-white font-mono text-sm uppercase">
              {item} <ArrowDown_Asset color="#fff" size="20px" />
            </span>
          </button>
        ))}
      </div>
      <div
        className={`${
          menuItem === null ? "translate-y-full" : "translate-y-0"
        } bg-white duration-150`}
      >
        {menuItem}
      </div>

      {/* Banner */}
      <Banner_Component />

      {/*Best Selling Section */}
      <BestSelling_Component />
    </>
  );
}
