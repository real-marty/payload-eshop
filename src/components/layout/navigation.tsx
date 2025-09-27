"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { Sidebar } from "./sidebar";
import { MenuIcon } from "lucide-react";

export const navbarItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isPathActive = (currentPath: string, href: string) => {
    if (!currentPath) return false;
    if (href === "/") return currentPath === "/";
    // Match exact route or nested segments, but avoid partials like "/blogger" for "/blog"
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  return (
    <nav className="h-16 flex border-b font-medium bg-background">
      <div className="justify-between flex w-full lg:max-w-7xl px-4 mx-auto items-center">
        <Sidebar
          items={navbarItems}
          open={sidebarOpen}
          onChange={setSidebarOpen}
        />
        <Link href={"/"} className="flex pl-4 items-center">
          <span className="font-display font-extralight text-2xl">
            IN_SHOP–NIA
          </span>
        </Link>
        <div className="items-center gap-4 hidden lg:flex">
          {navbarItems.map((item) => (
            <NavbarItem
              key={item.href}
              {...item}
              isActive={isPathActive(pathname, item.href)}
            >
              {item.label}
            </NavbarItem>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant={"secondary"}
            className="rounded-full uppercase font-thin font-display hover:bg-primary/20"
          >
            Log in
          </Button>
          <Button
            variant={"default"}
            className="rounded-full font-thin uppercase font-display hover:text-secondary/80"
          >
            Start Selling
          </Button>
        </div>
        <div className="flex lg:hidden items-center justify-center">
          <Button
            size={"icon"}
            className="rounded-full font-thin uppercase font-display hover:text-secondary/80"
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
};

type NavbarItemProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      variant={"outline"}
      className={cn(
        "rounded-full text-base uppercase font-thin bg-transparent hover:bg-primary/5",
        isActive && "bg-primary/20 hover:bg-primary/20",
      )}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};
