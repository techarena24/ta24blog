import Image from "next/image";
import React from "react";
import logo from "../../public/images/TechArena24 Logo.webp";
import Link from "next/link";
import { Search } from "lucide-react";

function Header() {
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Contact", link: "/contact" },
    { id: 4, name: "Projects", link: "/projects" },
    { id: 5, name: "Services", link: "/servicess" },
    { id: 6, name: "Services", link: "/servicess" },
  ];

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
        </div>
      </header>
    </div>
  );
}

export default Header;
