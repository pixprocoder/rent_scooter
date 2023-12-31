"use client";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import Link from "next/link";

import { navLinks } from "@/src/constants";
import { ToggleNavbar } from "./ToggleNavbar";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className=" mx-auto bg-black bg-opacity-20 z-10 ">
      <nav className="container p-6 flex justify-between items-center   ">
        <div className="">
          <Link className="text-3xl font-bold" href="/">
            <p className="text-2xl font-bold text-[#1ECB15]">CRIS RENT</p>
          </Link>
        </div>

        <ul className="hidden lg:block">
          {navLinks.map((link) => (
            <Link
              className=" mr-6 text-white hover:text-[#1ECB15] "
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
          <Button className="bg-[#1ECB15] hover:bg-transparent border border-[#1ECB15]">
            SIGN UP
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
