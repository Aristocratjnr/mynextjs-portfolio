"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLink = ({ href, title, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link
      href={href}
      className={cn(
        "relative block py-2 pl-3 pr-4 text-base font-medium transition-all duration-300",
        "hover:text-white focus-visible:text-white",
        "group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-md",
        isActive 
          ? "text-white" 
          : "text-[#ADB7BE]",
        className
      )}
    >
      {title}
      <span 
        className={cn(
          "absolute inset-x-1 -bottom-1 h-0.5 rounded-full transition-all duration-300",
          "scale-x-0 group-hover:scale-x-100",
          isActive 
            ? "bg-white scale-x-100" 
            : "bg-white/70"
        )} 
      />
    </Link>
  );
};

export default NavLink;