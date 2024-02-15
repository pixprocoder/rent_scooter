"use client";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import Link from "next/link";

import { navLinks } from "@/src/constants";
import { ToggleNavbar } from "./ToggleNavbar";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className=" sticky top-0 mx-auto bg-black z-10 ">
      <nav className="container p-6 flex justify-between items-center   ">
        <div className="">
          <Link className="text-3xl font-bold" href="/">
            <p className="text-2xl font-bold text-green-500">CRIS RENT SRL</p>
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <ul className="hidden lg:block ">
            {navLinks.map((link) => (
              <Link
                className=" mr-6 text-gray-200 text-sm hover:border-b-2 hover:border-green-700  p-3 hover:text-white "
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
          <Link href="/signup" className="hidden lg:flex gap-2 ">
            <Button>SIGN UP</Button>
          </Link>
        </div>
      </nav>
      <hr className="container mx-auto border-gray-900 border-opacity-75" />
    </header>
  );
};

export default Navbar;
