import Facebook from "../../assets/images/Icons/Facebook.svg";
import Instagram from "../../assets/images/Icons/Instagram.svg";
import Twitter from "../../assets/images/Icons/Twitter.svg";
import Linkedin from "../../assets/images/Icons/Linkedin.svg";
import Link from "next/link";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="  lg:h-[400px] bg-[#15213C]">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-white pt-24">
          <div>
            <h3 className="text-xl font-bold  my-2 lg:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="hover:text-green-600 transition-all duration-200"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-600 transition-all duration-200"
                  href="/"
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-600 transition-all duration-200"
                  href="/"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-600 transition-all duration-200"
                  href="/"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold  my-2 lg:mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="hover:text-green-600 transition-all duration-200"
                  href="/"
                >
                  Early Access
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-600 transition-all duration-200"
                  href="/"
                >
                  Online payment
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-600 transition-all duration-200"
                  href="/"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-600 transition-all duration-200"
                  href="/"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold  my-2 lg:mb-4">Follow US</h3>
            <ul className="space-y-2 text-sm">
              <li>Let us be social</li>
              <ul className="flex gap-4">
                <li>
                  <Link href="/">
                    <Image src={Facebook} alt="facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Image src={Instagram} alt="Instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Image src={Twitter} alt="Twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Image src={Linkedin} alt="Linkedin" />
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold  my-2 lg:mb-4">Newsletter</h3>
            <ul className="space-y-2 text-sm">
              <li>Stay update with our latest</li>
              <li>
                <div className="flex w-full max-w-sm items-center space-x-2 text-green-700">
                  <Input type="email" placeholder="Email" />
                  <Button type="submit">Subscribe</Button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-white mt-14 text-xs ">
          Copyright ©2023 All rights reserved |{" "}
          <b className="text-green-500">CRIS-RENT-SRL 💚</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
