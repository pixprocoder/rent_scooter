"use client";
import { Button } from "@/src/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import loginImg from "../../assets/images/login.svg";

import { Label } from "@/src/components/ui/label";

import { SiGithub, SiGoogle } from "react-icons/si";
import { useContext, useRef } from "react";

const LoginPage = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  };
  return (
    <section className="min-h-screen flex justify-center items-center flex-row-reverse">
      <div className="">
        <h1 className="text-3xl font-bold mb-2 center">Please Sign up </h1>
        <Card className="bg-gray-950 border border-gray-800 w-full flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex-1 w-full">
            <CardHeader className="">
              <div>
                <div className="grid w-full max-w-sm items-center my-4">
                  <Label className="text-white mb-1" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    ref={emailRef}
                    type="email"
                    required
                    id="email"
                    placeholder="Your Email"
                  />
                </div>

                <div className="grid w-full max-w-sm items-center ">
                  <Label className="text-white mb-1" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    ref={passwordRef}
                    required
                    type="password"
                    id="password"
                    placeholder="Your password"
                  />
                </div>
                <div className="mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white">
                      New to Cris-rent-srl?{" "}
                      <Link className="text-blue-500 underline" href="/signup">
                        Signup
                      </Link>
                    </span>
                    <Button onClick={handleSubmit} className="">
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <div className="flex w-28 justify-center items-centers mx-auto">
              {/* <Separator className="my-4" /> */}
              <span className="text-white mx-2">OR</span>
              {/* <Separator className="my-4" /> */}
            </div>
            <CardFooter className="flex flex-col w-full gap-2">
              <Button className="w-full">
                <SiGoogle className="mr-2 h-4 w-4" /> Continue with Google
                {/* <UserButton afterSignOutUrl="/" /> */}
              </Button>
              <Button className="w-full">
                <SiGithub className="mr-2 h-4 w-4" /> Continue with Github
              </Button>
            </CardFooter>
          </div>
          <div className="flex-1 hidden lg:flex">
            <Image src={loginImg} alt="login" />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LoginPage;
