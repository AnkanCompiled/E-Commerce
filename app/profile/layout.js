import React from "react";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import { Heart, ShoppingBag, User } from "lucide-react";

export const metadata = {
  title: "Profile Page",
  description: "Manage your profile information and settings.",
};

export default function ProfileLayout({ children }) {
  const content = {
    my_profile: {
      name: "Profile",
      icon: <User />,
    },
    orders: {
      name: "Orders",
      icon: <ShoppingBag />,
    },
    wishlists: {
      name: "Wishlists",
      icon: <Heart />,
    },
  };

  return (
    <div className="grid grid-cols-[max-content_1fr] overflow-x-hidden max-w-[100vw]">
      <nav className="h-[calc(100vh-60px)] shadow-2xl">
        {Object.entries(content).map(([key, value], index) => (
          <NavLink
            key={index}
            href={`/profile?type=${key}`}
            className="p-4 flex item-center hover:scale-105 duration-200"
            activeClassName="bg-neutral-200"
          >
            <span>{value.icon}</span>
            <span className="hidden lg:block ml-2 text-lg">{value.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="h-[calc(100vh-60px)] p-4 w-full">{children}</div>
    </div>
  );
}
