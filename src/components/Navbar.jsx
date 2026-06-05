"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient, signOut } from "@/lib/auth-client";
import { Button } from "@heroui/react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);

  console.log("Session data in Navbar:", session, "Is pending:", isPending);

  const handleLogout = async () => {
    await signOut();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full mb-6 md:mb-10">
      {/* Navbar Container */}
      <nav className="relative z-50 w-full text-white py-4 md:py-6">
        <div className="w-11/12 max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              height={32}
              width={140}
              alt="Programming Hero"
              className="object-contain md:h-[35px] md:w-[160px]"
            />
          </Link>

          {/* DESKTOP MENU & BUTTONS */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Capsule Menu */}
            <div className="flex items-center gap-6 bg-[#131315]/70 border border-zinc-800/50 rounded-full px-6 py-2.5 backdrop-blur-md shadow-lg">
              <ul className="flex items-center gap-6 text-sm font-medium text-zinc-400">
                <li>
                  <Link href="/jobs" className="hover:text-white transition-colors">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Company
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>

              {/* Divider */}
              <div className="h-4 w-[1px] bg-zinc-800"></div>

              {!session && (
                <Link
                  href="/signin"
                  className="text-sm font-medium text-[#7C74FF] hover:text-[#5C53FE] transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* Desktop Action Button */}
            {session ? (
              <Button color="danger" variant="danger" onClick={handleLogout} className="rounded-full font-medium">
                Logout
              </Button>
            ) : (
              <Link
                href="/signup"
                className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all shadow-md"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* MOBILE & TABLET HAMBURGER TRIGGER */}
          <div className="flex lg:hidden items-center gap-4">
            {session && (
              <Button size="sm" color="danger" variant="flat" onClick={handleLogout} className="rounded-full text-xs">
                Logout
              </Button>
            )}
            
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 text-zinc-400 hover:text-white focus:outline-none bg-[#131315]/70 border border-zinc-800/50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                // Close Custom SVG Icon
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Custom SVG Icon
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full px-4 lg:hidden transition-all duration-300 ease-in-out">
            <div className="bg-[#131315]/95 border border-zinc-800/80 rounded-2xl p-5 backdrop-blur-xl shadow-xl flex flex-col gap-4">
              <ul className="flex flex-col gap-4 text-sm font-medium text-zinc-400">
                <li>
                  <Link 
                    href="/jobs" 
                    onClick={() => setIsOpen(false)}
                    className="block py-2 hover:text-white transition-colors border-b border-zinc-800/40"
                  >
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    onClick={() => setIsOpen(false)}
                    className="block py-2 hover:text-white transition-colors border-b border-zinc-800/40"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    onClick={() => setIsOpen(false)}
                    className="block py-2 hover:text-white transition-colors border-b border-zinc-800/40"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>

              {/* Mobile CTA Buttons */}
              {!session && (
                <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
                  <Link
                    href="/signin"
                    onClick={() => setIsOpen(false)}
                    className="text-center text-sm font-medium text-[#7C74FF] hover:text-[#5C53FE] py-2.5 rounded-full border border-zinc-800 bg-zinc-900/50"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsOpen(false)}
                    className="text-center bg-white text-black text-sm font-semibold py-2.5 rounded-full hover:bg-zinc-200 transition-all shadow-md"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;