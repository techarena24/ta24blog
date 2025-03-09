'use client';

import Image from "next/image";
import React from "react";
import logo from "../../public/images/TechArena24 Logo.webp";
import Link from "next/link";
import { Search, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function Header() {
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Contact", link: "/contact" },
    { id: 4, name: "Projects", link: "/projects" },
    { id: 5, name: "Services", link: "/servicess" },
    { id: 6, name: "Services", link: "/servicess" },
  ];

  const { setTheme } = useTheme();

  return (
    <div className="py-3 bg-amber-600">
      <header className="flex justify-between items-center">
        <nav className="bg-red-400 w-[20%]">
          <Image src={logo} alt="logo" height={50} width={180} />
        </nav>

        {menuItems.map((menuItem) => (
          <div key={menuItem.id} className="bg-yellow-400 max-w-[60%]">
            <Link href={menuItem.link}>{menuItem.name}</Link>
          </div>
        ))}

        <div className="bg-green-400 w-[20%]">
          <Search />
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" onClick={() => setTheme("light")} />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>
      </header>
    </div>
  );
}

export default Header;
