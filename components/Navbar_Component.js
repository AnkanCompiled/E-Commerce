import { Profile_Asset, Search_Asset, Shopping_Asset } from "@/assets";
import Link from "next/link";
import React from "react";

export default function Navbar_Component() {
  return (
    <nav className="grid grid-cols-[1fr_2fr_1fr] h-[60px]">
      <div className="flex justify-center items-center mx-2">
        <Link
          href={"/"}
          className="font-extralight uppercase text-xl lg:text-3xl tracking-widest font-mono"
        >
          fashion
        </Link>
      </div>
      <div className="flex justify-center items-center mx-2">
        <div className="group w-full lg:w-2/3 space-x-4 px-4 flex items-center rounded-xl border-[1px] border-[#ccc] bg-[#eee] focus-within:bg-white hover:border-[#aaa] duration-200">
          <Search_Asset color="#aaa" size="24px" />
          <input
            className="h-[35px] w-full text-sm focus:ring-0 focus:outline-0"
            placeholder="Search for t-shirts, jeans and more"
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mr-2">
        {Object.entries({
          profile: <Profile_Asset />,
          cart: <Shopping_Asset />,
        }).map(([key, value], index) => (
          <div className="group relative h-full" key={index}>
            <Link
              className="w-[50px] flex items-center justify-center h-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-neutral-700 hover:after:h-[5px] after:transition-all after:duration-200"
              href={key}
            >
              {value}
            </Link>
            {/* Profile and Cart Drop down */}
            {/* <div className="absolute hidden lg:group-hover:flex z-10 -right-10 rounded-2xl top-[calc(100%+5px)] bg-[var(--background)] border-4 border-neutral-600 shadow-xl h-[300px] w-[300px] justify-center items-center text-3xl text-neutral-600">
              {key}
            </div> */}
          </div>
        ))}
      </div>
    </nav>
  );
}
