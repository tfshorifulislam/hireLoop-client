import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className="relative min-h-[calc(100vh-80px)] w-full bg-[#030303] text-white flex flex-col items-center justify-start overflow-hidden pt-16 md:pt-28">
            
            {/* Background Glow / Radial Gradient Effect behind the globe */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] aspect-square max-w-[1000px] bg-radial-gradient from-purple-600/20 via-blue-900/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-y-[40%]"></div>

            {/* Main Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center pb-12">

                {/* 50,000+ New Jobs Badge */}
                <div className="inline-flex items-center gap-2 bg-[#121214]/90 border border-zinc-800 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-8 shadow-md backdrop-blur-sm">
                    <span className="text-sm">💼</span>
                    <span className="text-white font-extrabold">50,000+</span>
                    <span className="text-zinc-300">New Jobs This Month</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-3xl leading-[1.15]">
                    Find Your Dream Job <br className="hidden sm:inline" /> Today
                </h1>

                {/* Subtitle */}
                <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light">
                    HireLoop connects top talent with world-class companies. Browse thousands of
                    curated opportunities and land your next role — faster.
                </p>

                {/* Search Bar */}
                <div className="w-full max-w-2xl bg-[#0a0a0c]/80 backdrop-blur-md border border-zinc-800/80 rounded-full p-2 pl-6 flex items-center justify-between gap-4 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] focus-within:border-blue-500/50 focus-within:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] transition-all duration-300 mb-8">
                    
                    {/* Job Title Input */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <svg className="w-5 h-5 text-zinc-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Job title, skill or company"
                            className="bg-transparent w-full text-sm text-white placeholder-zinc-500 focus:outline-none"
                        />
                    </div>

                    {/* Divider Line */}
                    <div className="hidden sm:block h-6 w-[1px] bg-zinc-800"></div>

                    {/* Location Input */}
                    <div className="hidden sm:flex items-center gap-3 flex-1 min-w-0">
                        <svg className="w-5 h-5 text-zinc-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Location or Remote"
                            className="bg-transparent w-full text-sm text-white placeholder-zinc-500 focus:outline-none"
                        />
                    </div>

                    {/* Search Button */}
                    <button className="bg-[#1d4ed8] hover:bg-blue-600 text-white p-3.5 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/10 shrink-0 active:scale-95">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                {/* Trending Positions */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs">
                    <span className="text-zinc-500 font-medium mr-1">Trending Position</span>
                    <button className="bg-[#121214] hover:bg-[#1c1c1f] border border-zinc-800/80 text-zinc-300 px-3.5 py-1.5 rounded-full transition-all duration-200">
                        Product Designer
                    </button>
                    <button className="bg-[#121214] hover:bg-[#1c1c1f] border border-zinc-800/80 text-zinc-300 px-3.5 py-1.5 rounded-full transition-all duration-200">
                        AI Engineering
                    </button>
                    <button className="bg-[#121214] hover:bg-[#1c1c1f] border border-zinc-800/80 text-zinc-300 px-3.5 py-1.5 rounded-full transition-all duration-200">
                        Dev-ops Engineer
                    </button>
                </div>

            </div>

            {/* Background Globe Wrapper */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] pointer-events-none select-none z-0 translate-y-[35%] md:translate-y-[25%] opacity-80 mix-blend-screen">
                <Image
                    width={900}
                    height={900}
                    src="/planet1.png"
                    alt="Globe background"
                    className="w-full h-auto object-contain object-bottom"
                    priority
                />
            </div>

        </section>
    );
};

export default Banner;