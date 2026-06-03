"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient, signOut } from "@/lib/auth-client";
import { Button } from "@heroui/react";

const Navbar = () => {

  const { data: session, isPending } = authClient.useSession()
  console.log("Session data in Navbar:", session, "Is pending:", isPending);

  const handleLogout = async () => {
    await signOut()
  } 

  return (
    <div className="relative w-full  overflow-hidden mb-10">
      {/* Navbar */}
      <nav className="relative z-50 w-full text-white py-6">
        <div className="w-11/12 max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              height={35}
              width={160}
              alt="Programming Hero"
              className="object-contain"
            />
          </Link>

          {/* Menu + Buttons */}
          <div className="flex items-center gap-5">

            {/* Capsule Menu */}
            <div className="flex items-center gap-6 bg-[#131315]/70 border border-zinc-800/50 rounded-full px-6 py-2.5 backdrop-blur-md shadow-lg">

              <ul className="flex items-center gap-6 text-xs md:text-sm font-medium text-zinc-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Browse Jobs
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Company
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>

              {/* Divider */}
              <div className="h-4 w-[1px] bg-zinc-800"></div>


              {session ? '' : <Link
                href="/signin"
                className="text-xs md:text-sm font-medium text-[#7C74FF] hover:text-[#5C53FE] transition-colors"
              >
                Sign In
              </Link>}
            </div>


            {session ? <Button variant='danger' onClick={handleLogout}>Logout</Button>
              : <Link
                href="/signup"
                className="bg-white text-black text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all shadow-md"
              >
                Get Started
              </Link>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;