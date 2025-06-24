import React from "react";
import { Profile_Asset, Order_Asset, Favorite_Asset } from "@/assets";
import Link from "next/link";

export const metadata = {
  title: "Profile Page",
  description: "Manage your profile information and settings.",
};

export default function ProfileLayout({ children }) {
  const content = {
    my_profile: {
      name: "Profile",
      icon: <Profile_Asset size="24px" />,
    },
    orders: {
      name: "Orders",
      icon: <Order_Asset size="24px" />,
    },
    wishlists: {
      name: "Wishlists",
      icon: <Favorite_Asset size="24px" />,
    },
  };

  return (
    <div className="grid grid-cols-[max-content_1fr] overflow-x-hidden max-w-[100vw]">
      <nav className="h-[calc(100vh-60px)] shadow-2xl">
        {Object.entries(content).map(([key, value], index) => (
          <Link
            key={index}
            href={`/profile?type=${key}`}
            className="p-4 flex item-center"
          >
            <span>{value.icon}</span>
            <span className="hidden lg:block ml-2 text-lg">{value.name}</span>
          </Link>
        ))}
      </nav>
      <div className="h-[calc(100vh-60px)] p-4 w-full">{children}</div>
    </div>
  );
}
