"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className=" text-white py-4">
            {/* মেইন কন্টেইনার (w-11/12 mx-auto) */}
            <div className="w-11/12 mx-auto flex items-center justify-between">
                
                {/* বাম পাশের লোগো অংশ */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        height={35}
                        width={160} // আপনার লোগোর সাইজ অনুযায়ী অ্যাডজাস্ট করতে পারেন
                        alt="Programming Hero"
                        className="object-contain"
                    />
                </Link>

                {/* ডান পাশের মেনু এবং বাটন সমূহ */}
                <div className="flex items-center gap-5">
                    
                    {/* ক্যাপসুল স্টাইলের মেনু বার (সবগুলো আইটেম এবং Sign In সহ) */}
                    <div className="flex items-center gap-6  bg-[#18181b] border border-zinc-800/80 rounded-md px-8 py-5 shadow-lg">
                        <ul className="flex items-center gap-6 text-sm font-medium text-zinc-300">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
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

                        {/* মাঝখানের ডিভাইডার (দাগ) */}
                        <div className="h-4 w-[1px] bg-zinc-700"></div>

                        {/* Sign In বাটন (ক্যাপসুলের ভেতরেই ডানপাশে) */}
                        <Link 
                            href="#" 
                            className="text-sm font-medium text-[#5C53FE] hover:text-[#4f51c9] transition-colors"
                        >
                            Sign In
                        </Link>
                    </div>

                    {/* সবার ডানের 'Get Started' বাটন (ক্যাপসুলের বাইরে) */}
                    <Link
                        href="#"
                        className="bg-white text-black text-sm font-semibold px-6 py-4 rounded-md hover:bg-zinc-200 transition-all shadow-md"
                    >
                        Get Started
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;