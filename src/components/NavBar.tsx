"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const menuLinks = [
  {
    name: "Explorer",
    href: "/",
  },
  {
    name: "Cours",
    href: "/courses",
  },
];

const NavBar = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const pathname = usePathname();

  return (
    <div className={className}>
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className="flex items-center">
          {menuLinks.map((menu, index) => (
            <Link
              href={menu.href}
              key={menu.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                (pathname?.startsWith(menu.href) && menu.href !== "/") ||
                  (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
};
export default NavBar;
