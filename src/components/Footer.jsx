import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BiLogoPinterestAlt } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#030303] text-zinc-400 font-sans pt-16 pb-12 overflow-hidden">
            
            {/* উপরের ব্যাকগ্রাউন্ড টেক্সচার/গ্রিড এফেক্ট */}
            <div className="absolute top-0 left-0 w-full h-32 bg-[linear-gradient(to_bottom,rgba(92,83,254,0.05)_1px,transparent_1px)] bg-[size:100%_8px] pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                
                {/* মেইন কন্টেন্ট গ্রিড */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 pb-16">
                    
                    {/* বাম পাশের লোগো এবং ডেসক্রিপশন */}
                    <div className="md:col-span-5 flex flex-col gap-5">
                        <Link href="/" className="flex items-center gap-2.5">
                            {/* লোগো আইকন */}
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8A3FFC] to-[#5C53FE] flex items-center justify-center shadow-[0_0_15px_rgba(92,83,254,0.3)]">
                                <span className="text-white text-xs font-bold">P</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Programming <span className="font-medium text-zinc-300">Hero</span>
                            </span>
                        </Link>
                        <p className="text-sm text-zinc-500 max-w-[320px] leading-relaxed">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* ডান পাশের লিংক কলামগুলো */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        
                        {/* Product Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold text-[#5C53FE] tracking-wider">Product</h3>
                            <ul className="flex flex-col gap-3 text-sm text-zinc-500">
                                <li><Link href="#" className="hover:text-white transition-colors">Job discovery</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Worker AI</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Companies</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Salary data</Link></li>
                            </ul>
                        </div>

                        {/* Navigations Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold text-[#4F46E5] tracking-wider">Navigations</h3>
                            <ul className="flex flex-col gap-3 text-sm text-zinc-500">
                                <li><Link href="#" className="hover:text-white transition-colors">Help center</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Career library</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Resources Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold text-[#4F46E5] tracking-wider">Resources</h3>
                            <ul className="flex flex-col gap-3 text-sm text-zinc-500">
                                <li><Link href="#" className="hover:text-white transition-colors">Brand Guideline</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Newsroom</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* নিচের বটম বার সেকশন */}
                <div className="border-t border-zinc-900/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    
                    {/* সোশ্যাল আইকনগুলো */}
                    <div className="flex items-center gap-3">
                        {/* ফেসবুক */}
                        <Link href="#" className="w-9 h-9 rounded-lg bg-[#111113] hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-all border border-zinc-800/40">
                            <FaFacebookF size={14} />
                        </Link>
                        {/* পিন্টারেস্ট (ইমেজের মতো পার্পল একটিভ স্টেট ব্যাকগ্রাউন্ড) */}
                        <Link href="#" className="w-9 h-9 rounded-lg bg-[#5C53FE] flex items-center justify-center text-white transition-all shadow-[0_0_15px_rgba(92,83,254,0.3)]">
                            <BiLogoPinterestAlt size={18} />
                        </Link>
                        {/* লিঙ্কডইন */}
                        <Link href="#" className="w-9 h-9 rounded-lg bg-[#111113] hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-all border border-zinc-800/40">
                            <FaLinkedinIn size={14} />
                        </Link>
                    </div>

                    {/* কপিরাইট এবং টার্মস */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-zinc-600 font-medium">
                        <span>Copyright 2024 — Programming Hero</span>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="hover:text-zinc-400 transition-colors">Terms & Policy</Link>
                            <span className="text-zinc-800">•</span>
                            <Link href="#" className="hover:text-zinc-400 transition-colors">Privacy Guideline</Link>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;