"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  exact = false,
  className = "",
  activeClassName = "",
  children,
  ...props
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const combinedClass = `${className} ${
    isActive ? activeClassName : ""
  }`.trim();

  return (
    <Link href={href} className={combinedClass} {...props}>
      {children}
    </Link>
  );
}
