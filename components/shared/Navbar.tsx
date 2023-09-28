"use client";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className=" py-6  ">
      <nav className="container mx-auto flex justify-between items-center ">
        <div className="">
          <Link className="text-3xl font-bold" href="/">
            <Image src={logo} width={80} height={80} alt=" logo" />
          </Link>
        </div>

        <ul>
          {navLinks.map((link) => (
            <Link
              className=" mr-6 text-black hover:text-[#4d59ff] "
              href={link.href}
              key={link.key}
            >
              {link.key}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
