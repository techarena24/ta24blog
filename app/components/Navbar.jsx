"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/images/logoTa24.jpeg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { MenuIcon, SearchIcon, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className=" max-w-6xl w-full mx-auto mb-8">
      <div className="flex justify-between items-center h-18 border-b border-b-primary px-6 sm:px-4 xl:px-0">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Tech Arena24 logo"
            width={180}
            height={100}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className=" hidden lg:flex gap-10">
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
        
        {/* Buttons */}
        <div className=" flex flex-row gap-5 ">
          <ModeToggle />
          <Button className=" lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <MenuIcon />}
          </Button>
        </div> 
      </div>
      
      {/* Mobile Navigation */}
      <div className={`bg-blue-950 fixed top-0 left-0 h-screen w-full z-50 transform ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} 
      transition-transform duration-300 ease-in-out lg:hidden`}>
          <div className=" flex justify-between items-center p-5">
            <h2 className=" text-xl font-semibold text-white">
              Menu
            </h2>
            <Button onClick={() => setMenuOpen(false)}>
              <X />
            </Button>
          </div>

          <nav className=" flex flex-col items-center space-y-6 mt-10">
            {links.map((link, id) => (
              <Link key={id} href={link.href} className=" text-white text-lg font-semibold hover:text-primary" 
              onClick={() => setTimeout(() => setMenuOpen(false), 100)}>
                {link.name}
              </Link>
            ))}
          </nav>
      </div>
      
      {/* Search Bar */}
      <div className=" bg-primary px-6 sm:px-4">
        <div className=" md:max-w-[50%] mx-auto h-12 flex items-center">
          <div className=" flex w-full rounded-tr-sm rounded-br-sm border dark:border-secondary ">
            <input 
              type="text" 
              className=" bg-secondary w-[90%] text-sm px-4 py-1 focus:outline-2 focus:ring-2 focus:ring-blue-800"
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
