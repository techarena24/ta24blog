"use client";

import Image from "next/image";
import React from "react";
import logo from "../../public/images/logoTa24.jpeg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { Search, SearchIcon } from "lucide-react";

const links = [
  { id: 1, name: "News", href: "/news" },
  { id: 2, name: "Reviews", href: "/reviews" },
  { id: 3, name: "Deals", href: "/deals" },
  { id: 4, name: "Latest Devices", href: "/latestdevices" },
  { id: 5, name: "Contact", href: "/contact" },
  { id: 6, name: "About Us", href: "/about" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="max-w-6xl mx-auto mb-8">
      <div className="flex justify-between items-center h-18 border-b border-b-primary">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Tech Arena24 logo"
            width={180}
            height={100}
            priority
          />
        </Link>

        <nav className=" flex gap-10">
          {links.map((link, id) => (
            <div key={id}>
              {pathName === link.href ? (
                <Link className=" text-primary font-semibold" href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link
                  className=" font-semibold transition duration-100 hover:text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <ModeToggle />
      </div>

      <div className=" bg-primary">
        <div className=" max-w-[50%] mx-auto h-12 flex items-center">
          <div className=" flex w-full rounded-tr-sm rounded-br-sm border dark:border-secondary ">
            <input 
              type="text" 
              className=" bg-secondary flex-1 text-sm px-4 py-1 focus:outline-2 focus:ring-2 focus:ring-blue-800"
            />
            <button className=" px-4 py-1">
              <SearchIcon className=" text-white dark:text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
