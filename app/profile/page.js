"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function page() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  return (
    <div className="grid grid-cols-[1fr_5fr] min-h-[90vh]">
      <div className="bg-neutral-700 text-white h-full">
        {["Account", "Orders", "Wishlist"].map((item, index) => (
          <Link
            href={`/profile?page=${item.toLowerCase()}`}
            key={index}
            className={`flex items-center gap-2 p-4 ${
              page === item.toLowerCase()
                ? "bg-neutral-600"
                : "hover:bg-neutral-600 cursor-pointer"
            }`}
          >
            <span className="text-md sm:text-xl font-semibold">{item}</span>
          </Link>
        ))}
        <div className="flex items-center gap-2 p-4 hover:bg-red-300/50 border-t-2 border-t-neutral-500 cursor-pointer">
          <span className="text-sm sm:text-lg font-semibold">Logout</span>
        </div>
      </div>
      <div></div>
    </div>
  );
}
