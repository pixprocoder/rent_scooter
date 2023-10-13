"use client";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { navLinks } from "@/src/constants";
import { ToggleNavbar } from "./ToggleNavbar";
import { Button } from "../ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className=" py-3  ">
      <nav className="container mx-auto p-2 flex justify-between items-center ">
        <div className="">
          <Link className="text-3xl font-bold" href="/">
            <p className="text-2xl font-bold text-green-800">CRIS RENT</p>
          </Link>
        </div>

        <ul className="hidden lg:block">
          {navLinks.map((link) => (
            <Link
              className=" mr-6 text-white hover:text-green-700 "
              href={link.href}
              key={link.key}
            >
              {link.key}
            </Link>
          ))}
        </ul>
        <div className="lg:hidden block">
          <ToggleNavbar />
        </div>
        <div className="hidden lg:flex gap-2 ">
          <Button>SIGN IN</Button>
          <Button variant="outline">SIGN UP</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
