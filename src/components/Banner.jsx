"use client";

import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#030303] text-white flex flex-col items-center justify-start overflow-hidden pb-5">

            {/* Background Glow */}
            <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[140%] aspect-square max-w-5xl bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.25)_0%,rgba(88,28,135,0.08)_50%,transparent_100%)] rounded-full blur-3xl pointer-events-none -z-10"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center flex flex-col items-center w-full">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#121214]/60 border border-zinc-800/80 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-medium text-zinc-400 uppercase mb-6 md:mb-8 backdrop-blur-md">
                    💼 <span className="text-white font-bold">50,000+</span> New Jobs This Month
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 max-w-4xl leading-[1.1] tracking-tighter px-2">
                    Find Your Dream Job Today
                </h1>

                {/* Subtitle */}
                <p className="text-zinc-400 text-sm md:text-base max-w-2xl mb-8 md:mb-10 px-2">
                    HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities.
                </p>

                {/* Search Bar */}
                <div className="w-full max-w-2xl bg-[#0d0d0f]/90 border border-zinc-800 rounded-2xl md:rounded-full p-2 md:pl-6 flex flex-col md:flex-row items-center gap-3 md:gap-4 mb-10 shadow-xl">
                    
                    <div className="flex items-center gap-3 w-full px-4 md:px-0">
                        <span className="text-zinc-500 text-lg hidden md:inline">🔍</span>
                        <input
                            type="text"
                            placeholder="Job title, skill or company"
                            className="bg-transparent w-full text-base md:text-sm text-white outline-none placeholder-zinc-500 h-12 md:h-auto"
                        />
                    </div>

                    <div className="hidden md:block h-5 w-px bg-zinc-800 shrink-0"></div>

                    <div className="flex items-center gap-3 w-full px-4 md:px-0">
                        <input
                            type="text"
                            placeholder="Location"
                            className="bg-transparent w-full text-base md:text-sm text-white outline-none placeholder-zinc-500 h-12 md:h-auto"
                        />
                    </div>

                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-base md:text-sm font-semibold w-full md:w-auto px-8 py-3.5 md:px-6 md:py-3 rounded-xl md:rounded-full transition-all shrink-0 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20">
                        Search Jobs
                    </button>
                </div>

                {/* Trending Keywords */}
                <div className="flex flex-wrap justify-center items-center gap-2 text-xs mb-12 md:mb-16 px-2">
                    <span className="text-zinc-500 mr-1">Trending:</span>
                    <button className="px-4 py-1.5 border border-zinc-800 hover:border-zinc-600 text-zinc-300 rounded-full bg-zinc-900/30 transition-colors">Product Designer</button>
                    <button className="px-4 py-1.5 border border-zinc-800 hover:border-zinc-600 text-zinc-300 rounded-full bg-zinc-900/30 transition-colors">AI Engineering</button>
                    <button className="px-4 py-1.5 border border-zinc-800 hover:border-zinc-600 text-zinc-300 rounded-full bg-zinc-900/30 transition-colors">DevOps</button>
                </div>

                {/* Globe Section */}
                <div className="relative w-full flex flex-col items-center justify-center mt-4 md:mt-0">

                    <div className="w-full overflow-hidden flex justify-center">
                        <Image
                            src="/planet1.png"
                            alt="Globe"
                            width={1400}
                            height={1400}
                            className="w-[95vw] sm:w-[85vw] md:w-[110vw] lg:w-[120vw] max-w-350 h-auto object-contain opacity-80 scale-110 md:scale-100"
                            priority
                        />
                    </div>

                    {/* Center Text Overlay */}
                    <div className="absolute top-[22%] sm:top-[28%] md:top-[32%] left-0 right-0 px-6 text-center">
                        <h2 className="text-xl sm:text-2xl md:text-4xl text-zinc-300 leading-tight tracking-tight font-light max-w-3xl mx-auto">
                            Assisting over <span className="text-white font-semibold">15,000 job seekers</span><br className="hidden sm:block" /> find their dream positions.
                        </h2>
                    </div>

                </div>

                {/* Stats Cards */}
                <div className="grid absolute bottom-80 grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mt-[-80px] sm:mt-[-120px] md:mt-[-160px] lg:mt-[-200px]  z-20 px-2 sm:px-4">
                    
                    <div className="bg-linear-to-b from-[#0f0f11] to-[#070708] border border-zinc-900/80 rounded-2xl p-5 md:p-6 text-left shadow-2xl backdrop-blur-sm">
                        <span className="text-2xl">💼</span>
                        <div className="text-3xl md:text-4xl font-bold mt-3 text-white">50K</div>
                        <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mt-1">Active Jobs</div>
                    </div>

                    <div className="bg-linear-to-b from-[#0f0f11] to-[#070708] border border-zinc-900/80 rounded-2xl p-5 md:p-6 text-left shadow-2xl backdrop-blur-sm">
                        <span className="text-2xl">🏢</span>
                        <div className="text-3xl md:text-4xl font-bold mt-3 text-white">12K</div>
                        <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mt-1">Companies</div>
                    </div>

                    <div className="bg-linear-to-b from-[#0f0f11] to-[#070708] border border-zinc-900/80 rounded-2xl p-5 md:p-6 text-left shadow-2xl backdrop-blur-sm">
                        <span className="text-2xl">🔍</span>
                        <div className="text-3xl md:text-4xl font-bold mt-3 text-white">2M</div>
                        <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mt-1">Job Seekers</div>
                    </div>

                    <div className="bg-linear-to-b from-[#0f0f11] to-[#070708] border border-zinc-900/80 rounded-2xl p-5 md:p-6 text-left shadow-2xl backdrop-blur-sm">
                        <span className="text-2xl">⭐</span>
                        <div className="text-3xl md:text-4xl font-bold mt-3 text-white">97%</div>
                        <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mt-1">Satisfaction</div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Banner;