"use client";

import { NAV_LINKS } from "@/constants";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexcenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>


      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {isMenuOpen && (
        <div className=" w-70 h-52 bg-green-900 p-7 border-r-12 justify-end text-end absolute top-20 right-4 mt-1 flex-cokl rounded-lg">
        <ul className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-white-50 flexcenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              style={{ color: '#fff' }}
            >
              {link.label}
            </Link>
          ))}
        </ul>
       </div>
      )}
    </nav>
  );
};

export default Navbar;
