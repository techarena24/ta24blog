"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  { id: 7, name: "Privacy Policy", href: "/privacy-policy" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // Optional: clear search input
      setMenuOpen(false); // Optional: close mobile menu
    }
  };

  return (
    <header className=" max-w-6xl w-full mx-auto mb-8">
      <div className="flex justify-between items-center h-18 border-b border-b-primary px-6 sm:px-4 xl:px-0">
        <Link href={"/"}>
          <Image
            src="/images/logoTa24.jpeg"
            alt="Tech Arena24 logo"
            width={256}
            height={64}
            priority
            className="aspect-[4/1]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className=" hidden lg:flex gap-4 px-2 py-2">
          {links.map((link, id) => (
            <div key={id}>
              {pathName === link.href ? (
                <Link className=" text-primary font-semibold px-2 py-2" href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link
                  className=" font-semibold transition duration-100 hover:text-primary px-2 py-2"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Buttons */}
        <div className=" flex flex-row gap-5">
          <ModeToggle />
          <Button
            className=" lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`bg-blue-950 fixed top-0 left-0 h-screen w-full z-50 transform 
      ${
        menuOpen
          ? "translate-y-0 opacity-100 pointer-events-auto visible"
          : "-translate-y-full opacity-0 pointer-events-none invisible"
      } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className=" flex justify-between items-center p-5">
          <h2 className=" text-xl font-semibold text-white">Menu</h2>
          <Button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(false)}
          >
            <X className=" text-white" />
          </Button>
        </div>

        <nav className=" flex flex-col items-center space-y-6 mt-10">
          {links.map((link, id) => (
            <Link
              key={id}
              href={link.href}
              className=" text-white text-lg font-semibold hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Search Bar */}
      <div className=" bg-primary px-6 sm:px-4">
        <div className=" md:max-w-[50%] mx-auto h-12 flex items-center">
          <form
            onSubmit={handleSearch}
            className=" flex w-full rounded-tr-sm rounded-br-sm border dark:border-secondary "
          >
            <input
              type="text"
              aria-label="Search query"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className=" bg-secondary w-[90%] text-sm px-4 py-1 focus:outline-2 focus:ring-2 focus:ring-blue-800"
            />
            <button
              aria-label="Search search button"
              type="submit"
              className=" px-4 py-1"
            >
              <SearchIcon className=" text-white dark:text-secondary" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
