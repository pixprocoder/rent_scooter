"use client";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="py-8 banner2 ">
      <nav className="container mx-auto flex justify-between items-center ">
        <div className="">
          <Link className="text-3xl font-bold" href="/">
            {/* <Image src={logo} width={50} height={50} alt=" logo" /> */}
            logo
          </Link>
        </div>

        <ul
          className={`absolute lg:static duration-500 z-10  lg:bg-none   ${
            open
              ? " top-0 bg-[#101630]  bg-opacity-90 my-6 gap-6 p-6 w-full "
              : "-top-48 "
          } flex flex-col font-bold lg:flex-row nav-item uppercase`}
        >
          {navLinks.map((link) => (
            <Link
              className="  mr-6 text-white  "
              href={link.href}
              key={link.key}
            >
              {link.key}
            </Link>
          ))}
        </ul>

        <div
          className="lg:hidden block z-20 lg:z-0 "
          onClick={() => setOpen(!open)}
        >
          <span className="cursor-pointer duration-500">
            {open ? (
              <RxCross1 className="text-black text-4xl "></RxCross1>
            ) : (
              <GiHamburgerMenu className="text-black text-4xl "></GiHamburgerMenu>
            )}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
